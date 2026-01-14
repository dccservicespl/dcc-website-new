import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-trusted-by></app-trusted-by>
    <app-services></app-services>
    <app-success-stories></app-success-stories>
  `
})
export class HomeComponent { }