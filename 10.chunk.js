webpackJsonp([10],{

/***/ "../../../../../src/app/layout/geral/geral-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_component__ = __webpack_require__("../../../../../src/app/layout/geral/geral.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__geral_component__["a" /* GeralComponent */] }
];
var GeralRoutingModule = (function () {
    function GeralRoutingModule() {
    }
    return GeralRoutingModule;
}());
GeralRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], GeralRoutingModule);

//# sourceMappingURL=geral-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/geral/geral.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Funcionários'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n            <div class=\"col col-xl-6 col-lg-10\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        {{ 'app.version' | translate }}\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>{{ 'version' | translate }}</th>\n                                <th>{{ 'date_created' | translate }}</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let version of versions\" >\n                                    <td>{{version.id}}</td>\n                                    <td>{{version.version}}</td>\n                                    <td>{{version.createdAt | date: 'dd/MM/yyyy HH:mm'}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n\n                <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('version')\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'version' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"version\"\n                                id=\"version\" placeholder=\"{{ 'version' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('version')\"\n                              msgErro=\"{{ 'version.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >{{ 'clear' | translate }}</button>\n                        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >{{ 'save' | translate }}</button>\n                    </div>\n                    \n                </form>\n\n            </div>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/geral/geral.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/geral/geral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_app_version_service__ = __webpack_require__("../../../../../src/app/shared/services/app-version.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeralComponent = (function () {
    function GeralComponent(formBuilder, toastr, appVersionService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.appVersionService = appVersionService;
        this.versions = this.appVersionService.getAll();
        if (!this.versions || !this.versions.length) {
            this.appVersionService.populate().subscribe(function (result) {
                if (result.status) {
                    _this.versions = result.data;
                }
                else {
                    _this.versions = [];
                }
            });
        }
    }
    GeralComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            version: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]]
        });
    };
    GeralComponent.prototype.register = function () {
        var _this = this;
        if (this.formulario.valid) {
            this.appVersionService.register(this.formulario.value)
                .subscribe(function (result) {
                if (result.status) {
                    _this.versions = _this.appVersionService.getAll();
                    _this.toastr.success(result.message, '');
                    _this.reset();
                }
                else {
                    _this.toastr.warning('', result.message);
                }
            });
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    GeralComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    GeralComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    GeralComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    GeralComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    return GeralComponent;
}());
GeralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-geral',
        template: __webpack_require__("../../../../../src/app/layout/geral/geral.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/geral/geral.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_app_version_service__["a" /* AppVersionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_app_version_service__["a" /* AppVersionService */]) === "function" && _c || Object])
], GeralComponent);

var _a, _b, _c;
//# sourceMappingURL=geral.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/geral/geral.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_component__ = __webpack_require__("../../../../../src/app/layout/geral/geral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geral_routing_module__ = __webpack_require__("../../../../../src/app/layout/geral/geral-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralModule", function() { return GeralModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GeralModule = (function () {
    function GeralModule() {
    }
    return GeralModule;
}());
GeralModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__geral_routing_module__["a" /* GeralRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__geral_component__["a" /* GeralComponent */]]
    })
], GeralModule);

//# sourceMappingURL=geral.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map