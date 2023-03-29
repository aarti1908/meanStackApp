import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../models/login.model";

@Injectable()
export class LoginService {

  private users: Login[] = [];

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    const login: Login = { email: email, password: password };
    return this.http.post<{ expiresIn : string, token: string, userId: string }>("http://localhost:8000/api/user/signup", login);
  }

  login(email: string, password: string) {
    const login: Login = { email: email, password: password };
    return this.http.post<{ expiresIn : string, token: string, userId: string}>("http://localhost:8000/api/user/login", login);
  }

}
