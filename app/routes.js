//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


/////////// HAS ACCOUNT /////////
router.post('/has-account', (req, res) => {
    if (req.session.data.new.hasAccount == 'No') {
        res.redirect('/can-juggle')
    } else {
        res.redirect('/email-address')
    }
})


/////////// CAN JUGGLE /////////
router.post('/can-juggle', (req, res) => {
    if (req.session.data.new.canJuggle == 'No') {
        res.redirect('/not-eligible')
    } else {
        res.redirect('/email-address')
    }
})


/////////// EMAIL OK /////////
router.post('/email-address', (req, res) => {
    res.redirect('/code')
})

/////////// CODE OK /////////
router.post('/code', (req, res) => {
    req.session.data.user = {}
    res.redirect('/application')
})

/////////// Signed out  /////////
router.get('/account/sign-out', (req, res) => {
    delete req.session.data.user
    res.redirect('/has-account')
})



require('./routes/application/show')(router)
require('./routes/application/edit-personal-details')(router)
require('./routes/application/edit-experience')(router)