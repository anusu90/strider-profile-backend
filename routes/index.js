var express = require('express');
var router = express.Router();

var { sendMailToMe, sendMailToUser } = require("../functions/sendgrid")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", async (req, res) => {

  let sendMailtoMePromise = await sendMailToMe(req.body)
  let sendMailtoUserPromise = await sendMailToUser(req.body.email)

  console.log(sendMailtoMePromise, sendMailtoUserPromise)


})

module.exports = router;
