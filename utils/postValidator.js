const router = require('express').Router();
const app = express();
const { User, Location, BlogPost } = require('../controllers');


app.use(express.json());

app.post('/blogPost', (req, res) => {
    post.create({
        title: req.body.title,
        post: req.body.post,
        image: req.body.image,
        location: {
            city: req.body.city,
            state: req.body.state,
        }
    }).then(post => res.json(post))
});

const { body, validationResult } = require('express-validator')

app.post(
    '/blogPost',
    body('title').notEmpty(),
    body('post').notEmpty(),
    body('image').notEmpty(),
    body('location.city').notEmpty(),
    body('location.state').notEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        post.create({
            title: req.body.title,
            post: req.body.post,
            image: req.body.image,
            location: {
                city: req.body.city,
                state: req.body.state,
            }.then(post => res.json(post))
        })
    }
)