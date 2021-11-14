# Node log service

A simple POC to test logging and save the logs in a database

## Description
This POC aims to test how we are going to add logs to our code base.
in this POC i used
- UUID: generate a unique id for each request
- winston: a logger library for node js apps
- winston-mongodb: a transport layer for winston to support saving the logs in mongodb
- mongodb: a presisted storage for the logs with TTL

## Technologies

- [Node]
- [Mongodb]

## Installation & Run

```
npm i
npm start
```
