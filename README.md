# Would You Rather Project

## Table of Contents

* [Description](#Description)
* [Used Languages](#used-languages)
* [Features](#features)
* [Dependencies](#dependencies)
* [Installation and Usage](#installation-and-usage)
* [Author](#author)

## Description

In the "Would You Rather?" Project, I build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

Users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.


## Used Languages 
- HTML
- CSS
- JS
- JSX
- React
- Redux

## Features
- The user have the ability to login as an existing user, The application allows the user to log out and log back in, Once the user logs in, the home page is shown.
- Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
- The answered and unanswered polls are both available at the root, and the user can alternate between viewing answered and unanswered polls, The unanswered questions are shown   by default.
- The name of the logged in user is visible on the page.
- The user can navigate to the form that allows the user to create a new poll, The user can navigate to the leaderboard.
- When a poll is clicked on the home page, the following is shown:
    - the text “Would You Rather”.
    - the picture of the user who posted the polling question.
    - the two options.
- For answered polls, each of the two options contains the following:
    - the text of the option.
    - the number of people who voted for that option.
    - the percentage of people who voted for that option.
- The option selected by the logged in user should be clearly marked.
- The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
- Users can add new polls,The form is available at */add*.
- Upon submitting the form, a new poll is created and the user is taken to the home page, The new polling question appears in the correct category on the home page.
- The Leaderboard is available at */leaderboard*, Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions   they’ve asked.
- Each entry on the leaderboard contains the following:
    - the user’s name,
    - the user’s picture,
    - the number of questions the user asked,
    - the number of questions the user answered.
- The app contains a navigation bar that is visible on all of the pages, The user can navigate between the page for creating new polls, and the leaderboard page, and the home     page without typing the address into the address bar.


## Dependencies
- [Starter code from Udacity](https://github.com/udacity/reactnd-project-would-you-rather-starter): The starter code consists of a _DATA.js file, which represents a fake           database and contains methods that let you access the data. The README file outlines how the data is stored and details the methods you can use to access the database.
-  "react": "^17.0.2",
-  "react-dom": "^17.0.2",
-  "react-redux": "^7.2.6",
-  "react-redux-loading": "^4.6.1",
-  "react-router-dom": "5",
-  "react-scripts": "4.0.3",
-  "redux": "^4.1.2",
-  "redux-thunk": "^2.4.1",
-  "web-vitals": "^1.0.1"


## Installation and Usage
- Prerequisites : [Node.js](https://nodejs.org/en/download/)
- To install required packages : 
```
$ cd ../would-you-rather
$ npm install
```
- To run the Project :
```
$ npm start
```

## Author
- **Dalia Eltohami**

