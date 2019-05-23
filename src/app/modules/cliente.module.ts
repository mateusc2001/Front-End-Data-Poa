import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from '../componentes/cliente/cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteService } from '../services/cliente.service';

@NgModule({
    declarations: [
        ClienteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,    
        NgxMaskModule.forRoot()
    ],
    exports: [
        ClienteComponent
    ]
})

export class ClienteModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ClienteModule,
            providers: [
                ClienteService
            ]
        }
    }
}