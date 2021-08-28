"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languages = users.filter(user => user.languages.length >= 3);

console.log(languages);

let emails = users.map(user => user.email);

console.log(emails);

let totalYears = users.reduce((accum, user) => {
    return accum + user.yearsOfExperience;
}, 0);

console.log(totalYears);

let longestEmail = users.reduce((accum, curr) => {
    return (curr.email.length > accum.length) ? curr.email : accum;
}, '');


console.log(longestEmail);

let namesString = users.reduce((accum, {name}) => {
    return accum + name + ", ";
}, 'instructors are: ');

console.log(namesString);