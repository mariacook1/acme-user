const Faker = require('@faker-js/faker');
const {faker} = Faker;

const userList= document.getElementById('user-list')

const generate = function(){
    const users = [];
    while(users.length < 50){
        users.push({
            name: faker.internet.userName(),
            details: [{email: faker.internet.exampleEmail()}]
        })
    }
    return users
}

const render = function(){
    const hash = Number(window.location.hash.slice(1));
    userList.innerHTML = `
    ${generate().map((user, i) => 
        `<li>
            <a href= '#${i}'> ${user.name}</a>
            <ul>${hash==i ? user.details.map(detail => 
                `<li> ${detail.email}</li>`
                ).join('') : ''}</ul>
        </li>`

        ).join('')}
    `
}

render();