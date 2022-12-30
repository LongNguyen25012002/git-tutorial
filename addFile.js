
const arr = [1,2,3];

const newMap = arr.map(e => e > 1);

const filterMap = arr.map(e => e).filter(e => e > 1);

console.log(newMap);
console.log(filterMap);

filterMap.push(4);
console.log(filterMap);

console.log(arr);

 let reduceArr = arr.reduce((inital,currentValue,index) => {
    let newObject = {};
    !inital["name"] ? inital.name = currentValue : null;
    return newObject = inital;
}, {})

console.log(reduceArr);


// let team = [
// {name: 'cong phuong', country: 'Viet Nam'},
// {name: 'Ronaldo', country: 'Portugal'},
// {name: 'Quang Hai', country: 'Viet Nam'},
// {name: 'Messi', country: 'Argentina'},
// {name: 'Nani', country: 'Portugal'},
// ]

//Nhiệm vụ chúng ta làm sao nhóm được các cầu thủ by quốc gia.

// dùng reduce().

// Array.prototype.groupBy = function(prop) {
// return this.reduce(function(groups, item) {
// const val = item[prop]
// groups[val] = groups[val] || []
// groups[val].push(item)
// return groups
// }, {})
// }

// console.log(team.groupBy("country"));

// Cách dùng: team.groupBy('country'); 

const object = {
    name : 'đức long',
    details : "hhh"
}

const createNewObj = (props) => {
    return props.details
}

console.log(createNewObj(object));

Array.prototype.arrNumberTenIndex = [1,2,3,4,5,6,7,8,9,10];

let a = [];
console.log(a.arrNumberTenIndex);
