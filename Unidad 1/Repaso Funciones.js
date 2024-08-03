//1-Crear un arreglo de nombres a partir del siguiente input
let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
  ];
  
console.log(input.map((a)=>a['name']))

//2 Crear un arreglo de nombres a partir del arreglo anterior pero solo para las personas mayores de 20 años y menores de 29.
console.log(input.filter((a)=>a.age>20&& a.age<29))

//3-Ordenar segun Pupulation
const countries = [
{ 'name': 'Argentina', 'population': 458100000},
{ 'name': 'USA', 'population': 470000000},
{ 'name': 'Uruguay', 'population': 36125362},
{ 'name': 'China', 'population': 99900099900}
]
console.log(countries.sort((a,b)=>b['population']-a['population']))

//4-Contar Velas
candles = [4, 4, 1, 3]
candlesLength = Math.max(...candles)
console.log(candles.filter((a)=>a===candlesLength).length)

//6 Arreglo asistencias 0=assist ok, 
const assists = [0,0,0,1,0,1,0,1,0,1]
const minimum = 6
const result = assists.filter((a)=>a==0)
console.log(result.length >= minimum ? 'NO' : 'YES')

//7 conversion de arrays
array = [{"a":1, "b":100},{"a":2, "b":120}]
console.log(array.map((a)=>[['a',a['a']],['b',a['b']]]))