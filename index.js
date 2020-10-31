function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num >= 10)
            resolve("Getal groter dan 10");
        else {
            let foutje = new Error("Getal niet groter dan 10");
            reject(foutje);
        }
    })
};

console.log(testNum(12));


const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof(word) === "string"))
            resolve(words.sort());
        else reject("niet alles is een string");
    })
}
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (
            words.every(word => typeof(word) === 'string')) {
            resolve(
                //sortWords(
                words.map(word => {
                    return word.toUpperCase();
                })
                //)
            );
        } else {
            reject('Niet alles is een string !');
        }
    })
}

function checkWords(arrin) {
    makeAllCaps(arrin)
        .then(result => sortWords(result))
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

checkWords(["cucumber", "tomatoe", "avocado"]);
checkWords(["cucumber", true, 9]);