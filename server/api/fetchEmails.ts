import type { Email, EmailResponse } from "~/types/Email";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.private.apiKey;

  const response = await $fetch<EmailResponse>(
    `https://api.buttondown.email/v1/emails?status=sent&excluded_fields=body`,
    {
      method: "get",
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    }
  );

  const filteredEmails: Email[] = response.results
    .slice(-3)
    .map((email: Email) => ({
      id: email.id,
      subject: email.subject,
      creation_date: email.creation_date,
      absolute_url: email.absolute_url,
      image: email.image,
      secondary_id: email.secondary_id,
    }));

  return filteredEmails;
});
