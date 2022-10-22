import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientCrudService {

  private URL:string= environment.ENDPOINTAPI;
  constructor(
    private http:HttpClient
  ) { }

  public recupClient(id:number):Observable<any>{
    return this.http.get(this.URL+"clients/"+id);
  }

  public ajouter(client:any):Observable<any>{
    return this.http.post(this.URL+"clients",client);
  }

  public tousLesClients():Observable<any>{
    return this.http.get(this.URL+"clients");
  }

  public supprimer(id:number):Observable<any>{
    return this.http.delete(this.URL+"clients/"+id);
  }

  public modifier(id:number,client:any):Observable<any>{
    return this.http.put(this.URL+"clients/"+id,client);
  }  


}
