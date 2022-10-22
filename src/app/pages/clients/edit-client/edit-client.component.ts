import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clientForm:FormGroup;
  idClient:number;

  constructor(
    private formBuilder: FormBuilder,
    private clientCrud:ClientCrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.idClient = this.activatedRoute.snapshot.params['id'];
    this.clientForm = this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      neph:['',Validators.required],
      adresse:['',Validators.required],
      tel:['',Validators.required],
    });

    this.clientCrud.recupClient(this.idClient).subscribe((data)=>{
        this.clientForm.controls['nom'].setValue(data.nom);
        this.clientForm.controls['prenom'].setValue(data.prenom);
        this.clientForm.controls['neph'].setValue(data.neph);
        this.clientForm.controls['adresse'].setValue(data.adresse);
        this.clientForm.controls['tel'].setValue(data.tel);
    });


   }

  ngOnInit(): void {
  }
  modifier(){
    if(!this.clientForm.invalid){
      this.clientCrud.modifier(this.idClient,this.clientForm.value).subscribe((data)=>{
        this.router.navigate(["clients"]);
      })
    }
  }

  retour(){
    this.router.navigate(["clients"]);
  }
}
