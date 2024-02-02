import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // static getPost(): Observable<any> {
  //   throw new Error('Method not implemented.');
  // }
  endpoint = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getPost(): Observable<Response> {
    return this.http.get<any>(this.endpoint);
  }
  addPost(post: Post): Observable<any> {
    return this.http.post(this.endpoint, post);
  }
  updatePost(id: string, updatePost: Post): Observable<any> {
    return this.http.patch(this.endpoint + '/' + id, updatePost);
  }
  deletePost(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
  }
}
