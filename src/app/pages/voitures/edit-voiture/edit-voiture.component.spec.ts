import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoitureComponent } from './edit-voiture.component';

describe('EditClientComponent', () => {
  let component: EditVoitureComponent;
  let fixture: ComponentFixture<EditVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
