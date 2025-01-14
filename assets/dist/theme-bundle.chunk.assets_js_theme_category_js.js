"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _custom_product_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom/product-card */ "./assets/js/theme/custom/product-card.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_5__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').trigger('focus');
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    var self = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    this.initFacetedSearch();
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    $(window).on('load', function () {
      self.insertBanner();
    });
    $(window).on('resize', function () {
      self.insertBanner();
    });
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.trigger('focus');
    }
  };
  _proto.insertBanner = function insertBanner() {
    var cardBanner = $('.collection-sidebar-content').first(); // Select the first occurrence of the banner
    if (cardBanner.length === 0) {
      console.error("Banner element not found");
      return;
    }
    if ($(window).width() > 990) {
      var facetedSearchContainer = $('#faceted-search-container');
      var productFilterSidebar = facetedSearchContainer.find("nav");

      // Ensure the banner is not already inserted
      if (facetedSearchContainer.find(".collection-sidebar-content").length === 0) {
        cardBanner.clone().insertAfter(productFilterSidebar);
        console.log("Banner inserted after product filter sidebar (large screens)");
      }
    } else {
      var productListingContainer = $('#product-listing-container');
      var productCount = productListingContainer.find(".product").length;

      // Ensure the banner is not already inserted
      if (productListingContainer.find(".collection-sidebar-content").length === 0) {
        if (productCount < 16) {
          var lastProduct = productListingContainer.find(".product:last-child");
          cardBanner.clone().insertAfter(lastProduct);
          console.log("Banner inserted after last product (less than 16 products)");
        } else {
          var sixteenthProduct = productListingContainer.find(".product:nth-of-type(16)");
          cardBanner.clone().insertAfter(sixteenthProduct);
          console.log("Banner inserted after 16th product (16 or more products)");
        }
      }
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      _this4.insertBanner();
      (0,_custom_product_card__WEBPACK_IMPORTED_MODULE_4__["default"])("default-product-card");
      setTimeout(function () {
        $('#product-listing-container .variant-swatch-container.card-swatch-loaded:not(.slick-initialized)').slick({
          infinite: false,
          mobileFirst: true,
          slidesToShow: 7,
          autoplay: false,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          slide: '[data-product-variant-slide]',
          responsive: [{
            breakpoint: 800,
            settings: {
              infinite: false,
              slidesToShow: 6,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 990,
            settings: {
              infinite: false,
              slidesToShow: 6,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 1200,
            settings: {
              infinite: false,
              slidesToShow: 7,
              slidesToScroll: 1
            }
          }]
        });
      }, 1500);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNFO0FBQ2lDO0FBQUEsSUFFbEVNLFFBQVEsMEJBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNwRDtJQUVBSCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1MLE1B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QUNmRSxjQUFjLEVBQUU7WUFDcEI7VUFDSixDQUFDO1FBRVQsQ0FBQyxDQUFDO01BQ04sQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVaLENBQUMsRUFBRTtNQUNDTyx1QkFBdUIsRUFBRTtRQUNyQjFDLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxlQUFlLEVBQWZBLGVBQWU7UUFDZkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCRSxjQUFjLEVBQWRBO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQXJFLFFBQUE7QUFBQSxFQTNMaUNMLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCBwcm9kdWN0Q2FyZFN3YXRjaCBmcm9tICcuL2N1c3RvbS9wcm9kdWN0LWNhcmQnO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xyXG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcclxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XHJcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xyXG5cclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG5cclxuICAgICAgICBpZiAoISQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcclxuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnJlc2V0LWZpbHRlcnMnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9taW5cIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21pbicpKTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5zZXJ0QmFubmVyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmluc2VydEJhbm5lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcclxuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnNlcnRCYW5uZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZEJhbm5lciA9ICQoJy5jb2xsZWN0aW9uLXNpZGViYXItY29udGVudCcpLmZpcnN0KCk7IC8vIFNlbGVjdCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGUgYmFubmVyXHJcbiAgICAgICAgaWYgKGNhcmRCYW5uZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYW5uZXIgZWxlbWVudCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MCkge1xyXG4gICAgICAgICAgICBjb25zdCBmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0RmlsdGVyU2lkZWJhciA9IGZhY2V0ZWRTZWFyY2hDb250YWluZXIuZmluZChcIm5hdlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgYmFubmVyIGlzIG5vdCBhbHJlYWR5IGluc2VydGVkXHJcbiAgICAgICAgICAgIGlmIChmYWNldGVkU2VhcmNoQ29udGFpbmVyLmZpbmQoXCIuY29sbGVjdGlvbi1zaWRlYmFyLWNvbnRlbnRcIikubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJkQmFubmVyLmNsb25lKCkuaW5zZXJ0QWZ0ZXIocHJvZHVjdEZpbHRlclNpZGViYXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYW5uZXIgaW5zZXJ0ZWQgYWZ0ZXIgcHJvZHVjdCBmaWx0ZXIgc2lkZWJhciAobGFyZ2Ugc2NyZWVucylcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RDb3VudCA9IHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoXCIucHJvZHVjdFwiKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGJhbm5lciBpcyBub3QgYWxyZWFkeSBpbnNlcnRlZFxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZChcIi5jb2xsZWN0aW9uLXNpZGViYXItY29udGVudFwiKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0Q291bnQgPCAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZChcIi5wcm9kdWN0Omxhc3QtY2hpbGRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZEJhbm5lci5jbG9uZSgpLmluc2VydEFmdGVyKGxhc3RQcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhbm5lciBpbnNlcnRlZCBhZnRlciBsYXN0IHByb2R1Y3QgKGxlc3MgdGhhbiAxNiBwcm9kdWN0cylcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpeHRlZW50aFByb2R1Y3QgPSBwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKFwiLnByb2R1Y3Q6bnRoLW9mLXR5cGUoMTYpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRCYW5uZXIuY2xvbmUoKS5pbnNlcnRBZnRlcihzaXh0ZWVudGhQcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhbm5lciBpbnNlcnRlZCBhZnRlciAxNnRoIHByb2R1Y3QgKDE2IG9yIG1vcmUgcHJvZHVjdHMpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxyXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxyXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxyXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRCYW5uZXIoKTtcclxuICAgICAgICAgICAgcHJvZHVjdENhcmRTd2F0Y2goXCJkZWZhdWx0LXByb2R1Y3QtY2FyZFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAudmFyaWFudC1zd2F0Y2gtY29udGFpbmVyLmNhcmQtc3dhdGNoLWxvYWRlZDpub3QoLnNsaWNrLWluaXRpYWxpemVkKScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogJ1tkYXRhLXByb2R1Y3QtdmFyaWFudC1zbGlkZV0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsInByb2R1Y3RDYXJkU3dhdGNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsInNlbGYiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJzaG93IiwiZ2V0Iiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJpbnNlcnRCYW5uZXIiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJjYXJkQmFubmVyIiwiZmlyc3QiLCJjb25zb2xlIiwiZXJyb3IiLCJ3aWR0aCIsImZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0RmlsdGVyU2lkZWJhciIsImZpbmQiLCJjbG9uZSIsImluc2VydEFmdGVyIiwibG9nIiwicHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJwcm9kdWN0Q291bnQiLCJsYXN0UHJvZHVjdCIsInNpeHRlZW50aFByb2R1Y3QiLCJfdGhpczQiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInNldFRpbWVvdXQiLCJzbGljayIsImluZmluaXRlIiwibW9iaWxlRmlyc3QiLCJzbGlkZXNUb1Nob3ciLCJhdXRvcGxheSIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsInNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=