webpackJsonp([9],{

/***/ "../../../../../src/app/layout/category/category-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */] }
];
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    return CategoryRoutingModule;
}());
CategoryRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CategoryRoutingModule);

//# sourceMappingURL=category-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Categorias'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    \n    \t<div class=\"row\">\n\t        \n\t        <div class=\"col col-xl-4 col-lg-8\">\n\t        \t<div class=\"card mb-3\">\n\t                <div class=\"card-header\">\n\t                    Lista de Categorias\n\t                </div>\n\t                <div class=\"card-block table-responsive\">\n\t                    <table class=\"table table-hover\">\n\t                        <thead>\n\t                        <tr>\n\t                            <th>#</th>\n\t                            <th>Categoria</th>\n\t                            <th>Opções</th>\n\t                        </tr>\n\t                        </thead>\n\t                        <tbody>\n\t\t                        <tr *ngFor=\"let cat of categories\" (click)=\"edit(cat)\">\n\t\t                            <th scope=\"row\">{{cat.id}}</th>\n\t\t                            <td>{{cat.name}}</td>\n\t\t                            <td (click)=\"remove(content, cat.name)\">Remover</td>\n\t\t                        </tr>\n\t                        </tbody>\n\t                    </table>\n\t                </div>\n            \t</div>\n\t\t    </div>\n\t\t    <div class=\"col-lg-5\">\n\n\t            <form class=\"form-horizontal\" [formGroup]=\"formulario\">\n\t                <div class=\"form-group\" [ngClass]=\"aplicaCssErro('name')\" >\n\t                    <fieldset class=\"form-group\">\n\t                        <label>Categoria*</label>\n\t                        <input type=\"text\" class=\"form-control\"\n\t                            formControlName=\"name\"\n\t                            id=\"name\" placeholder=\"Nome da categoria\" >\n\n\t                        <app-campo-control-erro\n\t                          [mostrarErro]=\"verificaValidTouched('name')\"\n\t                          msgErro=\"Nome é obrigatório.\">\n\t                        </app-campo-control-erro>\n\t                    </fieldset>\n\t                </div>\n\n\t                <div class=\"text-center\">\n\t                \t<button type=\"submit\" class=\"btn btn-default\" (click)=\"reset()\" >Limpar</button>\n\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!formulario.valid\" class=\"btn btn-primary\" (click)=\"register()\" >Salvar</button>\n\t\t\t\t\t</div> \n\t                \n\t            </form>\n\n\t        </div>\n\t    </div>\n        \n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t  <div class=\"modal-header\">\n\t\t    <h4 class=\"modal-title\">Remover Categoria</h4>\n\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n\t\t      <span aria-hidden=\"true\">&times;</span>\n\t\t    </button>\n\t\t  </div>\n\t\t  <div class=\"modal-body\">\n\t\t    <p>{{categoria}}</p>\n\t\t  </div>\n\t\t  <div class=\"modal-footer\">\n\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">Não</button>\n\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">Sim</button>\n\t\t  </div>\n\t\t</ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table th, td {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_category_service__ = __webpack_require__("../../../../../src/app/shared/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryComponent = (function () {
    function CategoryComponent(categoryService, toastr, formBuilder, modalService) {
        var _this = this;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.categories = this.categoryService.getAll();
        if (!this.categories.length) {
            this.categoryService.getCategory()
                .subscribe(function (result) {
                _this.categories = result.data;
            });
        }
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            id: [null, []],
            name: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].minLength(3)]],
        });
    };
    CategoryComponent.prototype.verificaValidTouched = function (campo) {
        return (!this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    };
    CategoryComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    CategoryComponent.prototype.verificaValidacoesForm = function (formGroup) {
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
    CategoryComponent.prototype.reset = function () {
        this.formulario.reset();
    };
    CategoryComponent.prototype.register = function () {
        var _this = this;
        if (this.formulario.valid) {
            if (this.formulario.value.id) {
                this.categoryService.edit(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.categoryService.getAll();
                        _this.toastr.success(result.message, '');
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
            else {
                this.categoryService.register(this.formulario.value)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.categoryService.getAll();
                        _this.toastr.success(result.message, '');
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
    CategoryComponent.prototype.edit = function (cat) {
        this.formulario.setValue({
            id: cat.id,
            name: cat.name
        });
    };
    CategoryComponent.prototype.remove = function (content, name) {
        var _this = this;
        this.categoria = name;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.categoryService.remove(name)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.categories = _this.categoryService.getAll();
                        _this.toastr.success(result.message, '');
                    }
                    else {
                        _this.toastr.warning('', result.message + ". Verifique se possui empresas registradas com essa categoria");
                    }
                });
            }
        }, function (reason) {
        });
    };
    CategoryComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/layout/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/category/category.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object])
], CategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/layout/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_routing_module__ = __webpack_require__("../../../../../src/app/layout/category/category-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__category_routing_module__["a" /* CategoryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */]]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map