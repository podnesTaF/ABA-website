const countries = require('../utils/countries.js')
const {validationResult} = require("express-validator");

const db = require("../models");
const Athlete = db.athletes;

const getRegister = (req, res, next) => {
    let errors = validationResult(req);

    res.render('register', {
        pageTitle: "ABA - Register",
        oldInput: {
            surname: "",
            name: "",
            gender: false,
            dateOfBirth: "",
            phone: "",
            email: "",
            country: "",
            pb: "",
            sb: "",
            agree: false
        },
        errorMessage: '',
        validationErrors: errors.array(),
        countries: countries,
    });
}

const postRegister = (req, res, next) => {
    const {surname, name, gender, dateOfBirth, phone, email, country, pb, sb, agree} = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array())
        return res.status(422).render("register", {
            pageTitle: "ABA - Register",
            path: "/register",
            errorMessage: errors.array()[0].msg,
            oldInput: {
                surname,
                name,
                gender,
                dateOfBirth,
                phone,
                email,
                country,
                pb,
                sb,
                agree
            },
            countries: countries,
            validationErrors: errors.array(),
        });
    }

    try {
        const athlete = {
            surname,
            name,
            gender,
            dateOfBirth,
            phone,
            email,
            country,
            pb,
            sb,
            agree
        }

        Athlete.create(athlete)
            .then(data => {
                res.redirect('/')
            }).catch(e => {
                console.log(e)
            })
    } catch (e) {
        console.log(e)
    }
    console.log(surname, name, gender, dateOfBirth, phone, email, country, pb, sb, agree)
}

module.exports = {
    getRegister,
    postRegister
}