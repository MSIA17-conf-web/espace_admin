import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

import { Guest } from "./guest";

import { GuestService } from "src/app/services/guest/guest.service";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'firstName', 'lastName', 'enterpriseName', 'email'];
  guests = new MatTableDataSource<Guest>();
  selection;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.selection = new SelectionModel<Guest>(true, []);
    this.guests.data = this.guestService.getAllGuest();
  }

  ngAfterViewInit() {
    this.guests.paginator = this.paginator;
}

  applyFilter(filterValue: string) {
    this.guests.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.guests.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.guests.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Guest): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.lastName}`;
  }
}