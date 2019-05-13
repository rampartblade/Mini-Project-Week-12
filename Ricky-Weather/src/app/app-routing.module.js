"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page1_component_1 = require("./page1/page1.component");
var page2_component_1 = require("./page2/page2.component");
var routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "page1"
    },
    {
        path: "page1",
        component: page1_component_1.Page1Component
    },
    {
        path: "page2/:countryName",
        component: page2_component_1.Page2Component
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSwyREFBeUQ7QUFDekQsMkRBQXlEO0FBR3pELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7SUFFRDtRQUNFLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0NBQ0YsQ0FBQztBQU1OO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZTFDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlMS9wYWdlMS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBhZ2UyQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZTIvcGFnZTIuY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiLFxuICAgICAgICByZWRpcmVjdFRvOiBcInBhZ2UxXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwicGFnZTFcIixcbiAgICAgICAgY29tcG9uZW50OiBQYWdlMUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICAgXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwicGFnZTIvOmNvdW50cnlOYW1lXCIsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZTJDb21wb25lbnRcbiAgICAgIH1cbiAgICBdO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19