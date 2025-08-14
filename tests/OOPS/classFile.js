"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBrowser = void 0;
var testBrowser = /** @class */ (function () {
    function testBrowser(type, numbers) {
        this.browserVersion = 1.89;
        console.log(this.browserType = type);
        console.log(this.browserVersion = numbers);
    }
    testBrowser.prototype.launch = function () {
        console.log("Chrome ");
    };
    testBrowser.prototype.VersionCheck = function () {
        console.log("This is the Version 1.89");
    };
    return testBrowser;
}());
exports.testBrowser = testBrowser;
var b1 = new testBrowser("chrome", 1.89);
console.log(b1.browserVersion);
console.log(b1.browserType);
b1.VersionCheck();
b1.launch();
