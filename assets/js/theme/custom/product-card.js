import 'slick-carousel';
export default function ProductCardVariants(cardSelector) {
  console.log("test");
    let token = document.querySelector('[data-token]').getAttribute('data-token');
  // Define the GraphQL query to fetch product variants
  const buildQuery = (productId) => `
    query {
      site {
        product(entityId: ${productId}) {
          path
          variants(first: 250) {
            edges {
              node {
                sku
                options {
                  edges {
                    node {
                      displayName
                      entityId
                      values {
                        edges {
                          node {
                            label
                            entityId
                          }
                        }
                      }
                    }
                  }
                }
                defaultImage {
                  altText
                  urlOriginal
                  thumbnailUrl: url(width: 40, height: 40)
                  largeImageUrl: url(width: 500, height: 500)
                }
                productOptions {
                  edges {
                    node {
                      ... on MultipleChoiceOption {
                        __typename
                        values {
                          edges {
                            node {
                              ... on SwatchOptionValue {
                                imageUrl(height: 30, width: 30)
                              }
                              label
                              entityId
                            }
                          }
                        }
                        displayName
                        entityId
                      }
                    }
                  }
                }
              }
            }
          }
          entityId
        }
      }
    }
  `;

  // Fetch product variants from the GraphQL endpoint
  const fetchVariants = async (productId) => {
    try {
      const response = await fetch("/graphql", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ query: buildQuery(productId) }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
      }

      const result = await response.json();
      return result.data.site.product;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  };

  // Update the main product image based on the selected variant
  const updateMainImage = (variantNode, card, productPath) => {
    const productImageContainer = card.querySelector(".card-img-container");
    const oldImage = productImageContainer.querySelector("img");

    if (variantNode.defaultImage) {
      const { largeImageUrl, altText } = variantNode.defaultImage;
      oldImage.src = largeImageUrl;
      oldImage.alt = altText;
      oldImage.srcset = largeImageUrl;
      oldImage.dataset.srcset = largeImageUrl;

      const cardImageLink = card.querySelector("a.card-figure__link");
      const cardBodyLink = card.querySelector(".card-title a");
      if (cardImageLink && cardBodyLink) {
        cardBodyLink.href = `${productPath}?sku=${variantNode.sku}`;
        cardImageLink.href = `${productPath}?sku=${variantNode.sku}`;
      }
    }
  };

  // Display the color swatches for the product variants
  const displayVariants = (product, card) => {
    const { edges: variants } = product.variants;
    const productPath = product.path;

    const variantsContainer = card.querySelector(".variant-swatch-container");
    if (!variantsContainer) {
      console.error(`No .variant-swatch-container found for product ID ${product.entityId}`);
      return;
    }

    variantsContainer.innerHTML = ""; // Clear existing content

    const displayedColors = new Set();
    let selectedSwatch = null;
    const fragment = document.createDocumentFragment();

    let colorCount = 0;
    variants.forEach(({ node: variantNode }) => {
      const colorOption = variantNode.productOptions.edges.find(
        (edge) => edge.node.displayName.toLowerCase() === "exterior finish"
      );
      colorOption?.node.values.edges.forEach(({ node: valueNode }) => {
        if (!displayedColors.has(valueNode.entityId)) {
          displayedColors.add(valueNode.entityId);
          colorCount++;
          const swatchContainer = document.createElement("div");
          swatchContainer.classList.add("swatch-container");
          swatchContainer.setAttribute("data-product-variant-slide" , " ")
          const swatch = document.createElement("img");
          swatch.src = valueNode.imageUrl || '';
          swatch.alt = valueNode.label;
          swatch.loading = "lazy"; // Native lazy loading
          swatch.srcset = `${valueNode.imageUrl} 100w`;
          swatch.sizes = "100px";
          swatch.classList.add("swatch");
          swatch.setAttribute("role", "button");
          swatch.setAttribute("tabindex", "0");
          swatch.setAttribute("aria-label", `Color: ${valueNode.label}`);
          swatch.title = valueNode.label; // Tooltip

          // Add click event to update the main image and highlight the selected swatch
          swatch.onclick = () => {
            updateMainImage(variantNode, card, productPath);
            if (selectedSwatch) {
              selectedSwatch.classList.remove("selected-swatch");
            }
            swatch.classList.add("selected-swatch");
            selectedSwatch = swatch;
          };
          // Handle keyboard navigation
          swatch.onkeypress = (event) => {
            if (event.key === "Enter" || event.key === " ") {
                swatch.click();
            }
          };
          swatchContainer.appendChild(swatch);
          fragment.appendChild(swatchContainer);
        }
      });
    });

    variantsContainer.appendChild(fragment);
    variantsContainer.classList.add("card-swatch-loaded");
    // Pre-select the first swatch
    const firstSwatch = variantsContainer.querySelector(".swatch");
    if (firstSwatch) firstSwatch.click();
  };
  // Load variants either from session storage or by fetching from the API
  const loadVariants = async (productId, card) => {
    const product = await fetchVariants(productId);
    if (product) {
        displayVariants(product, card);
    }
  };

  // Iterate over each product card and load its variants
  document.querySelectorAll("article." + cardSelector).forEach((card) => {
    const productId = card.getAttribute("data-entity-id");
    loadVariants(productId, card);
  });
}
function waitForElement(selector, callback) {
  const intervalId = setInterval(() => {
    if (document.querySelector(selector)) {
      clearInterval(intervalId);
      callback();
    }
  }, 500);
}

