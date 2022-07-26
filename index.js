const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const addElements = (accumulator, element) => {
    return accumulator += element 
}

let totalBatteries = batteryBatches.reduce(addElements, 0)
