import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  person: Object;
  posts: Object;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.person = {Name:{FirstName:'John',LastName:'Doe'}};
    // this.person = {};

    this.data.GetAllPosts().subscribe((posts) => {
      let postArray = <Array<any>>posts;
        postArray.forEach(post => {
          this.data.GetUseById(post.userId).subscribe((user) => {
            post.user = user;
            console.log('25',post.user);
          });
        });
      this.posts = postArray;
    });

  }
}
