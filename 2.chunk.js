webpackJsonp([2],{

/***/ "../../../../../src/app/layout/restaurant/order-by-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (!array || array === undefined || array.length === 0)
            return null;
        array.sort(function (a, b) {
            if (a.city < b.city) {
                return -1;
            }
            else if (a.city > b.city) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'orderByPipe'
    })
], OrderByPipe);

//# sourceMappingURL=order-by-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/restaurant/restaurant-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_component__ = __webpack_require__("../../../../../src/app/layout/restaurant/restaurant.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__restaurant_component__["a" /* RestaurantComponent */] }
];
var RestaurantRoutingModule = (function () {
    function RestaurantRoutingModule() {
    }
    return RestaurantRoutingModule;
}());
RestaurantRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], RestaurantRoutingModule);

//# sourceMappingURL=restaurant-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Novo Restaurante'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n        \n            <div class=\"col col-xl-12 col-lg-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        Lista das Empresas\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>Status</th>\n                                <th>Estabelecimento</th>\n                                <th>Telefone</th>\n                                <th>Cidade</th>\n                                <th>Estado</th>\n                                <th>CEP</th>\n                                <th>Taxa Fixa</th>\n                                <th>Porcentagem</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let res of restaurants | orderByPipe\" (click)=\"populate(res)\" [ngClass]=\"{'table-activated': res.activated == 1}\" >\n                                    <td>{{res.activated == 1 ? 'Ativado' : 'Desativado'}}</td>\n                                    <td>{{res.name}}</td>\n                                    <td>{{res.phone}}</td>\n                                    <td>{{res.city}}</td>\n                                    <td>{{res.state}}</td>\n                                    <td>{{res.cep}}</td>\n                                    <td>{{res.taxa_fixa}}</td>\n                                    <td>{{res.taxa_porcentage}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        \n            <div class=\"col-lg-12\">\n\n                <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Nome*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"name\"\n                                id=\"name\" placeholder=\"Nome\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('name')\"\n                              msgErro=\"Nome é obrigatório.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>Telefone</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"phone\"\n                                id=\"phone\" placeholder=\"Telefone\" >\n                        </fieldset>\n                    </div>\n\n                    <fieldset class=\"form-group\">\n                            <label>Categorias*</label>\n                            \n                            <ss-multiselect-dropdown [options]=\"categories\" \n                            [settings]=\"mySettings\" \n                            id=\"category_ids\"\n                            formControlName=\"category_ids\" ></ss-multiselect-dropdown>\n                        </fieldset>\n                    \n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('street')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Rua*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"street\"\n                                id=\"l\" placeholder=\"Rua/Avenida\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('street')\"\n                              msgErro=\"Campo é obrigatório.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('number')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Número*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"number\"\n                                id=\"l\" placeholder=\"Número\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('number')\"\n                              msgErro=\"Número é obrigatório.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <fieldset class=\"form-group\">\n                        <label>Complemento</label>\n                        <input type=\"text\" class=\"form-control\"\n                            formControlName=\"complement\"\n                            id=\"l\" placeholder=\"Complemento\" >\n                    </fieldset>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('neighborhood')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Bairro*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"neighborhood\"\n                                id=\"l\" placeholder=\"Bairro\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('latitude')\"\n                              msgErro=\"Latitude é obrigatória.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('city')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Cidade*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"city\"\n                                id=\"l\" placeholder=\"Cidade\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('city')\"\n                              msgErro=\"Cidade é obrigatória.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('state')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Estado*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"state\"\n                                id=\"l\" placeholder=\"Estado\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('state')\"\n                              msgErro=\"Estado é obrigatório.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('cep')\" >\n                        <fieldset class=\"form-group\">\n                            <label>CEP*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"cep\"\n                                id=\"l\" placeholder=\"CEP\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('cep')\"\n                              msgErro=\"CEP é obrigatório.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('latitude')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Latitude*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"latitude\"\n                                id=\"l\" placeholder=\"Latitude\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('latitude')\"\n                              msgErro=\"Latitude é obrigatória.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" [ngClass]=\"aplicaCssErro('longitude')\" >\n                        <fieldset class=\"form-group\">\n                            <label>Longitude*</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"longitude\"\n                                id=\"longitude\" placeholder=\"longitude\" >\n\n                            <app-campo-control-erro\n                              [mostrarErro]=\"verificaValidTouched('longitude')\"\n                              msgErro=\"Longitude é obrigatória.\">\n                            </app-campo-control-erro>\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>Taxa Fixa</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"taxa_fixa\"\n                                id=\"taxa_fixa\" placeholder=\"Taxa Fixa\" >\n                        </fieldset>\n                    </div>\n\n                    <div class=\"form-group\" >\n                        <fieldset class=\"form-group\">\n                            <label>Taxa Porcentagem</label>\n                            <input type=\"text\" class=\"form-control\"\n                                formControlName=\"taxa_porcentage\"\n                                id=\"taxa_porcentage\" placeholder=\"Porcentagem da taxa\" >\n                        </fieldset>\n                    </div>\n\n                    <button [hidden]=\"!formulario.get('id').value\" type=\"submit\" class=\"btn btn-info\" (click)=\"newUser(content)\" >Adicionar usuário</button>\n\n                    <fieldset class=\"form-group text-center\">\n                        <label>Ativar*</label>\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                            </label> &nbsp;&nbsp;&nbsp;\n                            <label>\n                                <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios2\" value=\"0\"> Não\n                            </label>\n                        </div>\n                    </fieldset>\n\n                    <div class=\"text-center margin-col\">\n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n                        <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >Salvar</button>\n                    </div> \n                    \n                </form>\n\n            </div>\n    </div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Adicionar Usuário</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n        <form class=\"form-horizontal\" [formGroup]=\"formularioUser\">\n            <div class=\"form-group\" >\n                <fieldset class=\"form-group\">\n                    <label>Nome</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"name\"\n                        id=\"name\" placeholder=\"Nome\" >\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"email\"\n                        (blur)=\"focusOutFunction('email')\"\n                        id=\"email\" placeholder=\"Email\" >\n\n                        <app-campo-control-erro\n                          [mostrarErro]=\"showMessageError\"\n                          msgErro=\"{{msgErro}}\">\n                        </app-campo-control-erro>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Senha</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"password\"\n                        id=\"password\" placeholder=\"Senha\" >\n                </fieldset>\n            </div>\n        </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"c('no')\">Cancelar</button>\n    <button type=\"button\" [disabled]=\"showMessageError\" class=\"btn btn-primary\" (click)=\"c('yes')\">Salvar</button>\n  </div>\n</ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/restaurant/restaurant.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 100% !important; }\n\n.margin-col {\n  margin-bottom: 10px; }\n\n.table-activated {\n  background: #7ec1de; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/restaurant/restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RestaurantComponent = (function () {
    function RestaurantComponent(restaurantService, categoryService, userService, toastr, formBuilder, modalService) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.msgErro = 'Email é obrigatório';
        this.showMessageError = true;
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            dynamicTitleMaxItems: 20,
            showCheckAll: true,
            showUncheckAll: true,
            fixedTitle: false,
            containerClasses: 'full-width',
            buttonClasses: 'btn btn-block btn-secondary'
        };
        this.categories = this.categoryService.getAll();
        this.bkpCategories = [];
        if (!this.categories.length) {
            this.categoryService.getCategory()
                .subscribe(function (result) {
                _this.categories = result.data;
            });
        }
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].minLength(3)]],
            phone: [],
            street: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            number: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            complement: [null],
            neighborhood: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            city: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            state: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            cep: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            latitude: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            longitude: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            category_ids: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            activated: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            taxa_porcentage: [],
            taxa_fixa: []
        });
        this.formularioUser = this.formBuilder.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].minLength(3)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            restaurants_id: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
        });
        this.restaurants = this.restaurantService.getAll();
        if (!this.restaurants.length) {
            this.findAllRestaurants();
        }
    };
    RestaurantComponent.prototype.findAllRestaurants = function () {
        var _this = this;
        this.restaurantService.populate().subscribe(function (result) {
            _this.restaurants = result.data;
        });
    };
    RestaurantComponent.prototype.register = function () {
        var _this = this;
        // Separ as categorias que devem ser inseridas e/ou removidas
        var addCategories = this.formulario.controls['category_ids'].value;
        var rmCategories = [];
        for (var i = 0; i < this.bkpCategories.length; i++) {
            // Se não encontrar é pq categoria foi removida
            if (addCategories.indexOf(this.bkpCategories[i]) === -1) {
                rmCategories.push(this.bkpCategories[i]);
            }
            else {
                console.log(this.bkpCategories[i]);
                console.log(addCategories.indexOf(this.bkpCategories[i]));
                addCategories.splice(addCategories.indexOf(this.bkpCategories[i]), 1);
            }
        }
        var restaurant = this.formulario.value;
        restaurant.addCategories = addCategories;
        restaurant.rmCategories = rmCategories;
        if (this.formulario.valid) {
            if (this.formulario.value.id) {
                this.restaurantService.edit(restaurant).subscribe(function (result) {
                    if (result.status) {
                        _this.toastr.success(result.message, '');
                        _this.findAllRestaurants();
                        _this.formulario.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
            else {
                this.restaurantService.register(restaurant).subscribe(function (result) {
                    if (result.status) {
                        _this.toastr.success(result.message, '');
                        _this.findAllRestaurants();
                        _this.formulario.reset();
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    RestaurantComponent.prototype.populate = function (restaurant) {
        //Populas as categorias no formato de array [1,2,3, ...]
        this.bkpCategories = [];
        var categories = [];
        for (var i = 0; i < restaurant.Categories.length; i++) {
            this.bkpCategories.push(restaurant.Categories[i].id);
            categories.push(restaurant.Categories[i].id);
        }
        console.log(this.bkpCategories);
        this.formulario.setValue({
            id: restaurant.id,
            name: restaurant.name,
            phone: restaurant.phone,
            street: restaurant.street,
            number: restaurant.number,
            complement: restaurant.complement,
            neighborhood: restaurant.neighborhood,
            city: restaurant.city,
            state: restaurant.state,
            cep: restaurant.cep,
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
            category_ids: categories,
            activated: restaurant.activated == 1 ? "1" : "0",
            taxa_porcentage: restaurant.taxa_porcentage,
            taxa_fixa: restaurant.taxa_fixa
        });
        this.formularioUser.setValue({
            name: null,
            email: null,
            password: null,
            restaurants_id: restaurant.id
        });
    };
    RestaurantComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    RestaurantComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    RestaurantComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    RestaurantComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            if (controle instanceof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormGroup */]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    RestaurantComponent.prototype.newUser = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.saveUser();
            }
        }, function (reason) {
        });
    };
    RestaurantComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RestaurantComponent.prototype.focusOutFunction = function (campo, value) {
        var _this = this;
        var bool = (!this.formularioUser.get(campo).valid &&
            (this.formularioUser.get(campo).touched || this.formularioUser.get(campo).dirty));
        if (!bool) {
            this.userService.existEmail(this.formularioUser.get(campo).value)
                .subscribe(function (result) {
                if (result.status) {
                    _this.msgErro = 'Email já esta sendo utilizado';
                    _this.showMessageError = true;
                }
                else {
                    _this.showMessageError = false;
                }
            });
        }
        else {
            if (this.msgErro !== 'Email é obrigatório') {
                this.msgErro = 'Email é obrigatório';
            }
            this.showMessageError = true;
        }
    };
    RestaurantComponent.prototype.saveUser = function () {
        var _this = this;
        this.userService.registerUserRestaurant(this.formularioUser.value)
            .subscribe(function (result) {
            if (result.status) {
                _this.toastr.success(result.message, '');
                _this.formularioUser.reset();
            }
            else {
                _this.toastr.warning('', result.message);
            }
        });
    };
    return RestaurantComponent;
}());
RestaurantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-restaurant',
        template: __webpack_require__("../../../../../src/app/layout/restaurant/restaurant.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/restaurant/restaurant.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _f || Object])
], RestaurantComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=restaurant.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/restaurant/restaurant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurant_component__ = __webpack_require__("../../../../../src/app/layout/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant_routing_module__ = __webpack_require__("../../../../../src/app/layout/restaurant/restaurant-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_by_pipe_component__ = __webpack_require__("../../../../../src/app/layout/restaurant/order-by-pipe.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantModule", function() { return RestaurantModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RestaurantModule = (function () {
    function RestaurantModule() {
    }
    return RestaurantModule;
}());
RestaurantModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__restaurant_routing_module__["a" /* RestaurantRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__restaurant_component__["a" /* RestaurantComponent */], __WEBPACK_IMPORTED_MODULE_10__order_by_pipe_component__["a" /* OrderByPipe */]]
    })
], RestaurantModule);

//# sourceMappingURL=restaurant.module.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdown; });






/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */
var MULTISELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* forwardRef */])(function () { return MultiselectDropdown; }),
    multi: true
};
var MultiselectDropdown = (function () {
    function MultiselectDropdown(element, fb, searchFilter, differs) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.selectionLimitReached = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.dropdownClosed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.dropdownOpened = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.onAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* EventEmitter */]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.filteredOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default btn-secondary',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            minSelectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
            isLazyLoad: false,
            stopScrollPropagation: false,
            loadViewDistance: 1
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this._isVisible = false;
        this._workerDocClicked = false;
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
        this.settings = this.defaultSettings;
        this.texts = this.defaultTexts;
    }
    MultiselectDropdown.prototype.onClick = function (target) {
        if (!this.isVisible || !this.settings.closeOnClickOutside)
            return;
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this.dropdownClosed.emit();
        }
    };
    Object.defineProperty(MultiselectDropdown.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        set: function (val) {
            this._isVisible = val;
            this._workerDocClicked = val ? false : this._workerDocClicked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdown.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdown.prototype.getItemStyle = function (option) {
        if (!option.isLabel) {
            return { 'cursor': 'pointer' };
        }
    };
    MultiselectDropdown.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { 'cursor': 'default' };
        }
    };
    MultiselectDropdown.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges
            .takeUntil(this.destroyed$)
            .subscribe(function () {
            this.updateRenderItems();
            if (this.settings.isLazyLoad) {
                this.load();
            }
        }.bind(this));
    };
    MultiselectDropdown.prototype.ngOnChanges = function (changes) {
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.texts) {
                this.updateTitle();
            }
        }
        if (changes['texts'] && !changes['texts'].isFirstChange()) {
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdown.prototype.updateRenderItems = function () {
        this.renderItems = !this.searchLimitApplied || this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.searchFilter.transform(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
    };
    MultiselectDropdown.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdown.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.validate = function (_c) {
        return (this.model && this.model.length) ? null : {
            required: {
                valid: false,
            },
        };
    };
    MultiselectDropdown.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdown.prototype.clearSearch = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        this.filterControl.setValue('');
    };
    MultiselectDropdown.prototype.toggleDropdown = function () {
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    };
    MultiselectDropdown.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdown.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (!this.disabledSelection) {
            if (_event.stopPropagation) {
                _event.stopPropagation();
            }
            var index = this.model.indexOf(option.id);
            if (index > -1) {
                if ((this.settings.minSelectionLimit === undefined) || (this.numSelected > this.settings.minSelectionLimit)) {
                    this.model.splice(index, 1);
                    this.onRemoved.emit(option.id);
                }
                var parentIndex = option.parentId && this.model.indexOf(option.parentId);
                if (parentIndex >= 0) {
                    this.model.splice(parentIndex, 1);
                    this.onRemoved.emit(option.parentId);
                }
                else if (this.parents.indexOf(option.id) > -1) {
                    var childIds_1 = this.options.filter(function (child) { return _this.model.indexOf(child.id) > -1 && child.parentId == option.id; }).map(function (child) { return child.id; });
                    this.model = this.model.filter(function (id) { return childIds_1.indexOf(id) < 0; });
                    childIds_1.forEach(function (childId) { return _this.onRemoved.emit(childId); });
                }
            }
            else {
                if (this.settings.selectionLimit === 0 || (this.settings.selectionLimit && this.model.length < this.settings.selectionLimit)) {
                    this.model.push(option.id);
                    this.onAdded.emit(option.id);
                    if (option.parentId) {
                        var children = this.options.filter(function (child) { return child.id !== option.id && child.parentId == option.parentId; });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            this.model.push(option.parentId);
                            this.onAdded.emit(option.parentId);
                        }
                    }
                    else if (this.parents.indexOf(option.id) > -1) {
                        var children = this.options.filter(function (child) { return _this.model.indexOf(child.id) < 0 && child.parentId == option.id; });
                        children.forEach(function (child) {
                            _this.model.push(child.id);
                            _this.onAdded.emit(child.id);
                        });
                    }
                }
                else {
                    if (this.settings.autoUnselect) {
                        this.model.push(option.id);
                        this.onAdded.emit(option.id);
                        var removedOption = this.model.shift();
                        this.onRemoved.emit(removedOption);
                    }
                    else {
                        this.selectionLimitReached.emit(this.model.length);
                        return;
                    }
                }
            }
            if (this.settings.closeOnSelect) {
                this.toggleDropdown();
            }
            this.model = this.model.slice();
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdown.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected = this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdown.prototype.updateTitle = function () {
        var _this = this;
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = (this.texts) ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText && this.model.length === this.options.length) {
            this.title = (this.texts) ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
            this.title = this.options
                .filter(function (option) {
                return _this.model.indexOf(option.id) > -1;
            })
                .map(function (option) { return option.name; })
                .join(', ');
        }
        else {
            this.title = this.numSelected
                + ' '
                + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    };
    MultiselectDropdown.prototype.searchFilterApplied = function () {
        return this.settings.enableSearch && this.filterControl.value && this.filterControl.value.length > 0;
    };
    MultiselectDropdown.prototype.checkAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = (!this.searchFilterApplied() ? this.options : this.filteredOptions)
                .filter(function (option) {
                if (_this.model.indexOf(option.id) === -1) {
                    _this.onAdded.emit(option.id);
                    return true;
                }
                return false;
            }).map(function (option) { return option.id; });
            this.model = this.model.concat(checkedOptions);
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdown.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var unCheckedOptions_1 = (!this.searchFilterApplied() ? this.model
                : this.filteredOptions.map(function (option) { return option.id; }));
            this.model = this.model.filter(function (id) {
                if (((unCheckedOptions_1.indexOf(id) < 0) && (_this.settings.minSelectionLimit === undefined)) || ((unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit))) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdown.prototype.preventCheckboxCheck = function (event, option) {
        if (this.settings.selectionLimit && !this.settings.autoUnselect &&
            this.model.length >= this.settings.selectionLimit &&
            this.model.indexOf(option.id) === -1 &&
            event.preventDefault) {
            event.preventDefault();
        }
    };
    MultiselectDropdown.prototype.isCheckboxDisabled = function () {
        return this.disabledSelection;
    };
    MultiselectDropdown.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >= scrollHeight - (1 + this.settings.loadViewDistance) * scrollElementHeight - roundingPixel - gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdown.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) || (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            ev.preventDefault && ev.preventDefault();
            ev.returnValue = false;
        }
    };
    MultiselectDropdown.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value
        });
    };
    return MultiselectDropdown;
}());

MultiselectDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */], args: [{
                selector: 'ss-multiselect-dropdown',
                template: '<div class="dropdown" [ngClass]="settings.containerClasses" [class.open]="isVisible"><button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()" [disabled]="disabled">{{ title }}<span class="caret"></span></button><ul #scroller *ngIf="isVisible" class="dropdown-menu" (scroll)="settings.isLazyLoad ? checkScrollPosition($event) : null" (wheel)="settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null" [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto"><li class="dropdown-item search" *ngIf="settings.enableSearch"><div class="input-group input-group-sm"><span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span> <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [formControl]="filterControl" autofocus> <span class="input-group-btn" *ngIf="filterControl.value.length > 0"><button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)"><i class="fa fa-times"></i></button></span></div></li><li class="dropdown-divider divider" *ngIf="settings.enableSearch"></li><li class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll && !disabledSelection"><a href="javascript:;" role="menuitem" tabindex="-1" (click)="checkAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-ok\': settings.checkedStyle !== \'fontawesome\',\'fa fa-check\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.checkAll }}</a></li><li class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll && !disabledSelection"><a href="javascript:;" role="menuitem" tabindex="-1" (click)="uncheckAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-remove\': settings.checkedStyle !== \'fontawesome\',\'fa fa-times\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.uncheckAll }}</a></li><li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="dropdown-divider divider"></li><li *ngIf="!renderItems" class="dropdown-item empty">{{ texts.searchNoRenderText }}</li><li *ngIf="renderItems && !renderFilteredOptions.length" class="dropdown-item empty">{{ texts.searchEmptyResult }}</li><li class="dropdown-item" *ngFor="let option of renderFilteredOptions" (click)="setSelected($event, option)" [ngStyle]="getItemStyle(option)" [ngClass]="option.classes" [class.dropdown-header]="option.isLabel"><a *ngIf="!option.isLabel; else label" href="javascript:;" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&\'30px\'" [ngStyle]="getItemStyleSelectionDisabled()"><ng-container [ngSwitch]="settings.checkedStyle"><input *ngSwitchCase="\'checkboxes\'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)" [disabled]="isCheckboxDisabled()" [ngStyle]="getItemStyleSelectionDisabled()" > <span *ngSwitchCase="\'glyphicon\'" style="width: 16px" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span> <span *ngSwitchCase="\'fontawesome\'" style="width: 16px;display: inline-block"><i *ngIf="isSelected(option)" class="fa fa-check" aria-hidden="true"></i></span></ng-container><span [ngClass]="settings.itemClasses" [style.font-weight]="this.parents.indexOf(option.id)>=0?\'bold\':\'normal\'">{{ option.name }}</span></a><ng-template #label>{{ option.name }}</ng-template></li></ul></div>',
                styles: ['a {  outline: none !important;}.dropdown-inline {  display: inline-block;}.dropdown-toggle .caret {  margin-left: 4px;  white-space: nowrap;  display: inline-block;}'],
                providers: [MULTISELECT_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__["a" /* MultiSelectSearchFilter */]]
            },] },
];
/** @nocollapse */
MultiselectDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__search_filter_pipe__["a" /* MultiSelectSearchFilter */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* IterableDiffers */], },
]; };
MultiselectDropdown.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */] },],
    'texts': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */] },],
    'disabledSelection': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */] },],
    'selectionLimitReached': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'dropdownClosed': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'dropdownOpened': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'onAdded': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'onRemoved': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'onLazyLoad': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'onFilter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* HostListener */], args: ['document: click', ['$event.target'],] },],
};
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_component__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdownModule; });





