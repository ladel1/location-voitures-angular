import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientCrudService } from 'src/app/services/client-crud.service';
import { VoitureCrudService } from 'src/app/services/voiture-crud.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  voitureForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private voitureCrud:VoitureCrudService,
    private router:Router,
  ) {

    this.voitureForm = this.formBuilder.group({
      matricule:['',Validators.required],
      modele:['',Validators.required],
      marque:['',Validators.required],
      moteur:['',Validators.required],
      prix:['',Validators.required],
    });

   }

  ngOnInit(): void {
  }

  ajouter(){
    if(!this.voitureForm.invalid){
      this.voitureCrud.ajouter(this.voitureForm.value).subscribe((data)=>{
        this.router.navigate(["voitures"]);
      })
    }
  }

  retour(){
    this.router.navigate([""]);
  }

}
