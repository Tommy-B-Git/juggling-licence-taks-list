//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// EMAIL /////////

router.post('/has-account', (req, res) => {
    if (req.session.data.new.hasAccount == 'No') {
        res.redirect('/can-juggle')
    } else {
        res.redirect('/email-address')
    }
})
