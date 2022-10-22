import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientsComponent } from './pages/clients/clients.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { VoituresComponent } from './pages/voitures/voitures.component';
import { HomeComponent } from './pages/home/home.component';
import { AddClientComponent } from './pages/clients/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './pages/clients/edit-client/edit-client.component';
import { DetailClientComponent } from './pages/clients/detail-client/detail-client.component';

import { AddVoitureComponent } from './pages/voitures/add-voiture/add-voiture.component';
import { EditVoitureComponent } from './pages/voitures/edit-voiture/edit-voiture.component';
import { DetailVoitureComponent } from './pages/voitures/detail-voiture/detail-voiture.component';
import { AddLocationComponent } from './pages/locations/add-location/add-location.component';
import { DetailLocationComponent } from './pages/locations/detail-location/detail-location.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ClientsComponent,
    LocationsComponent,
    VoituresComponent,
    HomeComponent,
    AddClientComponent,
    EditClientComponent,
    DetailClientComponent,
    AddVoitureComponent,
    EditVoitureComponent,
    DetailVoitureComponent,
    AddLocationComponent,
    DetailLocationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
