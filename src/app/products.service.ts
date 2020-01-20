import { Injectable } from '@angular/core';

import { Product } from './product.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsList: Product[] = [
    new Product(0,'Ściągana torba z długim paskiem', 'torba', 'żółty', 3, 'Średniej wielkości żółta torebka z długim paskiem przewiązana sznurkiem pozwalającym na ściagniecie jej i zawiązanie.', 'https://i.pinimg.com/236x/c8/b3/68/c8b368882396e20d568323ede686d492.jpg', 'https://www.youtube.com/watch?v=MAbONHNAE2Q'),
    new Product(1,'Elegancka torba na ramię z zawieszką', 'torba', 'niebieski', 3, 'Niebieska torba na ramię z ozdobnym chostem mieszcząca format A4.', 'http://trzykotypracownia.pl/wp-content/uploads/2019/07/IMG_20190710_172842-200x200.jpg', 'https://www.youtube.com/watch?v=MAbONHNAE2Q'),
    new Product(2,'Świąteczny koszyk', 'koszyk', 'czerwony, zielony', 5, 'Dwukolorowy koszyk ozdobny w klimcie świątecznym.', 'https://6.allegroimg.com/original/0cfded/c41977634025803caab340a94046', 'https://www.youtube.com/watch?v=MAbONHNAE2Q')
  ]
  
  selectedProduct: Product;
  editProduct = false;

  constructor() { }

  onSelectedProduct(productWasSelected: Product){
    this.selectedProduct = productWasSelected;
  }

  onChangeProductData(id, productData){
    this.productsList[id].name = productData.name;
    this.productsList[id].productType = productData.productType;
    this.productsList[id].ropeSize = productData.ropeSize;
    this.productsList[id].color = productData.color;
    this.productsList[id].description = productData.description;
  }

  // nazwa_funkcji(this.selectedProduct["id"]], obiekt)
}
