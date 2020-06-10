// Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 const drivers1 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
 
function findMatching(drivers,str){
  return drivers.filter((element)=>{
        return  element.toLowerCase() === str.toLowerCase()
      });
  }
 findMatching(drivers,"Bobby");
 
function fuzzyMatch(arr, str){
    let matchedDriver = arr.filter((driver)=>{
   
    if(driver.startsWith(str)){
      return driver;
    }
  })
  return matchedDriver;
}
fuzzyMatch(drivers,"Sa");

function matchName(arr, str){
let matchedName = arr.filter((drivName)=>{
  if(drivName.name === str){
    return drivName.name
  }
}) 
return matchedName;
  
}
matchName(drivers1,'Bobby')