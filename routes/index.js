/** @format */

const express = require('express');

const router = express.Router();


router.get('/s', (req, res) => {
    res.render('developing', {
      pageTitle: 'Ace Battle Association',
      path: '/',
      theme: 'dark',
      introImage: '/img/main-logo.png',
    });
})
router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'ABA - main',
    path: '/',
    theme: 'dark',
    introImage: '/img/main-logo.png',
  });
});

router.get('/aba-structure', (req, res) => {
  res.render('aba-structure', {
    pageTitle: 'ABA - structure',
    path: '/aba-structure',
    theme: 'dark',
    introImage: '/img/main-logo.png',
  });
})

router.get('/rules', (req, res) => {
  res.render('rules', {
    pageTitle: 'ABM - rules',
    path: '/rules',
    theme: 'dark',
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
    theme: 'dark',
    introImage: '/img/about-logo.png',
  });
})

router.get('/competitions/cup-benelux', (req, res) => {
  res.render('cup-benelux', {
    pageTitle: 'ABM - Competitions',
    path: '/competitions',
    theme: 'dark',
    introImage: '/img/about-logo.png',
  });
})

router.get('/news', (req, res) => {
  res.render('news', {
    pageTitle: 'ABA - news',
    path: '/news',
    theme: 'dark',
    introImage: '/img/about-logo.png',
  });
})

router.get('/results', (req, res) => {
  res.render('results', {
    pageTitle: 'ABA - results and statistics',
    path: '/results',
    theme: 'dark',
    introImage: '/img/about-logo.png',
  });
})

module.exports = router;
