// Sorting Algorithm
var array = [52, 15, 45, 63, 87, 12, 52, 0];

// function bubbleSort(arr){
//     for(var i = arr.length - 1; i >= 0; i--){
//         for(var j = 0; j < i; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// function selectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var minIndex = i;
//         for(var j = i + 1; j < arr.length; j++){
//             if(arr[minIndex] > arr[j]){
//                 minIndex = j;
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp
//     }
//     return arr;
// }


// // Bubble
// // Selection
// // Insertion - gert 
// // Quick - gert
// // Merge
// // Radix



// // [52], [15], [45], [63], [87], [12], [52], [0]
// // [15, 52]     [45, 63]    [12, 87]    [0, 52]
// //    [15, 45, 52, 63]        [0, 12, 52, 87]
// //        [0, 12, 15, 45, 52, 52, 63, 87]
function merArray(left, right){
    var result = [];
    var i = 0;
    var j = 0;

    while(left.length > i && right.length > j){
        if(left[i] > right[j]){
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
    }

    for(i; i < left.length; i++){
        result.push(left[i]);
    }

    for(j; j < right.length; j++){
        result.push(right[j]);
    }

    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    var midIndex = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, midIndex));
    var right = mergeSort(arr.slice(midIndex));
    
    return merArray(left, right);
}

// getDigit(number, i) => 5
// 10 * 0 = 1
// 10 * 1 = 10
// 10 * 2 = 100
// 10 * 3 = 1000
// 10 * 4 = 10000
// 10 * 5 = 100000

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
// 2654 10**i
// 4562 / 100, 45 / 10 => 5
function countDigit(num){
    if(num < 0){
        return num.toString().length - 1
    }
    return num.toString().length
}

function maxDigits(arr){
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        max = Math.max(max, countDigit(arr[i]))
    }
    return max
}

function radixSort(arr){
    var digit = maxDigits(arr);
    for(var i = 0; i < digit; i++){
        const lists = Array.from({length: 10}, () => []);
        for(var j = 0; j < arr.length; j++){
            lists[getDigit(arr[j], i)].push(arr[j]);
        };
        arr = [].concat(...lists);
    }
    return arr;
}