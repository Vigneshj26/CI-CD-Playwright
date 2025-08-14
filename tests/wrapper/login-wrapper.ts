import { wrapper } from './wrapperFile'

export class testLogin extends wrapper {



    async gourl(url: string) {

        await this.page.goto(url)

    }


    async login(user: string, pass: string) {

        await this.clearValue("username", user)
        await this.clearValue("password", pass)

    }

}