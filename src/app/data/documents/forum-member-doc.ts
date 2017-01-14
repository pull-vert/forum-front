/**
 * Created by Fred on 08/01/2017.
 */
import { AbstractSgDoc } from "./abstract-sg-doc";

export class ForumMemberDoc extends AbstractSgDoc {

  eMail : string;
  pseudo : string;
  pass : string;
  roles : Array<String>;
  avatar : string;
  rank : number;
  lastVisit : Date;
  Date : Date;
  postCount : number;
}
