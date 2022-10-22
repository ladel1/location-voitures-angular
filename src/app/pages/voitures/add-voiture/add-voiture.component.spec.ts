import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AddVoitureComponent} from 'src/app/pages/voitures/add-voiture/add-voiture.component';


describe('AddClientComponent', () => {
  let component: AddVoitureComponent;
  let fixture: ComponentFixture<AddVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
