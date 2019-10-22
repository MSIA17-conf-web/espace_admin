import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
  host: {
    'class': "layout layout--center width100"
  }
})
export class AdminFormComponent implements OnInit {
  private adminForm: FormGroup;
  private submitted = false;
  private hidePassword = true;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
    this.adminService.clearStorage();
  }

  markDown: string;

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get formulaire() { return this.adminForm.controls; }

  onSubmit() {
    const values = this.adminForm.value;
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminForm.invalid) {
      return;
    }
    
    if(this.adminService.connection(values)){
      alert("success");
      this.router.navigate(['conferences'])
    } else {
      this.formulaire["password"].reset();
      
      alert("retry");
    }
  }
}
