/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let set = new Set();
    set.add('a');
    set.add('A');
    set.add('e');
    set.add('E');
    set.add('i');
    set.add('I');
    set.add('o');
    set.add('O');
    set.add('u');
    set.add('U');
    let result = [];
    let count = 1;
    let arr = sentence.split(' ');
    for (let word of arr) {
        let res = word.split('');
        if (set.has(res[0])) {
            res.push('m');
            res.push('a');
            for (let i = 0; i < count; i++) {
                res.push('a');
            }
        } else {
            res.push(res.shift());
            res.push('m');
            res.push('a');
        }
        result.push(res);
        count++;
    }
    console.log(result);
    return result.join(' ');
};
console.log(toGoatLatin('I speak Goat Latin'));
