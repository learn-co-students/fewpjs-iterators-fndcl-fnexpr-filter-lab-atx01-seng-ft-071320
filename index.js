// Code your solution here
function findMatching(drivers, name){
 return drivers.filter(driver => (driver === name || driver === name[0].toLowerCase() + name.slice(1)))
}


function fuzzyMatch(drivers, letters){
   return drivers.filter(driver => driver.startsWith(letters))
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}
