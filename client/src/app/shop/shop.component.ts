import { IType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brands';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];

  constructor(private ShopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.ShopService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }
  getBrands() {
    this.ShopService.getBrands().subscribe(response => {
      this.brands = response;
    }, error => {
      console.log(error);
    })
  }
  getTypes() {
    this.ShopService.getTypes().subscribe(response => {
      this.types = response;
    }, error => {
      console.log(error);
    })
  }


}
