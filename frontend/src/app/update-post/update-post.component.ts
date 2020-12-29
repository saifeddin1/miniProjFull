import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../app/services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styles: []
})
export class UpdatePostComponent implements OnInit {
  currentPost = new Post;


  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }
  ngOnInit(): void {
    this.postService.showPost(this.activatedRoute.snapshot.params.id)
      .subscribe(res=> {        
        this.currentPost = res;
      })

  }

  updatePost() {
    this.postService.updatePost(this.activatedRoute.snapshot.params.id, this.currentPost)
      .subscribe(res => console.log(res));
    this.router.navigate(['posts']);
  }

}
