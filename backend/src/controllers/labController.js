const LabEntry = require('../models/LabEntry');

   exports.createLabEntry = async (req, res) => {
     try {
       const { title, content } = req.body;
       const labEntry = new LabEntry({
         user: req.user.id,
         title,
         content
       });
       await labEntry.save();
       res.status(201).json(labEntry);
     } catch (err) {
       res.status(400).json({ error: err.message });
     }
   };

   exports.getLabEntries = async (req, res) => {
     try {
       const labEntries = await LabEntry.find({ user: req.user.id });
       res.json(labEntries);
     } catch (err) {
       res.status(400).json({ error: err.message });
     }
   };