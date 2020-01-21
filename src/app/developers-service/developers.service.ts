import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DevelopersService {

  // private username = 'JadyVella';
  // private client_id = '897e600d1d17299d7eb1';
  // private client_secret = 'b75b7c42f20a7cc6655dd6a7028b5a982ff1b4b9';
  username:string;
  auth_token = "bc89605ad0f422d72264ab0f24b441d9dd68ec22";

  constructor(private http:HttpClient) {
        console.log('Developer service Init... ');
        this.username= 'JadyVella';
  }

  getUser(){
    // return this.http.get('https://api.github.com/users/'  + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret);
        return this.http.get('https://api.github.com/users/'  + this.username + "?access_token=" + this.auth_token);


  }

  getRepos() {
    // return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret
    // );
       return this.http.get('https://api.github.com/users/'  + this.username + "/repos" + "?access_token=" + this.auth_token);

  }

  updateUsername(username:string){
    this.username = username;
  }
}
