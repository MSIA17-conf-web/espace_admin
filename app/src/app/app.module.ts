import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from 'ngx-markdown';

import {
  MatToolbarModule, MatFormFieldModule, MatInputModule, 
  MatSelectModule,  MatIconModule, MatButtonModule,
  MatCardModule, MatTableModule, MatTabsModule,
  MatListModule, MatDialogModule, MatCheckboxModule,
  MatPaginatorModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';

import { AdminService } from "./services/admin/admin.service";
import { AdminGuardService } from "./services/admin/admin-guard.service";
import { ConferenceService } from "./services/conference/conference.service";

import { AppComponent } from './app.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { GuestsComponent } from './components/guests/guests.component';
import { GuestService } from "./services/guest/guest.service";
import { AddConferenceDialogComponent } from './components/conferences/manage/add-conference-dialog/add-conference-dialog.component';
import { EditConferenceDialogComponent } from './components/conferences/manage/edit-conference-dialog/edit-conference-dialog.component';
import { DeleteConferenceDialogComponent } from './components/conferences/manage/delete-conference-dialog/delete-conference-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminFormComponent,
    ConferencesComponent,
    GuestsComponent,
    AddConferenceDialogComponent,
    EditConferenceDialogComponent,
    DeleteConferenceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,  
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  // exports: [
  //   MatToolbarModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatCardModule,
  //   MatTableModule,
  //   MatTabsModule,
  //   MatListModule,
  //   MatDialogModule
  // ],
  entryComponents : [
    AddConferenceDialogComponent
  ],
  providers: [AdminService, AdminGuardService, ConferenceService, GuestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
