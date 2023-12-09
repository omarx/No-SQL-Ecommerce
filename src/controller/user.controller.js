const { Thought, User}=require('../models/index');

const userController={
    async getUsers(req,res){
        try{
            const allUsers = await User.find({});
            res.status(200).json(allUsers);

        }catch(err){
             console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneUser(req, res) {
        try {
            const user = await User.findById(req.params.userId)
                .populate('friends')
                .populate('thoughts');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addUser(req,res){
        try{
            const createUser=await User.create(req.body);
            res.status(200).json(createUser);

        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
   async updateUser(req,res){
        try{
           const updateUser=await User.findByIdAndUpdate(req.params.userId,req.body);

           if(!updateUser){
               return res.status(404).json({message:"User not found"});
           }

           res.status(200).json(updateUser);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
   },
    async deleteUser(req, res) {
        try {
            const user = await User.findById(req.params.userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            await Thought.deleteMany({ username: user.username });

            await User.findByIdAndDelete(req.params.userId);

            res.status(200).json({ message: 'User and their thoughts successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addFriend(req, res) {
        try {
            const userId = req.params.userId;
            const friendId = req.params.friendId;

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $addToSet: { friends: friendId } },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const userId = req.params.userId;
            const friendId = req.params.friendId;
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $pull: { friends: friendId } },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }


}

module.exports=userController;