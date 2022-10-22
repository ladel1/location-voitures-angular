import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';
import { LocationCrudService } from 'src/app/services/location-crud.service';
import { VoitureCrudService } from 'src/app/services/voiture-crud.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  locationForm:FormGroup;
  clients:any[]=[];
  voitures:any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private locationCrud:LocationCrudService,
    private clientCrud:ClientCrudService,
    private crudVoiture:VoitureCrudService,
    private router:Router,
  ) {

    this.locationForm = this.formBuilder.group({
      client:['',Validators.required],
      voiture:['',Validators.required],
      date:['',Validators.required],
      duree:['',Validators.required],
      prix:['',Validators.required],
    });

   }

  ngOnInit(): void {
    this.clientCrud.tousLesClients().subscribe((data)=>{this.clients=data;})   
    this.crudVoiture.tousLesvoitures().subscribe((data)=>{this.voitures=data;}) 
  }

  ajouter(){
    console.log(this.locationForm)
    if(!this.locationForm.invalid){
      this.locationCrud.ajouter(this.locationForm.value).subscribe((data)=>{
        this.router.navigate(["locations"]);
      })
    }
  }

  retour(){
    this.router.navigate([""]);
  }

}
