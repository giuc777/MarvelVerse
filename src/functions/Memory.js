const ArrayRandom = (Array)=> {

    const UseArray = [...Array, ...Array]


    function compareRandom (){
        return Math.random() - 0.5 
    }
    const ArrayFinal = UseArray.sort(compareRandom)
    return ArrayFinal
}



export default ArrayRandom