import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts = [];
  SearchElem: string;
  private httpExt;
  constructor(private http : HttpClient) {
    /*http.get('http://localhost:5000/api/getCustomerInfo/5332858530')
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    })*/
    this.httpExt = http;
  }

  SearchForSubs(){
    this.httpExt
    .get('http://localhost:5000/api/getCustomerInfo/' + this.SearchElem)
    .subscribe(response => {
      //console.log(response);
      this.posts = response;
    },err => {
      //console.log(err.error);
      this.posts = err.error
    })
  }

  CheckIfPostsArray(){
    return Array.isArray(this.posts);
  }



}
