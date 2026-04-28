import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../products/products';
import { Slider } from '../slider/slider';

@Component({
  selector: 'app-home',
  imports: [ RouterLink, Slider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
