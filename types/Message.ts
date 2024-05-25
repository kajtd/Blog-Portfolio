export interface Message {
  name: string;
  text?: string;
  html?: string;
  avatar: string;
  component?: unknown;
  right?: boolean;
  props?: Record<string, any>;
  userTyping?: boolean;
}
