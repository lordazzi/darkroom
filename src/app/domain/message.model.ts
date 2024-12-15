import { ChatParticipant } from "./chat-participant.model";

export interface Message {
  time: number
  paragraphs: Array<string>;
  author: ChatParticipant;
  error?: string;
}
