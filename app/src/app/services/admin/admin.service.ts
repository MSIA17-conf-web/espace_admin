import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private env = environment;
  private admin = JSON.parse(localStorage.getItem("loggedInAdmin") || "false");
  private superAdmin = JSON.parse(localStorage.getItem("loggedInSuperAdmin") || "false");

  constructor() { }

  public setAdmin(values: boolean) {
    this.admin = values;

    if(this.admin){
      localStorage.setItem("loggedInAdmin", "true");
    }
  }

  public getAdmin() {
    return this.admin;
  }

  // private setSuperAdmin(values: boolean) {
  //   this.superAdmin = values;
    
  //   if(this.superAdmin){
  //     localStorage.setItem("loggedInSuperAdmin", "true");
  //   }
  // }

  // public getSuperAdmin() {
  //   return this.superAdmin;
  // }

  public clearStorage(){
    this.setAdmin(false);
    // this.setSuperAdmin(false);
    
    localStorage.removeItem("loggedInAdmin");
    // localStorage.removeItem("loggedInSuperAdmin");
  }

  connection(values) {
    let admin = this.env.admin, superAdmin = this.env.superAdmin;

    if (values.login === admin.login && values.password === admin.password) {
      this.setAdmin(true);
      return true;
    }
    // else if (values.login === superAdmin.login && values.password === superAdmin.password) {
    //   this.setSuperAdmin(true);
    // }

    this.clearStorage();
    return false;
  }
}
