import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { ForumForumDoc } from './data/documents/forum-forum-doc';

import { ForumService } from './services/forum.service';

@Component({
  /*moduleId: module.id,*/
  selector: 'my-forums',
  templateUrl: './forums.component.html',
  styleUrls: [ './forums.component.css' ]
})
export class ForumsComponent implements OnInit {
  forums: ForumForumDoc[];

  constructor(
    // private router: Router,
    private forumService: ForumService) { }

  getForums(): void {
    this.forumService.getForums().then(forums => this.forums = forums);
  }

  ngOnInit(): void {
    this.getForums();
  }

  onSelect(forum: ForumForumDoc): void {
    // this.router.navigate(['/forum', forum._id]);
  }
}
