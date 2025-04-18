const jwt = require('jsonwebtoken');
   const bcrypt = require('bcrypt');
   const User = require('../models/User');

   exports.register = async (req, res) => {
     try {
       const { username, password, email } = req.body;
       const user = new User({ username, password, email });
       await user.save();
       res.status(201).json({ message: 'User registered successfully' });
     } catch (err) {
       res.status(400).json({ error: err.message });
     }
   };

   exports.login = async (req, res) => {
     try {
       const { username, password } = req.body;
       const user = await User.findOne({ username });
       if (!user) return res.status(404).json({ error: 'User not found' });

       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.json({ token });
     } catch (err) {
       res.status(400).json({ error: err.message });
     }
   };