import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{

  postData: any;
  similarPostArray: Array<object>;
  viewsDone: boolean= true;

  constructor (private route: ActivatedRoute, private postService: PostsService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {

      this.postService.loadOnePost(val.id).subscribe(post => {
        this.postData= post;

        if(this.viewsDone)
        {
          let postDataViews= this.postData.views + 1;
          this.postService.countViews(val.id, postDataViews);
          this.viewsDone= false;
        }

        this.loadSimilarPost(this.postData.category.categoryId);
      })
    })
  }

  loadSimilarPost(catId) {
    this.postService.loadSimilar(catId).subscribe(val => {
      this.similarPostArray= val;
    })
  }
}
