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

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Busca Pedidos Por Status'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"findByStatus(1)\">\n              PENDENTE - AGUARDANDO CONFIRMAÇÃO\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"findByStatus(2)\">\n              EM PREPARO - JÁ FOI CONFIRMADO\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"findByStatus(3)\">\n              SAIU PARA ENTREGA\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-success\" (click)=\"findByStatus(4)\">\n              CONCLUÍDO - PEDIDO ENTREGUE\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-danger\" (click)=\"findByStatus(5)\">\n              CANCELADO - PEDIDO CANCELADO\n      </button>\n      <br/>\n  </div>\n  <div *ngIf=\"objectNotification && objectNotification && objectNotification.user && objectNotification.user.first_name\" class=\"col-xl-5\">\n    <h4>Enviar notificação</h4>\n    Cliente: {{objectNotification.user.first_name}} {{objectNotification.user.last_name}}\n    <span *ngIf=\"!objectNotification.pushUserId\">Não é possivel enviar notificação.</span>\n    <div *ngIf=\"objectNotification.pushUserId\">\n      <textarea type=\"text\" class=\"form-control\"\n      [(ngModel)]=\"notification\"\n      id=\"notification\" rows=\"3\" ></textarea>\n      <button style=\"float: right; margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"sendNotification()\">\n              Enviar\n      </button>\n    </div>\n  </div>\n</div>\n<br/>\n<div class=\"row\">\n\t\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"stopAudio()\">\n                Para audio\n      </button>\n    </div>\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" *ngIf=\"showAudio\" type=\"button\" class=\"btn btn-primary\" (click)=\"changeAudio(false)\">\n          Esta com Audio\n      </button>\n      <button *ngIf=\"!showAudio\" type=\"button\" class=\"btn\" (click)=\"changeAudio(true)\">\n          Esta sem Audio\n      </button>\n    </div>\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"alertAudio(true)\">\n          Testar Audio\n      </button>\n    </div>\n</div>\n\n<br/>\n\n<table class=\"table table-responsive table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>#id</th>\n      <th>Usuário</th>\n      <th>Estabelecimento</th>\n      <th>Entregar</th>\n      <th>Status</th>\n      <th>Observação</th>\n      <th>Espera</th>\n      <th>Criado</th>\n      <th>Editado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders\" (click)=\"setNotification(order)\" >\n      <td>{{order.id}}</td>\n      <td>{{getUser(order.orders.user)}}</td>\n      <td>{{getRestaurant(order.orders.restaurant)}}</td>\n      <td>{{order.flag_delivery ? 'SIM' : 'NÂO'}}</td>\n      <td>{{order.status}}</td>\n      <td>{{order.note}}</td>\n      <td>{{getDate(order)}}</td>\n      <td>{{order.createdAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n      <td>{{order.updatedAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n    </tr>\n  </tbody>\n</table>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
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
    function StatusComponent(ordersService, toastr) {
        var _this = this;
        this.ordersService = ordersService;
        this.toastr = toastr;
        this.showAudio = true;
        this.notification = "Equipe Sacia Fome esta analisando a demora de seu pedido. Por favor, aguarde!";
        this.orders = [];
        this.newObject();
        this.ordersService.findByStatus(5)
            .subscribe(function (result) {
            _this.orders = result.data;
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ordersService.findByStatus(1)
                .subscribe(function (result) {
                if (result.data.length) {
                    _this.orders = result.data;
                    _this.alertAudio();
                }
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }, 20000);
    };
    StatusComponent.prototype.findByStatus = function (status) {
        var _this = this;
        this.objectNotification.user = {};
        this.ordersService.findByStatus(status)
            .subscribe(function (result) {
            _this.orders = result.data;
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    StatusComponent.prototype.stopAudio = function () {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
        }
    };
    StatusComponent.prototype.getUser = function (user) {
        return "Nome: " + user.first_name + " " + user.last_name + " || Telefone: " + user.phone;
    };
    StatusComponent.prototype.getRestaurant = function (restaurant) {
        return restaurant.name + " Telefone: " + restaurant.phone;
    };
    StatusComponent.prototype.getDate = function (order) {
        if (parseInt(order.status) === 1) {
            var dateNow = new Date();
            var dateCreated = new Date(order.createdAt);
            var timeDiff = Math.abs(dateCreated.getTime() - dateNow.getTime());
            var diffMinutes = Math.ceil(timeDiff / 1000 / 60);
            return diffMinutes + "min";
        }
        return " - ";
    };
    StatusComponent.prototype.alertAudio = function () {
        this.stopAudio();
        if (this.showAudio) {
            this.audio = new Audio();
            this.audio.src = "assets/audio/door-bell.mp3";
            this.audio.autoplay = true;
            this.audio.load();
        }
    };
    StatusComponent.prototype.changeAudio = function (status) {
        this.showAudio = status;
    };
    StatusComponent.prototype.setNotification = function (order) {
        this.objectNotification = {
            id: order.id,
            pushUserId: order.push_user_id,
            message: this.notification,
            thumb: "https://prod.saciafome.com/upload/uploads/saciafome.png",
            restaurantName: order.orders.restaurant.name,
            user: order.orders.user
        };
    };
    StatusComponent.prototype.sendNotification = function () {
        var _this = this;
        var object = this.objectNotification;
        this.newObject();
        this.ordersService.sendNotification(object)
            .subscribe(function (result) {
            _this.toastr.success('', 'Notificação foi enviada ao usuário');
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    StatusComponent.prototype.newObject = function () {
        this.objectNotification = {};
        this.objectNotification.user = {};
    };
    StatusComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object])
], StatusComponent);

var _a, _b;
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