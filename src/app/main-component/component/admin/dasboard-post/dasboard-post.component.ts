import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AngularFireStorage } from 'angularfire2/storage'
import { AuthService } from '../../../../services/auth.service'
import { PostService } from '../../../../services/post.service'

@Component({
  selector: 'app-dasboard-post',
  templateUrl: './dasboard-post.component.html',
  styleUrls: ['./dasboard-post.component.scss']
})
export class DasboardPostComponent implements OnInit {
  content: string
  image: string
  title: string
  saving = 'Create Post'
  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  
  constructor(private auth: AuthService, private storage: AngularFireStorage, private pService: PostService) { }

  ngOnInit() {
  }
  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title
    }
    this.pService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
  }


  uploadImage(event) {
    
  }
}
