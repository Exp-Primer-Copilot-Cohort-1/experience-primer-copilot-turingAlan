//create a server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment_controller');

//route for creating comment
router.post('/create',commentController.create);

//route for deleting comment
router.get('/destroy/:id',commentController.destroy);

module.exports === router;