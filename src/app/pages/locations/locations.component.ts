import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationCrudService } from 'src/app/services/location-crud.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  reservations:any = []

  constructor(
    private locationCrud:LocationCrudService,
    private router:Router
  ) {


   }

  ngOnInit(): void {
    this.locationCrud.toutesLesRes().subscribe(data =>this.reservations=data);
  }

  retour(){
    this.router.navigate([""])
  }
  supprimer(client_id:number,voiture_id:number){
    if(confirm("Voulez-vous vraiment supprimer ce reservation ?")){
      this.locationCrud.supprimer(client_id,voiture_id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }

}
