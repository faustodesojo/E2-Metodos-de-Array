const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


console.log("---- Consigna a ----");


const idImpar = pizzas.filter (pizza => pizza.id % 2 !==0);

idImpar.forEach(pizza => console.log(pizza.nombre));


console.log("---- Consigna b ----");


const menosDe600 = pizzas.some((pizza) => pizza.precio < 600);
console.log(menosDe600);


console.log("---- Consigna c ----");


pizzas.forEach(pizza =>console.log("La " + pizza.nombre + " tiene un valor de $" + pizza.precio));


console.log("---- Consigna d ----");

pizzas.forEach((pizza)=> {
  console.log("Los ingredientes de la " + pizza.nombre + " son :");
  pizza.ingredientes.forEach((ingrediente)=>{
    console.log(ingrediente)
  })
})