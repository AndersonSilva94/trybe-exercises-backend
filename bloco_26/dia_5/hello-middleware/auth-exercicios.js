// exercício 1
const authMiddleware = (request, response, next) => {
  const { username, email, password } = request.headers;

  if(!username && !email && !password)
    return response.status(400).json({  message: "invalid data"  });

  const emailRegex = /^\w+@\w+.com$/;
  const verifyEmail = emailRegex.test(email);

  const verifyPass = (pass) => {
    const passwordRegex = /^[0-9]+$/;
    const verifyPassword = passwordRegex.test(pass)
    if (pass.length < 4 || pass.length > 8 || !verifyPassword) return false;
    return true;
  }

  if(!verifyEmail || username.length < 3 || !verifyPass(password))
    return response.status(400).json({  message: "invalid data"  });

  next();
}

module.exports = authMiddleware;