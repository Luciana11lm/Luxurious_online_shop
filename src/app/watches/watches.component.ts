import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrl: './watches.component.scss'
})
export class WatchesComponent {

  WatchesList: ProductsWatches[] = [
  {index:1 ,description: 'VIVIENNE WESTWOOD The Wallace Watch',               name: 'MOVADO MUSEUM', price: '2.500$',  material: 'gold', photo: 'assets/imgs/watches_cards/c1.jpeg'},
  {index:2 ,description: 'Boss Ladies BOSS Hailey Link Bracelet Watch',       name: 'Helium',        price: '4.0026$', material: 'gold', photo: 'assets/imgs/watches_cards/c2.jpeg'},
  {index: 3,description: 'MICHAEL Michael Kors Layton Watch',                 name: 'Lithium',       price: '6.941$',  material: 'gold', photo: 'assets/imgs/watches_cards/c3.jpeg'},
  {index: 4,description: 'Ted Baker Stainless Steel Fashion Analogue Quartz', name: 'Beryllium',     price: '9.0122$', material: 'gold', photo: 'assets/imgs/watches_cards/c4.jpeg'},
  {index: 5,description: 'Ted Baker Stainless Steel Fashion Analogue Quartz', name: 'Boron',         price: '10.811$', material: 'gold', photo: 'assets/imgs/watches_cards/c5.jpeg'},
  {index: 6,description: 'Vivienne Westwood Montagu Watch',                   name: 'Carbon',        price: '12.107$', material: 'gold', photo: 'assets/imgs/watches_cards/c6.jpeg'},
  {index: 7,description: 'Swarovski Octea Lux Moon Analogue Watch',           name: 'Carbon',        price: '12.400$', material: 'gold', photo: 'assets/imgs/watches_cards/c7.jpeg'},
  {index: 8,description: 'Boss Ladies BOSS Novia Bracelet Watch',             name: 'Carbon',        price: '15.000$', material: 'gold', photo: 'assets/imgs/watches_cards/c8.jpeg'},
  {index: 9,description: 'Boss Ladies BOSS Novia Bracelet Watch',             name: 'Carbon',        price: '15.000$', material: 'gold', photo: 'assets/imgs/watches_cards/c8.jpeg'},
  {index: 10,description: 'Boss Ladies BOSS Novia Bracelet Watch',            name: 'Carbon',        price: '15.000$', material: 'gold', photo: 'assets/imgs/watches_cards/c10.jpeg'},
];

constructor(private router: Router) {
}

edit(id: number): void{
  this.router.navigate(['/product_details/' + id]) 
}
}

interface ProductsWatches {
  index: number;
  description: string;
  name: string;
  price: string;
  material: string;
  photo: string;
};

