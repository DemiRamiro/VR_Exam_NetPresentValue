import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: "Calculator", routerLink: ['calculator'] },
      { label: "History", routerLink: ['history'] }
    ]
  }

}
