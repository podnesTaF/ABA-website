const express = require('express');
const {check, body} = require('express-validator')

const {getRegister, postRegister} = require("../controllers/auth");

const router = express.Router();

router.get('/register', getRegister)

router.post('/register',
    [
        check("surname").isLength({min: 2}).withMessage("Surname must be at least 2 characters long"),
        check("name").isLength({min: 2}).withMessage("Name must be at least 2 characters long"),
        check("gender").not().isEmpty().withMessage("Gender must be selected"),
        check("dateOfBirth").isLength({min: 10}).withMessage("Date of birth must be given"),
        check("phone").isLength({min: 15}).withMessage("Phone number must be given"),
        check("email").isEmail().withMessage("Please enter a valid email").normalizeEmail(),
        check("country").isLength({min:1}).withMessage("Country must be selected"),
        check("pb").isLength({min: 8}).withMessage("Please enter a valid personal best"),
        check("sb").isLength({min: 8}).withMessage("Please enter a valid season best"),
        check("agree").equals('on').withMessage("You must agree to the terms and conditions")
    ], postRegister)

module.exports = router;