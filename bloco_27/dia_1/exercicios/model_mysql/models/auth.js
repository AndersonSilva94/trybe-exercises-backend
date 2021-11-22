const HTTP_BAD_REQUEST_STATUS = 400;

const isValidUsername = (request, response, next) => {
  const { firstName, lastName } = request.body;

  if (!firstName || firstName === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'firstName' é obrigatório"
  });
  if (!lastName || lastName === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'lastName' é obrigatório"
  });

  next();
};

const isValidEmail = (request, response, next) => {
  const { email } = request.body;

  if (!email || email === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'email' é obrigatório"
  });

  next();
};

const isValidPassword = (request, response, next) => {
  const { password } = request.body;

  if (!password || password === '') return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'password' é obrigatório"
  });

  if (password.length < 6) return response.status(HTTP_BAD_REQUEST_STATUS).json({
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres"
  });

  next();
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword
}