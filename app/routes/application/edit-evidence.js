const _ = require('lodash')
const { v4 : uuidv4 } = require('uuid')

module.exports = router => {

    router.post('/application/edit-evidence/has-evidence', (req, res) => {
        if (req.session.data.evidence.hasEvidence == "Yes") {
            res.redirect('/application/edit-evidence/upload')  
        } else {
            res.redirect('/application/edit-evidence/check')  
        }
    })

    router.post('/application/edit-evidence/upload', (req, res) => {

        let files = [
            'trick-performance.mp4',
            'juggling-show.mp4',
            'testimonial.mp3'
        ]

        
        if (!req.session.data.evidence.files) {
            req.session.data.evidence.files = {}
        }
        // get the next file
        let filesCount = _.size(req.session.data.evidence.files) // 0
        let nextFile = files[filesCount]
        
        // Store next file in memory to use later
        if (nextFile) {
            req.session.data.evidence.files[uuidv4()] = {
                filename: nextFile
            }    
        }
        

        res.redirect('/application/edit-evidence/check-files')  
    })

    router.post('/application/edit-evidence/check-files', (req, res) => {
        if (req.session.data.evidence.addMore == "Yes") {
            res.redirect('/application/edit-evidence/upload')
        } else {
            res.redirect('/application/edit-evidence/check')
        }  
    })
}   