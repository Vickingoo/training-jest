const { sayHello, generateRandInt: random } = require("../app");

test("greetings from JEST", () => {
  let greeting = sayHello();
  expect(greeting).toBe("Hello World!"); //también en vez de la variable greeting se puede meter la función tal cual
  //en expect iría la función y en el toBe es donde se hacen las comparaciones para hacer la comprobación.
  expect(2 + 2).toBe(4);
  expect(!0).toBe(true);
});

test("checking object and arrays", () => {
  let data = {
    email: "john@connor.com",
    password: "I'llB3B@ck",
  };
  let number = [1, 2, 3];

  expect(data.password).toEqual("I'llB3B@ck"); // toEqual es para arrays u objetos.
  expect(Object.keys(data).length).toEqual(2);
  // expect(number[number.lenght-1]).toEqual(3)
});

test("checking the opposite of something", () => {
  expect(2 + 2).not.toBe(5);
  expect("hello").not.toBe("world");
  expect(3 % 2).not.toBe(0);
});

test("checking floating numbers", () => {
  //it will fail because they are decimal numbers
  // expect(0.2 + 0.1).toBe(0.3)
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});
test("checking truthinss", () => {
  let data = [1, true, 3.5, null, undefined];
  expect(data[3]).toBeNull();
  expect(data).toBeDefined();
  expect(data[5]).toBeUndefined();
  expect(data.length == 5).toBeTruthy(); //esto comprueba la veracidad de algo, comprueba el booleano
  expect(data[0] == 4).toBeFalsy(); //lo mismo que antes pero en este caso comprueba si es falso.
});

//HAY TRES MANERAS DE INICIALIZAR LOS TEST
//npm test
//npx jest
//./node/.bin/jest

test("checking strings", () => {
  expect("12345678A").toMatch(/^[0-9]{8,8}[A-Za-z]$/); //{8,8} signfica que será el mínimo y máximo de veces que saldrá.
  //el acento circunflejo indica como mepieza y el dolar como debe terminar
  expect("60828be935bf80268d0326b7e1a2c408").toMatch(/[0-9a-f]/i);
});

//EJERCICIO

// Escribe el código necesario para testear la función suma()
// comprobando los casos extremos, por ejemplo los argumentos no numéricos o los corner cases(casos límites)
//investigar el número más grande posible en javaScript tanto positivo como negativo
//preparar los test para esos casos.

//Agrupamiento de test

describe("generar numeros aleatorios entre dos limites definidos", () => {
  test("entre 1 y 6", () => {
    let min = 1,
      max = 6,
      number = random(max, min);
    expect(number).toBeGreaterThan(0);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(6);
    expect(number).toBeLessThan(7);
  });
});
describe.only.each([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
])("generating three random numbers", (a, b, c, d) => {
  test(`between ${b} ${c}`, () => {
    // let min=1, max=6,
    let number = random(c, b);
    expect(number).toBeGreaterThan(0);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(6);
    expect(number).toBeLessThan(7);
  });
});
