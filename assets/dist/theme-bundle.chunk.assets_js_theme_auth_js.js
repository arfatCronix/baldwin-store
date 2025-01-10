"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_auth_js"],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Auth = /*#__PURE__*/function (_PageManager) {
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__.createTranslationDictionary)(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }
  _inheritsLoose(Auth, _PageManager);
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
      enterPassword = _this$validationDicti.password,
      matchPassword = _this$validationDicti.password_match;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      delay: 900
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }
        if ($last) {
          createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
        enterPassword = _this$validationDicti2.password,
        matchPassword = _this$validationDicti2.password_match;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error));
    }
    $createAccountForm.on('submit', function (event) {
      _this4.submitAction(event, createAccountValidator);
    });
  };
  _proto.submitAction = function submitAction(event, validator) {
    validator.performCheck();
    if (validator.areAll('valid')) {
      return;
    }
    event.preventDefault();
    setTimeout(function () {
      var earliestError = $('span.form-inlineMessage:first').prev('input');
      earliestError.trigger('focus');
    }, 900);
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }
    var $createAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(this.formCreateSelector);
    var $loginForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.login-form');
    var $forgotPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.forgot-password-form');
    var $newPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation, requiredMessage) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
  // Required Empty Date field
  if (validation.required && (!validation.min_date || !validation.max_date)) {
    var _formElementId = $formField.attr('id');
    return {
      selector: "#" + _formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + _formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = $formField.find('select[data-label="day"]').val();
        var month = $formField.find('select[data-label="month"]').val();
        var year = val;
        cb(day && month && year);
      },
      errorMessage: requiredMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation, errorMessage);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = (0,_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__.createTranslationDictionary)(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hdXRoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1M7QUFDbkI7QUFDbUI7QUFDUjtBQU1QO0FBQzZDO0FBQUEsSUFFM0RVLElBQUksMEJBQUFDLFlBQUE7RUFDckIsU0FBQUQsS0FBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLDZGQUEyQixDQUFDRyxPQUFPLENBQUM7SUFDaEVDLEtBQUEsQ0FBS0csa0JBQWtCLEdBQUcsZ0NBQWdDO0lBQzFESCxLQUFBLENBQUtJLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDO0lBQUMsT0FBQUwsS0FBQTtFQUNuRDtFQUFDTSxjQUFBLENBQUFULElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFTLE1BQUEsR0FBQVYsSUFBQSxDQUFBVyxTQUFBO0VBQUFELE1BQUEsQ0FFREUsdUJBQXVCLEdBQXZCLFNBQUFBLHdCQUF3QkMsVUFBVSxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUNoQyxJQUFNQyxVQUFVLEdBQUdyQiw0REFBSztJQUV4QixJQUFJLENBQUNzQixjQUFjLEdBQUd4Qix1REFBRyxDQUFDO01BQ3RCeUIsTUFBTSxFQUFFLGtDQUFrQztNQUMxQ0MsR0FBRyxFQUFFcEIsK0VBQXlCQTtJQUNsQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNrQixjQUFjLENBQUNHLEdBQUcsQ0FBQyxDQUNwQjtNQUNJQyxRQUFRLEVBQUUsdUNBQXVDO01BQ2pEQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHVCxVQUFVLENBQUNVLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO1FBRXBDRCxFQUFFLENBQUNFLE1B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LElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQ1AsS0FBSztJQUFBO0lBQzVELElBQU0wQix5QkFBeUIsR0FBR0gsUUFBUSxDQUFDekksQ0FBQyxDQUFDd0ksS0FBSyxDQUFDLENBQUMsR0FBR0QsMkJBQTJCO0lBRWxGRixvQkFBb0IsR0FBR0Esb0JBQW9CLENBQUNRLE1BQU0sQ0FBQ3RCLGVBQWUsQ0FBQ3ZILENBQUMsQ0FBQ3dJLEtBQUssQ0FBQyxFQUFFSSx5QkFBeUIsQ0FBQyxDQUFDO0VBQzVHLENBQUMsQ0FBQztFQUVGLE9BQU9QLG9CQUFvQjtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2F1dGguanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XHJcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gICAgY2xhc3NpZnlGb3JtLFxyXG4gICAgVmFsaWRhdG9ycyxcclxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcclxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNyZWF0ZS1hY2NvdW50LWZvcm1dJztcclxuICAgICAgICB0aGlzLnJlY2FwdGNoYSA9ICQoJy5nLXJlY2FwdGNoYSBpZnJhbWVbc3JjXScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pIHtcclxuICAgICAgICBjb25zdCBsb2dpbk1vZGVsID0gZm9ybXM7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICcubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX2VtYWlsXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwuZW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9wYXNzXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwucGFzc3dvcmQodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclBhc3MsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRsb2dpbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uKCRmb3Jnb3RQYXNzd29yZEZvcm0pIHtcclxuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbbmFtZT1cImVtYWlsXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGZvcmdvdFBhc3N3b3JkRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRGb3JtID0gJy5uZXctcGFzc3dvcmQtZm9ybSc7XHJcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCksXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZF9jb25maXJtXCJdYCk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0TWVzc2FnZXMgPSBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvcik7XHJcbiAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkVmFsaWRhdG9yLFxyXG4gICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcclxuICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZXMsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQWNjb3VudFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IGlucHV0W3R5cGU9J3N1Ym1pdCddYCxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXWA7XHJcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdDb25maXJtUGFzc3dvcmQnXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRsYXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLmVycm9yKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRjcmVhdGVBY2NvdW50Rm9ybS5vbignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uKGV2ZW50LCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRBY3Rpb24oZXZlbnQsIHZhbGlkYXRvcikge1xyXG4gICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBlYXJsaWVzdEVycm9yLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSwgOTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cclxuICAgICAqL1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGEuYXR0cigndGl0bGUnLCB0aGlzLmNvbnRleHQucmVjYXB0Y2hhVGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZUFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCAkbG9naW5Gb3JtID0gY2xhc3NpZnlGb3JtKCcubG9naW4tZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRmb3Jnb3RQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRuZXdQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5uZXctcGFzc3dvcmQtZm9ybScpOyAvLyByZXNldCBwYXNzd29yZFxyXG5cclxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgYXV0aC5odG1sXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcclxuXHJcbiAgICAgICAgaWYgKCRsb2dpbkZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJG5ld1Bhc3N3b3JkRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRmb3Jnb3RQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gZGF0ZSBmb3IgdGhlIGRheS9tb250aC95ZWFyIHNlbGVjdCBpbnB1dHMgaXMgd2l0aGluIHBvdGVudGlhbCByYW5nZVxyXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxyXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxyXG4gKiBAcmV0dXJucyB7e3NlbGVjdG9yOiBzdHJpbmcsIHRyaWdnZXJlZEJ5OiBzdHJpbmcsIHZhbGlkYXRlOiBGdW5jdGlvbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmd9fVxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGREYXRlVmFsaWRhdGlvbigkZm9ybUZpZWxkLCB2YWxpZGF0aW9uLCByZXF1aXJlZE1lc3NhZ2UpIHtcclxuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcclxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBZb3VyIGNob3NlbiBkYXRlIG11c3QgZmFsbCBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW5fZGF0ZX0gYW5kICR7dmFsaWRhdGlvbi5tYXhfZGF0ZX0uYDtcclxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIGNvbnN0IG1heFNwbGl0ID0gdmFsaWRhdGlvbi5tYXhfZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XHJcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxyXG4gICAgICAgICAgICB0cmlnZ2VyZWRCeTogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdDpub3QoW2RhdGEtbGFiZWw9XCJ5ZWFyXCJdKWAsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwibW9udGhcIl0nKS52YWwoKSkgLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBSZXF1aXJlZCBFbXB0eSBEYXRlIGZpZWxkXHJcbiAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAoIXZhbGlkYXRpb24ubWluX2RhdGUgfHwgIXZhbGlkYXRpb24ubWF4X2RhdGUpKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxyXG4gICAgICAgICAgICB0cmlnZ2VyZWRCeTogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdDpub3QoW2RhdGEtbGFiZWw9XCJ5ZWFyXCJdKWAsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSAkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwibW9udGhcIl0nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSB2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgY2IoZGF5ICYmIG1vbnRoICYmIHllYXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXHJcbiAqIGZyb20gbWFueSBkaWZmZXJlbnQgaW5wdXRzXHJcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXHJcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXHJcbiAqIEBwYXJhbSBlcnJvclRleHQgcHJvdmlkZXMgZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICRmb3JtRmllbGQsIGVycm9yVGV4dCkge1xyXG4gICAgY29uc3QgZm9ybUZpZWxkSWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XHJcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xyXG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXHJcbiAgICAgICAgdHJpZ2dlcmVkQnk6IHNlY29uZGFyeVNlbGVjdG9yLFxyXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBzZWxlY3RvciwgZXJyb3JUZXh0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlbGVjdG9yLFxyXG4gICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcclxuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcclxuICAgIGNvbnN0IG1pbiA9IE51bWJlcih2YWxpZGF0aW9uLm1pbik7XHJcbiAgICBjb25zdCBtYXggPSBOdW1iZXIodmFsaWRhdGlvbi5tYXgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiJHt2YWxpZGF0aW9uLm5hbWV9XCJdYCxcclxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XHJcblxyXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidWlsZFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcclxuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGZvcm1GaWVsZFNlbGVjdG9yID0gYCMkeyR2YWxpZGF0ZWFibGVFbGVtZW50LmF0dHIoJ2lkJyl9YDtcclxuXHJcbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVZhbGlkYXRpb24gPSBidWlsZERhdGVWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCB2YWxpZGF0aW9uLCBlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZVZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQgJiYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2NoZWNrYm94c2VsZWN0JyB8fCB2YWxpZGF0aW9uLnR5cGUgPT09ICdyYWRpb3NlbGVjdCcpKSB7XHJcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24odmFsaWRhdGlvbiwgJHZhbGlkYXRlYWJsZUVsZW1lbnQsIGVycm9yTWVzc2FnZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0RWxlbWVudC5nZXQoMCkudGFnTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSAke3RhZ05hbWV9W25hbWU9XCIke2lucHV0TmFtZX1cIl1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGVsZW1lbnRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyB0aGUgdmFsaWRhdGlvbiBtb2RlbCBmb3IgZHluYW1pYyBmb3Jtc1xyXG4gKiBAcGFyYW0gJGZvcm1cclxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIGZvciBlcnJvciBtZXNzYWdlcyBvbiByZXF1aXJlZCBmaWVsZHMgdmFsaWRhdGlvblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0sIGNvbnRleHQpIHtcclxuICAgIGxldCB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IFtdO1xyXG4gICAgY29uc3QgeyBmaWVsZF9ub3RfYmxhbms6IHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dCB9ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ1tkYXRhLXZhbGlkYXRpb25dJykuZWFjaCgoaW5kZXgsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0TGFiZWwgPSAkZWwgPT4gJGVsLmZpcnN0KCkuZGF0YSgndmFsaWRhdGlvbicpLmxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBnZXRMYWJlbCgkKGlucHV0KSkgKyByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQ7XHJcblxyXG4gICAgICAgIHZhbGlkYXRpb25zVG9QZXJmb3JtID0gdmFsaWRhdGlvbnNUb1BlcmZvcm0uY29uY2F0KGJ1aWxkVmFsaWRhdGlvbigkKGlucHV0KSwgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zVG9QZXJmb3JtO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInN0YXRlQ291bnRyeSIsIm5vZCIsInZhbGlkYXRpb24iLCJmb3JtcyIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQXV0aCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImZvcm1DcmVhdGVTZWxlY3RvciIsInJlY2FwdGNoYSIsIiQiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uIiwiJGxvZ2luRm9ybSIsIl90aGlzMiIsImxvZ2luTW9kZWwiLCJsb2dpblZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwidXNlVmFsaWRFbWFpbCIsInBhc3N3b3JkIiwiZW50ZXJQYXNzIiwib24iLCJldmVudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24iLCIkZm9yZ290UGFzc3dvcmRGb3JtIiwiX3RoaXMzIiwiZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IiLCJyZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbiIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsImVudGVyUGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmRfbWF0Y2giLCJuZXdQYXNzd29yZEZvcm0iLCJuZXdQYXNzd29yZFZhbGlkYXRvciIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsImVycm9yVGV4dE1lc3NhZ2VzIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJlcnJvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRjcmVhdGVBY2NvdW50Rm9ybSIsIl90aGlzNCIsInZhbGlkYXRpb25Nb2RlbCIsImNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCJkZWxheSIsIiRzdGF0ZUVsZW1lbnQiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsIiRwYXNzd29yZEVsZW1lbnQiLCIkcGFzc3dvcmQyRWxlbWVudCIsIiRsYXN0IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInJlbW92ZSIsImlzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZF9lbWFpbCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aTIiLCJzdWJtaXRBY3Rpb24iLCJ2YWxpZGF0b3IiLCJzZXRUaW1lb3V0IiwiZWFybGllc3RFcnJvciIsInByZXYiLCJ0cmlnZ2VyIiwib25SZWFkeSIsImF0dHIiLCJyZWNhcHRjaGFUaXRsZSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiLCJkZWZhdWx0IiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJyZXF1aXJlZE1lc3NhZ2UiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJOdW1iZXIiLCJmaW5kIiwibW9udGgiLCJ5ZWFyIiwiY2hvc2VuRGF0ZSIsInJlcXVpcmVkIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImVycm9yVGV4dCIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsImNoZWNrZWQiLCJidWlsZFJlcXVpcmVkVmFsaWRhdGlvbiIsImJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uIiwiZm9ybUZpZWxkU2VsZWN0b3IiLCJsYWJlbCIsIm1pbiIsIm1heCIsIm5hbWUiLCJudW1iZXJWYWwiLCJidWlsZFZhbGlkYXRpb24iLCIkdmFsaWRhdGVhYmxlRWxlbWVudCIsImRhdGEiLCJmaWVsZFZhbGlkYXRpb25zIiwidHlwZSIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsImVsZW1lbnQiLCIkaW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImdldCIsImlucHV0TmFtZSIsImVsZW1lbnRTZWxlY3RvciIsIiRmb3JtIiwidmFsaWRhdGlvbnNUb1BlcmZvcm0iLCJfY3JlYXRlVHJhbnNsYXRpb25EaWMiLCJyZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQiLCJpbnB1dCIsImdldExhYmVsIiwiJGVsIiwiZmlyc3QiLCJyZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==