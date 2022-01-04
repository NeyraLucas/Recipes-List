import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient){}

    signup(email: string, password: string){

        const key: string = 'AIzaSyDyFAp4ohjZPgXVLIlxmJFJ7-b5xfvsqtg';

        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}
        `,
        {
            email: email,
            password: password,
            returnSecureToken: true

        }
        );

    }

}