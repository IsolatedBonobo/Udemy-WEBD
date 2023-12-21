function getmilk(money){
    var change = money % 1.5;
    console.log(Math.floor(money / 1.5) + " number of bottles you can buy" ) ;
    return change ;
}
var change = getmilk(5); 
console.log(change)