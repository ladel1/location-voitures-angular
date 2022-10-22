import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';
import { VoitureCrudService } from 'src/app/services/voiture-crud.service';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
  idVoiture:number=0;
  matricule:string="";
  modele:string="";
  marque:string="";
  moteur:string="";
  prix:string="";

  constructor(
    private voitureCrud:VoitureCrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) {   
    this.idVoiture = this.activatedRoute.snapshot.params['id'];  
  }

  ngOnInit(): void {
    this.voitureCrud.recupvoiture(this.idVoiture).subscribe((data)=>{
      this.matricule= data.matricule;
      this.modele= data.modele;
      this.marque= data.marque;
      this.moteur= data.moteur;
      this.prix= data.prix;
  });    
  }

  retour(){
    this.router.navigate(["clients"]);
  }

}
