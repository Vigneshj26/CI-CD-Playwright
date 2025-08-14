import { testBrowser } from '../OOPS/classFile'

class EmployeeFData {

    public EmpName: string = "Vignesh";
    private EmpDOB: Number = 26 / 1 / 1990
    protected EmpLocation: string = "Chennai"



    userName() {

        console.log("This is the username method")
    }

    Birth() {

        console.log(`Name of the user ${this.EmpName} My ${this.EmpDOB} and my ${this.EmpLocation}`)
    }


}
const obj = new EmployeeFData()

obj.Birth()

// Example usage of testBrowser
const browser = new testBrowser("Firefox", 2.0);
browser.VersionCheck();
browser.launch();

