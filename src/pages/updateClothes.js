//source code: https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
function UpdateClothes() {

  function handleClick() {

    var jsonData = {
      "clothId": document.getElementById("clothId").value,
      "name": document.getElementById("clothname").value,
      "description": document.getElementById("description").value,
      "material": document.getElementById("material").value,
      "type": document.getElementById("path").value,
      "price": document.getElementById("price").value,
      "kidsClothes": [],
      "clothesAndSizes": []
    }
    // Send data to the backend via POST
    var clothId = document.getElementById("clothId").value;
    console.log(JSON.stringify(jsonData))
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData)
    };

    fetch(`https://localhost:7085/api/Clothes/${clothId}`, requestOptions)
      .then(alert("Update successful"))
  }


  return (

    <div>
      <table >
        <tr>
          <th>Field</th><th>Value</th>
        </tr>
      
      <tr>
        <td>
          <label>Cloth ID</label>
        </td>
        <td>
          <select id="clothId" selected>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><label>Price</label></td>
        <td><input id='price' type="text"></input></td>
      </tr>
      <tr>
        <td><label>Name</label></td>
        <td><input id='clothname' type="text"></input></td>
      </tr>
      <tr>
        <td><label>Description</label></td>
        <td><input id='description' type="text"></input></td>
      </tr>
      <tr>
        <td><label>Image Path</label></td>
        <td><input id='path' type="text"></input></td>
      </tr>
      <tr>
        <td><label>Material</label></td>
        <td><input id='material' type="text"></input></td>
      </tr>
      </table>

      <button onClick={handleClick}>update</button>
    </div>

  );

}

export { UpdateClothes };
