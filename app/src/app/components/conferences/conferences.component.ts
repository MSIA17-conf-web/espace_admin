import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  public logout(){
    this.adminService.logout();
  }
}
