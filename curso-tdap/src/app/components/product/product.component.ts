import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  date = new Date();

  addCart() {
    console.log('Agregando al carrito:', this.product.title);
    // Aquí puedes implementar la lógica del carrito
  }
}
