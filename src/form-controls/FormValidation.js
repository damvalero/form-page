export default function FormValidation(values) {
  let errors = {};

  if (!values.company.trim()) {
    errors.company = "Company name required";
  }

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
