let data = [
    {
        item: 'Feed the dogs'
    },
    {
        item: 'Learn nodejs'
    },
    {
        item: 'Go shopping'
    }
]
module.exports  = (app) => {

    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data})
    })
    app.post('/todo', (req, res) => {

    })
    app.delete('/todo', (req, res) => {

    })

}