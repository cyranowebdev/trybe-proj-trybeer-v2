##### This repo is a clone of the group project that encloses front-end and back-end modules of the [Trybe](https://www.betrybe.com/) junior developer course.
###### https://www.betrybe.com/

# TryBeer v2

![!project status](https://img.shields.io/badge/status-development-yellow)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-informational.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Requisites

**First version:** this version follows up an initial one where the whole project is built up. The groups are expected to develop from scratch a back-end API and a front-end website to simulate a simple app for clients to register and buy... yes, you guessed it: beer. 🍺

- *Back-end:* usage of [**mySQL**](https://www.mysql.com/) was required. The group decided to use a services layer in architecture and [**Express**](https://expressjs.com/) to handle routes. We also use [**JWT**](https://jwt.io/) for login management, [**BCrypt**](https://www.npmjs.com/package/bcrypt)) to encrypt passwords before storing in DB, and log and error handling middleware (developed by Phelipe Ohlsen, see contributors below). 

- *Front-end:* all elements built up using [**React**](https://reactjs.org/) and *React Context*, along with [*React Router*](https://reactrouter.com/). Visual design was not a requirement in itself but we agreed in using a colour scheme and a nice logo was created by *Daniel Jesus* (see contributors below).
  
**Set-up for current version:** the current version required a migration from mySQL to [**Sequelize**](https://sequelize.org/) to start with, so we had to create all Sequelize models and migrations before moving on to the actual requisites of the project.

**Requisites sum-up:**

- Improve existing features to allow clients to see their orders' status and admin users to change that status among three possible values
- Create a chat feature for clients to chat with the store:
  - each client only chats with the 'store' and all chats are private
  - admin users can see all chats and send messages to clients
  - mongoDB is required to store chats
- Back-end unit tests (we mainly used endpoint tests with Jest and Supertest to track coverage across architecture layers)

## Instructions

**Clone** the repo or **download** the zip.

Go to the project folder and run `npm install`. (which means *Node.js* must be installed in your machine)

To start the **back-end**: go to *back-end* project folder and run `npm start`.

To start the **front-end**: go to *front-end* project folder and run `npm start`.  

To run **back-end tests** (with coverage report): go to *back-end* project folder and run `npm run test-coverage`.  

#### Important: mongoDB and mySQL services must be installed and active in your machine in order for DBs (thus the whole project) to work.

## Thanks to the team ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/danieljs-dev"><img src="./public/github-daniel.png" width="100px;" alt=""/><br /><sub><b>danieljs-dev</b></sub></a></td>
    <td align="center"><a href="https://github.com/PedimEduardo"><img src="./public/github-pedro.png" width="100px;" alt=""/><br /><sub><b>Pedro Eduardo </b></sub></a></td>
    <td align="center"><a href="https://github.com/phelipe-ohlsen"><img src="./public/github-phelipe.png" width="100px;" alt=""/><br /><sub><b>Phelipe Ohlsen</b></sub></a></td>
    <td align="center"><a href="https://github.com/cyranowebdev"><img src="./public/github-madsen.png" width="100px;" alt=""/><br /><sub><b>Cyrano</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
