import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { utils } from "src/app/utils/utils";

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private env = environment;
  private admin = JSON.parse(localStorage.getItem(utils.LOGGED_IN_ADMIN) || "false");
  private superAdmin = JSON.parse(localStorage.getItem(utils.LOGGED_IN_SUPER_ADMIN) || "false");

  constructor(private router: Router) { }

  public setAdmin(values: boolean) {
    this.admin = values;

    if(values){
      var curTime = new Date().getTime();
      localStorage.setItem(utils.LOGGED_IN_ADMIN, JSON.stringify({access:values,time:curTime}));
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
    
    localStorage.clear();
    // localStorage.removeItem("loggedInSuperAdmin");
  }

  public connection(values) {
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

  public logout(){
    this.router.navigate(['connexion'])
    this.clearStorage();
  }
}
