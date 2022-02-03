import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParkingDetailsComponent } from './edit-parking-details.component';

describe('EditParkingDetailsComponent', () => {
  let component: EditParkingDetailsComponent;
  let fixture: ComponentFixture<EditParkingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParkingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParkingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
