import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../../app/services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPost = new Post();


  constructor(private postService: PostService,
    private router: Router) { }
  addPost() {
    this.postService.addPost(this.newPost).subscribe(response => {
      console.log(response);
    })
    this.router.navigate(['posts']);
  }
  ngOnInit(): void {
  }

}
