import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './pages/clients/add-client/add-client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DetailClientComponent } from './pages/clients/detail-client/detail-client.component';
import { EditClientComponent } from './pages/clients/edit-client/edit-client.component';
import { HomeComponent } from './pages/home/home.component';
import { AddLocationComponent } from './pages/locations/add-location/add-location.component';
import { DetailLocationComponent } from './pages/locations/detail-location/detail-location.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { AddVoitureComponent } from './pages/voitures/add-voiture/add-voiture.component';
import { DetailVoitureComponent } from './pages/voitures/detail-voiture/detail-voiture.component';
import { EditVoitureComponent } from './pages/voitures/edit-voiture/edit-voiture.component';
import { VoituresComponent } from './pages/voitures/voitures.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"ajouter-client",component:AddClientComponent},
  {path:"modifier-client/:id",component:EditClientComponent},
  {path:"detail-client/:id",component:DetailClientComponent},
  {path:"clients",component:ClientsComponent},
  {path:"ajouter-voiture",component: AddVoitureComponent},
  {path:"modifier-voiture/:id",component:EditVoitureComponent},
  {path:"detail-voiture/:id",component:DetailVoitureComponent},
  {path:"voitures",component:VoituresComponent},  
  {path:"locations",component:LocationsComponent},    
  {path:"detail-location/:idClient/:idVoiture",component:DetailLocationComponent}, 
  {path:"add-location",component:AddLocationComponent},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
