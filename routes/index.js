const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//@desc   Login/Landing Page
//routes  GET /

router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//@desc   Dashboard
//routes  GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard')
})


module.exports = router