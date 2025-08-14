var inter = /** @class */ (function () {
    function inter() {
    }
    inter.prototype.click = function () {
        console.log("This is click function");
    };
    inter.prototype.fill = function () {
        console.log("This is fill function");
    };
    inter.prototype.delete = function () {
        console.log("This is delete function");
    };
    return inter;
}());
var ob = new inter();
ob.click();
ob.fill();
ob.delete();
