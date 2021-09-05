const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  // recebe os valores no header da requisição
  const { username, password } = req.headers;

  // verifica se ambos estão vazios
  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  // encontra qual o usário que tem o mesmo nome passado na req.headers;
  const foundUser = validUsers.find((user) => user.username === username);

  // senão achar, retorna um erro
  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  // se nome e senha forem diferente do que está salvo no db, retorne um erro
  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  // caso esteja ok, pode seguir adiante, a autenticação foi feita com sucesso!
  next();
};

module.exports = authMiddleware;