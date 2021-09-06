// parte 3
const errorRouter = (err, _request, response, _next) => {
  return response.status(404).json({ message: err.message })
};

module.exports = { errorRouter };