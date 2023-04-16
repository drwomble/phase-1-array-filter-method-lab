// Code your solution here

/* function findMatching(name, query){
return name.filter(name => driver.toLowerCase() === query.toLowerCase());
} */
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

function fuzzyMatch(driver, query){
    return driver.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}