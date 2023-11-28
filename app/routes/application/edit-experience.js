module.exports = router => {

    router.post('/application/edit-experience/juggling-balls', (req, res) => {
        res.redirect('/application/edit-experience/juggling-tricks')
    })

    router.post('/application/edit-experience/juggling-tricks', (req, res) => {
        res.redirect('/application/edit-experience/start-date')
    })

    router.post('/application/edit-experience/start-date', (req, res) => {
        res.redirect('/application/edit-experience/check')
    })
}