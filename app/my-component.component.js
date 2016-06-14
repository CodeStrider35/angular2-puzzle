System.register(["@angular/core", "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Jason";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        <div class=\"div-style\">\n            <button [disabled]=\"inputElement.value !== 'yes' \" class=\"btn btn-danger\">Only enables if 'yes' was entered</button>\n        </div>\n        <div class=\"div-style\">\n            Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : '' \">{{name}}</span>, and \n            <span [class.is-awesome]=\"inputElement.value === 'yes' \">angular2 is so awesome!</span>\n            <br>\n            <br>\n            Is it awesome?\n            <input class=\"form-control\" type=\"text\" #inputElement (keyup)=\"0\">\n        </div>\n        <div class=\"div-style\">\n            <my-test></my-test>\n        </div>\n    ",
                        styles: ["\n        .div-style {\n            margin-bottom: 5px;\n        }\n    "],
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsbXJCQWVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDBFQUlSLENBQUM7d0JBQ0YsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQVFGLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2LXN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcycgXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPk9ubHkgZW5hYmxlcyBpZiAneWVzJyB3YXMgZW50ZXJlZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXYtc3R5bGVcIj5cclxuICAgICAgICAgICAgSGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJycgXCI+e3tuYW1lfX08L3NwYW4+LCBhbmQgXHJcbiAgICAgICAgICAgIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgXCI+YW5ndWxhcjIgaXMgc28gYXdlc29tZSE8L3NwYW4+XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICBJcyBpdCBhd2Vzb21lP1xyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2LXN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxteS10ZXN0PjwvbXktdGVzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmRpdi1zdHlsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgbmdPbkluaXQoKTogYW55IHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkphc29uXCI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
