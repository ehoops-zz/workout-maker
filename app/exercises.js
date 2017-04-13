var uuid = require('uuid');

var exercises = [
  {
    name: 'Stationary ball handling',
    categories: ['Ball handling'],
  },
  {
    name: 'Crossovers',
    categories: ['Ball handling'],
  },
  {
    name: 'Full court layups with cones',
    categories: ['Ball handling', 'Shooting'],
  },
  {
    name: 'Form shooting',
    categories: ['Shooting'],
  },
  {
    name: 'Free throws',
    categories: ['Shooting'],
  },
  {
    name: 'Push ups',
    categories: ['Fitness'],
  },
  {
    name: 'Sit ups',
    categories: ['Fitness'],
  },
  {
    name: '3 x 30 seconds defensive slides',
    categories: ['Defense', 'Fitness'],
  },
  {
    name: 'Triangle close-outs',
    categories: ['Defense'],
  }
];

for (exercise of exercises) {
  exercise.id = uuid();
};

module.exports = exercises;
