import { Component, OnInit } from '@angular/core';

import { Conference } from "./conference";
import { AddConferenceDialogComponent } from "./manage/add-conference-dialog/add-conference-dialog.component";

import { MatDialog } from '@angular/material/dialog';

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

  constructor(private conferenceService: ConferenceService, private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
    this.listConferences = this.conferenceService.getAllConferences();
  }

  logout() {
    this.adminService.logout();
  }

  openAddConferenceDialog(thematicName) {
    console.log("thematicName", thematicName);
    
    const dialogRef = this.dialog.open(AddConferenceDialogComponent, {
      width: '300px',
      data: { listConferences: this.listConferences, thematicName: thematicName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
