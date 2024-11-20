export interface Message {
  time: number
  paragraphs: Array<string>;

  /**
   * pubkey
   */
  author: string | null;
  error?: string;
}
