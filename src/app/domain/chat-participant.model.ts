import { NostrPublicUser } from "@belomonte/ngx-parody-api";
import { Gender } from "./gender.enum";

export interface ChatParticipant extends NostrPublicUser {
  me: boolean;
  gender: Gender;
}
