import { DataService } from './../services/data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: any = [];
  constructor(private dataservice:DataService) {
  }

  ngOnInit(): void {
    this.dataservice.addProductToCart.subscribe(res => {
      this.products = res;
    })
  }

}
