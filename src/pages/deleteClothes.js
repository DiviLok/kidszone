function DeleteCloth(){
    function handleClick(){
        const requestOptions = {
          method: 'DELETE'
        };
        var clothId = document.getElementById("deleteClothID").value;
        fetch(`https://localhost:7085/api/Clothes/${clothId}`, requestOptions)
          .then(alert("Delete successful"))
    }
    return(
        <div>
            <label>Enter the cloth ID to be deleted</label>
            <input type="text" id="deleteClothID" width="10px" height={10}></input>
            <button type="submit" onClick={handleClick}>submit</button>
        </div>
    );
 
}
export {DeleteCloth} ;