import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConferenceDialogComponent } from './delete-conference-dialog.component';

describe('DeleteConferenceDialogComponent', () => {
  let component: DeleteConferenceDialogComponent;
  let fixture: ComponentFixture<DeleteConferenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConferenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
