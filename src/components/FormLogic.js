import { useEffect, useState } from "react";

const FormLogic = (callback, validate) => {
  const [values, setValues] = useState({
    company: "",
    name: "",
    // phone: '',
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect (
    () => {
      if(Object.keys(errors).length === 0 && isSubmitting ) {
        callback();
      }
  }, [errors])

  return { handleChange, values, handleSubmit, errors};
};

export default FormLogic;
