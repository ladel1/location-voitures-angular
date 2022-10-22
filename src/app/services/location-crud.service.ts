import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationCrudService {
  private URL:string= environment.ENDPOINTAPI;
  constructor(
    private http:HttpClient
  ) { }

  public recupLocation(idClient:number,idVoiture:number):Observable<any>{
    return this.http.get(this.URL+"locations/"+idClient+"/"+idVoiture);
  }

  public ajouter(location:any):Observable<any>{
    return this.http.post(this.URL+"locations",location);
  }
  // 1
  public toutesLesRes():Observable<any>{
    return this.http.get(this.URL+"locations");
  }

  public supprimer(idClient:number,idVoiture:number):Observable<any>{
    return this.http.delete(this.URL+"locations/"+idClient+"/"+idVoiture);
  }

  public modifier(idClient:number,idVoiture:number,location:any):Observable<any>{
    return this.http.put(this.URL+"locations/"+idClient+"/"+idVoiture,location);
  }  

}
