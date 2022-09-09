

main(enhaner);

function main(func){
    console.log("start");
    new Promise(function(resolve,reject){
        // function enhaner(resolve,reject){
        //     invoke(1,resolve);
        // }
        func(resolve,reject);
    }).then(
        function(result){
            if(result){
                console.log(1);
            }
        }
    ).catch(function(){
        console.log(0);
    })
}

function enhaner(resolve,reject){
    invoke(1,resolve,reject);
}

function invoke(data,resolve,reject){
    if(data == 1){
        // throw Error();
        return reject(true);
    }
    return resolve(false);
}