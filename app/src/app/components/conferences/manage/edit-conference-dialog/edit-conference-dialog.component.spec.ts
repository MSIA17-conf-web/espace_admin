import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConferenceDialogComponent } from './edit-conference-dialog.component';

describe('EditConferenceDialogComponent', () => {
  let component: EditConferenceDialogComponent;
  let fixture: ComponentFixture<EditConferenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConferenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
