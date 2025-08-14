import { versionMajorMinor } from "typescript";

class browser {


    browserType() {

        console.log("BrowserType Method worked")

    }

    browserName() {

        console.log("browserName Method worked")
    }
}

class chrome extends browser {

    launchBrowser() {

        console.log("Chrome Browser Launched")
    }

}
const obj1 = new chrome()
obj1.browserName();
obj1.browserType()
obj1.launchBrowser()


class version extends chrome {


    empName(locator: string, val: boolean): void;
    empName(locator: boolean): void;

    empName(locator: string | boolean, val?: boolean) {


        if (val === true) {

            console.log("Works well in Method overalodaing function")

        }
        else {

            console.log("Method overalodinhg not working")
        }

    }

}
const obj = new version()
obj.empName("vignesh", true);
obj.browserName();
obj.launchBrowser();


class override extends version {

    locator: string = "test"
    seat: boolean = false

    empName() {
        super.empName
        console.log(`locator Name is ${this.locator} and seat availability? ${this.seat}`)

    }



}
const obj2 = new override()

obj2.empName()