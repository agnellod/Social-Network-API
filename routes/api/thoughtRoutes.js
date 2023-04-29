const router = require('express').Router();
const {
    getAllthought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getAllthought).post(createThought);

// /api/thought/:id
router
.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

module.exports = router;