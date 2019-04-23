const express = require('express');
const router = express.Router();
const mockData = require('../public/mockData/mockData');

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).send(mockData);
});

router.post('/',(req,res) => {
  sendResponseData(req,res);
});


const sendResponseData = (req,res) => {
   if (!checkValidations(req)) {
     res.status(500).send({   error: true, message: `One or more conditions not met`});
   }
   else{
     res.status(200).send({'success': true});
   }
};

const checkValidations = req => {
  for (let i in req.body) {
    if( req.body[i] === ''){
      return false;
    }
  }
  return true;
};



module.exports = router;
