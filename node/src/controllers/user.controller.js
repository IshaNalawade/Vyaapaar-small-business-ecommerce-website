const User = require("../models/user.model");
const { errorHandler } = require("../utils/errorHandler");
const addproducts = require('../models/product.form')
const Img = require('../models/img')
const Buyer_Data = require('../models/buyer.data')
const Seller_Data = require('../models/seller.data')
const Seller = require('../models/seller')

module.exports = {
  getUser: (req, res) => {
    res.status(200).send({ user: req.user });
  },
  registerUser: (req, res) => {
    errorHandler(req, res, async () => {
      const newUser = await User.create({ ...req.body });
      res.status(201).json({ message: "success", user: { ...newUser, password: null } });
    });
  },
  login: (req, res) => {
    errorHandler(req, res, async () => {
      const { password, email } = req.body;
      const token = await User.login(email, password);
      if (token) {
        res.cookie("jwt", token, {
          maxAge: 259200000,
        });
        res.status(201).json({
          mesage: "login Successful",
          user: await User.findOne({ email }),
        });
      } else {
        res.clearCookie("jwt");
        res.status(403).json({ mesage: "Login unsuccessful" });
      }
    });
  },
  logout: (req, res) => {
    errorHandler(req, res, () => {
      try {
        req.logout();
      } catch (err) {
        console.log(err);
      }
      res.clearCookie("jwt");
      res.json({ mesage: "Logged out successfully" });
    });
  },
  addProduct: (req,res)=>{
    const prod=new addproducts(req.body)
    prod.save().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
  },
  getProduct : (req,res)=>{
    addproducts.find((err,todos)=>{
              if(err)
              {
                  console.log(err)
              }
              else{
                  res.status(200).json(todos);
              }
          })
  },
  getImg : (req,res)=>{
    Img.find((err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.status(200).json(data);
      }
    })
  },
  addbuyer : (req,res)=>{
    const data=new Buyer_Data(req.body)
    data.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
  },
  addseller : (req,res)=>{
    const data=new Seller_Data(req.body)
    data.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
  },
  getbuyer :(req,res)=>{
    errorHandler(req,res,async ()=>{
      const data = await Seller_Data.find({email : req.body.email})
      res.status(200).json(data);
    }); 
  },
  getseller :(req,res)=>{
    errorHandler(req,res,async ()=>{
      const data = await Buyer_Data.find({email : req.body.email})
      res.status(200).json(data);
    }); 
  },
  addsellerproducts : (req,res)=>{
    console.log(req.body)
    const data=new Seller(req.body)
    data.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
  },
  getsellproducts : (req,res) =>{
    errorHandler(req,res,async () => {
      Seller.find((err,data)=>{
        if(err){
          console.log(err)
        }else{
          
          res.status(200).json(data);
        }
      })
    })
  }
};
