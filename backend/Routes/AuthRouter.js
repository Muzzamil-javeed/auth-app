const router = require('mongoose');

router.post('/login', (req, res) => {
    res.send('Login SuccessFully')
})

router.post('/signup', (req, res) => {
    res.send('Signup Successfully')
})

module.exports = router