var MultiselectDropdownModule = (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());

MultiselectDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */]],
                exports: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
            },] },
];
/** @nocollapse */
MultiselectDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectSearchFilter; });

var MultiSelectSearchFilter = (function () {
    function MultiSelectSearchFilter() {
        this._searchCache = {};
        this._searchCacheInclusive = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = (str || '').toLowerCase();
        // Drop cache because options were updated
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
        }
        var isUnderLimit = options.length <= limit;
        if (this._searchCache[str]) {
            return isUnderLimit ? this._searchCache[str] : this._limitRenderedItems(this._searchCache[str], renderLimit);
        }
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        if (prevResults) {
            var prevInclusiveOrIdx = this._searchCacheInclusive[prevStr];
            if (prevInclusiveOrIdx === true) {
                // If have previous results and it was inclusive, do only subsearch
                options = prevResults;
            }
            else if (typeof prevInclusiveOrIdx === 'number') {
                // Or reuse prev results with unchecked ones
                options = prevResults.concat(options.slice(prevInclusiveOrIdx));
            }
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var filteredOpts = [];
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var matchPredicate = function (option) { return regexp.test(option.name); }, getChildren = function (option) { return options.filter(function (child) { return child.parentId === option.id; }); }, getParent = function (option) { return options.find(function (parent) { return option.parentId === parent.id; }); };
        var i = 0, founded = 0;
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = regexp.test(option.name);
            if (directMatch) {
                filteredOpts.push(option);
                founded++;
                continue;
            }
            if (typeof (option.parentId) === 'undefined') {
                var childrenMatch = getChildren(option).some(matchPredicate);
                if (childrenMatch) {
                    filteredOpts.push(option);
                    founded++;
                    continue;
                }
            }
            if (typeof (option.parentId) !== 'undefined') {
                var parentMatch = matchPredicate(getParent(option));
                if (parentMatch) {
                    filteredOpts.push(option);
                    founded++;
                    continue;
                }
            }
        }
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || i + 1;
        return isUnderLimit ? filteredOpts : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._limitRenderedItems = function (items, limit) {
        return items.length > limit && limit > 0 ? items.slice(0, limit) : items;
    };
    MultiSelectSearchFilter.prototype._escapeRegExp = function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    return MultiSelectSearchFilter;
}());

MultiSelectSearchFilter.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                name: 'searchFilter'
            },] },
];
/** @nocollapse */
MultiSelectSearchFilter.ctorParameters = function () { return []; };
//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map