"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../country.service");
var Page1Component = /** @class */ (function () {
    function Page1Component(countryservice) {
        this.countryservice = countryservice;
        this.countries = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.countryservice.getCountries().subscribe(function (country) {
            _this.countries = country;
        });
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'ns-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [country_service_1.CountryService])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZTEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFvRDtBQVdwRDtJQUdFLHdCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQsY0FBUyxHQUFHLElBQUksQ0FBQztJQUVvQyxDQUFDO0lBS3RELGlDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNsRCxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFiVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUlvQyxnQ0FBYztPQUh2QyxjQUFjLENBZTFCO0lBQUQscUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VudHJ5U2VydmljZSB9IGZyb20gJy4uL2NvdW50cnkuc2VydmljZSc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBhZ2UxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZTEuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvdW50cmllcyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3VudHJ5c2VydmljZTogQ291bnRyeVNlcnZpY2UpIHt9XG4gIFxuXG4gXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3VudHJ5c2VydmljZS5nZXRDb3VudHJpZXMoKS5zdWJzY3JpYmUoY291bnRyeSA9PiB7XG4gICAgICB0aGlzLmNvdW50cmllcyA9IGNvdW50cnk7XG4gICAgfSlcbiAgICBcbiAgfVxuXG59XG4iXX0=