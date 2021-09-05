const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  // recebe os valores no header da requisição
  const { username, password } = req.headers;

  // verifica se ambos estão vazios
  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  // verfica se ou nome é igual ao salvo no db ou senha é igual a salva no db
  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  // caso seja, pode seguir adiante, a autenticação foi feita com sucesso!
  next();
};

module.exports = authMiddleware;