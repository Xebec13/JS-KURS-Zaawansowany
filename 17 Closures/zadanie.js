function serializeObject(obj) {
    let result = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(`${prop}: ${obj[prop]}`);
        }
    }
    return result.join(" | ");
}
 
function deserializeString(str) {
    let result = {};
    let pairs = str.split(" | ");
    pairs.forEach(pair => {
        let [key, value] = pair.split(": ");
        if (!isNaN(value)) {
            value = Number(value);
        } else if (value === "true" || value === "false") {
            value = value === "true";
        }
        result[key] = value;
    });
    return result;
}