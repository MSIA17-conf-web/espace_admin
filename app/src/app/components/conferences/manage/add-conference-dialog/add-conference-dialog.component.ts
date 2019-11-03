import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-conference-dialog',
  templateUrl: './add-conference-dialog.component.html',
  styleUrls: ['./add-conference-dialog.component.scss']
})
export class AddConferenceDialogComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddConferenceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.data.listConferences.forEach(element => {
      console.log(element);
      
    });
    
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      thematicName: ['', Validators.required]
      // subjectList: ['', Validators.required]
    });
  }

  onSubmitForm(values) {
    console.log("value", values);
    this.closeForm();
  }

  closeForm(): void {
    this.dialogRef.close();
  }
}