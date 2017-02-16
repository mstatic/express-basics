let express = require('express');
let posts = require('./mock/posts.json');
let app = express();


app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', (req, res) => {
    // res.send('<h1>I am in love treehouse</h1>');
    res.render('index');
});

app.get('/blog/:title', (req, res) => {
    let title = req.params.title;
    if (title === undefined) {
        res.status(503);
        res.send('This page is under construction');
    } else {
        let post = posts[title] || {};
        res.render('post', {
            post: post
        });
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000 ....');
});