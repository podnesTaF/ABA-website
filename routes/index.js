/** @format */

const express = require('express');

const router = express.Router();


// router.get('/', (req, res) => {
//     res.render('developing', {
//       pageTitle: 'Ace Battle Association',
//       path: '/',
//       theme: 'dark',
//       introImage: '/img/main-logo.png',
//     });
// })
router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'ABA - main',
    path: '/',
    theme: 'dark',
    introImage: '/img/main-logo.png',
  });
});

router.get('/rules', (req, res) => {
  res.render('rules', {
    pageTitle: 'ABM - rules',
    path: '/rules',
    theme: 'light',
    introImage: '/img/rules-abm-logo.png',
  });
})

router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'ABM - about',
    path: '/about',
    theme: 'dark',
    introImage: '/img/logo-about-dark.png',
  });
})

router.get('/competitions', (req, res) => {
  res.render('competitions', {
    pageTitle: 'ABM - Competitions',
    path: '/competitions',
    theme: 'light',
    introImage: '/img/about-logo.png',
  });
})

router.get('/competitions/cup-benelux', (req, res) => {
  res.render('cup-benelux', {
    pageTitle: 'ABM - Competitions',
    path: '/competitions',
    theme: 'light',
    introImage: '/img/about-logo.png',
  });
})

module.exports = router;
