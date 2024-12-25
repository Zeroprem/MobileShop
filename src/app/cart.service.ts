import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(item: any) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push({ ...item });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.name !== item.name
    );
  }
}
