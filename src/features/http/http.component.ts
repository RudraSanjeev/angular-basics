import { Component, Input } from '@angular/core';
import { HttpService } from '../../service/http/http.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { setBackground } from '../customDirective/setBackground';
import { setBorder } from '../customDirective/setBorder';
import { setInput } from '../customDirective/setInput';
import { setDisabledDirective } from '../customDirective/conditionalAttribute.Directive';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    setBackground,
    setBorder,
    setInput,
    setDisabledDirective,
  ],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss',
})
export class HttpComponent {
  posts: Post[] = [];
  constructor(private httpservice: HttpService) {}
  ngOnInit() {
    this.httpservice.getPost().subscribe({
      next: (response: any) => {
        // console.log(this.posts);
        this.posts = response;
      },
    });
  }

  singlePost = {
    id: 1,
    title: 'new post1 title',
    userId: 1,
    body: 'new post body1',
  };
  // newPost: Post;

  createNewPost() {
    // optimistic way
    this.posts.splice(0, 0, this.singlePost);

    this.httpservice.addPost(this.singlePost).subscribe({
      next: (response: any) => {
        // this.newPost = response;
        // console.log('click');
        // this.posts.splice(0, 0, this.singlePost);
      },
      error: (error: any) => {
        // handling optimistic if got an error
        this.posts.splice(0, 1);
        if (error) {
          alert('not found !');
        }
        console.log(error);
      },
    });
  }

  inputVal: string = 'hello world !';
  disabledStyle: any = false;
}
