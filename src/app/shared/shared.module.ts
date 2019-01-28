import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PercentToDecimals } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [PercentToDecimals],
  exports: [
    PercentToDecimals
  ]
})
export class SharedModule { }
