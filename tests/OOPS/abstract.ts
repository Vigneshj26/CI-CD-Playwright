abstract class login {


    loadurl() {

        console.log("This is the url for Google")
    }

    abstract launchurl(): void


}

class test extends login {



    launchurl(): void {


        console.log("Browser launched from abstract method")
    }
}
const obj = new test()
obj.launchurl()
obj.loadurl()