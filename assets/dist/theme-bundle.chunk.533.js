"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[533],{93533:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var r=a(91238),i=a(36007),o=a(41582),n=a(70887),s=a(61579),l=a(96609),d=a(71779),c=a(33270);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var m=function(t){function e(e){var a;return(a=t.call(this,e)||this).validationDictionary=(0,d.i)(e),a.formCreateSelector="form[data-create-account-form]",a.recaptcha=c(".g-recaptcha iframe[src]"),a}var a,r;r=t,(a=e).prototype=Object.create(r.prototype),a.prototype.constructor=a,u(a,r);var m=e.prototype;return m.registerLoginValidation=function(t){var e=this,a=s.A;this.loginValidator=(0,o.A)({submit:'.login-form input[type="submit"]',tap:l.dN}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function(t,e){t(a.email(e))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:function(t,e){t(a.password(e))},errorMessage:this.context.enterPass}]),t.on("submit",(function(t){e.loginValidator.performCheck(),e.loginValidator.areAll("valid")||t.preventDefault()}))},m.registerForgotPasswordValidation=function(t){var e=this;this.forgotPasswordValidator=(0,o.A)({submit:'.forgot-password-form input[type="submit"]',tap:l.dN}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function(t,e){t(s.A.email(e))},errorMessage:this.context.useValidEmail}]),t.on("submit",(function(t){e.forgotPasswordValidator.performCheck(),e.forgotPasswordValidator.areAll("valid")||t.preventDefault()}))},m.registerNewPasswordValidation=function(){var t=this.validationDictionary,e=t.password,a=t.password_match,r=".new-password-form",i=(0,o.A)({submit:c(r+' input[type="submit"]'),tap:l.dN}),n=c(r+' input[name="password"]'),s=c(r+' input[name="password_confirm"]'),d=(0,l.pt)(e,e,a,this.passwordRequirements.error);l.k0.setPasswordValidation(i,n,s,this.passwordRequirements,d)},m.registerCreateAccountValidator=function(t){var e,a=this,r=(0,n.A)(t,this.context),s=(0,o.A)({submit:this.formCreateSelector+" input[type='submit']",delay:900}),d=c('[data-field-type="State"]'),u=this.formCreateSelector+" [data-field-type='EmailAddress']",m=c(u),f=this.formCreateSelector+" [data-field-type='Password']",p=c(f),h=this.formCreateSelector+" [data-field-type='ConfirmPassword']",v=c(h);if(s.add(r),d&&(0,i.A)(d,this.context,(function(t,r){if(t)throw new Error(t);var i=c(r);"undefined"!==s.getStatus(d)&&s.remove(d),e&&s.remove(e),i.is("select")?(e=r,l.k0.setStateCountryValidation(s,r,a.validationDictionary.field_not_blank)):l.k0.cleanUpStateValidation(r)})),m&&(s.remove(u),l.k0.setEmailValidation(s,u,this.validationDictionary.valid_email)),p&&v){var g=this.validationDictionary,b=g.password,w=g.password_match;s.remove(f),s.remove(h),l.k0.setPasswordValidation(s,f,h,this.passwordRequirements,(0,l.pt)(b,b,w,this.passwordRequirements.error))}t.on("submit",(function(t){a.submitAction(t,s)}))},m.submitAction=function(t,e){e.performCheck(),e.areAll("valid")||(t.preventDefault(),setTimeout((function(){c("span.form-inlineMessage:first").prev("input").trigger("focus")}),900))},m.onReady=function(){this.recaptcha.attr("title")||this.recaptcha.attr("title",this.context.recaptchaTitle);var t=(0,l.J6)(this.formCreateSelector),e=(0,l.J6)(".login-form"),a=(0,l.J6)(".forgot-password-form"),r=(0,l.J6)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,e.length&&this.registerLoginValidation(e),r.length&&this.registerNewPasswordValidation(),a.length&&this.registerForgotPasswordValidation(a),t.length&&this.registerCreateAccountValidator(t)},e}(r.A)},70887:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(71779),i=a(33270);function o(t,e){var a=[],o=(0,r.i)(e).field_not_blank;return t.find("[data-validation]").each((function(t,e){var r=i(e).first().data("validation").label+o;a=a.concat(function(t,e){var a,r,o,n=t.data("validation"),s=[],l="#"+t.attr("id");if("datechooser"===n.type){var d=function(t,e,a){if(e.min_date&&e.max_date){var r="Your chosen date must fall between "+e.min_date+" and "+e.max_date+".",i=t.attr("id"),o=e.min_date.split("-"),n=e.max_date.split("-"),s=new Date(o[0],o[1]-1,o[2]),l=new Date(n[0],n[1]-1,n[2]);return{selector:"#"+i+' select[data-label="year"]',triggeredBy:"#"+i+' select:not([data-label="year"])',validate:function(e,a){var r=Number(t.find('select[data-label="day"]').val()),i=Number(t.find('select[data-label="month"]').val())-1,o=Number(a),n=new Date(o,i,r);e(n>=s&&n<=l)},errorMessage:r}}if(e.required&&(!e.min_date||!e.max_date)){var d=t.attr("id");return{selector:"#"+d+' select[data-label="year"]',triggeredBy:"#"+d+' select:not([data-label="year"])',validate:function(e,a){var r=t.find('select[data-label="day"]').val(),i=t.find('select[data-label="month"]').val();e(r&&i&&a)},errorMessage:a}}}(t,n,e);d&&s.push(d)}else!n.required||"checkboxselect"!==n.type&&"radioselect"!==n.type?t.find("input, select, textarea").each((function(t,a){var r=i(a),o=r.get(0).tagName,d=r.attr("name"),c=l+" "+o+'[name="'+d+'"]';"numberonly"===n.type&&s.push(function(t,e){var a="The value for "+t.label+" must be between "+t.min+" and "+t.max+".",r=Number(t.min),i=Number(t.max);return{selector:e+' input[name="'+t.name+'"]',validate:function(t,e){var a=Number(e);t(a>=r&&a<=i)},errorMessage:a}}(n,l)),n.required&&s.push(function(t,e,a){return{selector:e,validate:function(t,e){t(e.length>0)},errorMessage:a}}(0,c,e))})):s.push((a=e,{selector:"#"+(r=t.attr("id"))+" input:first-of-type",triggeredBy:o="#"+r+" input",validate:function(t){var e=!1;i(o).each((function(t,a){if(a.checked)return e=!0,!1})),t(e)},errorMessage:a}));return s}(i(e),r))})),a}}}]);
//# sourceMappingURL=theme-bundle.chunk.533.js.map