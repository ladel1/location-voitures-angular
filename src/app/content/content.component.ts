import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get("http://localhost:8080/api/voitures").subscribe((data)=>{
    //   console.log(data);
    // })
    // this.http.post("http://localhost:8080/api/voitures",{
    //   matricule:"BD921PC",
    //   modele:"Chiron",
    //   marque:"Bugatti",
    //   moteur: "W26",
    //   prix:3000
    // }).subscribe(
    //   (data)=>{
    //   console.log(data);}
      
    //   )  
      
    // this.http.delete("http://localhost:8080/api/voitures/4").subscribe((data)=>{
    //   console.log(data);
    // })

    // this.http.put("http://localhost:8080/api/voitures/5",{
    //   matricule:"BD548PC",
    //   modele:"Vyeron",
    //   marque:"Bugatti",
    //   moteur: "W27",
    //   prix:2000
    // }).subscribe(
    //   (data)=>{
    //   console.log(data);}
      
    //   )    
    
    
    

  }

}
