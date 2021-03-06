import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg.svg'
import auth from '../../firebase/firebase.utils'
import "./Header.styles.scss"

const Header = ({currentUser})=>(
    <div className="header">
     <Link to="/" className="logo-container"><Logo className="logo"/></Link>

     <div className="options">
         <Link className="option" to="/shop">Shop</Link>
         <Link className="option" to="/shop">Contact</Link>
         {currentUser? 
         <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> 
        : <Link to='/signin' className='option'>SIGN IN</Link>}
     </div>
    </div>
)


export default Header;