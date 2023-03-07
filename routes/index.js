/** @format */

const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'ABA - main',
    path: '/',
  });
});

router.get('/aba-structure', (req, res) => {
  res.render('aba-structure', {
    pageTitle: 'ABA - structure',
    path: '/aba-structure',
  });
})

router.get('/rules', (req, res) => {
  res.render('rules', {
    pageTitle: 'ABM - rules',
    path: '/rules',
  });
})

router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'ABM - about',
    path: '/about',
  });
})

router.get('/competitions', (req, res) => {
  res.render('competitions', {
    pageTitle: 'ABM - Competitions',
    path: '/competitions',
  });
})

router.get('/competitions/cup-benelux', (req, res) => {
  res.render('cup-benelux', {
    pageTitle: 'ABM - Competitions',
    path: '/competitions',
  });
})

router.get('/news', (req, res) => {
  res.render('news', {
    pageTitle: 'ABA - news',
    path: '/news',
  });
})

router.get('/results', (req, res) => {
  res.render('results', {
    pageTitle: 'ABA - results and statistics',
    path: '/results',
  });
})

module.exports = router;
