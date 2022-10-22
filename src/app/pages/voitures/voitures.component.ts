import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VoitureCrudService} from 'src/app/services/voiture-crud.service';
@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  voitures:any[] = [];
  constructor(
    private crudVoiture:VoitureCrudService,
    private router:Router) { }

  ngOnInit(): void {
    this.crudVoiture.tousLesvoitures().subscribe((data)=>{
      this.voitures=data;
    })
  }

  supprimer(id:number){
    if(confirm("Voulez-vous vraiment supprimer cette voiture ?")){
      this.crudVoiture.supprimer(id).subscribe((data)=>{
        this.ngOnInit();
        console.log("supprimé")
      })
    }
  }

  retour(){
    this.router.navigate([""])
  }

}
