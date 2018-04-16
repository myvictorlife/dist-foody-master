webpackJsonp([9],{

/***/ "../../../../../src/app/layout/payment/payment-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_component__ = __webpack_require__("../../../../../src/app/layout/payment/payment.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__payment_component__["a" /* PaymentComponent */] }
];
var PaymentRoutingModule = (function () {
    function PaymentRoutingModule() {
    }
    return PaymentRoutingModule;
}());
PaymentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PaymentRoutingModule);

//# sourceMappingURL=payment-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Formas de Pagamento'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    \n    \t<div class=\"row\">\n\t        \n\t        <div class=\"col col-xl-6 col-lg-8\">\n\t        \t<div class=\"card mb-6\">\n\t                <div class=\"card-header\">\n\t                    Formas de Pagamento\n\t                </div>\n\t                <div class=\"card-block table-responsive\">\n\t                    <table class=\"table table-hover\">\n\t                        <thead>\n\t                        <tr>\n\t                            <th>#</th>\n\t                            <th>img</th>\n\t                            <th>Tipo</th>\n\t                            <th>Cartão</th>\n\t                            <th>Online</th>\n\t                        </tr>\n\t                        </thead>\n\t                        <tbody>\n\t\t                        <tr *ngFor=\"let pay of payments\" (click)=\"edit(pay)\">\n\t\t                            <th scope=\"row\">{{pay.id}}</th>\n\t\t                            <td><img src=\"{{ pay.img }}\" alt=\"\" width=\"70\" height=\"50\"></td>\n\t\t                            <td>{{pay.name}}</td>\n\t\t                            <td>{{pay.card}}</td>\n\t\t                            <td>{{pay.is_online == 1 ? 'SIM': 'NÃO'}}</td>\n\t\t                            <td (click)=\"remove(content, pay)\">Remover</td>\n\t\t                        </tr>\n\t                        </tbody>\n\t                    </table>\n\t                </div>\n            \t</div>\n\t\t    </div>\n\t\t    <div class=\"col-lg-5\">\n\n\t            <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n\t            \t<div class=\"row\">\n\t\t  \t\t\t\t<div class=\"col-lg-3\">\n\t\t  \t\t\t\t</div>\n\t\t\t\t    \t<div class=\"col-lg-5\">\n\t\t\t\t    \t\t<!-- <img src=\"assets/images/r3.jpg\" class=\"rounded float-left\" width=\"350\" height=\"200\" > -->\n\t\t\t\t            <img *ngIf=\"!formulario.get('img').value\" src=\"assets/images/credit-card.png\" class=\"rounded float-left\" width=\"70\" height=\"50\" >\n\n\t\t\t\t            <img *ngIf=\"formulario.get('img').value\" [src]=\"formulario.get('img').value\" class=\"rounded float-left\" width=\"70\" height=\"50\" >\n\n\t\t                <div style=\"cursor: pointer;\" *ngIf=\"formulario.get('img').value\" (click)=\"removeImg()\">Remover imagem</div>\n\n\t\t\t\t    \t\t<label class=\"custom-file size-input-file\" >\n\t\t\t\t\t\t\t  <input type=\"file\" id=\"file\" class=\"custom-file-input\" accept=\"image/*\" (change)=\"changeListener($event, 'imgFile')\"  >\n\t\t\t\t\t\t\t  <span class=\"custom-file-control\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t    \t</div> \n\t\t\t\t    </div>\n\t                <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n\t                    <fieldset class=\"form-group\">\n\t                        <label>Tipo*</label>\n\t                        <input type=\"text\" class=\"form-control\"\n\t                            formControlName=\"name\"\n\t                            id=\"name\" placeholder=\"Tipo\" >\n\n\t                        <app-campo-control-erro\n\t                          [mostrarErro]=\"verificaValidTouched('name')\"\n\t                          msgErro=\"Nome é obrigatório.\">\n\t                        </app-campo-control-erro>\n\t                    </fieldset>\n\t                </div>\n\n\t                <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n\t                    <fieldset class=\"form-group\">\n\t                        <label>Cartão</label>\n\t                        <input type=\"text\" class=\"form-control\"\n\t                            formControlName=\"card\"\n\t                            id=\"card\" placeholder=\"Master Card\" >\n\t                    </fieldset>\n\t                </div>\n\n\t                <fieldset class=\"form-group text-center\">\n                        <label>Online*</label>\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" formControlName=\"is_online\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                            </label> &nbsp;&nbsp;&nbsp;\n                            <label>\n                                <input type=\"radio\" formControlName=\"is_online\" id=\"optionsRadios2\" value=\"0\"> Não\n                            </label>\n                        </div>\n                    </fieldset>\n\n\t                <div class=\"text-center\">\n\t                \t<button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >Salvar</button>\n\t\t\t\t\t</div> \n\n\t            </form>\n\n\t        </div>\n\t    </div>\n        \n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t  <div class=\"modal-header\">\n\t\t    <h4 class=\"modal-title\">Remover forma de pagamento</h4>\n\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n\t\t      <span aria-hidden=\"true\">&times;</span>\n\t\t    </button>\n\t\t  </div>\n\t\t  <div class=\"modal-body\">\n\t\t    <p>{{categoria}}</p>\n\t\t  </div>\n\t\t  <div class=\"modal-footer\">\n\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">Não</button>\n\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">Sim</button>\n\t\t  </div>\n\t\t</ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table th, td {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_payment_service__ = __webpack_require__("../../../../../src/app/shared/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/upload.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentComponent = (function () {
    function PaymentComponent(paymentService, uploadService, toastr, formBuilder, modalService) {
        var _this = this;
        this.paymentService = paymentService;
        this.uploadService = uploadService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.payments = this.paymentService.getAll();
        if (!this.payments.length) {
            this.paymentService.populate()
                .subscribe(function (result) {
                _this.payments = result.data;
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            img: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]],
            card: [null, []],
            is_online: [null, []],
        });
    };
    PaymentComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    PaymentComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    PaymentComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    PaymentComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    PaymentComponent.prototype.register = function () {
        var _this = this;
        if (this.formulario.valid) {
            if (this.formulario.value.id) {
                this.paymentService.update(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.payments = _this.paymentService.getAll();
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
                this.paymentService.register(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.payments = _this.paymentService.getAll();
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
    PaymentComponent.prototype.edit = function (pay) {
        this.formulario.setValue({
            id: pay.id,
            img: pay.img,
            name: pay.name,
            card: pay.card,
            is_online: pay.is_online == 1 ? "1" : "0"
        });
    };
    PaymentComponent.prototype.remove = function (content, payment) {
        var _this = this;
        this.categoria = payment.name;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.paymentService.remove(payment.id)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.payments = _this.paymentService.getAll();
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
    PaymentComponent.prototype.removeImg = function () {
        this.formulario.controls['img'].setValue(null);
    };
    PaymentComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PaymentComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    PaymentComponent.prototype.readThis = function (inputValue) {
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
                console.log(result.url);
                _this.formulario.controls['img'].setValue(result.url);
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        };
        myReader.readAsDataURL(file);
    };
    PaymentComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/layout/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/payment/payment.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_upload_service__["a" /* UploadService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _e || Object])
], PaymentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/payment/payment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_component__ = __webpack_require__("../../../../../src/app/layout/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_routing_module__ = __webpack_require__("../../../../../src/app/layout/payment/payment-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PaymentModule = (function () {
    function PaymentModule() {
    }
    return PaymentModule;
}());
PaymentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__payment_routing_module__["a" /* PaymentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__payment_component__["a" /* PaymentComponent */]]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map