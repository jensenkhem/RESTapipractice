const fetch = require('node-fetch');
const { response } = require('express');
const { post } = require('request');

function getTasks() {
    url = 'http://localhost:3000/tasks?offset=-1&limit=5';
    params = new URLSearchParams(url.split('?')[1]);
    console.log(params);
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
        let startingVal = parseInt(params.get("offset")) || 0;
        if(startingVal < 0) {
            startingVal = 0;
        }
        let endingVal = data.length - 1;
        if(params.has("limit")) {
            endingVal = startingVal + parseInt(params.get("limit"));
            if(endingVal > data.length - 1) {
                endingVal = data.length - 1;
            }
        }
        console.log(startingVal, endingVal);
        
        for(i = startingVal; i < endingVal; i++) {
             console.log(data[i])
        }
        
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