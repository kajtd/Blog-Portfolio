export interface Email {
  id: string;
  creation_date: string;
  secondary_id: number;
  subject: string;
  absolute_url: string;
  image: string;
}

export interface EmailResponse {
  results: Email[];
  count: number;
}
