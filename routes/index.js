var express = require('express');
var router = express.Router();

var { sendMailToMe, sendMailToUser } = require("../functions/sendgrid")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", async (req, res) => {

  try {
    let sendMailtoMePromise = await sendMailToMe(req.body)
    let sendMailtoUserPromise = await sendMailToUser(req.body.email)
    res.status(200).json({ message: "Mail Sent" })
  } catch (error) {
    res.status(500).json({ message: "Mail not sent" })
  }
})

module.exports = router;
