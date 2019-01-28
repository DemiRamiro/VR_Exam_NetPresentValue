import { Component, OnInit } from '@angular/core';
import { NetPresentValue } from 'src/app/shared/models';
import { NetPresentValueService } from 'src/app/shared/services';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  netPresentValues: NetPresentValue[];
  selectedNPV: NetPresentValue;
  data: any;

  constructor(
    private npvService: NetPresentValueService
    ) { }

  ngOnInit() {
    this.npvService.getAll().subscribe(result => {
      console.log(result);
      this.netPresentValues = result;
    })
  }

  select(npv: NetPresentValue){
    this.npvService.calculateNPV(npv).subscribe(result => {
      this.data = {
        labels: result.map(r => r.discountRate),
        datasets: [{
          label: 'Net Present Value',
          backgroundColor: result.map(r => r.color),
          borderColor: '#1E88E5',
          data: result.map(r => r.netPresentValue)
        }]
      }
    });
  }

}
