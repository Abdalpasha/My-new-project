let getmygrade = function(currentmarks:number,totalmarks:number){
    let mygrade:string = '';
    let mypercentage:number = (currentmarks/totalmarks*100);
    if (mypercentage > 90){
        mygrade = 'a';
    }
    else if (mypercentage <= 90 || mypercentage >= 80){
        mygrade = 'b';
    }
    else if (mypercentage < 80 || mypercentage >=70){
        mygrade = 'c'
    }
    else if (mypercentage < 70 || mypercentage >= 60){
        mygrade = 'd'
    }
    else {
        mygrade = 'fail'
    }

    console.log(`Your percentage is ${mypercentage} and your grade is ${mygrade}`)
}

getmygrade(554,600)