import { Component, OnInit } from '@angular/core';

import { Conference } from "./conference";

import { ConferenceService } from 'src/app/services/conference/conference.service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'subjectList'];
  listConferences: Conference[] = [];

  constructor(private conferenceService: ConferenceService, private adminService: AdminService) { }

  ngOnInit() {
    this.listConferences = this.conferenceService.getAllConferences();
  }

  public logout(){
    this.adminService.logout();
  }
}
