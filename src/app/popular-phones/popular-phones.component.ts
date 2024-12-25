import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-popular-phones',
  standalone: true,
  templateUrl: './popular-phones.component.html',
  styleUrls: ['./popular-phones.component.css'],
  imports: [CommonModule, FormsModule,ProductListComponent],
})
export class PopularPhonesComponent {
  popularPhones = [
    {
      name: 'Iphone',
      price: 1500,
      quantity: 1,
      image: 'iphone.jpg',
      description: '6.1-inch Super Retina XDR display, A15 Bionic chip, Dual-camera system.',
    },
    {
      name: 'Samsung Galaxy Z Fold',
      price: 1800,
      quantity: 1,
      image: 'samsung.jpg',
      description: 'Foldable 7.6-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 2 processor.',
    },
    {
      name: 'Oneplus Nord',
      price: 300,
      quantity: 1,
      image: 'oneplus.jpg',
      description: 'Affordable 120Hz AMOLED display, Dimensity 1200 chipset.',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(phone: any) {
    this.cartService.addToCart(phone);
    alert(`${phone.name} added to cart.`);
  }
}
