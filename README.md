# GitGames

## About

GitGames is an application that allows users to look up different metrics about their GitHub history, such as words used in commits, language breakdowns by user, and number of commits per day, and over time. The data is displayed in colorful, engaging charts and graphics built using D3.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Live Application

GitGames is hosted on the Heroku Cloud Application Platform

[GitGames](https://thegitgames.herokuapp.com/)

### GitGames Backend

GitGames pulls its user data from the backend application [GitGames-BackEnd](https://github.com/patrickshobe/GitGames-BackEnd)

### Agile Board

[![Waffle.io - Columns and their card
count](https://badge.waffle.io/patrickshobe/GitGames-BackEnd.svg?columns=all)](https://waffle.io/patrickshobe/GitGames-BackEnd)

### Developer Story

The front end of this application was built as a solo project and was used as an opportunity to use and implement d3 for the first time. Not only that, I wanted to bring d3 into a react app, while also experimenting with d3 packages that help make it easier to implement. This was by far the biggest challenge of the application. In the end, in large part thanks to this [video](https://www.youtube.com/watch?v=zXBdNDnqV2Q&t=2s) I was able to see how to connect the two and what dom manipulation should come from d3 and what should come from react.

The project turned out to be an effective way to display data and a fun way to interact with it. For future iterations, I'd like to dig deeper into the data to do more granular statistical analysis as well as continue to gain familiarity with d3 to better customize my graphs and data visualizations.

### Live Shots

**Landing Page**

![image](https://user-images.githubusercontent.com/36015215/50621211-a3bc1480-0ec1-11e9-828f-aa04ca711baa.png)

**After Searching a GitHub Username**

![image](https://user-images.githubusercontent.com/36015215/50621228-c5b59700-0ec1-11e9-8967-852909ce898c.png)

**Word Cloud Graph**

![image](https://user-images.githubusercontent.com/36015215/50621251-f1388180-0ec1-11e9-9467-b37fd88ea596.png)

**Languages Used By User Graph**

![image](https://user-images.githubusercontent.com/36015215/50621305-41afdf00-0ec2-11e9-8fc0-470c1b38c564.png)

**Loading Page**

![image](https://user-images.githubusercontent.com/36015215/50621327-67d57f00-0ec2-11e9-95b0-740b70abcc55.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
This application has been thoroughly tested with more than 90% test coverage.

