import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import stickyHeader from './custom/sticky-header';
import productCardSwatch from './custom/product-card';
import { FeaturedProducts } from './custom/category-popular-products';
export default class Global extends PageManager {
    onReady() {
        stickyHeader();
        productCardSwatch("default-product-card");
        function waitForElement(selector, callback) {
            const intervalId = setInterval(() => {
                if (document.querySelector(selector)) {
                clearInterval(intervalId);
                callback();
                }
            }, 500);
        }
        waitForElement('.popular-products-loaded', () => {
            productCardSwatch("popular-product-card");
        });
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        new FeaturedProducts(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        svgInjector();
    }
}
