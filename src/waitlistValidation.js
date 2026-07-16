export const MAX_WAITLIST_EMAIL_LENGTH = 254;

export function validateWaitlistEmail(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return {
      isValid: false,
      message: "Please enter your email address.",
      normalizedValue: "",
    };
  }

  if (trimmedValue.length > MAX_WAITLIST_EMAIL_LENGTH) {
    return {
      isValid: false,
      message: "Email address is too long.",
      normalizedValue: "",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedValue)) {
    return {
      isValid: false,
      message: "Please enter a valid email address.",
      normalizedValue: "",
    };
  }

  const normalizedValue = trimmedValue.toLowerCase();

  return {
    isValid: true,
    message: "",
    normalizedValue,
  };
}
