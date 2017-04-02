import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { ForumForumDoc } from '../data/documents/forum-forum-doc';

@Injectable()
export class ForumService {
  private forumsUrl = 'https://localhost:8080/forums';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private authHttp: AuthHttp) {
  }

  getForums(): Promise<ForumForumDoc[]> {
    return this.authHttp.get(this.forumsUrl)
      .toPromise()
      .then(response => response.json() as ForumForumDoc[])
      .catch(ForumService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
