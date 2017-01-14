/**
 * Created by Fred on 13/01/2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ForumForumDoc } from '../data/documents/forum-forum-doc';

@Injectable()
export class ForumService {
  private forumsUrl = 'http://localhost:8080/forums';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getForums(): Promise<ForumForumDoc[]> {
    return this.http.get(this.forumsUrl)
      .toPromise()
      .then(response => response.json() as ForumForumDoc[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
