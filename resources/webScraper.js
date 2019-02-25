const $ = require('react-native-cheerio');

let netflixArray = [];
let netflixOtherArray = [];
const finalnetflixArray = [];

let hboArray = [];
let otherArray = [];
const finalHboArray = [];

let primevideoArray = [];
let primevideoOtherArray = [];
const finalprimevideoArray = [];


let netflixurls = [];
let hbourls = [];
let primevideourls = [];

// for (let i = 50; i < 1150; i += 50) {
//     hbourls.push(i.toString())
// }

// for (let i = 50; i < 5650; i += 50) {
//     netflixurls.push(i.toString())
// }

// for (let i = 50; i < 15250; i += 50) {
//     primevideourls.push(i.toString())
// }

// fetch("https://reelgood.com/source/netflix")
//     .then((html) => html.text())
//     .then(function (text) {
//         //success!
//         const cheerio = $.load(text);

//         cheerio('.eJ > a').toArray().map(function (x) {

//             let movieTitle = cheerio(x).text();

//             netflixArray.push(movieTitle);

//         });
//         cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//             let releaseDate = cheerio(x).text();

//             netflixOtherArray.push(releaseDate);

//         });

//         for (let i = 0; i < netflixArray.length; i++) {
//             const year = netflixOtherArray[i]
//             const movieTitle = netflixArray[i]

//             finalnetflixArray.push({ title: movieTitle, release_date: year })

//             console.log(finalnetflixArray.length)


//         }

//         netflixArray = [];
//         netflixOtherArray = [];




//     })
//     .catch(function (err) {
//         //handle error
//     });

// netflixurls.map((url) => {
//     fetch("https://reelgood.com/source/netflix?offset=" + url)
//         .then((html) => html.text())
//         .then(function (text) {
//             //success!
//             const cheerio = $.load(text);

//             cheerio('.eJ > a').toArray().map(function (x) {

//                 let movieTitle = cheerio(x).text();

//                 netflixArray.push(movieTitle);

//             });
//             cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//                 let releaseDate = cheerio(x).text();

//                 netflixOtherArray.push(releaseDate);

//             });

//             for (let i = 0; i < netflixArray.length; i++) {
//                 const year = netflixOtherArray[i]
//                 const movieTitle = netflixArray[i]

//                 finalnetflixArray.push({ title: movieTitle, release_date: year })

//                 console.log(finalnetflixArray.length)


//             }

//             netflixArray = [];
//             netflixOtherArray = [];




//         })
//         .catch(function (err) {
//             //handle error
//         });
// })

// setTimeout(function () {
//     console.log(JSON.stringify(finalnetflixArray));
// }, 10000)


// fetch("https://reelgood.com/source/hbo")
//     .then((html) => html.text())
//     .then(function (text) {
//         //success!
//         const cheerio = $.load(text);



//         cheerio('.eJ > a').toArray().map(function (x) {

//             let movieTitle = cheerio(x).text();

//             hboArray.push(movieTitle);

//         });
//         cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//             let releaseDate = cheerio(x).text();

//             otherArray.push(releaseDate);

//         });

//         for (let i = 0; i < hboArray.length; i++) {
//             const year = otherArray[i]
//             const movieTitle = hboArray[i]

//             finalHboArray.push({ title: movieTitle, release_date: year })


//         }

//         hboArray = [];
//         otherArray = [];





//     })
//     .catch(function (err) {
//         //handle error
//     });

// hbourls.map((url) => {
//     fetch("https://reelgood.com/source/hbo?offset=" + url)
//         .then((html) => html.text())
//         .then(function (text) {
//             //success!
//             const cheerio = $.load(text);

//             cheerio('.eJ > a').toArray().map(function (x) {

//                 let movieTitle = cheerio(x).text();

//                 hboArray.push(movieTitle);

//             });
//             cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//                 let releaseDate = cheerio(x).text();

//                 otherArray.push(releaseDate);

//             });
//             for (let i = 0; i < hboArray.length; i++) {
//                 const year = otherArray[i]
//                 const movieTitle = hboArray[i]

//                 finalHboArray.push({ title: movieTitle, release_date: year })

//             console.log(finalHboArray.length);

//             }

//             hboArray = [];
//             otherArray = [];




//         })
//         .catch(function (err) {
//             //handle error
//         });
// })


// fetch("https://reelgood.com/source/amazon")
//     .then((html) => html.text())
//     .then(function (text) {
//         //success!
//         const cheerio = $.load(text);

//         cheerio('.eJ > a').toArray().map(function (x) {

//             let movieTitle = cheerio(x).text();

//             primevideoArray.push(movieTitle);

//         });
//         cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//             let releaseDate = cheerio(x).text();

//             primevideoOtherArray.push(releaseDate);

//         });
//         for (let i = 0; i < primevideoArray.length; i++) {
//             const year = primevideoOtherArray[i]
//             const movieTitle = primevideoArray[i]

//             finalprimevideoArray.push({ title: movieTitle, release_date: year })

//             console.log(finalprimevideoArray.length);

//         }

//         primevideoArray = [];
//         primevideoOtherArray = [];

//     })
//     .catch(function (err) {
//         //handle error
//     });

// primevideourls.map((url) => {
//     fetch("https://reelgood.com/source/amazon?offset=" + url)
//         .then((html) => html.text())
//         .then(function (text) {
//             //success!
//             const cheerio = $.load(text);

//             cheerio('.eJ > a').toArray().map(function (x) {

//                 let movieTitle = cheerio(x).text();

//                 primevideoArray.push(movieTitle);

//             });
//             cheerio('.eN > td:nth-child(4)').toArray().map(function (x) {

//                 let releaseDate = cheerio(x).text();

//                 primevideoOtherArray.push(releaseDate);

//             });
//             for (let i = 0; i < primevideoArray.length; i++) {
//                 const year = primevideoOtherArray[i]
//                 const movieTitle = primevideoArray[i]

//                 finalprimevideoArray.push({ title: movieTitle, release_date: year })

//                 console.log(finalprimevideoArray.length);

//             }

//             primevideoArray = [];
//             primevideoOtherArray = [];


//         })
//         .catch(function (err) {
//             //handle error
//         });
// })



export { netflixArray, hboArray, primevideoArray };