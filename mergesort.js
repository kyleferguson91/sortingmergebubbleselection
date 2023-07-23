function mergesort(arr)
{

    // we continually split left and right until we have one array, then we can return that array by itself, and make the next call eg to right 
    // until we return 1 element array each time, and then we can build upon that answer since we know the answers to the previous recursive calls..
    if (arr.length < 2)
    {
        return arr;
    }
let mid = Math.floor(arr.length / 2)
let left = arr.slice(0,mid)
let right = arr.slice(mid)


// continue to make recursive calls until we hit our base case..

return merge(mergesort(left), mergesort(right))


}


function merge(arr1,arr2)
{
    //todo: write merge functionality 
    
    // initialize counters to traverse each array
    let counter1 = 0;
    let counter2 = 0;
    // array to be returned
    let merged = [];

    // while counters are less than the length of either array, keep comparing values but as soon as one counter extends array bounds we stop..
    // if we used an or, as long as one of the values is true we would still go
    // which means we never get into position to add other arrray
    // we use an and as we want both conditions to be true otherwise we quit
    // i was using || before which means we did not exit this while loop when one array was finished and it messed up the whole thing.
    // as soon as ONE array is out of bounds we stop and push the other array depending which one

    while (counter1 < arr1.length && counter2 < arr2.length)
    {
        if (arr1[counter1] < arr2[counter2])
        {
            // if arr1 is the lesser value, push to return array
            merged.push(arr1[counter1])
            // and increment position by 1
            counter1++
        }
        else {
            // otherwise push the other (lesser) value, and increment counter 2 by 1
            merged.push(arr2[counter2])
            counter2++
        }
    }

    // at this point we have finished one of the two arrays, loops below
    // will handle adding the rest of the elements from the respective array

    while (counter1 < arr1.length)
    {
        merged.push(arr1[counter1])
        counter1++
    }
    while (counter2 < arr2.length)
    {
        merged.push(arr2[counter2])
        counter2++
    }




    return merged

    
}


let arr2 = [23,44,55,66,754,23,44,-333987, 29,23,44,55,66,754,23,44,-333987, 29,32]

console.log(mergesort(arr2))