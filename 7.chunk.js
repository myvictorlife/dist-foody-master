webpackJsonp([7],{

/***/ "../../../../../src/app/layout/promotion/promotion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_component__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__promotion_component__["a" /* PromotionComponent */] }
];
var PromotionRoutingModule = (function () {
    function PromotionRoutingModule() {
    }
    return PromotionRoutingModule;
}());
PromotionRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PromotionRoutingModule);

//# sourceMappingURL=promotion-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Promoções'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <button style=\"margin-bottom: 10px\" class=\"btn btn-primary\" (click)=\"newPromotion(details)\" >Novo</button>\n    <div class=\"row\">\n            <div class=\"col col-xl-12 col-lg-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        {{ 'list.promotions' | translate }}\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>{{ 'img' | translate }}</th>\n                                <th>{{ 'name' | translate }}</th>\n                                <th>{{ 'description' | translate }}</th>\n                                <th>{{ 'cupom' | translate }}</th>\n                                <th>{{ 'free_delivery' | translate }}</th>\n                                <th>{{ 'only_new_user' | translate }}</th>\n                                <th>{{ 'is_valid' | translate }}</th>\n                            </tr>\n                            </thead> \n                            <tbody>\n                                <tr *ngFor=\"let promotion of promotions\" (click)=\"editPromotion(details, promotion)\" >\n                                    <td><img src=\"{{ promotion.img }}\" alt=\"\" width=\"200\" height=\"100\"></td>\n                                    <td>{{promotion.name}}</td>\n                                    <td>{{promotion.description}}</td>\n                                    <td>{{promotion.cupom}}</td>\n                                    <td>{{promotion.free_delivery == 0 ? 'Não': 'Sim'}}</td>\n                                    <td>{{promotion.only_new_user == 0 ? 'Não': 'Sim'}}</td>\n                                    <td>{{promotion.is_valid == 0 ? 'Não': 'Sim' }}</td>\n                                </tr>\n                                <tr *ngIf=\"!promotions || !promotions.length\" >\n                                    <td></td>\n                                    <td></td>\n                                    <td>Nenhuma</td>\n                                    <td>promoção</td>\n                                    <td>no</td>\n                                    <td>momento</td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    <ng-template #details let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Detalhes do Restaurante</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n         <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n\n            <div class=\"row\">\n                <div class=\"col-lg-2\">\n                </div>\n                <div class=\"col-lg-10\">\n                    <!-- <img src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"350\" height=\"200\" > -->\n                    <img *ngIf=\"!formulario.get('img').value\" src=\"assets/images/500x250.png  \" class=\"rounded float-left\" width=\"500\" height=\"250\" >\n                    <img *ngIf=\"formulario.get('img').value\" [src]=\"formulario.get('img').value\" class=\"rounded float-left\" width=\"500\" height=\"250\" >\n                <div style=\"cursor: pointer;\" *ngIf=\"formulario.get('img').value\" (click)=\"removeImg()\">Remover imagem</div>\n\n                    <label class=\"custom-file size-input-file\" >\n                      <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'imgFile')\"  >\n                      <span class=\"custom-file-control\"></span>\n                    </label>\n                </div> \n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n                <fieldset class=\"form-group\">\n                    <label>Nome*</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"name\"\n                        id=\"name\" placeholder=\"Nome\" >\n\n                    <app-campo-control-erro\n                      [mostrarErro]=\"verificaValidTouched('name')\"\n                      msgErro=\"Nome é obrigatório.\">\n                    </app-campo-control-erro>\n                </fieldset>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"aplicaCssErro('description')\" >\n                <fieldset class=\"form-group\">\n                    <label>Descrição*</label>\n                    <textarea type=\"text\" class=\"form-control\"\n                        formControlName=\"description\"\n                        id=\"description\" placeholder=\"Descrição\" ></textarea>\n\n                    <app-campo-control-erro\n                      [mostrarErro]=\"verificaValidTouched('name')\"\n                      msgErro=\"Nome é obrigatório.\">\n                    </app-campo-control-erro>\n                </fieldset>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"aplicaCssErro('description_restaurant')\" >\n                <fieldset class=\"form-group\">\n                    <label>Descrição para o restaurante*</label>\n                    <textarea type=\"text\" class=\"form-control\"\n                        formControlName=\"description_restaurant\"\n                        id=\"description_restaurant\" placeholder=\"Descrição\" ></textarea>\n\n                    <app-campo-control-erro\n                      [mostrarErro]=\"verificaValidTouched('name')\"\n                      msgErro=\"Nome é obrigatório.\">\n                    </app-campo-control-erro>\n                </fieldset>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"aplicaCssErro('cupom')\" >\n                <fieldset class=\"form-group\">\n                    <label>Cupom*</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"cupom\"\n                        id=\"cupom\" placeholder=\"Cupom\" >\n\n                    <app-campo-control-erro\n                      [mostrarErro]=\"verificaValidTouched('name')\"\n                      msgErro=\"Nome é obrigatório.\">\n                    </app-campo-control-erro>\n                </fieldset>\n            </div>\n\n            <fieldset class=\"form-group text-center\">\n                <label>Frete Grátis*</label>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" formControlName=\"free_delivery\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                    </label> &nbsp;&nbsp;&nbsp;\n                    <label>\n                        <input type=\"radio\" formControlName=\"free_delivery\" id=\"optionsRadios2\" value=\"0\"> Não\n                    </label>\n                </div>\n            </fieldset>\n\n            <fieldset class=\"form-group text-center\">\n                <label>Somente usuários novos?*</label>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" formControlName=\"only_new_user\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                    </label> &nbsp;&nbsp;&nbsp;\n                    <label>\n                        <input type=\"radio\" formControlName=\"only_new_user\" id=\"optionsRadios2\" value=\"0\"> Não\n                    </label>\n                </div>\n            </fieldset>\n\n            <fieldset class=\"form-group text-center\">\n                <label>Ativar*</label>\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" formControlName=\"is_valid\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                    </label> &nbsp;&nbsp;&nbsp;\n                    <label>\n                        <input type=\"radio\" formControlName=\"is_valid\" id=\"optionsRadios2\" value=\"0\"> Não\n                    </label>\n                </div>\n            </fieldset>\n            \n        </form>   \n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"insertOrUpdate()\" >Salvar</button>\n      </div>\n    </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_promotion_service__ = __webpack_require__("../../../../../src/app/shared/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromotionComponent = (function () {
    function PromotionComponent(formBuilder, restaurantService, promotionService, toastr, uploadService, modalService) {
        this.formBuilder = formBuilder;
        this.restaurantService = restaurantService;
        this.promotionService = promotionService;
        this.toastr = toastr;
        this.uploadService = uploadService;
        this.modalService = modalService;
        var promotions = this.promotionService.getAll();
        if (promotions && promotions.length) {
            this.find();
        }
        else {
            var env_1 = this;
            setTimeout(function () {
                env_1.find();
            }, 1000);
        }
    }
    PromotionComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            img: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            description: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            description_restaurant: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            cupom: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            free_delivery: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            only_new_user: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            is_valid: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]]
        });
    };
    PromotionComponent.prototype.find = function () {
        var _this = this;
        this.promotions = this.promotionService.getAll();
        if (!this.promotions.length) {
            this.promotionService.populate()
                .subscribe(function (result) {
                _this.promotions = result.data;
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
    };
    PromotionComponent.prototype.newPromotion = function (content) {
        var options = {
            size: 'lg'
        };
        this.reset();
        this.modalService.open(content, options).result.then(function (result) {
            if (result === 'yes') {
            }
        }, function (reason) {
        });
    };
    PromotionComponent.prototype.editPromotion = function (content, promotion) {
        this.formulario.setValue({
            id: promotion.id,
            img: promotion.img,
            name: promotion.name,
            description: promotion.description,
            description_restaurant: promotion.description_restaurant,
            cupom: promotion.cupom,
            free_delivery: promotion.free_delivery + "",
            only_new_user: promotion.only_new_user + "",
            is_valid: promotion.is_valid + ""
        });
        var options = {
            size: 'lg'
        };
        this.modalService.open(content, options).result.then(function (result) {
            if (result === 'yes') {
            }
        }, function (reason) {
        });
    };
    PromotionComponent.prototype.insertOrUpdate = function () {
        var _this = this;
        if (this.formulario.valid) {
            if (this.formulario.value.id) {
                this.promotionService.update(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.promotions = _this.promotionService.getAll();
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
                this.promotionService.register(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.promotions = _this.promotionService.getAll();
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
    PromotionComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    PromotionComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    PromotionComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    PromotionComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    PromotionComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            var base64 = myReader.result.substring(myReader.result.indexOf(",") + 1, myReader.result.length);
            var jsonImage = {
                filename: file.name,
                type: file.type,
                size: file.size,
                base64: base64
            };
            _this.uploadService.getUrl(jsonImage).subscribe(function (result) {
                _this.formulario.controls['img'].setValue(result.url);
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        };
        myReader.readAsDataURL(file);
    };
    PromotionComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    PromotionComponent.prototype.removeImg = function () {
        this.formulario.controls['img'].setValue(null);
    };
    PromotionComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return PromotionComponent;
}());
PromotionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-promotion',
        template: __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/promotion/promotion.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_promotion_service__["a" /* PromotionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_upload_service__["a" /* UploadService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object])
], PromotionComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=promotion.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/promotion/promotion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_component__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promotion_routing_module__ = __webpack_require__("../../../../../src/app/layout/promotion/promotion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModule", function() { return PromotionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PromotionModule = (function () {
    function PromotionModule() {
    }
    return PromotionModule;
}());
PromotionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__promotion_routing_module__["a" /* PromotionRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__promotion_component__["a" /* PromotionComponent */]]
    })
], PromotionModule);

//# sourceMappingURL=promotion.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map