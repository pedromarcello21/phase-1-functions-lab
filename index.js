// Code your solution in this file!
const distanceFromHqInBlocks = (x) => {
    return Math.abs(x-42)
}

const distanceFromHqInFeet = (x) =>{
    return Math.abs(x-42)*264
}

const distanceTravelledInFeet = (x,y) =>{
    return Math.abs(x-y) * 264

}

const calculatesFarePrice = (x,y) => {
    const feet = distanceTravelledInFeet(x,y)
    if (feet <= 400){
        return 0
    } else if (feet > 400 && feet < 2000){
        return feet /200 - .08
    } else if (feet > 2000 && feet < 2500){
        return 25
    } else if (feet > 2500){
        return "cannot travel that far"
    }

}

console.log(calculatesFarePrice(3,0))

// const calculatesFarePrice = (start, destination) =>{
//     const distanceTravelledInFeet = (distance) =>{
//         const distance = destination - start;
//         return Math.abs(distance) * 264
//     }
//     if (distance <=400){
//         return 0
//     } else if (distance > 400 && distance < 2000){
//         return distanceTravelledInFeet(destination - start)*264 * .02
//     }
// }
