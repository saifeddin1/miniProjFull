import { Injectable } from '@angular/core';
import { Post } from './../../app/models/post.model'
import { Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[];
  post: Post;
  url: string = 'http://127.0.0.1:8000/api/posts/'
  constructor(private http:HttpClient) {}

  listPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
    
  }
  showPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.url}${id}`);
  }
  addPost(post: Post):Observable<any> {
    return this.http.post(this.url, post)
  }
  
  updatePost(id: number, post:Post):Observable<Post> {
    return this.http.put<Post>(`${this.url}${id}/`, post);
  }

  deletePost(id):Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}


