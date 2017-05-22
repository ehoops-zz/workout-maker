# workout-maker
Generates random basketball workouts for individual players.  The app is Yahtzee-style, you randomly get exercises and can keep the exercises you like by selecting the check icon on the right.  Players can customize their workout by changing the exercise category (i.e. shooting, ball handling, defense), rerolling the workout and by increasing or decreasing the number of exercises.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

yarn package manager (https://yarnpkg.com/lang/en/docs/install/)

### Installing

Fork repository and clone to your local machine

```
git clone https://github.com/YOUR-USERNAME/workout-maker
```

Navigate to the local repository directory and run the following commands:

Install dependencies with yarn

```
yarn install
```

Package files with webpack.  For continuous development, use the --watch option.

```
webpack
```
or
```
./node_modules/.bin/webpack --watch
```

Run the node server

```
yarn run babel-node server.js
```
Open your browser to http://localhost:3000


## Running the tests

Workout-maker uses Jest and the test files end with the .test.js extension.  To run the tests, navigate to the main directory and run:
```
yarn test
```


## Built With

* [React](https://facebook.github.io/react/) - The JavaScript framework used
* [Flow](https://flow.org/) - Static type checker
* [Jest](https://facebook.github.io/jest/) - Tests


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/ehoops/feab877d160479993483e3957da81748) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Erin Hoops** - *Initial work* - [EHoops](https://github.com/ehoops/)

## Acknowledgments
* Readme and Code of conduct are adapted from [PurpleBooth](https://gist.github.com/PurpleBooth) templates.

