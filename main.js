// Your code here.
function getFirstName(person) {
  return person.firstName;
}

function getLastName(person) {
  return person.lastName;
}

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

function setFirstName(person, secondFirstName) {
    person.firstName = secondFirstName;
}

function setAge(person, age) {
  person.age = age;
}

function giveBirthday(person) {
  if (person.age === undefined) {
    person["age"] = 0;
  }
  person.age += 1;
}

function marry(person1, person2) {
  person1.married = true;
  person2.married = true;
  person2.spouseName = getFullName(person1);
  person1.spouseName = getFullName(person2);
}

function divorce(person1, person2) {
  person1.married = false;
  person2.married = false;
  delete person2.spouseName
  delete person1.spouseName
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
