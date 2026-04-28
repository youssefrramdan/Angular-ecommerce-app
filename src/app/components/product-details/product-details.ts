import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Highlight } from '../../directives/highlight.directive';
import { ScaleElement } from '../../directives/scale-element.directive';
import { Product } from '../../models/product';
import { StarPipe } from '../../pipes/star-pipe';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink, StarPipe, Highlight, ScaleElement],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  products: Product[] = [
    {
      id: 1,
      name: 'Smart Watch',
      price: 120,
      image: 'smartWatch.jpg',
      inStock: true,
      category: 'sport',
      rating: 4.5,
      quantity: 24,
      description:
        'Fitness tracking, heart rate monitor, and a bright AMOLED display. Waterproof build for workouts and daily wear.',
    },
    {
      id: 2,
      name: 'Classic Watch',
      price: 90,
      image: 'classicWatch.avif',
      inStock: false,
      category: 'classic',
      rating: 4.2,
      quantity: 0,
      description:
        'Timeless leather strap and understated dial. Elegant design for dress codes and evenings out.',
    },
    {
      id: 3,
      name: 'Sport Watch',
      price: 150,
      image: 'sportWatch.jpg',
      inStock: true,
      category: 'sport',
      rating: 4.8,
      quantity: 18,
      description:
        'Rugged case, GPS, and long battery life. Built for runners, cyclists, and outdoor training.',
    },
    {
      id: 4,
      name: 'Luxury Watch',
      price: 300,
      image: 'LuxuryWatch.webp',
      inStock: false,
      category: 'luxury',
      rating: 4.9,
      quantity: 0,
      description:
        'Premium materials and sapphire glass with a refined silhouette. Statement piece with Swiss-inspired precision.',
    },
  ];

  id: string | null = '';
  product: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.product = this.products.find((p) => p.id == Number(this.id));
    });
  }

  addToCart(name: string) {
    alert(`You added ${name} To Your Cart`);
  }
}
