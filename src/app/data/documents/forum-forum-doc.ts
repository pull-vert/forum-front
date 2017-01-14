/**
 * Created by Fred on 08/01/2017.
 */
import { AbstractSgDoc } from "./abstract-sg-doc";

export class ForumForumDoc extends AbstractSgDoc {

  name : string;
  desc : boolean;
  order : number;
  lastPostId : string;
  topic : string;
  post : string;

  // Valeurs AUTH pour les niveaux
  authView : string;
  authPost : string;
  authTopic : string;
  authNews : string;
  authMod : string;
}
