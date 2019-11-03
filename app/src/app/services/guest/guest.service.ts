import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  getAllGuest(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log("getAllGuest");
      this.httpClient
        .post("https://msia17conferences.com:9010/api", {
          method: "GET",
          url: "getAllGuest",
          baseURL: "http://postgre_api:9010",
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          // },
          body: {
            table: "guests",
            orderBy: "lastName"
          }
        }).subscribe(res => {
          console.log("Response from APIs", res);
          resolve(res);
        }, err => {
          console.log("Error from APIs", err);
          reject(err);
        })
    });
  }
}
