const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validate, ValidateError, Joi } = require('express-validation');

const blogPostValidation = {
    body: Joi.object({
        title: Joi.string()
        .required(),

        post: Joi.string()
        .required(),

        image: Joi.string()
        .required(),

        location: Joi.string()
        .required(),
    })
}

console.log(blogPostValidation);

app.use(bodyParser.json());
app.use(express.json());

app.use(function(err, req, res, next) {
    if(err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
});


app.post('/blogPost', validate(blogPostValidation, {}, {}), (req, res) => {
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

app.listen(3000)
// const { body, validationResult } = require('express-validator')

// app.post(
//     '/blogPost',
//     body('title').notEmpty(),
//     body('post').notEmpty(),
//     body('image').notEmpty(),
//     body('location.city').notEmpty(),
//     body('location.state').notEmpty(),
//     (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         post.create({
//             title: req.body.title,
//             post: req.body.post,
//             image: req.body.image,
//             location: {
//                 city: req.body.city,
//                 state: req.body.state,
//             }.then(post => res.json(post))
//         })
//     }
// )