module.exports = (sequelize, Sequelize) => {
    const Athlete = sequelize.define("athlete", {
        surname: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        pb: {
            type: Sequelize.STRING
        },
        sb: {
            type: Sequelize.STRING
        },
        agree: {
            type: Sequelize.STRING
        },
    });

    return Athlete;
};