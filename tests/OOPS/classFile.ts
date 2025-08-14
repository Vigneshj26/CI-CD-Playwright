import { Type } from "typescript"

export class testBrowser {

    browserType: string
    browserVersion: Number = 1.89



    launch() {

        console.log("Chrome ")
    }

    VersionCheck() {

        console.log("This is the Version 1.89")
    }
    constructor(type: string, numbers: Number) {

        console.log(this.browserType = type)
        console.log(this.browserVersion = numbers)
    }

}
const b1 = new testBrowser("chrome", 1.89);

console.log(b1.browserVersion)
console.log(b1.browserType)

b1.VersionCheck();
b1.launch();