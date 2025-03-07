const data = {
  nama: "ilman",
  sayHello: () => console.log("hello world"),
};

console.log(data.nama);
data.sayHello();

const { nama, sayHello } = data;
console.log(nama);
