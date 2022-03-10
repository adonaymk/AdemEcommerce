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
  brandIdSelected: number = 0;
  typeIdSelected: number = 0;

  constructor(private ShopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.ShopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }
  getBrands() {
    this.ShopService.getBrands().subscribe(response => {
      this.brands = [{ id: 0, name: 'All' }, ...response];// list all brands with 'All' next to it
    }, error => {
      console.log(error);
    })
  }
  getTypes() {
    this.ShopService.getTypes().subscribe(response => {
      this.types = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    })
  }
  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
