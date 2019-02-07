import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  GetAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  GetUseById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
