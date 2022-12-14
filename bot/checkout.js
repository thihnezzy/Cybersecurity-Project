const puppeteer = require('puppeteer');

const { Console } = require('console');
const { url } = require('inspector');
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
//let MongoClient = mongo.MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("test_script");
const products = database.collection("script_products");
const cursor = products.find({}, { _id: 1 });

function read() {
    let temp = []
    const allFileContents = fs.readFileSync('test.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
        temp.push(line)
    });
    temp.pop();
    return temp;
}

arry = read();
const rand_url = arry[Math.floor(Math.random() * arry.length)];

async function initBrowser() {
    const browser =await puppeteer.launch({executablePath: '/usr/bin/chromium'})
    const page = await browser.newPage();
    await page.goto(rand_url);
    return page;
}

async function login(page) {
    await page.evaluate(() => document.getElementsByClassName('btn btn-outline-white ms-2')[0].click());
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'formUsername'", "nobody");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'formPassword'", "1111111");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.$eval("button[class='btn btn-primary']", elem => elem.click());
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
}


async function addToCart(page) {
    await page.$eval("button[class='undefined btn btn-primary']", elem => elem.click());
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.evaluate(() => document.getElementsByClassName('MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit')[0].click());
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.evaluate(() => document.getElementsByClassName('MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-checkoutButton-13 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge')[0].click());
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
}



async function delivery(page) {
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'firstName'", "Ghita");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'lastName'", "Bentaibi");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'address'", "52, bd marechal foch bourges");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.type("input[id = 'email'", "ghitabentaibi@gmail.com");
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.evaluate(() => document.getElementsByClassName('bth')[0].click());
}

async function toStripe(page) {
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    await page.goto('http://localhost:3000/stripe');
    await new Promise(function (resolve) { setTimeout(resolve, 500) });
    const card = {
        number: '4242424242424242',
        month: '01',
        year: '60',
        cvc: '000',
    }

    await page.keyboard.press("Tab");
    await page.keyboard.type(card.number, { delay: 50 })
    await page.keyboard.type(card.month, { delay: 50 })
    await page.keyboard.type(card.year, { delay: 50 })
    await page.keyboard.type(card.cvc, { delay: 50 })
    await page.evaluate(() => document.getElementsByClassName('button')[0].click());
    await new Promise(function (resolve) { setTimeout(resolve, 2000) });
    await page.goto('http://localhost:3000/');

}

async function initMap(page) {

    // Call initially
    //   displayRoute('Zeiskamer Straße 1, 76756 Bellheim', 'Voelklingen', directionsService, directionsDisplay);

    // And then call it again every 10 minutes
    setInterval(function () {
        displayRoute('rand_url');
    }, 3 * 60 * 1000);
    // ^ 10 minutes in ms
}
//async function scoringSystem(page){
// var score = ("div.px-4").valueOf;
// var score = document.getElementsByClassName("div.px-4");
//const randomDate = ("div.px-4").valueOf;
//var score=  await page.evaluate(() => document.getElementsByClassName('div.px-4'), (e, randomDate) => e.setAttribute("value", randomDate), randomDate)
//if(await page.type("input[id = 'firstName'", "Ghita")){
//await page.type("div[class='px-4']", score);
//};}

//var score = await page.evaluate(() => document.getElementsByClassName('btn btn-outline-white ms-2')[0].ariaValueText);
//if(await page.type("input[id = 'firstName'", "Ghita")){
// await page.type("div[class='px-4']", randomDate);
// }





async function checkout() {
    const page = await initBrowser();
    await addToCart(page);
    await delivery(page);
    await login(page);
    await toStripe(page);


    //await scoringSystem(page);
    //await initMap(page)
    // await payment(page);
}

checkout();
