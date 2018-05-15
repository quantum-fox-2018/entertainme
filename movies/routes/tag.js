const router = require('express').Router()
const {
  getAllTags, addTag, deleteTag
} = require('../controllers/tag.controller')

router.get('/', getAllTags)
      .post('/', addTag)
      .delete('/:id', deleteTag)

module.exports = router