"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var browser = /** @class */ (function () {
    function browser() {
    }
    browser.prototype.browserType = function () {
        console.log("BrowserType Method worked");
    };
    browser.prototype.browserName = function () {
        console.log("browserName Method worked");
    };
    return browser;
}());
var chrome = /** @class */ (function (_super) {
    __extends(chrome, _super);
    function chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    chrome.prototype.launchBrowser = function () {
        console.log("Chrome Browser Launched");
    };
    return chrome;
}(browser));
var obj1 = new chrome();
obj1.browserName();
obj1.browserType();
obj1.launchBrowser();
var version = /** @class */ (function (_super) {
    __extends(version, _super);
    function version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    version.prototype.empName = function (locator, val) {
        if (val === true) {
            console.log("Works well in Method overalodaing function");
        }
        else {
            console.log("Method overalodinhg not working");
        }
    };
    return version;
}(chrome));
var obj = new version();
obj.empName("vignesh", true);
obj.browserName();
obj.launchBrowser();
var override = /** @class */ (function (_super) {
    __extends(override, _super);
    function override() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.locator = "test";
        _this.seat = false;
        return _this;
    }
    override.prototype.empName = function () {
        _super.prototype.empName;
        console.log("locator Name is ".concat(this.locator, " and seat availability? ").concat(this.seat));
    };
    return override;
}(version));
var obj2 = new override();
obj2.empName();
