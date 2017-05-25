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
    description: 'Place 3-5 cones/chairs in a stright line on one side of the \
                  court.  Dribble through the cones, using a crossover or in-out \
                  move for each one.  Shoot a layup at the end and go back \
                  through the cones to the other for another layups.  Make 25 or \
                  go for a set amout of time.',
    categories: ['Ball handling', 'Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Form shooting',
    description: 'Make 3 swishes from right next to the basket.  On a miss, \
                  restart the count.  Complete 3 sets of 3 swishes.  If this \
                  takes less than 4 minutes, take one step back and do the \
                  same thing.',
    categories: ['Shooting'],
    time: 4,
    id: uuid(),
  },
  {
    name: '20 Free throws',
    description: 'Practice the same routine every time.  Track number of makes.',
    categories: ['Shooting'],
    time: 6,
    id: uuid(),
  },
  {
    name: 'Shooting off screens',
    description: 'Set up a chair as an off-ball screen.  Spin the ball to \
                  yourself as you come off the screen.  This simulates an off \
                  ball screen where you curl and receive a pass from a teammate.  \
                  Focus on footwork and balance.',
    categories: ['Shooting'],
    time: 10,
    id: uuid(),
  },
  {
    name: 'Miken',
    description: 'Make 30.  Keep the ball above your shoulders the whole time.',
    categories: ['Shooting'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Reverse Miken',
    description: 'Make 20.  Keep the ball above your shoulders the whole time.',
    categories: ['Shooting'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Long range shooting',
    description: 'Shoot from the farthest you would comfortably shoot in a \
                  game.  Choose 5 spots and shoot 10 shots from each.',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Past range shooting',
    description: 'Shoot from 2 steps past where you would shoot in a game.  \
                  Choose 3 spots and shoot 10 shots from each.  Focus on \
                  keeping good shooting form, arch your back and use your legs.',
    categories: ['Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, drive',
    description: 'Catch the ball on the wing. Jab step and then drive to both \
                  the middle and baseline sides.  Imagine your defender: they \
                  do not respect the jab step, so the drive is open.',
    categories: ['1 on 1 moves'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Jab step, shoot',
    description: 'Catch the ball on the wing.  Jab step and then shoot.  \
                  Imagine your defender: they back off when you jab step, so \
                  the shot is open.  Focus on balance and staying square to the \
                  basket.',
    categories: ['1 on 1 moves', 'Shooting'],
    time: 5,
    id: uuid(),
  },
  {
    name: 'Passing series (bounce, chest, overhead, baseball) 5 of each',
    description: 'Bounce, chest, overhead, baseball.  5 of each with both hands. \
                  Do this with a partner or against the wall.',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'One-hand passing series (right and left) 10 bounce 10 chest',
    description: 'Bounce and chest passes. 10 of each right hand and 15 of each \
                  left hand (or opposite if left handed). \
                  Do this with a partner or against the wall.',
    categories: ['Passing'],
    time: 3,
    id: uuid(),
  },
  {
    name: '20 Push ups',
    description: 'Keep your body straight and go down to elbows at 90 degrees.',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '20 Sit ups',
    description: 'Sit all the way up.  Avoid swinging your arms.',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: '40 Russian twists',
    description: 'Keep your feet in the air.  Touch the floor on each side.',
    categories: ['Fitness'],
    time: 2,
    id: uuid(),
  },
  {
    name: 'Liners',
    description: '3 times with 30 seconds rest between.  Each liner should take \
                  less than 30 seconds.',
    categories: ['Fitness'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Defensive slides - 3 x 30 seconds',
    description: '3 sets of 30 seconds slides across the key.  30 seconds rest \
                  between.  Count how many times you touch the side of the key',
    categories: ['Defense', 'Fitness'],
    time: 3,
    id: uuid(),
  },
  {
    name: 'Triangle close-outs',
    description: 'Stay low and chop your feet on the close out.',
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
