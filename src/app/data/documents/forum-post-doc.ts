/**
 * Created by Fred on 08/01/2017.
 */
import { AbstractSgDoc } from "./abstract-sg-doc";

export class ForumPostDoc extends AbstractSgDoc {

  idCreateMember : string;
  content : string;
  createTime : Date;
  topicId : string;
  forumId : string;
}
