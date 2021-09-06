// exercício 1
const verifyUser = (request, response, next) => {
  const { username } = request.body;

  if(!username || username.length < 3)
    return response.status(400).json({  message: "invalid user"  });

    next();
}

const verifyEmail = (request, response, next) => {
  const { email } = request.body;
  const emailRegex = /^\w+@\w+.com$/;
  const testEmail = emailRegex.test(email);

  if(!testEmail)
    return response.status(400).json({  message: "invalid email"  });

  next();
}

const verifyPassword = (request, response, next) => {
  const { password } = request.body;
  const passwordRegex = /^[0-9]+$/;
  const testPassword = passwordRegex.test(password);

  if (password.length < 4 || password.length > 8 || !testPassword)
    return response.status(400).json({  message: "invalid password"  });

  next();
}
  
module.exports = {
  verifyUser,
  verifyEmail,
  verifyPassword
};