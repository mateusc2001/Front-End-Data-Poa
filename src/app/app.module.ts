import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { LAZY_MAPS_API_CONFIG } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from '../app/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsConfig } from './google-maps-config';
import {NgxMaskModule} from 'ngx-mask';
import { OnibusModule } from './modules/onibus.module';
import { ClienteModule } from './modules/cliente.module';
import { ProcurarLinhasModule } from './modules/procurarlinhas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MaterialModule,    
    NgxMaskModule.forRoot(),
    OnibusModule,
    ClienteModule.forRoot(),
    ProcurarLinhasModule
  ],
  providers: [
    {provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }