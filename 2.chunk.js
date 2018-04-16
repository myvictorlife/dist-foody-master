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

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Novo Restaurante'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <button style=\"margin-bottom: 10px\" class=\"btn btn-primary\" (click)=\"newRestaurant(details)\" >Novo</button>\n\n    <div class=\"row\">\n        \n            <div class=\"col col-xl-12 col-lg-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header\">\n                        Lista das Empresas\n                    </div>\n                    <div class=\"card-block table-responsive\">\n                        <table class=\"table table-hover table-bordered\">\n                            <thead>\n                            <tr>\n                                <th>Status</th>\n                                <th>Estabelecimento</th>\n                                <th>Telefone</th>\n                                <th>Cidade</th>\n                                <th>Estado</th>\n                                <th>CEP</th>\n                                <th>Taxa Fixa</th>\n                                <th>Porcentagem</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let res of restaurants | orderByPipe\" (click)=\"populate(res, details)\" [ngClass]=\"{'table-activated': res.activated == 1}\" >\n                                    <td>{{res.activated == 1 ? 'Ativado' : 'Desativado'}}</td>\n                                    <td>{{res.name}}</td>\n                                    <td>{{res.phone}}</td>\n                                    <td>{{res.city}}</td>\n                                    <td>{{res.state}}</td>\n                                    <td>{{res.cep}}</td>\n                                    <td>{{res.taxa_fixa}}</td>\n                                    <td>{{res.taxa_porcentage}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n    </div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Adicionar Usuário</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n        <form class=\"form-horizontal\" [formGroup]=\"formularioUser\">\n            <div class=\"form-group\" >\n                <fieldset class=\"form-group\">\n                    <label>Nome</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"name\"\n                        id=\"name\" placeholder=\"Nome\" >\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"email\"\n                        (blur)=\"focusOutFunction('email')\"\n                        id=\"email\" placeholder=\"Email\" >\n\n                        <app-campo-control-erro\n                          [mostrarErro]=\"showMessageError\"\n                          msgErro=\"{{msgErro}}\">\n                        </app-campo-control-erro>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Senha</label>\n                    <input type=\"text\" class=\"form-control\"\n                        formControlName=\"password\"\n                        id=\"password\" placeholder=\"Senha\" >\n                </fieldset>\n            </div>\n        </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"c('no')\">Cancelar</button>\n    <button type=\"button\" [disabled]=\"showMessageError\" class=\"btn btn-primary\" (click)=\"c('yes')\">Salvar</button>\n  </div>\n</ng-template>\n</div>\n\n<ng-template #details let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Detalhes do Restaurante</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n     <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n            <fieldset class=\"form-group\">\n                <label>Nome*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"name\"\n                    id=\"name\" placeholder=\"Nome\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('name')\"\n                  msgErro=\"Nome é obrigatório.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>Telefone</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"phone\"\n                    id=\"phone\" placeholder=\"Telefone\" >\n            </fieldset>\n        </div>\n\n        <fieldset class=\"form-group\">\n                <label>Categorias*</label>\n                \n                <ss-multiselect-dropdown [options]=\"categories\" \n                [settings]=\"mySettings\" \n                id=\"category_ids\"\n                formControlName=\"category_ids\" ></ss-multiselect-dropdown>\n            </fieldset>\n        \n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('street')\" >\n            <fieldset class=\"form-group\">\n                <label>Rua*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"street\"\n                    id=\"l\" placeholder=\"Rua/Avenida\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('street')\"\n                  msgErro=\"Campo é obrigatório.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('number')\" >\n            <fieldset class=\"form-group\">\n                <label>Número*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"number\"\n                    id=\"l\" placeholder=\"Número\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('number')\"\n                  msgErro=\"Número é obrigatório.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <fieldset class=\"form-group\">\n            <label>Complemento</label>\n            <input type=\"text\" class=\"form-control\"\n                formControlName=\"complement\"\n                id=\"l\" placeholder=\"Complemento\" >\n        </fieldset>\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('neighborhood')\" >\n            <fieldset class=\"form-group\">\n                <label>Bairro*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"neighborhood\"\n                    id=\"l\" placeholder=\"Bairro\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('latitude')\"\n                  msgErro=\"Latitude é obrigatória.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('city')\" >\n            <fieldset class=\"form-group\">\n                <label>Cidade*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"city\"\n                    id=\"l\" placeholder=\"Cidade\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('city')\"\n                  msgErro=\"Cidade é obrigatória.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('state')\" >\n            <fieldset class=\"form-group\">\n                <label>Estado*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"state\"\n                    id=\"l\" placeholder=\"Estado\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('state')\"\n                  msgErro=\"Estado é obrigatório.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div> \n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('cep')\" >\n            <fieldset class=\"form-group\">\n                <label>CEP*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"cep\"\n                    id=\"l\" placeholder=\"CEP\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('cep')\"\n                  msgErro=\"CEP é obrigatório.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('latitude')\" >\n            <fieldset class=\"form-group\">\n                <label>Latitude*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"latitude\"\n                    id=\"l\" placeholder=\"Latitude\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('latitude')\"\n                  msgErro=\"Latitude é obrigatória.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro('longitude')\" >\n            <fieldset class=\"form-group\">\n                <label>Longitude*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"longitude\"\n                    id=\"longitude\" placeholder=\"longitude\" >\n\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('longitude')\"\n                  msgErro=\"Longitude é obrigatória.\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'monday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"monday\"\n                    id=\"monday\" placeholder=\"{{ 'example.time' | translate }}\" >\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'tuesday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"tuesday\"\n                    id=\"tuesday\" placeholder=\"{{ 'example.time' | translate }}\" >\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'wednesday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"wednesday\"\n                    id=\"wednesday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('wednesday')\"\n                  msgErro=\"{{ 'time.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'thursday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"thursday\"\n                    id=\"thursday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('thursday')\"\n                  msgErro=\"{{ 'time.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'friday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"friday\"\n                    id=\"friday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('friday')\"\n                  msgErro=\"{{ 'time.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'saturday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"saturday\"\n                    id=\"saturday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('saturday')\"\n                  msgErro=\"{{ 'time.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>{{ 'sunday' | translate }}*</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"sunday\"\n                    id=\"sunday\" placeholder=\"{{ 'example.time' | translate }}\" >\n                <app-campo-control-erro\n                  [mostrarErro]=\"verificaValidTouched('sunday')\"\n                  msgErro=\"{{ 'time.required' | translate }}\">\n                </app-campo-control-erro>\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>Taxa Fixa</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"taxa_fixa\"\n                    id=\"taxa_fixa\" placeholder=\"Taxa Fixa\" >\n            </fieldset>\n        </div>\n\n        <div class=\"form-group\" >\n            <fieldset class=\"form-group\">\n                <label>Taxa Porcentagem</label>\n                <input type=\"text\" class=\"form-control\"\n                    formControlName=\"taxa_porcentage\"\n                    id=\"taxa_porcentage\" placeholder=\"Porcentagem da taxa\" >\n            </fieldset>\n        </div>\n\n        <button [hidden]=\"!formulario.get('id').value\" type=\"submit\" class=\"btn btn-info\" (click)=\"newUser(content)\" >Adicionar usuário</button>\n\n        <fieldset class=\"form-group text-center\">\n            <label>Ativar*</label>\n            <div class=\"radio\">\n                <label>\n                    <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios1\" value=\"1\" checked=\"\"> Sim\n                </label> &nbsp;&nbsp;&nbsp;\n                <label>\n                    <input type=\"radio\" formControlName=\"activated\" id=\"optionsRadios2\" value=\"0\"> Não\n                </label>\n            </div>\n        </fieldset>\n        \n    </form>   \n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n    <button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >Salvar</button>\n  </div>\n</ng-template>"

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
            monday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            tuesday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            wednesday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            thursday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            friday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            saturday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
            sunday: [null, [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* Validators */].required]],
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
    RestaurantComponent.prototype.populate = function (restaurant, content) {
        var _this = this;
        //Populas as categorias no formato de array [1,2,3, ...]
        this.bkpCategories = [];
        var categories = [];
        for (var i = 0; i < restaurant.Categories.length; i++) {
            this.bkpCategories.push(restaurant.Categories[i].id);
            categories.push(restaurant.Categories[i].id);
        }
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
            monday: restaurant.monday,
            tuesday: restaurant.tuesday,
            wednesday: restaurant.wednesday,
            thursday: restaurant.thursday,
            friday: restaurant.friday,
            saturday: restaurant.saturday,
            sunday: restaurant.sunday,
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
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.saveUser();
            }
        }, function (reason) {
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
    RestaurantComponent.prototype.newRestaurant = function (content) {
        var _this = this;
        this.reset();
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.saveUser();
            }
        }, function (reason) {
        });
    };
    RestaurantComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* ModalDismissReasons */].BACKDROP_CLICK) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
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
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__restaurant_component__["a" /* RestaurantComponent */], __WEBPACK_IMPORTED_MODULE_10__order_by_pipe_component__["a" /* OrderByPipe */]]
    })
], RestaurantModule);