waitForElement('.popular-product-card .variant-swatch-container .swatch-container', () => {
  setTimeout(() => {
    $('.popular-product-card .variant-swatch-container:not(.slick-initialized').slick({
      infinite: false,
      mobileFirst: true,
      slidesToShow: 7,
      autoplay:false,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      slide: '[data-product-variant-slide]',
      responsive: [
        {
            breakpoint: 800,
            settings: {
              infinite: false,
              slidesToShow: 6,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 990,
            settings: {
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 1
            }
        }
      ]
    });
  }, 1000);
});

waitForElement('.default-product-card .variant-swatch-container .swatch-container', () => {
  console.log("test2")
  setTimeout(() => {
    $('.default-product-card .variant-swatch-container:not(.slick-initialized').slick({
      infinite: false,
      mobileFirst: true,
      slidesToShow: 6,
      autoplay:false,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      slide: '[data-product-variant-slide]',
      responsive: [
        {
            breakpoint: 990,
            settings: {
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 1
            }
        }
      ]
    });
  }, 1000);
});
function applySlider() {
  $('.popular-product-card .variant-swatch-container.card-swatch-loaded:not(.slick-initialized)').slick({
    infinite: false,
    mobileFirst: true,
    slidesToShow: 7,
    autoplay:false,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slide: '[data-product-variant-slide]',
    responsive: [
          {
              breakpoint: 800,
              settings: {
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 1
              }
          },
          {
              breakpoint: 990,
              settings: {
                  infinite: false,
                  slidesToShow: 6,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  infinite: false,
                  slidesToShow: 7,
                  slidesToScroll: 1
              }
          }
      ]
  });
  $('.default-product-card .variant-swatch-container.card-swatch-loaded:not(.slick-initialized)').slick({
    infinite: false,
    mobileFirst: true,
    slidesToShow: 7,
    autoplay:false,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slide: '[data-product-variant-slide]',
    responsive: [
          {
              breakpoint: 800,
              settings: {
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 1
              }
          },
          {
              breakpoint: 990,
              settings: {
                  infinite: false,
                  slidesToShow: 6,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  infinite: false,
                  slidesToShow: 7,
                  slidesToScroll: 1
              }
          }
      ]
  });
}
$(window).on('resize', function () {
  applySlider();
});
