import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "posts", component: PostsComponent },
  { path: "add-post", component: AddPostComponent },
  { path: "update-post/:id", component: UpdatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
