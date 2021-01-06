import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'shoppingcart';
  count = [];
  ngOnInit(){
  }

  constructor(private dataservice: DataService) { }

  addProductToCart(item) {
    this.count.push(item)
    this.dataservice.addProduct(this.count)
  }

  array = [
    {
      "name": "AbCd",
      "price": "500",
      "img": "../../assets/1.jpg"
    },
    {
      "name": "bCd",
      "price": "500",
      "img": "../../assets/2.jpg"

    },
    {
      "name": "dbCd",
      "price": "500",
      "img": "../../assets/3.jpg"

    },
    {
      "name": "AbCd",
      "price": "500",
      "img": "../../assets/4.jpg"

    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
    {
      "name": "AbCd",
      "price": "500"
    },
  ];

}
