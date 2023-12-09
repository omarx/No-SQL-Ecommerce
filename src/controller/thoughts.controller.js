const {Thought, User}=require('../models');

const thoughtController={
    async getAllThoughts(req,res) {
        try {
            const allThoughts=await Thought.find({});
            res.status(200).json(allThoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneThought(req,res){
        try {
            const allThoughts=await Thought.findById(req.params.thoughtId);
            res.status(200).json(allThoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addThought(req, res) {
        try {
            const newThought = new Thought(req.body);
            const savedThought = await newThought.save();

            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json({ message: 'User not found with this username' });
            }

            await User.findByIdAndUpdate(
                user._id,
                { $push: { thoughts: savedThought._id } },
                { new: true, runValidators: true }

            );

            res.status(201).json(savedThought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const updateData = req.body;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                updateData,
                { new: true, runValidators: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }

            res.status(200).json(updatedThought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res){
        try {

            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);

            if(!thought){
                return res.status(404).json({message:"Thought not found"});
            }
            res.status(200).json({message:"Thought has been deleted"})
        }
        catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createReaction(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const reactionData = req.body;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: reactionData } },
                { new: true, runValidators: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }

            res.status(200).json(updatedThought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteReaction(req, res) {
        try {
            const thoughtId = req.params.thoughtId;
            const reactionId = req.params.reactionId;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: { _id: reactionId } } },
                { new: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id' });
            }

            res.status(200).json(updatedThought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports=thoughtController;