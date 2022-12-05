import {Link} from 'react-router-dom'
function Navbar() {
    return (

      <div>
        <div className='navbar'>
        <div className='container'>
        <ul>
        <Link to="/HomePage">Home</Link>
        <Link to="/Clothing">Clothing</Link>
        <Link to="/UpdateClothes">UpdateClothes</Link>
        <Link to="/AddClothes">AddClothes</Link>
        <Link to="/DeleteCloth">DeleteCloth</Link>
        <Link to="/Weather">Weather</Link>


        </ul>
        </div>
        </div>
      </div>
      
    );
  }
  
  
export default Navbar;