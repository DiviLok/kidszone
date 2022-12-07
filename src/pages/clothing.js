import { useEffect, useState } from "react";
//import sizeName from "./addSizes";

function handleClick() {
  alert("added to cart");
  return (

    <p>product added to cart</p>
  )
}

function Clothing() {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    fetch(`https://storefrontkidzzy.azurewebsites.net/api/Clothes`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData)
        setClothes(actualData)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [toggleImage, setToggleImage] = useState(true);

 /*  const imageClick = (cloth) => {
    setToggleImage(!toggleImage)
    return (
      <div>
        <h1 className="header">Kids Clothes</h1>
        <div className='item-container'>
          return (
          <div>
            <img id='imageDetails' src={cloth.type} alt='professionalprofile' />
            <div>
              <h4>{cloth.name}</h4>
              <h5> {cloth.description} </h5>
              <h5> {cloth.material} </h5>
              <h5> <addSizes/> </h5>
            </div>

          </div>
          <div id='contactInfo'></div>
        </div>
        );

      </div>
    )
  } */
  return (
    <div>
      <h1 className="header">Kids Clothes</h1>
      <div className='item-container'>
        {clothes.map(cloth => {
          return (
            <div className="card">
              {/* <div className='imageContactDetails' onClick={() => imageClick(cloth.name)} >
                  {toggleImage ? <img src={cloth.type} alt='' />: */}
              {/* {toggleImage ? <img src={clothes.type} alt='' onClick= {imageClick(clothes.name,clothes.description,clothes.material,clothes.type,sizeName)}/>: */}

              <div><img src={cloth.type} /></div>
                <div><h3 id='clothname'>{cloth.name}</h3>
                  <label>Size</label>
                     <select>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <h3><addSizes/></h3>
                    <h3>{cloth.price} SEK</h3>
                    
                    <h3><button onClick={event => handleClick(event, 'product added to cart')}>
                      <a href="#" className="btn btn-primary" />
                      Add to cart
                    </button></h3>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Clothing;