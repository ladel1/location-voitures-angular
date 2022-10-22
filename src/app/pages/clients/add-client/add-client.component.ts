import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientCrud:ClientCrudService,
    private router:Router,
  ) {

    this.clientForm = this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      neph:['',Validators.required],
      adresse:['',Validators.required],
      tel:['',Validators.required],
    });

   }

  ngOnInit(): void {
  }

  ajouter(){
    if(!this.clientForm.invalid){
      this.clientCrud.ajouter(this.clientForm.value).subscribe((data)=>{
        this.router.navigate(["clients"]);
      })
    }
  }

  retour(){
    this.router.navigate([""]);
  }

}
