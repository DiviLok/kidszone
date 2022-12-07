//source code: https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples

function AddClothes() {

    function handleClick() {
  
      var jsonData = {
        "name": document.getElementById("clothname").value,
        "description": document.getElementById("description").value,
        "material": document.getElementById("material").value,
        "type": document.getElementById("path").value,
        "price": document.getElementById("price").value,
        "kidsClothes": [],
        "clothesAndSizes": []
      }
      // Send data to the backend via POST
      console.log(JSON.stringify(jsonData))
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
      };
  
      fetch(`https://storefrontkidzzy.azurewebsites.net/api/Clothes`, requestOptions)
        .then(alert("Add successful"))
    }
  
  
    return (
  
      <div>
        <table >
          <tr>
            <th>Field</th><th>Value</th>
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
  
        <button onClick={handleClick}>Add</button>
      </div>
  
    );
  
  }
  
  export { AddClothes };