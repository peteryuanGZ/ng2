System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var HostService, com1, HostDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HostService = (function () {
                function HostService() {
                    this.num = 0;
                }
                HostService.prototype.getNum = function () {
                    return this.num;
                };
                HostService.prototype.setNum = function (n) {
                    this.num = n;
                };
                HostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HostService);
                return HostService;
            }());
            exports_1("HostService", HostService);
            com1 = (function () {
                function com1(hs) {
                    this.hs = hs;
                    console.log(hs);
                }
                Object.defineProperty(com1.prototype, "number", {
                    get: function () {
                        return this.hs.getNum();
                    },
                    enumerable: true,
                    configurable: true
                });
                com1 = __decorate([
                    core_1.Component({
                        selector: 'com1',
                        template: '{{number}}'
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [HostService])
                ], com1);
                return com1;
            }());
            exports_1("com1", com1);
            HostDemo = (function () {
                function HostDemo(data) {
                    this.data = data;
                }
                HostDemo.prototype.ngOnInit = function () { };
                HostDemo.prototype.changeNum = function () {
                    this.data.setNum(10);
                };
                HostDemo = __decorate([
                    core_1.Component({
                        selector: 'host',
                        directives: [com1],
                        template: "\n        <com1></com1> <br>\n        \u5F53\u524D\u6570\u5B57{{number}}\n        <button (click)='changeNum()'>\u53D8\u4E00\u4E0B</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [HostService])
                ], HostDemo);
                return HostDemo;
            }());
            exports_1("HostDemo", HostDemo);
        }
    }
});
//# sourceMappingURL=hose.demo.js.map