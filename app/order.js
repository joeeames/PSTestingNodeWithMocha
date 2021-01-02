

// module.exports = (cart, cb) => {
//     // send cart info to server

//     setTimeout(() => {
//         // notify that order was success
//         cb(true)
//     }, 500)
// }


module.exports = (cart) => {
    let p = new Promise((resolve, reject) => {
        resolve(500);
        // reject();
    })
    return p;
}