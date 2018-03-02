webpackJsonp([11],{

/***/ "../../../../../src/app/layout/cupons/cupons-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cupons_component__ = __webpack_require__("../../../../../src/app/layout/cupons/cupons.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuponsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cupons_component__["a" /* CuponsComponent */] }
];
var CuponsRoutingModule = (function () {
    function CuponsRoutingModule() {
    }
    return CuponsRoutingModule;
}());
CuponsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CuponsRoutingModule);

//# sourceMappingURL=cupons-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cupons/cupons.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Cupoms'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n            <div class=\"col col-xl-6 col-lg-10\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        {{ 'list.coupons' | translate }}\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>{{ 'name' | translate }}</th>\n                                <th>{{ 'discount' | translate }}</th>\n                                <th>{{ 'amount' | translate }}</th>\n                                <th>{{ 'activated' | translate }}</th>\n                                <th>{{ 'privated' | translate }}</th>\n                                <th>{{ 'expiration' | translate }}</th>\n                                <th>{{ 'options' | translate }}</th>\n                            </tr>\n                            </thead> \n                            <tbody>\n                                <tr *ngFor=\"let cupon of cupons\" (click)=\"populate(cupon)\" >\n                                    <td>{{cupon.name}}</td>\n                                    <td>{{getTypeDiscount(cupon)}}</td>\n                                    <td>{{cupon.amount}}</td>\n                                    <td>{{cupon.activated == 0 ? 'Não': 'Sim'}}</td>\n                                    <td>{{cupon.privated == 0 ? 'Não': 'Sim'}}</td>\n                                    <td>{{cupon.expiration}}</td>\n                                    <td (click)=\"remove(content, cupon)\">Remover</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n\n                <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'name' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"name\"\n                                id=\"name\" placeholder=\"{{ 'name' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('name')\"\n                              msgErro=\"{{ 'name.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('price')\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'value' | translate }}*</label>\n                            <input type=\"number\" class=\"form-control\"\n                                formControlName=\"price\"\n                                id=\"l\" placeholder=\"{{ 'price.placeholder' | translate }}\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('price')\"\n                              msgErro=\"{{ 'price.required' | translate }}\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'amount' | translate }}*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"amount\"\n                                id=\"l\" placeholder=\"{{ 'amount' | translate }}\" >\n                        </fieldset>\n                    </div>\n\n                     <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>{{ 'expiration' | translate }}*</label>\n                            <input type=\"datetime-local\" class=\"form-control\"\n                                formControlName=\"expiration\"\n                                id=\"l\" >\n                        </fieldset>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-4\">\n                            <fieldset class=\"form-group text-center\">\n                                <label>Privado*</label>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"privated\" id=\"privated1\" value=\"1\"> Sim\n                                    </label> &nbsp;&nbsp;&nbsp;\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"privated\" id=\"privated2\" value=\"0\"> Não\n                                    </label>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-4\">\n                            <fieldset class=\"form-group text-center\">\n                                <label>Ativar*</label>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                                    </label> &nbsp;&nbsp;&nbsp;\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios2\" value=\"0\"> Não\n                                    </label>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"col-4\">\n                            <fieldset class=\"form-group text-center\">\n                                <label>Desconto*</label>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"discount_type\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> %\n                                    </label> &nbsp;&nbsp;&nbsp;\n                                    <label>\n                                        <input type=\"radio\" formControlName=\"discount_type\" id=\"optionsRadios2\" value=\"0\"> R$\n                                    </label>\n                                </div>\n                            </fieldset>\n                        </div>\n                    </div>\n\n                    <div class=\"text-center margin-col\">\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n                        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >Salvar</button>\n                    </div> \n \n                </form>\n\n            </div>\n        </div>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">{{ 'user.remove' | translate }}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{cupon.name}}</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'no' | translate }}</button>\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">{{ 'yes' | translate }}</button>\n          </div>\n        </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/cupons/cupons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/cupons/cupons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_cupon_service__ = __webpack_require__("../../../../../src/app/shared/services/cupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuponsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CuponsComponent = (function () {
    function CuponsComponent(formBuilder, cuponService, restaurantService, toastr, modalService) {
        this.formBuilder = formBuilder;
        this.cuponService = cuponService;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.modalService = modalService;
        var restaurant = this.restaurantService.getAll();
        if (restaurant && restaurant.id) {
            this.find();
        }
        else {
            var env_1 = this;
            setTimeout(function () {
                env_1.find();
            }, 1000);
        }
    }
    CuponsComponent.prototype.find = function () {
        var _this = this;
        this.cupons = this.cuponService.getAll();
        if (!this.cupons.length) {
            this.cuponService.populate()
                .subscribe(function (result) {
                _this.cupons = result.data;
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
    };
    CuponsComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            price: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            discount_type: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            activated: [null, []],
            privated: [null, []],
            amount: [null, []],
            expiration: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]]
        });
    };
    CuponsComponent.prototype.populate = function (cupon) {
        this.formulario.setValue({
            id: cupon.id,
            name: cupon.name,
            price: cupon.price,
            amount: cupon.amount,
            discount_type: cupon.privated ? "0" : "1",
            activated: cupon.activated == 1 ? "1" : "0",
            privated: cupon.privated == 1 ? "1" : "0",
            expiration: cupon.expiration
        });
    };
    CuponsComponent.prototype.register = function () {
        var _this = this;
        if (this.formulario.valid) {
            if (this.formulario.get('privated').value === "0") {
                this.toastr.warning('', "Este cupom deve ser privado");
                return false;
            }
            if (!this.formulario.get('name').value.startsWith("SF-")) {
                this.toastr.warning('', "Desculpe. Mas você só pode criar cupom que comece 'SF-'");
                return false;
            }
            if (this.formulario.value.id) {
                this.cuponService.edit(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.cupons = _this.cuponService.getAll();
                        _this.toastr.success(result.message, '');
                        _this.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
            else {
                this.cuponService.register(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.cupons = _this.cuponService.getAll();
                        _this.toastr.success(result.message, '');
                        _this.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    CuponsComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    CuponsComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    CuponsComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    CuponsComponent.prototype.verificaValidacoesForm = function (formGroup) {
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
    CuponsComponent.prototype.remove = function (content, cupon) {
        var _this = this;
        this.cupon = cupon;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.cuponService.remove(cupon.id)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.cupons = _this.cuponService.getAll();
                        _this.toastr.success(result.message, '');
                        _this.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                }, function (error) {
                    if (error.status === 401) {
                        _this.onLoggedout();
                    }
                });
            }
        }, function (reason) {
        });
    };
    CuponsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CuponsComponent.prototype.getTypeDiscount = function (cupon) {
        if (cupon.discount_type) {
            return cupon.price + " %";
        }
        else {
            return "R$ " + cupon.price;
        }
    };
    CuponsComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return CuponsComponent;
}());
CuponsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-cupons',
        template: __webpack_require__("../../../../../src/app/layout/cupons/cupons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/cupons/cupons.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_cupon_service__["a" /* CuponService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_cupon_service__["a" /* CuponService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _e || Object])
], CuponsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cupons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/cupons/cupons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cupons_component__ = __webpack_require__("../../../../../src/app/layout/cupons/cupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cupons_routing_module__ = __webpack_require__("../../../../../src/app/layout/cupons/cupons-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponsModule", function() { return CuponsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CuponsModule = (function () {
    function CuponsModule() {
    }
    return CuponsModule;
}());
CuponsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__cupons_routing_module__["a" /* CuponsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__cupons_component__["a" /* CuponsComponent */]]
    })
], CuponsModule);

//# sourceMappingURL=cupons.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map