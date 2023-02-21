// console.log("Hello World")

const companies = [
  {name: "Company One", category: "Finance", start:1981, end: 2003},
  {name: "Company Two", category: "Retail", start:1992, end: 2008},
  {name: "Company Three", category: "Auto", start:1990, end: 2007},
  {name: "Company Four", category: "Retail", start:1989, end: 2010},
  {name: "Company Five", category: "Technology", start:2009, end: 2014},
  {name: "Company Six", category: "Finance", start:1987, end: 1996},
  {name: "Company Seven", category: "Technology", start:2001, end: 2003},
  {name: "Company Eight", category: "Auto", start:1981, end: 2003},
  {name: "Company Nine", category: "Retail", start:1981, end: 2003},

];

const age = [33, 12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// for(let i=0; i<companies.length; i++){
//   console.log(companies[i]);
// }

// forEach

// companies.forEach((Company)=>{
//   console.log(Company)
//   console.log(Company.name);
//   console.log(Company.category)
  
// })

// filter

// let canDrink = [];
// for(let i = 0; i<age.length; i++){
//   if(age[i] >= 21){
//     canDrink.push(age[i]);
//   }
// }

const canDrink = age.filter( (age) =>{
  if(age >= 21){
    return true;
  }
});

// console.log(canDrink);

// filter retail companies
const retalCompanies = companies.filter((company)=>{
  if(company.category === 'Retail'){
    return true;
  }
})

const retailCompanies = companies.filter(company => company.category === 'Retail')

// console.log(retailCompanies);


const eightiesCompanies = companies.filter((company) =>{
  if(company.start >= 1980 && company.start <=1990){
    return true;
  }
})

// console.log(eightiesCompanies)

// get companies that lasted 10 years or more 
const lastedTenYears = companies.filter((company) =>{
  if((company.end - company.start)>=10 ){
    return true;
  }
})

// console.log(lastedTenYears)


// map

// Create array of company names
const companyNames = companies.map(company =>{
  return company.name;
})


const testMap = companies.map(company =>{
  return `${company.name} (${company.start} - ${company.end})`;
})
// console.log(testMap)




const agesSquare = age.map(age=>{
  return Math.sqrt(age);
})


const  multiplyByTwo = age
.map(age=> age*2)
.map(age => Math.sqrt(age))



// console.log(multiplyByTwo)


// sort

// sort companies by start year
const sortedCompanies = companies.sort((c1,c2)=>{
  if(c1.start >c2.start){
    return 1;
  }else{
    return -1;
  }
})

// console.log(sortedCompanies)

//sort ages

// const sortAges = age.sort();
// const sortAges = age.sort((a,b)=> a-b); // assending
const sortAges = age.sort((a,b)=>b-a); // dessending

// console.log(sortAges)

// reduce

// let ageSum = 0;
// for(let i = 0; i<age.length; i++){
//   ageSum += age[i];
// }

const ageSum = age.reduce((total, age)=>{
  return total + age;
},0)

// console.log(ageSum)

// Get Total years for all companies
const totalYears = companies.reduce((total, company) =>{
  return total+(company.end - company.start)
},0)

console.log(totalYears)



