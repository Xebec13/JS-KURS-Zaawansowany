function extractDomain(adress) {
    const atIndex = adress.lastIndexOf("@")
    if (atIndex === -1) {
        return null;
    }
    return adress.substring(atIndex + 1)
}

console.log(extractDomain("Dupsko@gmail.com")); // Powinno zwrócić "gmail.com"
console.log(extractDomain("Andrzej-wp.com")); // Powinno zwrócić null
