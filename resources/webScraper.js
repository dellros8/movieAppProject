const $ = require('react-native-cheerio');
const netflixArray = [];
let urls = []

for (let i = 0; i < 150; i++) {
    urls.push(i.toString())
}
urls.map((url) => {
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

export default netflixArray;