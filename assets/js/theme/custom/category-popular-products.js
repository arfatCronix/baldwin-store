import 'slick-carousel';

export class FeaturedProducts {
  constructor(context) {
    this.context = context;
    this.categoryId = context.categoryId;
    this.apiToken = this.context.settings.storefront_api.token;
    this.$featuredSection = $('.categoryFeatured');

      this.buildHTML().then(() => this.initCarousel());
  }

  initCarousel() {
    this.$featuredSection.slick({
      infinite: false,
      mobileFirst: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay  : false,
      slide: '[data-feat-product-slide]',
      responsive: [
        {
            "breakpoint": 800,
            "settings": {
                "infinite": false,
                "slidesToShow": 2,
                "slidesToScroll": 1
            }
        },
        {
            "breakpoint": 1200,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1
            }
        },
        {
            "breakpoint": 1400,
            "settings": {
                "slidesToShow": 5,
                "slidesToScroll": 1
            }
        }
      ],
    });
  }

  async buildHTML() {
    const products = await this.filterProductsByCategoryId();

    if (products.length > 0) {
      products.forEach((prod, idx) => {
        const html = this.buildCardHtml(prod, idx);
        this.$featuredSection.append(html);
        this.$featuredSection.addClass("popular-products-loaded");
      });
    } else {
      this.$featuredSection.hide();
    }
  }

    buildCardHtml(product, index) {
        const { node } = product;
        return `
      <div data-feat-product-slide class="productCarousel-slide data product">
        <article
          class="card popular-product-card"
          data-test="card-${node.entityId}"
          data-event-type="list"
          data-entity-id="${node.entityId}"
          data-position="${index}"
          data-name="${node.name}"
          data-product-brand="${node.brand ? node.brand.name : ''}"
          data-product-price="${node.prices.price.formatted}"
        >
        <figure class="card-figure">
          <a href="${node.path}"
             class="card-figure__link"
             aria-label="${node.name}"
            data-event-type="product-click"
          >
            <div class="card-img-container">
              <img src="${node.defaultImage ? node.defaultImage.url300wide : 'https://cdn11.bigcommerce.com/s-szs4mx4t14/stencil/53751b40-a89a-013d-10b5-5a9fdb65851a/e/ab83ea20-a687-013d-9b53-6e129e7c7353/img/ProductDefault.gif'}" title="${node.defaultImage? node.defaultImage.altText : 'no image'}"
                   alt="${node.defaultImage? node.defaultImage.altText : 'no image'}" class="card-image lazyautosizes ls-is-cached lazyloaded">
            </div>
          </a>
      
          <figcaption class="card-figcaption">
            <div class="card-figcaption-body">
              <button type="button" class="button button--secondary button--small quickview"
                      data-event-type="product-click" data-product-id="${node.entityId}">Quick view</button>
            </div>
          </figcaption>
        </figure>
        <div class="card-body">
          <div class="product-variant-swatch">
              <div class="variant-swatch-container"></div>
          </div>
          ${node.brand ? `<p class="card-text" data-test-info-type="brandName">${node.brand.name}</p>` : ' '}
          <h3 class="card-title">
            <a aria-label="${node.name}" href="${node.path}" data-event-type="product-click">
              ${node.name}
            </a>
          </h3>
          <div class="card-text card-price-wrapper" data-test-info-type="price">
          <div class="price-section price-section--withoutTax">
          <span class="price price--withoutTax">${node.prices.price.formatted}</span>
        </div>
        </div>
         </div>
      </article>
     </div>
    `;
  }

  async filterProductsByCategoryId() {
    const products = await this.getAllFeaturedProducts();

    return products.filter(product => 
      product.node.categories.edges.some(category => {
        return category.node.entityId === this.categoryId;
      })
    );
  }

  async getAllFeaturedProducts() {
    let allProducts = [];
    let hasNextPage = true;
    let cursor = null;

    while (hasNextPage) {
      const { featuredProducts, pageInfo } = await this.getProducts(50, cursor);
      allProducts = [...allProducts, ...featuredProducts];
      hasNextPage = pageInfo.hasNextPage;
      cursor = pageInfo.endCursor;
    }

    return allProducts;
  }

  async getProducts(first = 50, after = null) {
    try {
      const response = await fetch('/graphql',
          {
              method: "POST",
              credentials: "same-origin",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${this.apiToken}`,
              },
              body: JSON.stringify({
                  query: `
                    query Featured($numProducts: Int!, $cursor: String) {
                    site {
                        featuredProducts(first: $numProducts, after: $cursor) {
                        pageInfo {
                            startCursor
                            endCursor
                            hasNextPage
                            hasPreviousPage
                        }
                        edges {
                            node {
                            name
                            entityId
                            path
                            brand {
                                name
                                path
                                entityId
                            }
                            categories {
                                edges {
                                node {
                                    name
                                    id
                                    entityId
                                }
                                }
                            }
                            prices {
                                price {
                                formatted
                                }
                                salePrice {
                                formatted
                                }
                            }
                            defaultImage {
                                url300wide: url(width: 300, height: 300)
                                altText
                            }
                            }
                        }
                        }
                    }
                    }
                `,
                  variables: {
                      numProducts: first,
                      cursor: after,
                  },
              }),
        });

        if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
      }

      const result = await response.json();
      const featuredProducts = result.data.site.featuredProducts.edges;
      const pageInfo = result.data.site.featuredProducts.pageInfo;

      return {
        featuredProducts,
        pageInfo,
      };
    } catch (err) {
      console.error(err);
      return {
        featuredProducts: [],
        pageInfo: {
          hasNextPage: false,
          endCursor: null,
        },
      };
    }
  }
}