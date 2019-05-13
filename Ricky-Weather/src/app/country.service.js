"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get("~/assets/country-capitals.json");
    };
    CountryService.prototype.getCountry = function (name) {
        console.log(name);
        return this.http.get("~/assets/country-capitals.json").pipe(operators_1.flatMap(function (response) { return response; }), operators_1.filter(function (res) { return res["CountryName"] === name; }));
    };
    CountryService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCw0Q0FBaUQ7QUFLakQ7SUFDRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMscUNBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQVk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUN6RCxtQkFBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUssUUFBUSxFQUFiLENBQWEsQ0FBQyxFQUNsQyxrQkFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBM0IsQ0FBMkIsQ0FBQyxDQUMzQyxDQUFDO0lBQ0osQ0FBQztJQWJVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBRTBCLGlCQUFVO09BRHpCLGNBQWMsQ0FjMUI7SUFBRCxxQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIGZsYXRNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBDb3VudHJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRDb3VudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJ+L2Fzc2V0cy9jb3VudHJ5LWNhcGl0YWxzLmpzb25cIik7XG4gIH1cblxuICBnZXRDb3VudHJ5KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwifi9hc3NldHMvY291bnRyeS1jYXBpdGFscy5qc29uXCIpLnBpcGUoXG4gICAgICBmbGF0TWFwKHJlc3BvbnNlID0+IDxhbnk+cmVzcG9uc2UpLFxuICAgICAgZmlsdGVyKHJlcyA9PiByZXNbXCJDb3VudHJ5TmFtZVwiXSA9PT0gbmFtZSlcbiAgICApO1xuICB9XG59XG4iXX0=