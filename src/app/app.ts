import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';
import { Slider } from './components/slider/slider';

@Component({
  selector: 'app-root',
  imports: [Navbar, Slider, Products, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}