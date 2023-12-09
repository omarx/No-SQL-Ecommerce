const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controller/thoughts.controller');

router.route('/').get(getAllThoughts).post(addThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports=router;
