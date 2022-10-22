import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';
import { LocationCrudService } from 'src/app/services/location-crud.service';
import { VoitureCrudService } from 'src/app/services/voiture-crud.service';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent implements OnInit {

  idClient:any;
  idVoiture:any;
  location:any;

  constructor(
    private locationCrud:LocationCrudService,
    private clientCrud:ClientCrudService,
    private crudVoiture:VoitureCrudService,
    private router:Router,    
    private activatedRoute:ActivatedRoute,
  ) {

    this.idClient = this.activatedRoute.snapshot.params['idClient'];  
    this.idVoiture = this.activatedRoute.snapshot.params['idVoiture'];
    this.locationCrud.recupLocation(this.idClient,this.idVoiture).subscribe((data)=>{
      this.location= data;
    })  
   }

  ngOnInit(): void {

  }
  retour(){
    this.router.navigate([""]);
  }

}
