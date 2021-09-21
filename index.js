// Code your solution in this file!

function distanceFromHqInBlocks(i) {
    if (i > 42) {
        return (i - 42);
    } else {
        return (42 - i);
    }
};

function distanceFromHqInFeet(i) {
    let distance = distanceFromHqInBlocks(i)
    return (distance * 264)
};

function distanceTravelledInFeet(block1, block2) {
    if (block1 > block2) {
        return (block1 - block2) * 264;
    } else if(block1 < block2) {
        return (block2 - block1) * 264;
    }
}

function calculatesFarePrice(pointA, pointB) {
    let feet = distanceTravelledInFeet(pointA, pointB)
    if (feet < 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
    return (feet - 400) * .02
    } else if (feet > 2000 && feet < 2500) {
        return 25.00
    } else {
        return 'cannot travel that far'
    }
};