import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPostArray: Array<object>;
  latestPostArray: Array<object>;

  constructor(private postService: PostsService) {
    postService.loadFeatured().subscribe(val=> {
      this.featuredPostArray= val;      
    })

    postService.loadLatest().subscribe(val=> {
      this.latestPostArray= val;      
    })
  }

}
