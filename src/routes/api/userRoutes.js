const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    deleteFriend,
    addFriend
} = require('../../controller/user.controller');


router.route('/').get(getUsers).post(addUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;