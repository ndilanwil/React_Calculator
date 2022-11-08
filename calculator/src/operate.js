const operate = () => {
    try{
        setResult(eval(result).toString());
    }
    catch(err){
        setResult("ERROR, clear to start back");
    }
}

export default operate;