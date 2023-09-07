
const { errorHandler } = require("../utils/errorHandler");
const { spawn,exec } = require("child_process");

const func = (cusine,x,y)=>{
  return new Promise((resolve, reject) => {
  exec(
    `cd F:\\Tsec-Sem-5\\MP4\\dash-a-thon\\node\\src\\controllers && python Average_rating.py ${cusine} ${x} ${y}`,
    (error, stdout, stderr) => {
      if (error) reject({error,stderr});
      if (stderr) reject(stderr);
      resolve(stdout);
    }
  );
});
}

const predictfunc = (cost, book, delivery, prange)=>{
  return new Promise((resolve, reject) => {
  exec(
    `cd F:\\Tsec-Sem-5\\MP4\\dash-a-thon\\node\\src\\controllers && python Predict_rating.py ${cost} ${book} ${delivery} ${prange}`,
    (error, stdout, stderr) => {
      if (error) reject({error,stderr});
      if (stderr) reject(stderr);
      resolve(stdout);
    }
  );
});
}

module.exports = {
  rating: (req, res) => {
    errorHandler(req, res, async () => {
      var dataToSend = "";
      var {cusine,x,y} = req.body;
    dataToSend += await func(cusine,x,y);
    console.log(dataToSend)
    res.status(200).json(dataToSend)
    });
  },
  predict: (req, res) => {
    errorHandler(req, res, async () => {
      var dataToSend = "";
      var {cost, book, delivery, prange} = req.body;
      dataToSend += await predictfunc(cost, book, delivery, prange);
    console.log(dataToSend)
      console.log(req.body)
      // var data =req.body;
      // console.log(data)
      // console.log(cost)
    
    // console.log(dataToSend)
    res.status(200).json(dataToSend)
    });
  },
};
