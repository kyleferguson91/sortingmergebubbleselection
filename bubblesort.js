function bubble(arr)
{


    // we compare two side by side values, if one is lower we swap
    // we do this until finished the array
    // and we continually traverse until we have made no more swaps..
    
    // variable to count number of swaps we just did 

    let swapcount = 0;

    // do while loop so we iterate once, and then determine if we have made any swaps and thus to iterate again

    do {
        // we set swapcount equal to 0 on each iteration otherwise we would get an infinite loop
swapcount = 0;
        for (let i = 0; i<arr.length-1; i++)
        {
            // because we are comparing i to i+1 we traverse 1 element less, say we have 4 element array, we will compare
            // 0 to 1, 1 to 2, 2 to 3, so we go from 0 to 2

            if (arr[i] > arr[i+1])
            {
                // hold the prior value of arr[i]
                let prior = arr[i];
                // swap the values
                arr[i] = arr[i+1];
                arr[i+1] = prior;
                // add one to swap count, as we made a swap
                swapcount++
            }
        }
    }
    while(swapcount > 0)
// finally when all done without making any swaps, return the arr
return arr;

}

let arr1 = [10,7,7,1,1,9,8,7,6,5,4,322,2,1]
console.log(bubble(arr1))