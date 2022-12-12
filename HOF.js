const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004},
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 59];



const arr =["wasay", "mirza" , "mohsin", "ali"];
console.log(arr);
console.log(arr.slice().sort())
console.log(arr)


//   for(let i=0; i< companies.length; i++){
//     console.log(companies[i]);
//   }

//  for Each

companies.forEach((company) => {
  console.log(company.name);
  console.log(company.category);
});

// Filter

const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

const retailCompany = companies.filter(
  (company) => company.category === "Finance"
);
console.log(retailCompany);

const lastTen = companies.filter((company) => company.end - company.start > 10);
console.log(lastTen);

// Map

const companyName = companies.map((company) => company.name);
console.log(companyName);

const testMap = companies.map(
  (company) => `${company.name} [${company.start} ${company.end}]`
);
console.log(testMap);

const ageSquare = ages.map((age) => age * 2);
console.log(ageSquare);

//Reduce

const sum = ages.reduce(function (total, age) {
  return total + age;
}, 0);
console.log(sum);

const sum2 = ages.reduce((total, age) => total + age, 0);
console.log(sum2);

const totalsYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
0);
console.log(totalsYears)
