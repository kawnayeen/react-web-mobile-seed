# react-web-mobile-seed

Seed for a combined `react` & `react-native` project. Usuable for the scenario, when both mobile and web app share the same business logic & we don't want to duplicate the same code in both project.

Setup
-----

First clone the repository.
- go to `business-logic` directory and run `sudo npm link`
- go to `web-app` directory, first run `npm install`, then run `npm link business-logic`
- go to `mobileapp` directory, first run `npm install`, then run `npm install ../business-logic --save`

How to run
----------

If we are done with setup, then :-
- to run the `react` project, go to `web-app` directory and run `npm start`
- to run the `react native` project, go to `mobileapp` directory and run `react-native run-ios`

Important
-------

Any time you are modifying the `business-logic`, you need to redo `npm install ../business-logic --save` in the `react native` project

Contributor
----------
Muhammad Kamarul Kawnayeen ([@kawnayeen](https://github.com/kawnayeen))
