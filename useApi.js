const fetch = require('node-fetch');
const { response } = require('express');
const { post } = require('request');

function getTasks() {
    url = 'http://localhost:3000/tasks';
    fetch(url, {
        method: 'GET'
    })
    .then((response) => {
        if(!response.ok) {
            console.log(response.status);
            throw new Error("Could not get a response from the server!");
        }
        else {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
}

function postTask() {
    url = "http://localhost:3000/tasks";
    myHeaders = {
        "Content-Type": "application/json"
    }
    myBody = {
        name: "Test"
    }
    fetch(url, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(myBody)
    })
    .then((response) => {
        if(!response.ok) {
            console.log(response.status);
            throw new Error("Could not get a response from the server!");
        }
        else {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
}

getTasks();