
let dictionary = {};
let list = [1,2,3,4];

list.forEach( function(v,i){
    if (isNaN( dictionary[v] )){
        dictionary[v] = 1;
    }else{
        dictionary[v] ++;
    }
});


let r = list.reduce((p,c)=>{
    return p+c;
});



console.log(r);
