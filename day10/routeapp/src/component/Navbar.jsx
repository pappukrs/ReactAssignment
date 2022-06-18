import styled from 'styled-components';
import {Link} from 'react-router-dom'






 const NavbarWrapper=styled.div`
  margin-left:5%;
  margin-right:5%;
  background-color:teal;
  display:flex;
  justify-content:center;
  align-items:center;
 
  padding:10px;
  color:white;
  font-size:70px;
  gap:10px;
 `
 const StyledLink=styled(Link)`
    color:red;
    border:1px solid black;
    
    padding:10px;
    text-decoration:none;
    
 `

 const Navbar=()=>{

    return(
        <NavbarWrapper>
       < StyledLink to='/'>Home</ StyledLink>
       < StyledLink to='/product'>Product  </ StyledLink>
       
       
        </NavbarWrapper>
    )
 }
export default Navbar;
