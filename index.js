const saludo = () => {
    console.log("Hola mundo!!");
}

const saludoPersonalizado = (nombre) => {
    console.log(`Hola ${nombre}`);
} 

const saludoNpm = () => {
    console.log("Hola al curso NPM!!!");
}

module.exports = {
    saludo,
    saludoPersonalizado,
    saludoNpm
}