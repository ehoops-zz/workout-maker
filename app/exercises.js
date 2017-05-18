// @flow
import uuid from 'uuid';

export let allExercises: Array<exerciseObj> = [
  {
    name: 'Stationary ball handling',
    description: 'Choose 4-8 drills and do each one for 30 seconds with left  \
                  and right hands.  Some drills are: low dribbles, figure-8, \
                  north/south "windshield wiper" dribble, crossover, between \
                  legs and creative stationary dribbles',
    categories: ['Ball handling'],
    time: 4,
    id: uuid(),
  },
  {
    name: 'Crossover series',
    description: 'Zig-zag up the court.  2-3 dribbles between crossovers.  \
                  Series includes crossovers, between legs, behind back, spin, \
                  in-and-out, and creative crossovers',
    categories: ['Ball handling'],
    time: 8,
    id: uuid(),
  },
  {
    name: 'Full court layups with cones',
    description: '',
    categories: ['Ball handling', 'Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Form shooting - 3 x 3 swishes in a row',
    description: '',
    categories: ['Shooting'],
    time: 4,
    id: uuid(),
  },
  {
    name: '20 Free throws',
    description: '',
    categories: ['Shooting'],
    time: 6,
    id: uuid(),
  },
  {
    name: 'Shooting off screens (curl around chair and spin ball to yourself)',
    description: '',
    categories: ['Shooting'],
    time: 10,
    id: uuid(),
  },
  {
    name: 'Miken (make 30)',
    description: '',
    categories: ['shooting'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Reverse Miken (make 20)',
    description: '',
    categories: ['shooting'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Long range shooting (farthest you would shoot in a game)',
    description: '',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Past range shooting (2 steps past where you would shoot in a game)',
    description: '',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, drive (middle and baseline side)',
    description: '',
    categories: ['1 on 1 moves'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, shoot',
    description: '',
    categories: ['1 on 1 moves', 'shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Passing series (bounce, chest, overhead, baseball) 5 of each',
    description: '',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'One-hand passing series (right and left) 10 bounce 10 chest',
    description: '',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: '20 Push ups',
    description: '',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '20 Sit ups',
    description: '',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '40 Russian twists',
    description: '',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Liners 3 with 30 seconds rest between',
    description: '',
    categories: ['Fitness'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Defensive slides - 3 x 30 seconds',
    description: '',
    categories: ['Defense', 'Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Triangle close-outs',
    description: '',
    categories: ['Defense'],
    time: 2,
    id: uuid(),
  }
];

export type exerciseObj = {
  name: string,
  description: string,
  categories: Array<string>,
  time: number,
  id: string,
};
