webpackJsonp([6],{

/***/ "../../../../../src/app/layout/status/status-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_component__ = __webpack_require__("../../../../../src/app/layout/status/status.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__status_component__["a" /* StatusComponent */] }
];
var StatusRoutingModule = (function () {
    function StatusRoutingModule() {
    }
    return StatusRoutingModule;
}());
StatusRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], StatusRoutingModule);

//# sourceMappingURL=status-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Busca Pedidos Por Status'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n\n<h6>1. PENDENTE - AGUARDANDO CONFIRMAÇÃO</h6>\n<h6>2. EM PREPARO - JÁ FOI CONFIRMADO</h6>\n<h6>3. SAIU PARA ENTREGA</h6>\n<h6>4. CONCLUÍDO - PEDIDO ENTREGUE</h6>\n<h6>5. CANCELADO - PEDIDO CANCELADO</h6>\n<h6>Escolha um número:</h6>\n\n<div class=\"row\">\n\t<div class=\"col-xl-2\">\n    \t<input class=\"form-control\"   name=\"startDate\" [(ngModel)]=\"status\" />\n    </div>\n    <div class=\"col-xl-2\">\n    \t<button type=\"button\" class=\"btn btn-primary\" (click)=\"findByStatus(status)\">\n                Buscar\n    \t</button>\n    </div>\n</div>\n\n<br/>\n\n<table class=\"table table-responsive table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>#id</th>\n      <th>Usuário</th>\n      <th>Estabelecimento</th>\n      <th>Entregar</th>\n      <th>Status</th>\n      <th>Criado</th>\n      <th>Editado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders\">\n      <td>{{order.id}}</td>\n      <td>{{getUser(order.orders.user)}}</td>\n      <td>{{getRestaurant(order.orders.restaurant)}}</td>\n      <td>{{order.flag_delivery ? 'SIM' : 'NÂO'}}</td>\n      <td>{{order.status}}</td>\n      <td>{{order.createdAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n      <td>{{order.updatedAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/layout/status/status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__ = __webpack_require__("../../../../../src/app/shared/services/orders.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusComponent = (function () {
    function StatusComponent(ordersService) {
        var _this = this;
        this.ordersService = ordersService;
        this.orders = [];
        this.ordersService.findByStatus(5)
            .subscribe(function (result) {
            _this.orders = result.data;
            console.log(_this.orders);
        });
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ordersService.findByStatus(1)
                .subscribe(function (result) {
                if (result.data.length) {
                    _this.orders = result.data;
                }
            });
        }, 60000);
    };
    StatusComponent.prototype.findByStatus = function (status) {
        var _this = this;
        this.ordersService.findByStatus(status)
            .subscribe(function (result) {
            _this.orders = result.data;
            console.log(_this.orders);
        });
    };
    StatusComponent.prototype.getUser = function (user) {
        return "Nome: " + user.first_name + " " + user.last_name + " || Telefone: " + user.phone;
    };
    StatusComponent.prototype.getRestaurant = function (restaurant) {
        return restaurant.name + " Telefone: " + restaurant.phone;
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/layout/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/status/status.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */]) === "function" && _a || Object])
], StatusComponent);

var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/status/status.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_component__ = __webpack_require__("../../../../../src/app/layout/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_routing_module__ = __webpack_require__("../../../../../src/app/layout/status/status-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModule", function() { return StatusModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var StatusModule = (function () {
    function StatusModule() {
    }
    return StatusModule;
}());
StatusModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__status_routing_module__["a" /* StatusRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__status_component__["a" /* StatusComponent */]]
    })
], StatusModule);

//# sourceMappingURL=status.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map