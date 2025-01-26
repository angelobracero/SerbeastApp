export function isEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.trim().length >= minLength;
}

export function hasMaxLength(value, maxLength) {
  return value.trim().length <= maxLength;
}

export function isValidPassword(value) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordRegex.test(value);
}

export function isEqualTo(value, otherValue) {
  return value === otherValue;
}

export function isPhoneNumber(value) {
  const phoneRegex = /^09\d{9}$/;
  return phoneRegex.test(value);
}

export function isValidName(value) {
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(value) && value.trim() !== "";
}
