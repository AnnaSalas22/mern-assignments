const express = require("express");
const app = express();
const port = 8000;
const { faker }= require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

console.log(faker.name.firstName());
console.log (faker.company.name());

const createUser= () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}


app.get('/api/user/new', (req,res) => {
    const newUser = createUser();
    res.json(newUser)
})


const createCompany= () => {
    return {
        companyName: faker.company.name(),
        companyStreet: faker.address.street(),
        companyCity: faker.address.city(),
        companyState:faker.address.state(),
        companyZipCode:faker.address.zipCode(),
        companyCountry:faker.address.county()
    }

}

app.get('/api/company/new', (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany)
});


const createUserAndCompany= () => {
return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    companyName: faker.company.name(),
    companyStreet: faker.address.street(),
    companyCity: faker.address.city(),
    companyState:faker.address.state(),
    companyZipCode:faker.address.zipCode(),
    companyCountry:faker.address.county()
}
}

app.get('/api/user/company', (req, res) => {
    const newUserAndCompany = createUserAndCompany();
    res.json (newUserAndCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );