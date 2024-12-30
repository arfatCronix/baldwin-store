"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_gift-certificate_js"],{

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GiftCertificate)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  function GiftCertificate(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');
      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }
        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };
      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);
          if (!numberVal) {
            cb(false);
          }
          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }
    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);
    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);
      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();
        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }
    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    var createFrame = function createFrame(container, html) {
      var frame = $('<iframe />').width('100%').attr('frameBorder', '0').appendTo(container)[0];

      // Grab the frame's document object
      var frameDoc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument;
      frameDoc.open();
      frameDoc.write(html);
      frameDoc.close();

      // Calculate max height for the iframe
      var maxheight = Math.max($(window).height() - 300, 300);

      // Auto adjust the iframe's height once its document is ready
      $(frameDoc).ready(function () {
        var height = Math.min(frameDoc.body.scrollHeight + 20, maxheight);
        $(frame).height(height);
      });
    };
    $('#gift-certificate-preview').on('click', function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return;
      }
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }
        modal.updateContent();
        var container = $('#modal-content');
        createFrame(container, content);
      });
    });
    return _this;
  }
  _inheritsLoose(GiftCertificate, _PageManager);
  var _proto = GiftCertificate.prototype;
  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb((0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: this.validationDictionary.invalid_gift_certificate
    });
    return balanceValidator;
  };
  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9naWZ0LWNlcnRpZmljYXRlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNWO0FBQ3dDO0FBQ3pCO0FBQ2tDO0FBQ1Y7QUFDckI7QUFDSDtBQUFBLElBRXpCUSxlQUFlLDBCQUFBQyxZQUFBO0VBQ2hDLFNBQUFELGdCQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR1QsNkZBQTJCLENBQUNNLE9BQU8sQ0FBQztJQUVoRSxJQUFNSSxnQkFBZ0IsR0FBR0MsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBRXZELElBQU1DLGFBQWEsR0FBRztNQUNsQkMsYUFBYSxXQUFBQSxjQUFDQyxHQUFHLEVBQUU7UUFDZixPQUFPQSxHQUFHLENBQUNDLE1BQU07TUFDckIsQ0FBQztNQUNEQyxjQUFjLFdBQUFBLGVBQUEsRUFBVTtRQUNwQixPQUFPakIsNERBQVMsQ0FBQ2tCLEtBQUssQ0FBQUMsS0FBQSxDQUFmbkIsNERBQVMsRUFBQW9CLFNBQWMsQ0FBQztNQUNuQyxDQUFDO01BQ0RDLFVBQVUsV0FBQUEsV0FBQ04sR0FBRyxFQUFFO1FBQ1osT0FBT0EsR0FBRyxDQUFDQyxNQUFNO01BQ3JCLENBQUM7TUFDRE0sV0FBVyxXQUFBQSxZQUFBLEVBQVU7UUFDakIsT0FBT3RCLDREQUFTLENBQUNrQixLQUFLLENBQUFDLEtBQUEsQ0FBZm5CLDREQUFTLEVBQUFvQixTQUFjLENBQUM7TUFDbkMsQ0FBQztNQUNERyxZQUFZLFdBQUFBLGFBQUNDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7UUFDMUIsT0FBT0YsS0FBSyxJQUFJQSxLQUFLLElBQUlDLEdBQUcsSUFBSUQsS0FBSyxJQUFJRSxHQUFHO01BQ2hELENBQUM7TUFD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QU8sQ0FBQztNQUNuQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFBQyxPQUFBbkcsS0FBQTtFQUNQO0VBQUNzRyxjQUFBLENBQUF6RyxlQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBeUcsTUFBQSxHQUFBMUcsZUFBQSxDQUFBMkcsU0FBQTtFQUFBRCxNQUFBLENBRURyQyx5QkFBeUIsR0FBekIsU0FBQUEsMEJBQTBCdUMsWUFBWSxFQUFFO0lBQ3BDLElBQU1DLGdCQUFnQixHQUFHcEgsdURBQUcsQ0FBQztNQUN6QnNDLE1BQU0sRUFBRTZFLFlBQVksQ0FBQy9FLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztNQUNqREksR0FBRyxFQUFFcEMsK0VBQXlCQTtJQUNsQyxDQUFDLENBQUM7SUFFRmdILGdCQUFnQixDQUFDM0QsR0FBRyxDQUFDO01BQ2pCQyxRQUFRLEVBQUV5RCxZQUFZLENBQUMvRSxJQUFJLENBQUMsbUNBQW1DLENBQUM7TUFDaEV1QixRQUFRLFdBQUFBLFNBQUNDLEVBQUUsRUFBRTNDLEdBQUcsRUFBRTtRQUNkMkMsRUFBRSxDQUFDM0QsOEVBQW9CLENBQUNnQixHQUFHLENBQUMsQ0FBQztNQUNqQyxDQUFDO01BQ0Q4QyxZQUFZLEVBQUUsSUFBSSxDQUFDbkQsb0JBQW9CLENBQUN5RztJQUM1QyxDQUFDLENBQUM7SUFFRixPQUFPRCxnQkFBZ0I7RUFDM0IsQ0FBQztFQUFBLE9BQUE3RyxlQUFBO0FBQUEsRUFsT3dDUixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dpZnQtY2VydGlmaWNhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgY2hlY2tJc0dpZnRDZXJ0VmFsaWQgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xyXG5pbXBvcnQgZm9ybU1vZGVsIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0Q2VydGlmaWNhdGUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNlcnRCYWxhbmNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWJhbGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2VNb2RlbCA9IHtcclxuICAgICAgICAgICAgcmVjaXBpZW50TmFtZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWNpcGllbnRFbWFpbCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kZXJOYW1lKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbmRlckVtYWlsKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1c3RvbUFtb3VudCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRBbW91bnQodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0ICRwdXJjaGFzZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgJGN1c3RvbUFtb3VudHMgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcclxuICAgICAgICBjb25zdCBwdXJjaGFzZVZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCRjdXN0b21BbW91bnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCAkZWxlbWVudCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSAkZWxlbWVudC5kYXRhKCdtaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbWluRm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWluRm9ybWF0dGVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9ICRlbGVtZW50LmRhdGEoJ21heCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhGb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtYXhGb3JtYXR0ZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgaW5zZXJ0Rm9ybWF0dGVkQW1vdW50c0ludG9FcnJvck1lc3NhZ2UgPSAobWVzc2FnZSwgLi4uYW1vdW50UmFuZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudFBsYWNlaG9sZGVycyA9IFsnW01JTl0nLCAnW01BWF0nXTtcclxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkRXJyb3JUZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGFtb3VudFBsYWNlaG9sZGVycy5mb3JFYWNoKChwbGFjZWhvbGRlciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQgPSB1cGRhdGVkRXJyb3JUZXh0LmluY2x1ZGVzKHBsYWNlaG9sZGVyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQucmVwbGFjZShwbGFjZWhvbGRlciwgYW1vdW50UmFuZ2VbaV0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVycm9yVGV4dDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRFcnJvclRleHQ7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbnVtYmVyVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSh0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmNlcnRpZmljYXRlX2Ftb3VudF9yYW5nZSwgbWluRm9ybWF0dGVkLCBtYXhGb3JtYXR0ZWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fbmFtZVwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudE5hbWUodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b05hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnRFbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvRW1haWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9uYW1lXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyTmFtZSh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21OYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJFbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21FbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpmaXJzdC1vZi10eXBlJyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IodHlwZW9mICh2YWwpID09PSAnc3RyaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY2VydFRoZW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZVwiXScpLmdldCgwKS5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZTJcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlMlwiXScpLmdldCgwKS5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCRjZXJ0QmFsYW5jZUZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VWYWwgPSB0aGlzLmNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGNlcnRCYWxhbmNlRm9ybSk7XHJcblxyXG4gICAgICAgICAgICAkY2VydEJhbGFuY2VGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlVmFsLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZVZhbC5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHB1cmNoYXNlRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVGcmFtZSA9IChjb250YWluZXIsIGh0bWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSAkKCc8aWZyYW1lIC8+Jykud2lkdGgoJzEwMCUnKS5hdHRyKCdmcmFtZUJvcmRlcicsICcwJykuYXBwZW5kVG8oY29udGFpbmVyKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdyYWIgdGhlIGZyYW1lJ3MgZG9jdW1lbnQgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lRG9jID0gZnJhbWUuY29udGVudFdpbmRvdyA/IGZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgOiBmcmFtZS5jb250ZW50RG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBmcmFtZURvYy5vcGVuKCk7XHJcbiAgICAgICAgICAgIGZyYW1lRG9jLndyaXRlKGh0bWwpO1xyXG4gICAgICAgICAgICBmcmFtZURvYy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG1heCBoZWlnaHQgZm9yIHRoZSBpZnJhbWVcclxuICAgICAgICAgICAgY29uc3QgbWF4aGVpZ2h0ID0gTWF0aC5tYXgoKCQod2luZG93KS5oZWlnaHQoKSAtIDMwMCksIDMwMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBdXRvIGFkanVzdCB0aGUgaWZyYW1lJ3MgaGVpZ2h0IG9uY2UgaXRzIGRvY3VtZW50IGlzIHJlYWR5XHJcbiAgICAgICAgICAgICQoZnJhbWVEb2MpLnJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKGZyYW1lRG9jLmJvZHkuc2Nyb2xsSGVpZ2h0ICsgMjAsIG1heGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAkKGZyYW1lKS5oZWlnaHQoaGVpZ2h0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJCgnI2dpZnQtY2VydGlmaWNhdGUtcHJldmlldycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlld1VybCA9IGAkeyQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJldmlld1VybCcpfSYkeyRwdXJjaGFzZUZvcm0uc2VyaWFsaXplKCl9YDtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKHByZXZpZXdVcmwsIHt9LCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGFsLnVwZGF0ZUNvbnRlbnQodGhpcy5jb250ZXh0LnByZXZpZXdFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQoJyNtb2RhbC1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGcmFtZShjb250YWluZXIsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yKCRiYWxhbmNlRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYmFsYW5jZVZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJnaWZ0Y2VydGlmaWNhdGVjb2RlXCJdJyksXHJcbiAgICAgICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNiKGNoZWNrSXNHaWZ0Q2VydFZhbGlkKHZhbCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFsYW5jZVZhbGlkYXRvcjtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJub2QiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImZvcm1Nb2RlbCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJhcGkiLCJkZWZhdWx0TW9kYWwiLCJHaWZ0Q2VydGlmaWNhdGUiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkY2VydEJhbGFuY2VGb3JtIiwiJCIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwidmFsIiwibGVuZ3RoIiwicmVjaXBpZW50RW1haWwiLCJlbWFpbCIsImFwcGx5IiwiYXJndW1lbnRzIiwic2VuZGVyTmFtZSIsInNlbmRlckVtYWlsIiwiY3VzdG9tQW1vdW50IiwidmFsdWUiLCJtaW4iLCJtYXgiLCJzZXRBbW91bnQiLCJvcHRpb25zIiwiZm91bmQiLCJmb3JFYWNoIiwib3B0aW9uIiwiJHB1cmNoYXNlRm9ybSIsIiRjdXN0b21BbW91bnRzIiwiZmluZCIsInB1cmNoYXNlVmFsaWRhdG9yIiwic3VibWl0IiwiZGVsYXkiLCJ0YXAiLCIkZWxlbWVudCIsImRhdGEiLCJtaW5Gb3JtYXR0ZWQiLCJtYXhGb3JtYXR0ZWQiLCJpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJfbGVuIiwiYW1vdW50UmFuZ2UiLCJBcnJheSIsIl9rZXkiLCJhbW91bnRQbGFjZWhvbGRlcnMiLCJ1cGRhdGVkRXJyb3JUZXh0IiwicGxhY2Vob2xkZXIiLCJpIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyVmFsIiwiTnVtYmVyIiwiZXJyb3JNZXNzYWdlIiwiY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlIiwicmVzdWx0IiwidG9OYW1lIiwidG9FbWFpbCIsImZyb21OYW1lIiwiZnJvbUVtYWlsIiwidHJpZ2dlcmVkQnkiLCJjZXJ0VGhlbWUiLCJnZXQiLCJjaGVja2VkIiwiYWdyZWVUb1Rlcm1zIiwiYmFsYW5jZVZhbCIsImNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IiLCJvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVGcmFtZSIsImNvbnRhaW5lciIsImh0bWwiLCJmcmFtZSIsIndpZHRoIiwiYXR0ciIsImFwcGVuZFRvIiwiZnJhbWVEb2MiLCJjb250ZW50V2luZG93IiwiZG9jdW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIm1heGhlaWdodCIsIk1hdGgiLCJ3aW5kb3ciLCJoZWlnaHQiLCJyZWFkeSIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJtb2RhbCIsInByZXZpZXdVcmwiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwicHJldmlld0Vycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCIkYmFsYW5jZUZvcm0iLCJiYWxhbmNlVmFsaWRhdG9yIiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=