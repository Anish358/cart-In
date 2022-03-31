//error controller function
module.exports = (err, req, res, next) => {
  console.log(err.message, err.code);
  let errors = { name: "", email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    res.status(400).json({ errors });
  }
  // validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  //Incorrect email, password
  if (err.message.includes("Email")) {
    errors.email = err.message;
  } else {
    errors.password = err.message;
  }

  res.status(400).json({ errors });
};
