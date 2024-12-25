// Cart Component Logic
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],
})
export class CartComponent {
  orderPlaced = false;

  placeOrder(): void {
    this.orderPlaced = true;

    // Optional: Hide the message after 3 seconds
    setTimeout(() => {
      this.orderPlaced = false;
    }, 3000);
  }
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
    alert(`${item.name} removed from cart.`);
  }

  getCartTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
