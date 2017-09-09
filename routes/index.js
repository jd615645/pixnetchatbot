const express = require('express')
const router = express.Router()
const gsjson = require('google-spreadsheet-to-json')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/:spreadsheetId', (req, res, next) => {
  gsjson({
    spreadsheetId: req.params.spreadsheetId
  })
    .then((result) => {
      console.log(result.length)
      console.log(result)
      res.end(JSON.stringify(result))
    })
    .catch((err) => {
      console.log(err.message)
      console.log(err.stack)
      res.end(JSON.stringify(err.message))
    })
})

module.exports = router
