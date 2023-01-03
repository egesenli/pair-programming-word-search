const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = letters[0].map((_, i) => letters.map(ls => ls[i]).join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch