import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

import { SharedModule } from "../shared";
import { MainComponent } from "./main.component";
import { CalculatorComponent } from "./calculator";
import { MainRoutingModule } from "./main-routing.module";
import { HistoryComponent } from './history/history.component';

@NgModule({
    imports: [
        MainRoutingModule,
        CommonModule,
        FormsModule,
        FieldsetModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        ChartModule,
        SharedModule,
        ToastModule,
        TabMenuModule,
        TableModule
    ],
    declarations: [
        CalculatorComponent,
        MainComponent,
        HistoryComponent
    ],
    providers: [
        MessageService
    ]
})
export class MainModule { }