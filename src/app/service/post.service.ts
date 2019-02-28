import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, retry} from 'rxjs/operators';
import {Post} from '../model/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  serviceUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) {
  }

  // TODO implement get user my-account
  getPosts() {
    return this.http.get(this.serviceUrl).pipe(
      retry(3),
      map(data => data)
    );
  }

}