//# sourceMappingURL=restaurant.module.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/autofocus.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });

var AutofocusDirective = (function () {
    function AutofocusDirective(elemRef) {
        this.elemRef = elemRef;
    }
    Object.defineProperty(AutofocusDirective.prototype, "element", {
        get: function () {
            return this.elemRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    AutofocusDirective.prototype.ngOnInit = function () {
        this.focus();
    };
    AutofocusDirective.prototype.ngOnChanges = function (changes) {
        var ssAutofocusChange = changes.ssAutofocus;
        if (ssAutofocusChange && !ssAutofocusChange.isFirstChange()) {
            this.focus();
        }
    };
    AutofocusDirective.prototype.focus = function () {
        if (this.ssAutofocus) {
            return;
        }
        this.element.focus && this.element.focus();
    };
    return AutofocusDirective;
}());

AutofocusDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */], args: [{
                selector: '[ssAutofocus]'
            },] },
];
/** @nocollapse */
AutofocusDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Host */] },] },
]; };
AutofocusDirective.propDecorators = {
    'ssAutofocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */] },],
};
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdownComponent; });






/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */
var MULTISELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* forwardRef */])(function () { return MultiselectDropdownComponent; }),
    multi: true,
};
var MultiselectDropdownComponent = (function () {
    function MultiselectDropdownComponent(element, fb, searchFilter, differs, cdRef) {
        this.element = element;
        this.fb = fb;
        this.searchFilter = searchFilter;
        this.cdRef = cdRef;
        this.filterControl = this.fb.control('');
        this.disabled = false;
        this.disabledSelection = false;
        this.selectionLimitReached = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.dropdownClosed = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.dropdownOpened = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.onAdded = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* EventEmitter */]();
        this.onFilter = this.filterControl.valueChanges;
        this.destroyed$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.filteredOptions = [];
        this.lazyLoadOptions = [];
        this.renderFilteredOptions = [];
        this.model = [];
        this.prevModel = [];
        this.numSelected = 0;
        this.renderItems = true;
        this.checkAllSearchRegister = new Set();
        this.checkAllStatus = false;
        this.loadedValueIds = [];
        this._focusBack = false;
        this.defaultSettings = {
            closeOnClickOutside: true,
            pullRight: false,
            enableSearch: false,
            searchRenderLimit: 0,
            searchRenderAfter: 1,
            searchMaxLimit: 0,
            searchMaxRenderedItems: 0,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-primary dropdown-toggle',
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
            loadViewDistance: 1,
            selectAddedValues: false,
            ignoreLabels: false,
            maintainSelectionOrderInTitle: false,
            focusBack: true
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
    Object.defineProperty(MultiselectDropdownComponent.prototype, "focusBack", {
        get: function () {
            return this.settings.focusBack && this._focusBack;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.onClick = function (target) {
        if (!this.isVisible || !this.settings.closeOnClickOutside) {
            return;
        }
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this._focusBack = true;
            this.dropdownClosed.emit();
        }
    };
    Object.defineProperty(MultiselectDropdownComponent.prototype, "isVisible", {
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
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimit", {
        get: function () {
            return this.settings.searchRenderLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchRenderAfter", {
        get: function () {
            return this.settings.searchRenderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiselectDropdownComponent.prototype, "searchLimitApplied", {
        get: function () {
            return this.searchLimit > 0 && this.options.length > this.searchLimit;
        },
        enumerable: true,
        configurable: true
    });
    MultiselectDropdownComponent.prototype.getItemStyle = function (option) {
        var style = {};
        if (!option.isLabel) {
            style['cursor'] = 'pointer';
        }
        if (option.disabled) {
            style['cursor'] = 'default';
        }
    };
    MultiselectDropdownComponent.prototype.getItemStyleSelectionDisabled = function () {
        if (this.disabledSelection) {
            return { cursor: 'default' };
        }
    };
    MultiselectDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.texts.defaultTitle || '';
        this.filterControl.valueChanges.takeUntil(this.destroyed$).subscribe(function () {
            _this.updateRenderItems();
            if (_this.settings.isLazyLoad) {
                _this.load();
            }
        });
    };
    MultiselectDropdownComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
            this.updateRenderItems();
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                this.loadedValueIds.length === 0) {
                this.loadedValueIds = this.loadedValueIds.concat(changes.options.currentValue.map(function (value) { return value.id; }));
            }
            if (this.settings.isLazyLoad &&
                this.settings.selectAddedValues &&
                changes.options.previousValue) {
                var addedValues_1 = changes.options.currentValue.filter(function (value) { return _this.loadedValueIds.indexOf(value.id) === -1; });
                this.loadedValueIds.concat(addedValues_1.map(function (value) { return value.id; }));
                if (this.checkAllStatus) {
                    this.addChecks(addedValues_1);
                }
                else if (this.checkAllSearchRegister.size > 0) {
                    this.checkAllSearchRegister.forEach(function (searchValue) {
                        return _this.addChecks(_this.applyFilters(addedValues_1, searchValue));
                    });
                }
            }
            if (this.texts) {
                this.updateTitle();
            }
            this.fireModelChange();
        }
        if (changes['settings']) {
            this.settings = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, this.defaultSettings, this.settings);
        }
        if (changes['texts']) {
            this.texts = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, this.defaultTexts, this.texts);
            if (!changes['texts'].isFirstChange()) {
                this.updateTitle();
            }
        }
    };
    MultiselectDropdownComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    MultiselectDropdownComponent.prototype.updateRenderItems = function () {
        this.renderItems =
            !this.searchLimitApplied ||
                this.filterControl.value.length >= this.searchRenderAfter;
        this.filteredOptions = this.applyFilters(this.options, this.settings.isLazyLoad ? '' : this.filterControl.value);
        this.renderFilteredOptions = this.renderItems ? this.filteredOptions : [];
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.applyFilters = function (options, value) {
        return this.searchFilter.transform(options, value, this.settings.searchMaxLimit, this.settings.searchMaxRenderedItems);
    };
    MultiselectDropdownComponent.prototype.fireModelChange = function () {
        if (this.model != this.prevModel) {
            this.prevModel = this.model;
            this.onModelChange(this.model);
            this.onModelTouched();
        }
    };
    MultiselectDropdownComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = Array.isArray(value) ? value : [value];
            this.ngDoCheck();
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdownComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdownComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdownComponent.prototype.validate = function (_c) {
        var _this = this;
        if (this.model && this.model.length) {
            return {
                required: {
                    valid: false
                }
            };
        }
        if (this.options.filter(function (o) { return _this.model.indexOf(o.id) && !o.disabled; }).length === 0) {
            return {
                selection: {
                    valid: false
                }
            };
        }
        return null;
    };
    MultiselectDropdownComponent.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdownComponent.prototype.clearSearch = function (event) {
        this.maybeStopPropagation(event);
        this.filterControl.setValue('');
    };
    MultiselectDropdownComponent.prototype.toggleDropdown = function (e) {
        this.maybeStopPropagation(e);
        if (this.isVisible) {
            this._focusBack = true;
        }
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
        this.focusedItem = undefined;
    };
    MultiselectDropdownComponent.prototype.closeDropdown = function (e) {
        this.isVisible = true;
        this.toggleDropdown(e);
    };
    MultiselectDropdownComponent.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdownComponent.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (option.isLabel) {
            return;
        }
        if (option.disabled) {
            return;
        }
        if (!this.disabledSelection) {
            this.maybeStopPropagation(_event);
            this.maybePreventDefault(_event);
            var index = this.model.indexOf(option.id);
            var isAtSelectionLimit = this.settings.selectionLimit > 0 &&
                this.model.length >= this.settings.selectionLimit;
            var removeItem_1 = function (idx, id) {
                _this.model.splice(idx, 1);
                _this.onRemoved.emit(id);
                if (_this.settings.isLazyLoad &&
                    _this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                    _this.lazyLoadOptions.splice(_this.lazyLoadOptions.indexOf(_this.lazyLoadOptions.find(function (val) { return val.id === id; })), 1);
                }
            };
            if (index > -1) {
                if (this.settings.minSelectionLimit === undefined ||
                    this.numSelected > this.settings.minSelectionLimit) {
                    removeItem_1(index, option.id);
                }
                var parentIndex = option.parentId && this.model.indexOf(option.parentId);
                if (parentIndex > -1) {
                    removeItem_1(parentIndex, option.parentId);
                }
                else if (this.parents.indexOf(option.id) > -1) {
                    this.options
                        .filter(function (child) {
                        return _this.model.indexOf(child.id) > -1 &&
                            child.parentId === option.id;
                    })
                        .forEach(function (child) {
                        return removeItem_1(_this.model.indexOf(child.id), child.id);
                    });
                }
            }
            else if (isAtSelectionLimit && !this.settings.autoUnselect) {
                this.selectionLimitReached.emit(this.model.length);
                return;
            }
            else {
                var addItem_1 = function (id) {
                    _this.model.push(id);
                    _this.onAdded.emit(id);
                    if (_this.settings.isLazyLoad &&
                        !_this.lazyLoadOptions.some(function (val) { return val.id === id; })) {
                        _this.lazyLoadOptions.push(option);
                    }
                };
                addItem_1(option.id);
                if (!isAtSelectionLimit) {
                    if (option.parentId && !this.settings.ignoreLabels) {
                        var children = this.options.filter(function (child) {
                            return child.id !== option.id && child.parentId === option.parentId;
                        });
                        if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                            addItem_1(option.parentId);
                        }
                    }
                    else if (this.parents.indexOf(option.id) > -1) {
                        var children = this.options.filter(function (child) {
                            return _this.model.indexOf(child.id) < 0 && child.parentId === option.id;
                        });
                        children.forEach(function (child) { return addItem_1(child.id); });
                    }
                }
                else {
                    removeItem_1(0, this.model[0]);
                }
            }
            if (this.settings.closeOnSelect) {
                this.toggleDropdown();
            }
            this.model = this.model.slice();
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected =
            this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdownComponent.prototype.updateTitle = function () {
        var _this = this;
        var numSelectedOptions = this.options.length;
        if (this.settings.ignoreLabels) {
            numSelectedOptions = this.options.filter(function (option) { return !option.isLabel; }).length;
        }
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = this.texts ? this.texts.defaultTitle : '';
        }
        else if (this.settings.displayAllSelectedText &&
            this.model.length === numSelectedOptions) {
            this.title = this.texts ? this.texts.allSelected : '';
        }
        else if (this.settings.dynamicTitleMaxItems &&
            this.settings.dynamicTitleMaxItems >= this.numSelected) {
            var useOptions_1 = this.settings.isLazyLoad && this.lazyLoadOptions.length
                ? this.lazyLoadOptions
                : this.options;
            var titleSelections = void 0;
            if (this.settings.maintainSelectionOrderInTitle) {
                var optionIds_1 = useOptions_1.map(function (selectOption, idx) { return selectOption.id; });
                titleSelections = this.model
                    .map(function (selectedId) { return optionIds_1.indexOf(selectedId); })
                    .filter(function (optionIndex) { return optionIndex > -1; })
                    .map(function (optionIndex) { return useOptions_1[optionIndex]; });
            }
            else {
                titleSelections = useOptions_1.filter(function (option) { return _this.model.indexOf(option.id) > -1; });
            }
            this.title = titleSelections.map(function (option) { return option.name; }).join(', ');
        }
        else {
            this.title =
                this.numSelected +
                    ' ' +
                    (this.numSelected === 1
                        ? this.texts.checked
                        : this.texts.checkedPlural);
        }
        this.cdRef.markForCheck();
    };
    MultiselectDropdownComponent.prototype.searchFilterApplied = function () {
        return (this.settings.enableSearch &&
            this.filterControl.value &&
            this.filterControl.value.length > 0);
    };
    MultiselectDropdownComponent.prototype.addChecks = function (options) {
        var _this = this;
        var checkedOptions = options
            .filter(function (option) {
            if (!option.disabled &&
                (_this.model.indexOf(option.id) === -1 &&
                    !(_this.settings.ignoreLabels && option.isLabel))) {
                _this.onAdded.emit(option.id);
                return true;
            }
            return false;
        })
            .map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
    };
    MultiselectDropdownComponent.prototype.checkAll = function () {
        if (!this.disabledSelection) {
            this.addChecks(!this.searchFilterApplied() ? this.options : this.filteredOptions);
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied() && !this.checkAllStatus) {
                    this.checkAllSearchRegister.add(this.filterControl.value);
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = true;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.uncheckAll = function () {
        var _this = this;
        if (!this.disabledSelection) {
            var checkedOptions = this.model;
            var unCheckedOptions_1 = !this.searchFilterApplied()
                ? this.model
                : this.filteredOptions.map(function (option) { return option.id; });
            // set unchecked options only to the ones that were checked
            unCheckedOptions_1 = checkedOptions.filter(function (item) { return _this.model.indexOf(item) > -1; });
            this.model = this.model.filter(function (id) {
                if ((unCheckedOptions_1.indexOf(id) < 0 &&
                    _this.settings.minSelectionLimit === undefined) ||
                    unCheckedOptions_1.indexOf(id) < _this.settings.minSelectionLimit) {
                    return true;
                }
                else {
                    _this.onRemoved.emit(id);
                    return false;
                }
            });
            if (this.settings.isLazyLoad && this.settings.selectAddedValues) {
                if (this.searchFilterApplied()) {
                    if (this.checkAllSearchRegister.has(this.filterControl.value)) {
                        this.checkAllSearchRegister.delete(this.filterControl.value);
                        this.checkAllSearchRegister.forEach(function (searchTerm) {
                            var filterOptions = this.applyFilters(this.options.filter(function (option) { return unCheckedOptions_1.indexOf(option.id) > -1; }), searchTerm);
                            this.addChecks(filterOptions);
                        });
                    }
                }
                else {
                    this.checkAllSearchRegister.clear();
                    this.checkAllStatus = false;
                }
                this.load();
            }
            this.fireModelChange();
        }
    };
    MultiselectDropdownComponent.prototype.preventCheckboxCheck = function (event, option) {
        if (option.disabled ||
            (this.settings.selectionLimit &&
                !this.settings.autoUnselect &&
                this.model.length >= this.settings.selectionLimit &&
                this.model.indexOf(option.id) === -1 &&
                this.maybePreventDefault(event))) {
            this.maybePreventDefault(event);
        }
    };
    MultiselectDropdownComponent.prototype.isCheckboxDisabled = function (option) {
        return this.disabledSelection || option.disabled;
    };
    MultiselectDropdownComponent.prototype.checkScrollPosition = function (ev) {
        var scrollTop = ev.target.scrollTop;
        var scrollHeight = ev.target.scrollHeight;
        var scrollElementHeight = ev.target.clientHeight;
        var roundingPixel = 1;
        var gutterPixel = 1;
        if (scrollTop >=
            scrollHeight -
                (1 + this.settings.loadViewDistance) * scrollElementHeight -
                roundingPixel -
                gutterPixel) {
            this.load();
        }
    };
    MultiselectDropdownComponent.prototype.checkScrollPropagation = function (ev, element) {
        var scrollTop = element.scrollTop;
        var scrollHeight = element.scrollHeight;
        var scrollElementHeight = element.clientHeight;
        if ((ev.deltaY > 0 && scrollTop + scrollElementHeight >= scrollHeight) ||
            (ev.deltaY < 0 && scrollTop <= 0)) {
            ev = ev || window.event;
            this.maybePreventDefault(ev);
            ev.returnValue = false;
        }
    };
    MultiselectDropdownComponent.prototype.trackById = function (idx, selectOption) {
        return selectOption.id;
    };
    MultiselectDropdownComponent.prototype.load = function () {
        this.onLazyLoad.emit({
            length: this.options.length,
            filter: this.filterControl.value,
            checkAllSearches: this.checkAllSearchRegister,
            checkAllStatus: this.checkAllStatus,
        });
    };
    MultiselectDropdownComponent.prototype.focusItem = function (dir, e) {
        if (!this.isVisible) {
            return;
        }
        this.maybePreventDefault(e);
        var idx = this.filteredOptions.indexOf(this.focusedItem);
        if (idx === -1) {
            this.focusedItem = this.filteredOptions[0];
            return;
        }
        var nextIdx = idx + dir;
        var newIdx = nextIdx < 0
            ? this.filteredOptions.length - 1
            : nextIdx % this.filteredOptions.length;
        this.focusedItem = this.filteredOptions[newIdx];
    };
    MultiselectDropdownComponent.prototype.maybePreventDefault = function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
    };
    MultiselectDropdownComponent.prototype.maybeStopPropagation = function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
    };
    return MultiselectDropdownComponent;
}());

MultiselectDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Component */], args: [{
                selector: 'ss-multiselect-dropdown',
                template: '<div class="dropdown"><button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown($event)" [disabled]="disabled" [ssAutofocus]="!focusBack">{{ title }} <span class="caret"></span></button><div #scroller *ngIf="isVisible" class="dropdown-menu" [ngClass]="{\'chunkydropdown-menu\': settings.checkedStyle == \'visual\' }" (scroll)="settings.isLazyLoad ? checkScrollPosition($event) : null" (wheel)="settings.stopScrollPropagation ? checkScrollPropagation($event, scroller) : null" [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto" (keydown.tab)="focusItem(1, $event)" (keydown.shift.tab)="focusItem(-1, $event)"><div class="input-group search-container" *ngIf="settings.enableSearch"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span></div><input type="text" class="form-control" ssAutofocus [formControl]="filterControl" [placeholder]="texts.searchPlaceholder" class="form-control"><div class="input-group-append" *ngIf="filterControl.value.length>0"><button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)"><i class="fa fa-times"></i></button></div></div><a role="menuitem" href="javascript:;" tabindex="-1" class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll && !disabledSelection" (click)="checkAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-ok\': settings.checkedStyle !== \'fontawesome\',\'fa fa-check\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.checkAll }} </a><a role="menuitem" href="javascript:;" tabindex="-1" class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll && !disabledSelection" (click)="uncheckAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-remove\': settings.checkedStyle !== \'fontawesome\',\'fa fa-times\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.uncheckAll }} </a><a *ngIf="settings.showCheckAll || settings.showUncheckAll" href="javascript:;" class="dropdown-divider divider"></a> <a *ngIf="!renderItems" href="javascript:;" class="dropdown-item empty">{{ texts.searchNoRenderText }}</a> <a *ngIf="renderItems && !renderFilteredOptions.length" href="javascript:;" class="dropdown-item empty">{{ texts.searchEmptyResult }}</a> <a class="dropdown-item" href="javascript:;" *ngFor="let option of renderFilteredOptions; trackBy: trackById" [class.active]="isSelected(option)" [ngStyle]="getItemStyle(option)" [ngClass]="option.classes" [class.dropdown-header]="option.isLabel" [ssAutofocus]="option !== focusedItem" tabindex="-1" (click)="setSelected($event, option)" (keydown.space)="setSelected($event, option)" (keydown.enter)="setSelected($event, option)"><span *ngIf="!option.isLabel; else label" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&\'30px\'" [ngStyle]="getItemStyleSelectionDisabled()"><ng-container [ngSwitch]="settings.checkedStyle"><input *ngSwitchCase="\'checkboxes\'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)" [disabled]="isCheckboxDisabled(option)" [ngStyle]="getItemStyleSelectionDisabled()" > <span *ngSwitchCase="\'glyphicon\'" style="width: 16px" class="glyphicon" [class.glyphicon-ok]="isSelected(option)" [class.glyphicon-lock]="isCheckboxDisabled(option)"></span> <span *ngSwitchCase="\'fontawesome\'" style="width: 16px;display: inline-block"><i *ngIf="isSelected(option)" class="fa fa-check" aria-hidden="true"></i> <i *ngIf="isCheckboxDisabled(option)" class="fa fa-lock" aria-hidden="true"></i> </span><span *ngSwitchCase="\'visual\'" style="display:block;float:left; border-radius: 0.2em; border: 0.1em solid rgba(44, 44, 44, 0.63);background:rgba(0, 0, 0, 0.1);width: 5.5em"><div class="slider" [ngClass]="{\'slideron\': isSelected(option)}"><img *ngIf="option.image != null" [src]="option.image" style="height: 100%; width: 100%; object-fit: contain"><div *ngIf="option.image == null" style="height: 100%; width: 100%;text-align: center; display: table; background-color:rgba(0, 0, 0, 0.74)"><div class="content_wrapper"><span style="font-size:3em;color:white" class="glyphicon glyphicon-eye-close"></span></div></div></div></span></ng-container><span [ngClass]="{\'chunkyrow\': settings.checkedStyle == \'visual\' }" [class.disabled]="isCheckboxDisabled(option)" [ngClass]="settings.itemClasses" [style.font-weight]="this.parents.indexOf(option.id)>=0?\'bold\':\'normal\'">{{ option.name }}</span></span><ng-template #label><span [class.disabled]="isCheckboxDisabled()">{{ option.name }}</span></ng-template></a></div></div>',
                styles: ['a {  outline: none !important;}.dropdown-inline {  display: inline-block;}.dropdown-toggle .caret {  margin-left: 4px;  white-space: nowrap;  display: inline-block;}.chunkydropdown-menu {  min-width: 20em;}.chunkyrow {  line-height: 2;  margin-left: 1em;  font-size: 2em;}.slider {  width:3.8em;  height:3.8em;  display:block;  -webkit-transition: all 0.125s linear;  -moz-transition: all 0.125s linear;  -o-transition: all 0.125s linear;  transition: all 0.125s linear;  margin-left: 0.125em;  margin-top: auto;}.slideron {  margin-left: 1.35em;}.content_wrapper{  display: table-cell;  vertical-align: middle;}.search-container {  padding: 0px 5px 5px 5px;}'],
                providers: [MULTISELECT_VALUE_ACCESSOR, __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
                changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
MultiselectDropdownComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */], },
    { type: __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__["a" /* MultiSelectSearchFilter */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["N" /* IterableDiffers */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["r" /* ChangeDetectorRef */], },
]; };
MultiselectDropdownComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Input */] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Input */] },],
    'texts': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Input */] },],
    'disabledSelection': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Input */] },],
    'selectionLimitReached': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'dropdownClosed': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'dropdownOpened': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'onAdded': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'onRemoved': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'onLazyLoad': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'onFilter': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Output */] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* HostListener */], args: ['document: click', ['$event.target'],] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* HostListener */], args: ['document: touchstart', ['$event.target'],] },],
};
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../angular-2-dropdown-multiselect/dropdown/dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autofocus_directive__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/autofocus.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_component__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/dropdown.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/dropdown/search-filter.pipe.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdownModule; });






