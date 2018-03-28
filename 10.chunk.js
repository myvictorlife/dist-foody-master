webpackJsonp([10],{

/***/ "../../../../../src/app/layout/lead/lead-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_component__ = __webpack_require__("../../../../../src/app/layout/lead/lead.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lead_component__["a" /* LeadComponent */] }
];
var LeadRoutingModule = (function () {
    function LeadRoutingModule() {
    }
    return LeadRoutingModule;
}());
LeadRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LeadRoutingModule);

//# sourceMappingURL=lead-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/lead/lead.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Indicações'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n\t<div class=\"row\">\n\t    <div class=\"col col-xl-10 col-lg-10\">\n\t        <div class=\"card mb-3\">\n\t            <div class=\"card-header\">\n\t                Lista de indicações de estabelecimentos\n\t            </div>\n\t            <div class=\"card-block table-responsive\">\n\t                <table class=\"table table-hover table-bordered\">\n\t                    <thead>\n\t                    <tr>\n\t                        <th>{{ 'name' | translate }}</th>\n\t                        <th>{{ 'phone' | translate }}</th>\n\t                        <th>{{ 'street' | translate }}</th>\n\t                        <th>{{ 'number' | translate }}</th>\n\t                        <th>{{ 'neighborhood' | translate }}</th>\n\t                        <th>{{ 'city' | translate }}</th>\n\t                        <th>{{ 'state' | translate }}</th>\n\t                        <th>{{ 'remove' | translate }}</th>\n\t                    </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr *ngFor=\"let lead of leads\" >\n\t                            <td>{{lead.name}}</td>\n\t                            <td>{{lead.phone}}</td>\n\t                            <td>{{lead.street}}</td>\n\t                            <td>{{lead.number}}</td>\n\t                            <td>{{lead.neighborhood}}</td>\n\t                            <td>{{lead.city}}</td>\n\t                            <td>{{lead.state}}</td>\n\t                            <td (click)=\"remove(content, lead)\">Remover</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n\t</div>\n\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t<div class=\"modal-header\">\n\t\t\t<h4 class=\"modal-title\">Remover indicação de estabelecimento</h4>\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('no')\">\n\t\t\t  <span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<p>{{leadName}}</p>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('no')\">Não</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('yes')\">Sim</button>\n\t\t</div>\n\t</ng-template>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/lead/lead.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/lead/lead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__ = __webpack_require__("../../../../../src/app/shared/services/restaurant.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadComponent = (function () {
    function LeadComponent(restaurantService, toastr, modalService) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.leads = this.restaurantService.getAllLeads();
        if (!this.leads.length) {
            this.restaurantService.populateLeads()
                .subscribe(function (result) {
                _this.leads = result.data;
            }, function (error) {
                if (error.status === 401) {
                    _this.onLoggedout();
                }
            });
        }
    }
    LeadComponent.prototype.ngOnInit = function () {
    };
    LeadComponent.prototype.remove = function (content, lead) {
        var _this = this;
        this.leadName = lead.name;
        this.modalService.open(content).result.then(function (result) {
            if (result === 'yes') {
                _this.restaurantService.removeLead(lead.id)
                    .subscribe(function (result) {
                    if (result.status) {
                        _this.leads = _this.restaurantService.getAllLeads();
                        _this.toastr.success(result.message, '');
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
    LeadComponent.prototype.onLoggedout = function () {
        localStorage.removeItem("isUserLogged");
        window.location.reload();
    };
    return LeadComponent;
}());
LeadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-lead',
        template: __webpack_require__("../../../../../src/app/layout/lead/lead.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/lead/lead.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_restaurant_service__["a" /* RestaurantService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _c || Object])
], LeadComponent);

var _a, _b, _c;
//# sourceMappingURL=lead.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/lead/lead.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_component__ = __webpack_require__("../../../../../src/app/layout/lead/lead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lead_routing_module__ = __webpack_require__("../../../../../src/app/layout/lead/lead-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadModule", function() { return LeadModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LeadModule = (function () {
    function LeadModule() {
    }
    return LeadModule;
}());
LeadModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__lead_routing_module__["a" /* LeadRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__lead_component__["a" /* LeadComponent */]]
    })
], LeadModule);

//# sourceMappingURL=lead.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map