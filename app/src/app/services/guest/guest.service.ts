import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GuestService {

  constructor() { }

  getAllGuest() {
    return [
      { lastName: "Name 1", firstName: "Hydrogen", enterpriseName: "Pouette", email: "H" },
      { lastName: "Name 2", firstName: "Helium", enterpriseName: "Pouat", email: "He" },
      { lastName: "Name 3", firstName: "Lithium", enterpriseName: "coucou", email: "Li" },
      { lastName: "Name 4", firstName: "Beryllium", enterpriseName: "wesh", email: "Be" },
      { lastName: "Name 5", firstName: "Boron", enterpriseName: "alors", email: "B" },
      { lastName: "Name 6", firstName: "Carbon", enterpriseName: "ça va", email: "C" },
      { lastName: "Name 7", firstName: "Nitrogen", enterpriseName: "toi", email: "N" }
    ];
  }
}
