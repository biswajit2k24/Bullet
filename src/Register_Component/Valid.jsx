const validate = (formData) => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.currentStatus) newErrors.currentStatus = "Status is required";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
    if (!formData.receiveEmails) newErrors.receiveEmails = "Please select an email preference";
  
    return newErrors;
  };
  
  export default validate;
  











// export default function Validation(values, loginMethod) {
//     const errors = {};
  
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
//     const phone_pattern = /^[2-9]{2}[0-9]{8}$/;
//     if (loginMethod === "email") {
//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (!email_pattern.test(values.email)) {
//         errors.email = "Email didn't match the pattern";
//       }
//     } else {
//       if (!values.phone) {
//         errors.phone = "Phone number is required";
//       } else if (!phone_pattern.test(values.phone)) {
//         errors.phone = "Phone number didn't match the pattern";
//       }
//     }
  
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (!password_pattern.test(values.password)) {
//       errors.password = "Password didn't match the pattern";
//     }
  
//     return errors;
//   }
  