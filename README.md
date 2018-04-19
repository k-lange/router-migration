# Sample App for a Angular UI-Router to React Router Migration

This is a simple single page app that has two routes: A page with a list of tv shows and a detail view for a single show. It uses the [TV Maze-API](http://www.tvmaze.com) and [ladda-cache](https://www.ladda.io) as a framework-agnostic caching library.

The master-branch contains of a pure [Angular 1](https://angularjs.org)-app that uses [UI-Router](https://ui-router.github.io) (0.x legacy version). The [first PR](https://github.com/k-lange/router-migration/pull/1) removes UI-Router and replaces it with [React Router](https://reacttraining.com/react-router/) – without changing the Angular routes & pages itself, but instead by reimplementing a subset of the UI-Router interface. We used this approach with great success at [Small Improvements](https://www.small-improvements.com) in the migration of our app from Angular to React.

## Caveat

The migration PR only implements a very, very small subset of the UI-Router interface. It will most likely not work for your app if you're faced with the same transition. That's also why this is not a library, it's merely an example that it can be done. Evaluate for yourself how much of UI-Router's features you're currently using and what migration strategy makes sense for you – it will surely be different for every app.

## Running the App

```
git clone https://github.com/k-lange/router-migration.git
cd router-migration
npm install
npm start
```
