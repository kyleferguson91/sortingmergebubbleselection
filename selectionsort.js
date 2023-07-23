function selection(arr)
{

    // do this same thing for i number of lines and for each line do it j number of times (decreasing number of times each line as per below)


    // we traverse the array, and compare the arr[0] with 1 to length element in the array and see if something is smaller,
    // if we find a smaller one we update the zero, if we don't leave zero alone, now the zero is set
    // in our 'sub array' we then iterate again comparing the 1 value to 2 to length elements in the array

    // we need to keep track of the currently smallest number, which should start with arr[0] then arr[1] arr[2] etc..

    
    for (let i = 0; i < arr.length; i++)
    {

            // compare value 0,1,2,3,..length
            // against 0,1,2,3,4,5
            // but we dont need to compare the same indexes and we dont need to compare whole array again
            // think of 4 elements
            // 0 to  1 2 3 
            // then 1 to 2 3
            // then 2 to 3
            // so if we set j to start at i (which will increase each loop, we can accomplish this..)
            // 0 to 0,1,2,3,4,5
            // 1 to 1,2,3,4,5
            // 2 to 2,3,4,5
            // and if we set j to i+1 we ignore the first index (each time) which is our value we are comparing anyway
            // and for each new iteration, we set the currentlow to arr[i] which arr[0] arr[1] arr[2]

            let currentlow = arr[i];
            let curentindex;
            for (let j = i+1; j<arr.length;j++)

            {
                if (arr[j] < currentlow) 
                {
                    // if we found a value less than our currently lowest value, update the current low
                    currentlow = arr[j]
                    currentindex = j;
                }

            }

            // now that we have reached the end of the array, set the curent index i, which will be ever increasing indexes of the sub array to arr[j]
            // but we only must do this if we found a lower value than our currently lowest..
            // otherwise just leave it alone in its current index and continue up one in the sub array 
            if (currentlow != arr[i])
            {
                arr[currentindex] = arr[i]
                arr[i] = currentlow;
              
            }

    }

    // now that we have traversed the array (checked all values against every value with decreasing length as sub array grew)

return arr


}

let arr1 = [10,7,7,1,1,9,8,13,13,13,15,7,6,5,4,-322,-4344,2,1]
console.log(selection(arr1))