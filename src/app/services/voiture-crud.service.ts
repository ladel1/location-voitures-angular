import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoitureCrudService {

  private URL:string= environment.ENDPOINTAPI;
  constructor(
    private http:HttpClient
  ) { }

  public recupvoiture(id:number):Observable<any>{
    return this.http.get(this.URL+"voitures/"+id);
  }

  public ajouter(voiture:any):Observable<any>{
    return this.http.post(this.URL+"voitures",voiture);
  }

  public tousLesvoitures():Observable<any>{
    return this.http.get(this.URL+"voitures");
  }

  public supprimer(id:number):Observable<any>{
    return this.http.delete(this.URL+"voitures/"+id);
  }

  public modifier(id:number,voiture:any):Observable<any>{
    return this.http.put(this.URL+"voitures/"+id,voiture);
  }  


}
