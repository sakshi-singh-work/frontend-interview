let arr = [1, 2, 3, [6, 7,[7,90,12]]];

function flatArray(arr){
    let newArr=[]
    for(let el of arr){
        if(Array.isArray(el)){
            newArr.push(...flatArray(el))
        }else{
            newArr.push(el)
        }
    }
    return newArr
}
console.log(flatArray(arr))