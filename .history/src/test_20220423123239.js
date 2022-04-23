/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    // 重复次数
    let count = 0;
    let str = [];
    while (str.length < b.length && ++count > 0) {
        // str += a;
        str.push(a);
    }
    // str += a;
    str.push(a);
    let index = KMP(str.join(''), b);
    if (index === -1) return -1;
    return Math.floor(b.length + index > a.length * count ? count + 1 : count);
};

// kmp
const KMP = (a, b) => {
    // 匹配b是否为a的子串
    let sa = a.split('');
    let sb = b.split('');
    let next = [];
    getNext(next, b);
    let j = -1;
    for (let i = 0; i < a.length; i++) {
        while (j >= 0 && sa[i] !== sb[j + 1]) {
            j = next[j];
        }
        if (sa[i] === sb[j + 1]) {
            j++;
        }
        // 此时说明b为a的子串，因为匹配了j，返回当前下标
        if (j === b.length - 1) return i - j;
    }
    return -1;
};
// next
const getNext = (next, str) => {
    let s = str.split('');
    let j = -1;
    next[0] = j;
    for (let i = 1; i < s.length; i++) {
        while (j >= 0 && s[i] !== s[j + 1]) {
            j = next[j];
        }
        if (s[i] === s[j + 1]) {
            j++;
        }
        next[i] = j;
    }
};
repeatedStringMatch()