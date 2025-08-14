"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classFile_1 = require("../OOPS/classFile");
var EmployeeFData = /** @class */ (function () {
    function EmployeeFData() {
        this.EmpName = "Vignesh";
        this.EmpDOB = 26 / 1 / 1990;
        this.EmpLocation = "Chennai";
    }
    EmployeeFData.prototype.userName = function () {
        console.log("This is the username method");
    };
    EmployeeFData.prototype.Birth = function () {
        console.log("Name of the user ".concat(this.EmpName, " My ").concat(this.EmpDOB, " and my ").concat(this.EmpLocation));
    };
    return EmployeeFData;
}());
var obj = new EmployeeFData();
obj.Birth();
// Example usage of testBrowser
var browser = new classFile_1.testBrowser("Firefox", 2.0);
browser.VersionCheck();
browser.launch();
