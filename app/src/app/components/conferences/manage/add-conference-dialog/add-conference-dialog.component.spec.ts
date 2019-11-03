import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConferenceDialogComponent } from './add-conference-dialog.component';

describe('AddConferenceDialogComponent', () => {
  let component: AddConferenceDialogComponent;
  let fixture: ComponentFixture<AddConferenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConferenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
