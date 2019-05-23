import { NgModule } from "@angular/core";
import { ProcurarLinhasComponent } from '../componentes/procurar-linhas/procurar-linhas.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
    declarations: [
        ProcurarLinhasComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        AgmCoreModule.forRoot(),
        AgmDirectionModule,
        ],
    exports:[
        ProcurarLinhasComponent
    ]
})

export class ProcurarLinhasModule { }