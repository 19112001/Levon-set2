
function reverseArray() {
    const input = document.getElementById('arrayInputReverse').value;
    let array = input.split(',').map(Number);
    let left = 0, right = array.length - 1;

    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];  
        left++;
        right--;
    }

    document.getElementById('reversedArray').innerText = 'Reversed Array: ' + array.join(', ');
}


function removeDuplicates() {
    const input = document.getElementById('arrayInputDuplicates').value;
    let array = input.split(',').map(Number);
    if (array.length === 0) return;

    let index = 0;  

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[index]) {
            index++;
            array[index] = array[i];
        }
    }

    const newArray = array.slice(0, index + 1);
    document.getElementById('newLength').innerText = 'New Length: ' + (index + 1);
    document.getElementById('updatedArray').innerText = 'Updated Array: ' + newArray.join(', ');
}
