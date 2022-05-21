// Code your solution in this file!

const hq = 42

//returns the number of blocks given a value
function distanceFromHqInBlocks(blocks){
    if (blocks > hq) {
        return blocks - hq
    }
    else 
        return hq - blocks
}


// call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

// the return value of distanceFromHqInBlocks can then be used to calculate feet
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264
}


// returns the number of feet traveled
function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264)
}


// returns the fare for the customer
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * 0.02)
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}