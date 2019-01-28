import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from ".";
import { CalculatorComponent } from "./calculator";
import { HistoryComponent } from "./history";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'calculator',
                component: CalculatorComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: '',
                redirectTo: 'calculator',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule{}