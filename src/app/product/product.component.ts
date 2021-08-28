import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

 products:any[]=[
   {pid:101,pname:'Gaming Laptop',pprice:56000.90,ppic:'assets/images/laptop.jpg',
   pmfd:'07/26/2021'},
   {pid:102,pname:'Fashion Pro',pprice:7999.99,ppic:'assets/images/pro4.jpg',
   pmfd:'12/12/2020'},
   {pid:110,pname:'Grooming Pro',pprice:35499.59,ppic:'assets/images/pro3.jpg',
   pmfd:'06/30/2021'},
   {pid:105,pname:'Snacks Pro',pprice:4500.50,ppic:'assets/images/pro2.jpg',
   pmfd:'01/02/2021'},
   {pid:119,pname:'Speakers',pprice:2999.99,ppic:'assets/images/pro1.jpg',
   pmfd:'08/18/2021'},
   {pid:103,pname:'Camera',pprice:42400.51,ppic:'assets/images/procam.jpg',
   pmfd:'07/23/2021'}
 ];
}
 
//  imagePath:string='assets/images/pro1.jpg';  
// products:any[]=[
//   {pid:101,pname:'professional camera',
//   pprice:56000.90,
//   ppic:'assets/images/procam.jpg',
//   pmfd:'12/2/2020'},
// ]
//Create the list of at least six products and Display in visually stunning style
// on product.html page
//Share: product.component.ts,product.component.html 
//and print screen of final output 


