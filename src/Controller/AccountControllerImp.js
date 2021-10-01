exports.AuthLogon = async function (data){

    let result = false;

    if(data.user === "alice" && data.pass === "x"){
        result = true;
    }

    return result;
}