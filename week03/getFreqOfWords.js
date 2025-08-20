function getFreqOfWord(sentence){
    if(sentence === null || sentence === undefined){
        return undefined
    }
    let arr_sentence = sentence.toLowerCase().split(" ")
    let obj_sentence = {}
    for(let i of arr_sentence){
        if(i in obj_sentence){
            obj_sentence[i]+=1
        }
        else{
            obj_sentence[i] = 1
        }
    }
    return obj_sentence
}

console.log(getFreqOfWord(null))