import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  
  SelecetionList: SelectionArray[] = [
    {photo1: 'assets/imgs/product-details/gold.jpeg', photo2:'assets/imgs/product-details/silver.jpeg', photo3: 'assets/imgs/product-details/rose-gold.jpeg'}
  ];
  
  ProductsList: ProductDetails[] = [
    {index: 1, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Add a practical and statement touch to your collection with the The Wallace Watch brought to you by Vivienne Westwood. Crafted from a premium Stainless Steel composition, this everyday essential watch adorns a debossed filigree jacquard etching to the silver face with contrasting rose gold-toned markings and hands for a premium touch. Designed with Vivienne Westwood branded typography and the signature orb logo to the face, this watch is secured with a butterfly clasp to the silver and rose gold tones on the metal strap, complete with a quartz movement. Sold in a branded box.',               name: 'MOVADO MUSEUM', price: '2.500$',  photo: 'assets/imgs/watches_cards/c1.jpeg'},
    {index: 2, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Her style, her statement. The vintage-inspired yet utterly modern BOSS Hailey is a unique two-hand Jewellery watch with a chain-link bracelet that can be double-wrapped with coordinating pieces from the BOSS Jewellery collection of the same name. Featuring a 28mm case, yellow gold dial and available with a yellow gold or stainless steel link bracelet. Water resistant to 3ATM.',       name: 'Helium',        price: '4.0026$', photo: 'assets/imgs/watches_cards/c2.jpeg'},
    {index: 3, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Refresh your accessories with a elegant and luxurious touch that portrays impeccable style with the Layton Watch by MICHAEL Michael Kors. Expertly crafted in a stainless steel, bracelet design its elegant 38mm watch dial and analogue display, ensures this watch exudes sophistication and timeless elegance. Powered by a durable quartz movement, it ensures accurate timekeeping using stylish batons and sleek hands. Its display is protected with a scratch-resistant mineral crystal glass that protects the watch face from everyday wear and tear. For additional practicality this watch is water resistant up to 50 m which enables it to be kept on whilst in the shower or swimming. Securely and easily fastened using a deployant closure which adds convenience and security. Allow the Layton Watch by MICHAEL Michael Kors to adorn your wrist, an exquisite accessory that seamlessly blends accessibility and luxury. Accompanied in a protective box this accessory is sure to make a statement and complete any sophisticated ensemble.',                 name: 'Lithium',       price: '6.941$', photo: 'assets/imgs/watches_cards/c3.jpeg'},
    {index: 4, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Finish every look with subtle sparkle thanks to the HANNAHH watch from Ted. With a stainless steel bracelet, the top ring is embellished with crystals for a touch of glamour.', name: 'Beryllium',     price: '9.0122$', photo: 'assets/imgs/watches_cards/c4.jpeg'},
    {index: 5, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Finish every look with subtle sparkle thanks to the HANNAHH watch from Ted. With a stainless steel bracelet, the top ring is embellished with crystals for a touch of glamour.', name: 'Boron',         price: '10.811$', photo: 'assets/imgs/watches_cards/c5.jpeg'},
    {index: 6, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Inspired by 17th century design and architecture, specifically the Montagu House and follows influence from the Wallace collection. A merging of punk, history and architecture. The bezel is etched with Roman numerals, moulded dodecagon dial. With applied pyramid markings all accented with a faceted bracelet.',                   name: 'Carbon',        price: '12.107$', photo: 'assets/imgs/watches_cards/c6.jpeg'},
    {index: 7, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'In celebration of the 50th anniversary of the first moon landing, this special edition of our bestselling Octea Lux features a fully functional moonphase dial, a first for Swarovski. Embellished with a galaxy of clear crystals, the blue mother-of-pearl dial harmonizes elegantly with the dark indigo crystal bezel and blue genuine leather strap with an embossed crocodile structure. A contemporary and sophisticated timepiece, ideal for everyday wear. Specifications: Case 39mm water resistant to 50 m K1 Mineral Glass Swiss Made.',           name: 'Carbon',        price: '12.400$',  photo: 'assets/imgs/watches_cards/c7.jpeg'},
    {index: 8, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'], description: 'Sporty and chic, the BOSS Novia is a boyfriend-style watch that reflects the confidence and elegance of the BOSS woman. Featuring a 38mm case, sunray dial with crystal markers, tachymeter bezel, bracelet strap and push button deployment. Water resistant to 5ATM',             name: 'Carbon',        price: '15.000$', photo: 'assets/imgs/watches_cards/c8.jpeg'},
    {index: 9, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'],description: 'Boss Ladies BOSS Novia Bracelet Watch',             name: 'Carbon',        price: '15.000$', photo: 'assets/imgs/watches_cards/c8.jpeg'},
    {index: 10, selection: this.SelecetionList[0], selectMaterial: ['assets/imgs/product-details/gold.jpeg', 'assets/imgs/product-details/silver.jpeg', 'assets/imgs/product-details/rose-gold.jpeg'],description: 'Boss Ladies BOSS Novia Bracelet Watch',            name: 'Carbon',        price: '15.000$', photo: 'assets/imgs/watches_cards/c10.jpeg'},
  ];

  constructor(private activateRoute: ActivatedRoute, public dialog: MatDialog) {
  }
  index = 1;
  product= this.ProductsList[this.index];
  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
this.index = param['idindex'];
console.log(this.index);
this.product= this.ProductsList[this.index];
    })
  };

  openDialog(){
    this.dialog.open(DialogBoxComponent, {
      width: '150px',
      data: "Added to cart",
      position:{
        top: '780px'
      }
    });
  }
}

interface ProductDetails {
  index: number;
  selection: any;
  selectMaterial: string[];
  description: string;
  name: string;
  price: string;
  photo: string;
};

interface SelectionArray {
  photo1: string;
  photo2: string;
  photo3: string;
}

function openDialog() {
  throw new Error('Function not implemented.');
}

