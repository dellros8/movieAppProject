const $ = require('react-native-cheerio');
const netflixArray = [];
const hboArray = [];
const primevideoArray = [];

let netflixurls = [];
let hbourls = [];
let primevideourls = [];

for (let i = 50; i < 1150; i += 50) {
    hbourls.push(i.toString())
}

for (let i = 0; i < 150; i++) {
    netflixurls.push(i.toString())
}

for (let i = 50; i < 15200; i += 50) {
    primevideourls.push(i.toString())
}
netflixurls.map((url) => {
    fetch("https://flixable.com/?min-rating=0&min-year=1920&max-year=2019&order=date&page=" + url)
        .then((html) => html.text())
        .then(function (text) {
            //success!
            const cheerio = $.load(text);

            cheerio('strong > a').toArray().map(function (x) {

                let movieTitle = cheerio(x).text();

                netflixArray.push({ title: movieTitle });

            });




        })
        .catch(function (err) {
            //handle error
        });
})


fetch("https://reelgood.com/source/hbo")
    .then((html) => html.text())
    .then(function (text) {
        //success!
        const cheerio = $.load(text);

        cheerio('.eJ > a').toArray().map(function (x) {

            let movieTitle = cheerio(x).text();

            hboArray.push({ title: movieTitle });
        });



    })
    .catch(function (err) {
        //handle error
    });
hbourls.map((url) => {
    fetch("https://reelgood.com/source/hbo?offset=" + url)
        .then((html) => html.text())
        .then(function (text) {
            //success!
            const cheerio = $.load(text);

            cheerio('.eJ > a').toArray().map(function (x) {

                let movieTitle = cheerio(x).text();

                hboArray.push({ title: movieTitle });
                console.log(hboArray.length)
            });


        })
        .catch(function (err) {
            //handle error
        });
})


fetch("https://reelgood.com/source/amazon")
    .then((html) => html.text())
    .then(function (text) {
        //success!
        const cheerio = $.load(text);

        cheerio('.eJ > a').toArray().map(function (x) {

            let movieTitle = cheerio(x).text();

            primevideoArray.push({ title: movieTitle });

        });


    })
    .catch(function (err) {
        //handle error
    });

primevideourls.map((url) => {
    fetch("https://reelgood.com/source/amazon?offset=" + url)
        .then((html) => html.text())
        .then(function (text) {
            //success!
            const cheerio = $.load(text);

            cheerio('.eJ > a').toArray().map(function (x) {

                let movieTitle = cheerio(x).text();

                primevideoArray.push({ title: movieTitle });
                console.log(primevideoArray.length);

            });


        })
        .catch(function (err) {
            //handle error
        });
})

setTimeout(function () {
    console.log("success", JSON.stringify(primevideoArray));
}, 60000)


export { netflixArray, hboArray, primevideoArray };