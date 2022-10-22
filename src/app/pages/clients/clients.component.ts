import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:any[] = [];
  constructor(private clientCrud:ClientCrudService,
    private router:Router) { }

  ngOnInit(): void {
    this.clientCrud.tousLesClients().subscribe((data)=>{this.clients=data;})
  }

  supprimer(id:number){
    if(confirm("Voulez-vous vraiment supprimer ce client ?")){
      this.clientCrud.supprimer(id).subscribe((data)=>{
        this.ngOnInit();
        console.log("Le client a bien ete supprimé");
      });
    }
  }

  retour(){
    this.router.navigate([""])
  }

}
