import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { PhoneServiceService } from '../phone.service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ProductListComponent {
  phones: any[] = [];

  constructor(private phoneservice: PhoneServiceService, private cartService: CartService) {
    this.phoneservice.getPhones().subscribe(data => {
      this.phones = data;
      console.log(data);
    });
  }

  addToCart(phone: any) {
    this.cartService.addToCart(phone);
  }
}
