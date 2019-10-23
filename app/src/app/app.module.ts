import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from 'ngx-markdown';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatTabsModule, MatListModule } from "@angular/material";
import { } from "@angular/material/form-field";
import { } from "@angular/material/input";
import { } from "@angular/material/icon";
import { } from "@angular/material/button";
import { } from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { ConferencesComponent } from './components/conferences/conferences.component';

import { AdminService } from "./services/admin/admin.service";
import { AdminGuardService } from "./services/admin/admin-guard.service";
import { ConferenceService } from "./services/conference/conference.service";
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminFormComponent,
    ConferencesComponent,
    GuestComponent,
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
  providers: [AdminService, AdminGuardService, ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
