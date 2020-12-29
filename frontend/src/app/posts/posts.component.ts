import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../../app/services/post.service';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  data: any
  constructor(private postService: PostService) {}

ngOnInit() {
  this.getData()
 
}

getData(){
  this.postService.listPosts()
  .subscribe((data)=> {
    this.posts = data
  })
}

deletePost(id: number) {
  let conf = confirm("Are you sure ?");
  if (conf)
    
    this.postService.deletePost(id)
      .subscribe(() => {
          this.getData()
          console.log("deleted with sucess"), 
          (err)=>console.log(err);
        })}
}


