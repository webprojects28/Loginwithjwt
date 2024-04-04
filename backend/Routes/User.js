const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
//gets back all the users
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
});
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no token" });
    }
    const decoded = await jwt.verify(token,process.env.KEY);
    next()
  } catch (err) {
    return res.json(err);
  }
};
router.get("/verify", verifyUser , (req, res) => {
  return res.json({status:true,message:"authorized"})
});

router.get('/logout',(req,res)=>{
  console.log("logout is success")
  res.clearCookie('token')
  return res.json({status:true})
})



//submits a user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    console.log(user);
    const savedUser = await user.save(); //this returns a promise
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
    console.log(error);
  }
});

//authenticate a user
router.post("/authenticate", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      const token = jwt.sign({ username: user.username }, process.env.KEY, {
        expiresIn: "10d",
      });
      res.cookie("token", token, { httpOnly: true, maxAge: 36000000 });
      res.status(200).json({
        message: "Login successful",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

//forgot-password a user
router.post("/forgotpassword", async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });
    console.log("i am here", user);
    if (!user) {
      res.status(401).json({
        message: "User Does Not Exists ",
        error: "User not found",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "entkira48@gmail.com",
        pass: "poynjipgwueyhsmf",
      },
    });

    var mailOptions = {
      from: "entkira48@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:3000/resetpassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (error) {
    console.log("the error is ", error);
    res.status(400).json({
      message: error.message,
      error: error.message,
    });
  }
});

//authenticate a user
router.post("/resetpassword/:token", async (req, res) => {
  const password = req.body.password;
  const { token } = req.params;
  console.log("chaging the password ", password);
  try {
    const decoded = jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    await User.findByIdAndUpdate({ _id: id }, { password: password });
    return res.json({ status: true, message: "updated Password" });
  } catch (error) {
    console.log("error is :", error);
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

//get back a specific user
router.get("/:userId", async (req, res) => {
  try {
    const specificUser = await User.findById(req.params.userId);
    console.log("got a specific user ");
    res.json(specificUser);
  } catch (error) {
    res.json({ message: error });
  }
});
//delete user
router.delete("/:userId", async (req, res) => {
  try {
    console.log("removing something ", req.params.userId);

    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

//update a user
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
});




module.exports = router;
