import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { utils } from "src/app/utils/utils";

import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private admin: AdminService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    // session for 10 min.
    this.validateSession(utils.LOGGED_IN_ADMIN, 600000);

    if (this.admin.getAdmin()) {
      return true;
    } else {
      this.router.navigate(['connexion'])
      return false;
    }
  }

  private validateSession(key, exp) {
    var dataObj = JSON.parse(localStorage.getItem(key));
    console.log("dataObj", dataObj);

    
    if (dataObj) {
      console.log("new Date().getTime() - dataObj.time", new Date().getTime() - dataObj.time);
      if (new Date().getTime() - dataObj.time > exp) {
        this.admin.setAdmin(false);
        // alert ("information has expired")
      } else {
        this.admin.setAdmin(true);
      }
    }
  }
}