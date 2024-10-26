import { isValidEmail } from "@/utils/util";

export function useNewsletterSubscription(onSuccess?: () => void) {
  const email = ref("");
  const loading = ref(false);
  const alert = ref<"success" | "error" | "">("");
  const alertTitle = ref("");
  const alertDescription = ref("");

  const subscribeToNewsletter = async () => {
    try {
      if (!isValidEmail(email.value) || !email.value) {
        alert.value = "error";
        alertTitle.value = "Invalid Email";
        alertDescription.value =
          "Oops, it looks like this is not a valid email. Please try again.";
        return;
      }
      loading.value = true;
      const result = await $fetch("/api/subscribe", {
        method: "post",
        body: { email: email.value },
      });
      console.log("Subscription successful:", result);
      alert.value = "success";
      alertTitle.value = "Almost there!";
      alertDescription.value =
        "Thanks for signing up! Please check your inbox to confirm your subscription.";
      email.value = "";

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Failed to subscribe:", error);
      alert.value = "error";
      alertTitle.value = "Oops, something went terribly wrong!";
      alertDescription.value =
        "Try again. Make sure you're using the right email :)";
    } finally {
      loading.value = false;
      setTimeout(() => {
        alert.value = "";
      }, 3000);
    }
  };

  return {
    email,
    loading,
    alert,
    alertTitle,
    alertDescription,
    subscribeToNewsletter,
  };
}
