import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Img from "./DemoSchema.js"
import ProductFormSchema from "./Schema/DashboardUser/ProductFormSchema.js";
import CartSchema from "./Schema/Customer/CartSchema.js";
// require("dotenv").config();

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

// const uri = 'mongodb+srv://admin:Naruto123@cluster0.666jb.mongodb.net/vyaapaar?retryWrites=true&w=majority'
// mongoose.connect(uri,{useNewUrlParser:true});
// const connection = mongoose.connection;
// connection.once('open' , ()=>{
//     console.log('Mongo connected');
// })

const connectionUrl='mongodb+srv://admin:Naruto123@cluster0.666jb.mongodb.net/vyaapaar?retryWrites=true&w=majority'
mongoose.connect(connectionUrl,{
 
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection

db.once('open',()=>{
    console.log("Db connected!")
})

// ---------------------------------------------------------------------------------------------------------------//
// ------------------------------------------------SELLER------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------//


app.post("/",(req,res)=>{
  const imgURL=req.body;
  
  Img.create(imgURL,(err,data)=>{
      if(err)
      {
          res.status(500).send(err.message)
      }
      else{
          res.status(201).send(data)
      }
  })
});
app.get("/",(req,res)=>{
  Img.find((err,data)=>{
      if(err)
      {
          res.status(500).send(err.message)
      }
      else{
          res.status(200).send(data)
      }
  })
})
// ----------------------PRODUCT FORM---------------------------------
app.get('/user/get-product',(req,res)=>{
    ProductFormSchema.find((err,todos)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.status(200).send(todos)
            // res.json(todos)
        }
    })
})

app.post('/user/add-product',(req,res)=>{
    const prod=new ProductFormSchema(req.body)
    prod.save().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
})

// ----------------------PRODUCT FORM---------------------------------



// ---------------------------------------------------------------------------------------------------------------//
// ------------------------------------------------CUSTOMER------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------//

app.post('/customer/add-to-cart',(req,res)=>{
    const prod=new CartSchema(req.body)
    prod.save().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
})

app.get('/customer/cart',(req,res)=>{
    ProductFormSchema.find((err,todos)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.status(200).send(todos)
            // res.json(todos)
        }
    })
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
