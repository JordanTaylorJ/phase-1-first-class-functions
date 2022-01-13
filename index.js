/* 
const run = "Go for a five-mile run"
const iron = "Pump iron"
const swim = "Swim 40 laps"

function Monday(){  
    return run + iron
}

function Tuesday(){
    retunr run + swim
}

function Wednesday(){
    return run + run
}

function Thursday(){
    return run + iron
}

function Friday(){
    return run + iron
}

function runFiveMiles(){
    console.log("Go for a five-mile run");
}
*/
/*
function LiftWeights(){
    console.log("Pump iron");
}

function swim(){
    console.log("swim 40 laps")
}

function Monday(){
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}
*/

function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(parameter){
    return function (){
        console.log("anonymous");
    }
}

