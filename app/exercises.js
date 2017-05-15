// @flow
import uuid from 'uuid';

export let allExercises: Array<exerciseObj> = [
  {
    name: 'Stationary ball handling',
    categories: ['Ball handling'],
    time: 4,
    id: uuid(),
  },
  {
    name: 'Crossover series',
    categories: ['Ball handling'],
    time: 8,
    id: uuid(),
  },
  {
    name: 'Full court layups with cones',
    categories: ['Ball handling', 'Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Form shooting - 3 x 3 swishes in a row',
    categories: ['Shooting'],
    time: 4,
    id: uuid(),
  },
  {
    name: '20 Free throws',
    categories: ['Shooting'],
    time: 6,
    id: uuid(),
  },
  {
    name: 'Shooting off screens (curl around chair and spin ball to yourself)',
    categories: ['Shooting'],
    time: 10,
    id: uuid(),
  },
  {
    name: 'Miken (make 30)',
    categories: ['shooting'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Reverse Miken (make 20)',
    categories: ['shooting'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Long range shooting (farthest you would shoot in a game)',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Past range shooting (2 steps past where you would shoot in a game)',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, drive (middle and baseline side)',
    categories: ['1 on 1 moves'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, shoot',
    categories: ['1 on 1 moves', 'shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Passing series (bounce, chest, overhead, baseball) 5 of each',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'One-hand passing series (right and left) 10 bounce 10 chest',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: '20 Push ups',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '20 Sit ups',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '40 Russian twists',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Liners 3 with 30 seconds rest between',
    categories: ['Fitness'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Defensive slides - 3 x 30 seconds',
    categories: ['Defense', 'Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Triangle close-outs',
    categories: ['Defense'],
    time: 2,
    id: uuid(),
  }
];

export type exerciseObj = {
  name: string,
  categories: Array<string>,
  time: number,
  id: string,
};
