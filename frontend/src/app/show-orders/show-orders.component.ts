import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent {
  posts = [];
  SearchElem: string;
  private httpExt;
  constructor(private http: HttpClient) {
    this.httpExt = http;
  }

  SearchForOrders() {
    if(this.SearchElem === ''){
      this.SearchElem = undefined;
    }
    this.httpExt
      .get('http://localhost:5000/api/getSubscriptionOrders/' + this.SearchElem)
      .subscribe(response => {
        for(let i = 0; i < response.length; i++)
          response[i].deliveryDate = new Date(response[i].deliveryDate).toLocaleString()
        console.log(response);
        this.posts = response;
      }, err => {
        console.log(err.error);
        this.posts = err.error
      })
  }

  CheckIfPostsArray() {
    return Array.isArray(this.posts);
  }



}
