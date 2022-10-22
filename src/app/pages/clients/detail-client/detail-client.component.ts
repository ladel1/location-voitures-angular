import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  idClient:number=0;
  prenom:string="";
  nom:string="";
  neph:string="";
  adresse:string="";
  tel:string="";

  constructor(
    private clientCrud:ClientCrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) {   
    this.idClient = this.activatedRoute.snapshot.params['id'];  
  }

  ngOnInit(): void {
    this.clientCrud.recupClient(this.idClient).subscribe((data)=>{
      this.prenom= data.nom;
      this.nom= data.prenom;
      this.neph= data.neph;
      this.adresse= data.adresse;
      this.tel= data.tel;
  });    
  }

  retour(){
    this.router.navigate(["clients"]);
  }

}
