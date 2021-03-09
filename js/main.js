// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    for(let i=0; i< dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log(`Matched ${dog_names[i]}`)
        } else {
             console.log("No matches")}
        }
    }

findWords(dog_names, dog_string)


// //Call method here with parameters

// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i=0; i< arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, "even index")
        }
    }
    return arr
}

console.log(replaceEvens(arr))

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// KATA
// You've just moved into a perfectly straight street with exactly n identical 
// houses on either side of the road. Naturally, you would like to find out the house 
// number of the people on the other side of the street. The street looks something like this:
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and 
// increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
// overTheRoad(address, n)
// overTheRoad(1, 3) = 6
// overTheRoad(3, 3) = 4
// overTheRoad(2, 3) = 5
// overTheRoad(3, 5) = 8

function overTheRoad(address, n){
    return (n*2+1)-address;
  }

console.log(overTheRoad(3,3))


// Timmy & Sarah think they are in love, but around where they live, 
// they will only know once they pick a flower each.
//  If one of the flowers has an even number of petals and the other has an odd number 
//  of petals it means they are in love.
// Write a function that will take the number of petals of each flower
//  and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2%2===0) {
      return false;
        } else if (flower1 % 2 != 0 && flower2%2 != 0){
          return false;
          }else{
            return true
          }
        }

console.log(lovefunc(1,6))