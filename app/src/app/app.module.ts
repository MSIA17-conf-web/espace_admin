import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from 'ngx-markdown';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
  MatCardModule, MatTableModule, MatTabsModule, MatListModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { GuestsComponent } from './components/guests/guests.component';

import { AdminService } from "./services/admin/admin.service";
import { AdminGuardService } from "./services/admin/admin-guard.service";
import { ConferenceService } from "./services/conference/conference.service";
import { GuestService } from "./services/guest/guest.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminFormComponent,
    ConferencesComponent,
    GuestsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [AdminService, AdminGuardService, ConferenceService, GuestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
