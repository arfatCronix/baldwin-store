/*
 Import all product specific js
 */
 import PageManager from './page-manager';
 import Review from './product/reviews';
 import collapsibleFactory from './common/collapsible';
 import ProductDetails from './common/product-details';
 import videoGallery from './product/video-gallery';
 import { classifyForm } from './common/utils/form-utils';
 import modalFactory from './global/modal';
 
 export default class Product extends PageManager {
     constructor(context) {
         super(context);
         this.url = window.location.href;
         this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
         this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
         this.reviewModal = modalFactory('#modal-review-form')[0];
     }
 
     onReady() {
         // Listen for foundation modal close events to sanitize URL after review.
         $(document).on('close.fndtn.reveal', () => {
             if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                 window.history.replaceState(null, document.title, window.location.pathname);
             }
         });
 
         let validator;
 
         // Init collapsible
         collapsibleFactory();
 
         this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
         this.productDetails.setProductVariant();
 
         videoGallery();
 
         this.bulkPricingHandler();
         
         // Initialize lightbox
         this.initLightbox();
 
         const $reviewForm = classifyForm('.writeReview-form');
 
         if ($reviewForm.length === 0) return;
 
         const review = new Review({ $reviewForm });
 
         $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
             validator = review.registerValidation(this.context);
             this.ariaDescribeReviewInputs($reviewForm);
         });
 
         $reviewForm.on('submit', () => {
             if (validator) {
                 validator.performCheck();
                 return validator.areAll('valid');
             }
 
             return false;
         });
 
         this.productReviewHandler();
     }
 
     initLightbox() {
         const lightbox = document.getElementById('lightbox');
         const lightboxImg = document.getElementById('lightbox-img');
         const close = document.querySelector('.close');
         
         // Function to open lightbox
         const openLightbox = (imgSrc, imgAlt) => {
             lightbox.classList.add('active');
             lightboxImg.src = imgSrc;
             lightboxImg.alt = imgAlt;
             document.body.style.overflow = 'hidden';
         };
         
         // Function to close lightbox
         const closeLightbox = () => {
             lightbox.classList.remove('active');
             lightboxImg.src = '';
             lightboxImg.alt = '';
             document.body.style.overflow = '';
         };
         
         // Add click event to all lightbox-trigger images
         document.querySelectorAll('.lightbox-trigger').forEach(img => {
             img.addEventListener('click', function() {
                 openLightbox(this.src, this.alt);
             });
         });
         
         // Close lightbox when clicking the close button
         close.addEventListener('click', closeLightbox);
         
         // Close lightbox when clicking outside the image
         lightbox.addEventListener('click', function(e) {
             if (e.target === lightbox) {
                 closeLightbox();
             }
         });
         
         // Close lightbox with Escape key
         document.addEventListener('keydown', function(e) {
             if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                 closeLightbox();
             }
         });
         
         // Prevent right-click on images
         document.querySelectorAll('.lightbox-trigger, .lightbox-content').forEach(img => {
             img.addEventListener('contextmenu', function(e) {
                 e.preventDefault();
             });
         });
         
         // Add touch swipe support for mobile
         let touchStartX = 0;
         let touchEndX = 0;
         
         lightbox.addEventListener('touchstart', function(e) {
             touchStartX = e.changedTouches[0].screenX;
         });
         
         lightbox.addEventListener('touchend', function(e) {
             touchEndX = e.changedTouches[0].screenX;
             if (Math.abs(touchStartX - touchEndX) > 50) {
                 closeLightbox();
             }
         });
     }
 
     ariaDescribeReviewInputs($form) {
         $form.find('[data-input]').each((_, input) => {
             const $input = $(input);
             const msgSpanId = `${$input.attr('name')}-msg`;
 
             $input.siblings('span').attr('id', msgSpanId);
             $input.attr('aria-describedby', msgSpanId);
         });
     }
 
     productReviewHandler() {
         if (this.url.indexOf('#write_review') !== -1) {
             this.$reviewLink.trigger('click');
         }
     }
 
     bulkPricingHandler() {
         if (this.url.indexOf('#bulk_pricing') !== -1) {
             this.$bulkPricingLink.trigger('click');
         }
     }
 }
 