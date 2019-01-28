import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NetPresentValueService } from 'src/app/shared/services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  netPresentValueForm: FormGroup;
  data: any;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private npvService: NetPresentValueService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.netPresentValueForm = this.formBuilder.group({
      cashInflow: ['', Validators.required],
      cashOutflow: ['', Validators.required],
      lowerBoundDiscountRate: ['', Validators.required],
      upperBoundDiscountRate: ['', Validators.required],
      discountRateIncrement: ['', Validators.required],
      timePeriod: ['', Validators.required]
    });
  }

  get form() { return this.netPresentValueForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.netPresentValueForm.invalid) {
      return false;
    }

    this.loading = true;
    this.npvService.calculateAndSaveNPV(this.netPresentValueForm.value).subscribe(result => {
      this.data = {
        labels: result.map(r => r.discountRate),
        datasets: [{
          label: 'Net Present Value',
          backgroundColor: result.map(r => r.color),
          borderColor: '#1E88E5',
          data: result.map(r => r.netPresentValue)
        }]
      }
      this.messageService.add({
        severity: 'success', summary: 'Calculation Successful.',
        detail: ''
      });
      this.loading = false;
    }, error => {
      this.messageService.add({
        severity: 'error', summary: error.error,
        detail: ''
      });
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
}
