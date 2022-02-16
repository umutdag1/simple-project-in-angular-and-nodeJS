import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent {

  posts = [];
  SearchElem: string;
  private httpExt;
  constructor(private http: HttpClient) {
    this.httpExt = http;
  }

  SearchForSubs() {
    if(this.SearchElem === ''){
      this.SearchElem = undefined;
    }
    this.httpExt
      .get('http://localhost:5000/api/getCustomerInfo/' + this.SearchElem)
      .subscribe(response => {
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
