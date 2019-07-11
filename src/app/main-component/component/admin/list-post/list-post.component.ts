import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { PostService } from '../../../../services/post.service'
import { Post } from '../../../../models/post';
import { AuthService } from '../../../../services/auth.service'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts: Observable<Post[]>
  constructor(private postService: PostService, public auth: AuthService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }

  delete(id: string) {
    this.postService.delete(id)
  }

}
