import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  products: string;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentData.subscribe(res => {
      this.products = res;
    })
  }

}
