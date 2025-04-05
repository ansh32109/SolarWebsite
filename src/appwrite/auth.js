import { Account, Client, ID } from "appwrite";
import appwriteConfigs from "../conf/conf";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(appwriteConfigs.appwriteURL)
            .setProject(appwriteConfigs.projectId)

        this.account = new Account(this.client)
    }

    async createUser({email, password, name}) {
        try {
            const createdUser = await this.account.create(ID.unique(), email, password, name)
            if(createdUser)
                return this.login({email, password})
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()            
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async logout(){
        try {
            const res = await this.account.deleteSessions()
            console.log(res);
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

const auth = new AuthService();

export default auth