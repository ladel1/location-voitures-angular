import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureCrudService} from 'src/app/services/voiture-crud.service';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent implements OnInit {

  voitureForm:FormGroup;
  idvoiture:number;

  constructor(
    private formBuilder: FormBuilder,
    private voitureCrud:VoitureCrudService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.idvoiture = this.activatedRoute.snapshot.params['id'];
    this.voitureForm = this.formBuilder.group({
      matricule:['',Validators.required],
      modele:['',Validators.required],
      marque:['',Validators.required],
      moteur:['',Validators.required],
      prix:['',Validators.required],
    });

    this.voitureCrud.recupvoiture(this.idvoiture).subscribe((data)=>{
        this.voitureForm.controls['matricule'].setValue(data.matricule);
        this.voitureForm.controls['modele'].setValue(data.modele);
        this.voitureForm.controls['marque'].setValue(data.marque);
        this.voitureForm.controls['moteur'].setValue(data.moteur);
        this.voitureForm.controls['prix'].setValue(data.prix);
    });


   }

  ngOnInit(): void {
  }
  modifier(){
    if(!this.voitureForm.invalid){
      this.voitureCrud.modifier(this.idvoiture,this.voitureForm.value).subscribe((data)=>{
        this.router.navigate(["voitures"]);
      })
    }
  }

  retour(){
    this.router.navigate(["voitures"]);
  }
}
