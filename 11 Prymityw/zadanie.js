function convertToWrapper(arg) {
    if (typeof arg === "number") {
        return new Number(arg);
    } if (typeof arg === "string") {
        return new String(arg);
    }
    if (typeof arg === "boolean") {
        return new Boolean(arg);
    }
}
console.log(convertToWrapper("Dupsko"));
console.log(convertToWrapper(5));
console.log(convertToWrapper(true));