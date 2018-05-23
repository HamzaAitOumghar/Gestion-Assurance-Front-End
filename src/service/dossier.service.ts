import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DossierService {

    constructor(
    private http: Http
  ) { }

  public addDossiers(dossier,idDossier){
    return this.http.post("http://localhost:8080/dossiers/ajouter/"+idDossier,dossier).map(
        resp=>resp.json()
    ) ;
    }

    public getDossierById(idDossier){
        return this.http.get("http://localhost:8080/dossiers/"+idDossier).map(
            resp=>resp.json()
        )
    }

  public getDossiers(){
      return this.http.get("http://localhost:8080/dossiers").map(
          resp=>resp.json()
      ) ;
  }

public getDetailsClient(id){
    return this.http.get("http://localhost:8080/clients/"+id).map(
        resp=>resp.json()
    ) ;
}

public supprimerDossier(id){
    return this.http.delete("http://localhost:8080/dossiers/"+id).map(
        resp=>resp.json()
    ) ;
}
public modifierDossier(dossier,id){
    return this.http.put("http://localhost:8080/dossiers/modifier/"+id,dossier).map(
        resp=>resp.json()
    )
}
 
}


