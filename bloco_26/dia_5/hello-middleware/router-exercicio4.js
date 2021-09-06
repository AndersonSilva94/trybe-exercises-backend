const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, post: 'lenga, lenga, blá blá blá' },
  { id: 2, post: 'fala, fala, sem parar' },
  { id: 3, post: 'lero, lero, blá blá' },
  { id: 3, post: 'não quero ouvir falar' },
];

// parte 1
const verifyPost = (request, response) => {
  const { id } = request.params;

  const findPost = posts.find((elem) => elem.id === parseInt(id))
  if (!findPost) return response.status(404).json({ message: "post not found" });

  return response.status(200).json(findPost);
}

// parte 2
router.get('/', function (_request, response) {
  return response.status(200).json({ posts })
})

// parte 1
router.get('/:id', verifyPost)

module.exports = router;