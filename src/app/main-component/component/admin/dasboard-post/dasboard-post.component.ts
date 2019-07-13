import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AngularFireStorage } from 'angularfire2/storage'
import { AuthService } from '../../../../services/auth.service'
import { PostService } from '../../../../services/post.service'
import { finalize } from 'rxjs/internal/operators/finalize';

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
    const file = event.target.files[0]
    const path = `posts/${file.name}`
   if(file.type.split('/')[0] !== 'image'){
     return alert ('solo se acepta archivo de imagen')
   }  
   else {
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    this.uploadPercent = task.percentageChanges();
    console.log('Image uploaded!');
    task.snapshotChanges().pipe(
      finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url));
    })
  )
  .subscribe();

   }  
  }
}
