System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            <form class=\"form-inline\">\n                <h2>Game Setup</h2>\n                    Enter your name please:\n                    <input class=\"form-control\" type=\"text\" #name (keyup)=\"0\">\n            </form>\n        </section>\n        <section \n        [ngClass]=\"{\n        puzzle: true,\n        solved: switch1.value == switch1Number && \n        switch2.value == switch2Number && \n        switch3.value == switch3Number && \n        switch4.value == switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n            <form class=\"form-inline\">\n                <h2>\n                    The Puzzle |\n                    {{switch1.value == switch1Number && \n                        switch2.value == switch2Number && \n                        switch3.value == switch3Number && \n                        switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n                </h2>\n                <p>Ok, welcome <span class=\"name\">{{name.value}}</span> </p>\n                <br>\n                Switch 1:\n                <input class=\"form-control\" type=\"text\" #switch1 (keyup)=\"0\">\n                <br>\n                Switch 2:\n                <input class=\"form-control\" type=\"text\" #switch2 (keyup)=\"0\">\n                <br>\n                Switch 3:\n                <input class=\"form-control\" type=\"text\" #switch3 (keyup)=\"0\">\n                <br>\n                Switch 4:\n                <input class=\"form-control\" type=\"text\" #switch4 (keyup)=\"0\">   \n            </form>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || \n                      switch2.value != switch2Number || \n                      switch3.value != switch3Number || \n                      switch4.value != switch4Number\">Congratulations {{name.value}},  you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQUFBO2dCQW1CQSxDQUFDO2dCQWJHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFqRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDQ1REE0Q1Q7cUJBQ0osQ0FBQzs7bUNBQUE7Z0JBcUJGLHNCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCw2Q0FtQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktcHV6emxlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gXHJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xyXG4gICAgICAgIHB1enpsZTogdHJ1ZSxcclxuICAgICAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBcclxuICAgICAgICBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiYgXHJcbiAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmIFxyXG4gICAgICAgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlclxyXG4gICAgICAgIH1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgUHV6emxlIHxcclxuICAgICAgICAgICAgICAgICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/ICdTT0xWRUQnIDogJ05PVCBTT0xWRUQnfX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5Paywgd2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgU3dpdGNoIDE6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICBTd2l0Y2ggMjpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIFN3aXRjaCAzOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgU3dpdGNoIDQ6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+ICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzTnVtYmVyIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+Q29uZ3JhdHVsYXRpb25zIHt7bmFtZS52YWx1ZX19LCAgeW91IGRpZCBpdCE8L2gyPlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcclxuICAgIHN3aXRjaDJOdW1iZXI6IG51bWJlcjtcclxuICAgIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcclxuICAgIHN3aXRjaDROdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoM051bWJlcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaDROdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