var MultiselectDropdownModule = (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());

MultiselectDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_4__dropdown_component__["a" /* MultiselectDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__["a" /* MultiSelectSearchFilter */],
                ],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__dropdown_component__["a" /* MultiselectDropdownComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__search_filter_pipe__["a" /* MultiSelectSearchFilter */],
                    __WEBPACK_IMPORTED_MODULE_3__autofocus_directive__["a" /* AutofocusDirective */],
                ],
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
        this._prevSkippedItems = {};
    }
    MultiSelectSearchFilter.prototype.transform = function (options, str, limit, renderLimit) {
        if (str === void 0) { str = ''; }
        if (limit === void 0) { limit = 0; }
        if (renderLimit === void 0) { renderLimit = 0; }
        str = str.toLowerCase();
        // Drop cache because options were updated
        if (options !== this._lastOptions) {
            this._lastOptions = options;
            this._searchCache = {};
            this._searchCacheInclusive = {};
            this._prevSkippedItems = {};
        }
        var filteredOpts = this._searchCache.hasOwnProperty(str)
            ? this._searchCache[str]
            : this._doSearch(options, str, limit);
        var isUnderLimit = options.length <= limit;
        return isUnderLimit
            ? filteredOpts
            : this._limitRenderedItems(filteredOpts, renderLimit);
    };
    MultiSelectSearchFilter.prototype._getSubsetOptions = function (options, prevOptions, prevSearchStr) {
        var prevInclusiveOrIdx = this._searchCacheInclusive[prevSearchStr];
        if (prevInclusiveOrIdx === true) {
            // If have previous results and it was inclusive, do only subsearch
            return prevOptions;
        }
        else if (typeof prevInclusiveOrIdx === 'number') {
            // Or reuse prev results with unchecked ones
            return prevOptions.concat(options.slice(prevInclusiveOrIdx));
        }
        return options;
    };
    MultiSelectSearchFilter.prototype._doSearch = function (options, str, limit) {
        var prevStr = str.slice(0, -1);
        var prevResults = this._searchCache[prevStr];
        var prevResultShift = this._prevSkippedItems[prevStr] || 0;
        if (prevResults) {
            options = this._getSubsetOptions(options, prevResults, prevStr);
        }
        var optsLength = options.length;
        var maxFound = limit > 0 ? Math.min(limit, optsLength) : optsLength;
        var regexp = new RegExp(this._escapeRegExp(str), 'i');
        var filteredOpts = [];
        var i = 0, founded = 0, removedFromPrevResult = 0;
        var doesOptionMatch = function (option) { return regexp.test(option.name); };
        var getChildren = function (option) {
            return options.filter(function (child) { return child.parentId === option.id; });
        };
        var getParent = function (option) {
            return options.find(function (parent) { return option.parentId === parent.id; });
        };
        var foundFn = function (item) { filteredOpts.push(item); founded++; };
        var notFoundFn = prevResults ? function () { return removedFromPrevResult++; } : function () { };
        for (; i < optsLength && founded < maxFound; ++i) {
            var option = options[i];
            var directMatch = doesOptionMatch(option);
            if (directMatch) {
                foundFn(option);
                continue;
            }
            if (typeof option.parentId === 'undefined') {
                var childrenMatch = getChildren(option).some(doesOptionMatch);
                if (childrenMatch) {
                    foundFn(option);
                    continue;
                }
            }
            if (typeof option.parentId !== 'undefined') {
                var parentMatch = doesOptionMatch(getParent(option));
                if (parentMatch) {
                    foundFn(option);
                    continue;
                }
            }
            notFoundFn();
        }
        var totalIterations = i + prevResultShift;
        this._searchCache[str] = filteredOpts;
        this._searchCacheInclusive[str] = i === optsLength || totalIterations;
        this._prevSkippedItems[str] = removedFromPrevResult + prevResultShift;
        return filteredOpts;
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