import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LinhaOnibusComponent } from '../componentes/linha-onibus/linha-onibus.component';
import { ProcurarLinhasComponent } from '../componentes/procurar-linhas/procurar-linhas.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
    declarations: [
        LinhaOnibusComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        AgmCoreModule.forRoot(),
        AgmDirectionModule,
        ],
    exports:[
        LinhaOnibusComponent
    ]
})

export class OnibusModule { }