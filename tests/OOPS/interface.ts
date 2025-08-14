interface data {
    
    
    
    //we canot implement the methods



    click(): void
    fill(): void
    delete(): void


}

class inter implements data {

    click(): void {
        console.log("This is click function")
    }

    fill(): void {
        console.log("This is fill function")
    }

    delete(): void {
        console.log("This is delete function")
    }

}
const ob = new inter()
ob.click()
ob.fill()
ob.delete()