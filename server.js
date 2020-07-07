const Axios = require( 'axios' )
const cheerio = require( 'cheerio' )

Axios
    .get( 'https://www.youtube.com/' )
    .then( ( res ) => {
        const $ = cheerio.load( res.data )
        const header = $( '.style-scope ytd-two-column-browse-results-renderer' )
        console.log(header.html())
        // console.log(header.text())
        // console.log(res.data)
//         $( '.style-scope ytd-rich-grid-renderer div' ).each( ( i, el ) => {
//             const item = $( el )
//             console.log(item)
// })
    } )
    .catch(err=> console.log(err))
