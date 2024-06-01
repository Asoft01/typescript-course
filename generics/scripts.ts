// function getFirstElement(array: number[]) {
//     return array;
// }

///////////////////////////////////////////////////////////////////////////////////////////////
// function getFirstElement(array: (string | number)[]){
//     return array;
// }

// const numbers = [1, 2, 3]; 
// const firstNum = getFirstElement(numbers); 

// const strings = ["hello", "my world", "is here"]; 
// const firstString = getFirstElement(strings)


function getFirstElement<ElementType>(array: ElementType[]) {
    return array[0]; 
}

const numbers = [1, 2,3]; 
const firstNum = getFirstElement(numbers); 

const strings = ["hello", "my world", "is here"]; 
const firstString = getFirstElement(strings); 
