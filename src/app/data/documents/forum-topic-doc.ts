/**
 * Created by Fred on 08/01/2017.
 */
import { AbstractSgDoc } from "./abstract-sg-doc";

export class ForumTopicDoc extends AbstractSgDoc {

  forumId : string;
  title : string;
  createUser : string;
  seen : number;
  createTime : Date;
  genre : string;
  lastPost : string;
  firstPost : string;
  post : string;
}
