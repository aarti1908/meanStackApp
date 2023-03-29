import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from '../models/user.model'

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<{users : User[]}>("http://localhost:8000/api/users") || [];
  }

  addUser(fullName: string, email: string) {
    // try null value
    const user: User = { id: '', fullName: fullName, email: email };
    return this.http.post<{ message: string , id: string}>("http://localhost:8000/api/users", user);
  }

  updateUser(id: string, fullName: string, email: string) {
    // try null value
    const user: User = { id: id, fullName: fullName, email: email };
    return this.http.put<{ message: string , id: string}>("http://localhost:8000/api/users/" + id, user);
  }

  deleteUser(id : string){
    return this.http.delete<{ message: string , id: string}>("http://localhost:8000/api/users/" + id);
  }

  fetchUserInfo(id: string){
    return this.http.get<{
      id: string;
      fullName: string;
      email: string;
    }>("http://localhost:8000/api/users/" +  id);
  }

}
