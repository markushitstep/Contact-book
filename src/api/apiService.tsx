import { backEndUrl } from "../assets/url";

export default class apiService {
    backEndUrl: string;
    constructor() {
        this.backEndUrl = backEndUrl;
    }
    static getToken() {
        return localStorage.getItem('token');
    }
    static setHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`
        }
    }
    // static async get(count: number = 50) {
    //     const response = await fetch(`https://api-im.chatdaddy.tech/contacts?count=${count}`,{
    //         method: "GET",
    //         headers: this.setHeaders()
    //     });
    //     return response.json();
    // }/contacts?count=${count}
    static async get(addUrl: string) {
        const response = await fetch(backEndUrl +  addUrl ,{
            method: "GET",
            headers: this.setHeaders()
        });
        return response.json();
    }
    static async getImage(accountId:string, id:string) {
        const response = await fetch(`https://api-im.chatdaddy.tech/contacts/${accountId}/${id}/image`,{
            method: "GET",
            headers: this.setHeaders()
        });
        return response.json();
    }
    static async post(data:any) {
        const response = await fetch('https://api-teams.chatdaddy.tech/token', {
            method: 'POST',
            headers: this.setHeaders(),
            body: JSON.stringify(data)
        });
        return response.json();
    }
}
