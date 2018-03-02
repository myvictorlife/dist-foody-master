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

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Busca Pedidos Por Status'\" [icon]=\"'fa-edit'\"></app-page-header>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-12\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"findByStatus(1)\">\n              PENDENTE - AGUARDANDO CONFIRMAÇÃO\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"findByStatus(2)\">\n              EM PREPARO - JÁ FOI CONFIRMADO\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"findByStatus(3)\">\n              SAIU PARA ENTREGA\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-success\" (click)=\"findByStatus(4)\">\n              CONCLUÍDO - PEDIDO ENTREGUE\n      </button>\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-danger\" (click)=\"findByStatus(5)\">\n              CANCELADO - PEDIDO CANCELADO\n      </button>\n      <br/>\n  </div>\n  <div *ngIf=\"objectNotification && objectNotification && objectNotification.user && objectNotification.user.first_name\" class=\"col-xl-5\">\n    <h4>Enviar notificação</h4>\n    Cliente: {{objectNotification.user.first_name}} {{objectNotification.user.last_name}}\n    <span *ngIf=\"!objectNotification.pushUserId\">Não é possivel enviar notificação.</span>\n    <div *ngIf=\"objectNotification.pushUserId\">\n      <textarea type=\"text\" class=\"form-control\"\n      [(ngModel)]=\"notification\"\n      id=\"notification\" rows=\"3\" ></textarea>\n      <button style=\"float: right; margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"sendNotification()\">\n              Enviar\n      </button>\n    </div>\n  </div>\n</div>\n<br/>\n<div class=\"row\">\n\t\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-primary\" (click)=\"stopAudio()\">\n                Para audio\n      </button>\n    </div>\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" *ngIf=\"showAudio\" type=\"button\" class=\"btn btn-primary\" (click)=\"changeAudio(false)\">\n          Esta com Audio\n      </button>\n      <button *ngIf=\"!showAudio\" type=\"button\" class=\"btn\" (click)=\"changeAudio(true)\">\n          Esta sem Audio\n      </button>\n    </div>\n    <div class=\"col-xl-2\">\n      <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"alertAudio(true)\">\n          Testar Audio\n      </button>\n    </div>\n</div>\n\n<br/>\n\n<table class=\"table table-responsive table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>Pedido</th>\n      <th>#id</th>\n      <th>Usuário</th>\n      <th>Estabelecimento</th>\n      <th>Observação</th>\n      <th>Espera</th>\n      <th>Atendimento</th>\n      <th>Status</th>\n      <th>Criado</th>\n      <th>Editado</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let order of orders\" (click)=\"setNotification(order)\" >\n      <td (click)=\"details(modalDetails, order); $event.stopPropagation();\"><button type=\"button\" class=\"btn btn-info\"> Detalhes</button></td>\n      <td>{{order.id}}</td>\n      <td>{{getUser(order.orders.user)}}</td>\n      <td>{{getRestaurant(order.orders.restaurant)}}</td>\n      <td>{{order.note}}</td>\n      <td>{{getDate(order)}}</td>\n      <td *ngIf=\"currentStatus === 'PENDENTE - AGUARDANDO CONFIRMAÇÃO' && order.attendant === null\">\n        <button style=\"margin-top: 10px;\" type=\"button\" class=\"btn btn-info\" (click)=\"updateAttendant(order); $event.stopPropagation();\">\n          Analisar Pedido\n        </button>\n      </td>\n      <td *ngIf=\"currentStatus !== 'PENDENTE - AGUARDANDO CONFIRMAÇÃO' && order.attendant === null\">\n        Não houve analise\n      </td>\n      <td *ngIf=\"order.attendant !== null\"> {{getAttendant(order.attendant)}} </td>\n      <td *ngIf=\"getStatus(order) < 3\" (click)=\"changeOrderStatus(modalChangeOrderStatus, order)\" > \n        <button type=\"button\" class=\"btn btn-info\">Alterar</button>\n      </td>\n      <td *ngIf=\"getStatus(order) >= 3\" > \n        --\n      </td>\n      <td>{{order.createdAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n      <td>{{order.updatedAt | date:\"dd/MM/yyyy hh:mm a\"}}</td>\n    </tr>\n    <tr *ngIf=\"!orders || !orders.length\" >\n      <td>****</td>\n      <td>Nenhum pedido com status: {{currentStatus}}</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n      <td>****</td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n<ng-template #modalDetails let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ 'orders.detail' | translate }} #{{orderSelected.id}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    \n      <div class=\"card text-center\">\n        <div class=\"card-block\">\n          {{ 'name' | translate }}: {{orderSelected.orders.user.first_name}} {{orderSelected.orders.user.last_name}} <br/>\n          {{ 'email' | translate }}: {{orderSelected.orders.user.email}}<br/>\n          {{ 'phone' | translate }}: {{orderSelected.orders.user.phone}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'orders' | translate }}</h5>\n        </div>\n      </div>\n      <br/>\n      <div *ngFor=\"let item of orderSelected.orders.items\">\n        <div class=\"media\" >\n          <div class=\"media-left\">\n            <img class=\"media-object\" *ngIf=\"item.thumb\" src=\"{{item.thumb}}\" width=\"64\" height=\"64\">\n            <img class=\"media-object\" *ngIf=\"!item.thumb\" src=\"assets/images/empty-cart.png\" width=\"64\" height=\"64\">\n          </div>\n          <div class=\"media-body\" style=\"margin-left: 10px;\">\n            <h5 class=\"media-heading\">{{item.name}} x {{item.quantity}}</h5>\n            <div *ngIf=\"item.options && item.options.required && item.options.required.name\" style=\"color:coral\">\n              {{item.options.required.name}} - R$ {{item.options.required.price}}\n            </div>\n             {{item.ingredients}}\n            <div *ngIf=\"item.options && item.options.optional && item.options.optional.length\" style=\"color: darkgreen\">\n              <div *ngFor=\"let optional of item.options.optional\">\n                {{optional.name}} - R$ {{optional.price}}\n              </div>\n            </div>\n            <div *ngIf=\"item.description\" style=\"color: #ff0000;\">\n                Importante: {{item.description}}\n            </div>\n            <h6 class=\"media-heading\" style=\"color: #449d44; float: right;\" >Total: R$ {{item.total | number:'1.2'}}</h6>\n          </div>\n        </div>\n        <hr/>\n      </div>\n\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'deliver' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div *ngIf=\"orderSelected.flag_delivery > 0\">\n            {{ 'address' | translate }}: {{orderSelected.orders.address.street}} Nº: {{orderSelected.orders.address.number}}<br/>\n            {{ 'complement' | translate }}: {{orderSelected.orders.address.complement}}<br/>\n            {{ 'neighborhood' | translate }}: {{orderSelected.orders.address.neighborhood}} <br/>\n            {{ 'cep' | translate }}: {{orderSelected.orders.address.cep}}\n          </div>\n          <div *ngIf=\"orderSelected.flag_delivery < 1\">Cliente vai buscar</div>\n        </div>\n      </div>\n      <br *ngIf=\"orderSelected.flag_delivery > 0\"/>\n      <div class=\"card\" *ngIf=\"orderSelected.flag_delivery > 0\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'frete' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          <div>{{getFrete(orderSelected)}}</div>\n        </div>\n      </div>\n      <br/>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'form.payment' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.orders.payment.name}}  {{orderSelected.orders.payment.card}}\n        </div>\n      </div>\n      <div class=\"card\" *ngIf=\"orderSelected.orders.payment.name.toUpperCase() === 'DINHEIRO'\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">Troco</h5>\n        </div>\n        <div class=\"card-block\">\n          {{orderSelected.orders.money}}\n        </div>\n      </div>\n      \n      <br *ngIf=\"validDiscount(orderSelected)\"/>\n      <div class=\"card\" *ngIf=\"validDiscount(orderSelected)\">\n        <div class=\"card-header\">\n          <h5 class=\"media-heading\">{{ 'discount' | translate }}</h5>\n        </div>\n        <div class=\"card-block\">\n          {{getDiscountValue(orderSelected)}}\n        </div>\n      </div>\n      <br/>\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h4 class=\"media-heading\" style=\"color: #449d44;\" >Total: R$ {{getTotal(orderSelected) | number:'1.2'}}</h4>\n        </div>\n      </div>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"c('no')\">{{ 'closed' | translate }}</button>\n  </div>\n</ng-template>\n\n\n<ng-template #modalChangeOrderStatus let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Alterar Status</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" >\n      <div class=\"list-group\">\n        <div class=\"mouse-hover\" *ngFor=\"let name of statusName; let i = index\">\n        <a class=\"list-group-item\" [ngClass]=\"{'color-selected': modalButtonSelected === i}\" *ngIf=\"!!name\" style=\"margin-bottom: 15px;\" (click)=\"setStatus(i)\" >\n          {{name}}\n        </a>\n        </div>\n      </div>\n      <input id=\"note\" [(ngModel)]=\"orderSelected.note\" name=\"note\" class=\"form-control\" type=\"text\" placeholder=\"Observação\" >\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">{{ 'cancel' | translate }}</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"c('yes')\">{{ 'change.status' | translate }}</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/layout/status/status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-selected {\n  background-color: #31b0d5; }\n\n.mouse-hover {\n  cursor: pointer; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function StatusComponent(ordersService, modalService, toastr) {
        var _this = this;
        this.ordersService = ordersService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.showAudio = true;
        this.notification = "Equipe Sacia Fome esta analisando a demora de seu pedido. Por favor, aguarde!";
        this.statusName = ['', 'PENDENTE - AGUARDANDO CONFIRMAÇÃO',
            'EM PREPARO - JÁ FOI CONFIRMADO',
            'SAIU PARA ENTREGA',
            'CONCLUÍDO - PEDIDO ENTREGUE',
            'CANCELADO - PEDIDO CANCELADO'
        ];
        this.orders = [];
        this.orderSelected = {};
        this.newObject();
        this.currentStatus = this.statusName[1];
        this.ordersService.findByStatus(1)
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
                    _this.currentStatus = _this.statusName[1];
                }
                else {
                    if (_this.currentStatus === _this.statusName[1]) {
                        _this.orders = [];
                    }
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
        this.currentStatus = this.statusName[status];
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
    StatusComponent.prototype.updateAttendant = function (order) {
        var _this = this;
        this.ordersService.updateAttendant(order.id)
            .subscribe(function (result) {
            if (result.status) {
                order.attendant = result.data;
                _this.toastr.success('', result.message);
            }
            else {
                _this.toastr.warning('', result.message);
                _this.findByStatus(1);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.onLoggedout();
            }
        });
    };
    StatusComponent.prototype.getAttendant = function (attendant) {
        if (typeof attendant === 'string') {
            return JSON.parse(attendant).name;
        }
        return attendant.name;
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
    StatusComponent.prototype.details = function (content, order) {
        var options = {
            size: 'lg'
        };
        this.orderSelected = order;
        this.modalService.open(content, options).result.then(function (result) {
            if (result === 'yes') {
            }
        }, function (reason) {
        });
    };
    StatusComponent.prototype.validDiscount = function (order) {
        if (order.discount) {
            order = JSON.parse(order.discount);
            return order.status;
        }
    };
    StatusComponent.prototype.getTotal = function (orderSelected) {
        var total = 0.00;
        if (orderSelected.flag_delivery > 0) {
            if (!parseFloat(orderSelected.frete)) {
                total = parseFloat(orderSelected.total);
            }
            else {
                total = parseFloat(orderSelected.total) + parseFloat(orderSelected.frete);
            }
        }
        else {
            total = parseFloat(orderSelected.total);
        }
        return total < 0 ? 0.00 : total;
    };
    StatusComponent.prototype.getFrete = function (orderSelected) {
        if (!parseFloat(orderSelected.frete)) {
            return 'Gratís';
        }
        else {
            return 'R$' + parseFloat(orderSelected.frete).toFixed(2);
        }
    };
    StatusComponent.prototype.getDiscountValue = function (order) {
        order = JSON.parse(order.discount);
        if (order.discount_type) {
            if (order.name.indexOf(order.value) > -1) {
                return order.name;
            }
            return order.name + ": " + order.value + '%';
        }
        return order.name + ": R$ " + order.value;
    };
    StatusComponent.prototype.changeOrderStatus = function (content, order) {
        var _this = this;
        this.orderSelected = order;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                var json = {
                    pushUserId: _this.orderSelected.push_user_id,
                    status: _this.statusSelected.status,
                    statusName: _this.getStatusById(_this.statusSelected.status),
                    thumb: _this.orderSelected.orders.restaurant.img,
                    restaurantName: _this.orderSelected.orders.restaurant.name,
                    id: _this.orderSelected.id,
                    note: _this.orderSelected.note
                };
                if (_this.statusSelected.status === 5 && !_this.orderSelected.note) {
                    _this.toastr.warning('', 'Qual o motivo do cancelamento?');
                    return false;
                }
                console.log(json);
                _this.ordersService.editStatus(json).subscribe(function (result) {
                    if (result.status) {
                        _this.findByStatus(_this.statusSelected.status);
                    }
                    else {
                        _this.toastr.warning('', result.message);
                    }
                });
            }
        }, function (reason) {
        });
    };
    StatusComponent.prototype.setStatus = function (status) {
        this.modalButtonSelected = status;
        this.statusSelected = {
            id: this.orderSelected.id,
            status: status
        };
        console.log(this.statusSelected);
    };
    StatusComponent.prototype.getStatusById = function (position) {
        return this.statusName[position];
    };
    StatusComponent.prototype.getStatus = function (order) {
        return parseInt(order.status);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_orders_service__["a" /* OrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object])
], StatusComponent);

var _a, _b, _c;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
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
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__status_component__["a" /* StatusComponent */]]
    })
], StatusModule);

//# sourceMappingURL=status.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map