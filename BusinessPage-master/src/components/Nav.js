import React from 'react';
import '../css/style.sass'
// import '../css/Nav.css'
import {NavLink} from 'react-router-dom';

import img from '../img/wave.png'

let prevScrollpos = window.pageYOffset;

class Nav extends React.Component {
    state = { 
        active: false,
        activeNav: false,
        flag: true,
     }

     changeStateNav = ()=>{
        this.setState({
            activeNav: !this.state.activeNav,
        })
     }

     changeFlag = ()=>{
         this.setState({
             flag: true,
         })
     }

     handleClick = ()=>{
         this.setState({
             flag: false,
             active: !this.state.active,
         })
         setTimeout(this.changeFlag,1000)
         if(this.state.activeNav){
            setTimeout(this.changeStateNav, 1000)
        }else{
            this.setState({
                activeNav: !this.state.activeNav,
            })
            this.nav.current.style.transform = `rotate(0deg)`
            this.nav.current.style.left = "5vh"
        }

     }

     handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if(prevScrollpos < currentScrollPos && currentScrollPos>50){
            this.nav.current.style.transform = `rotate(-90deg) translateY(-2vh)`
            this.nav.current.style.left = "0vh"
        }
        else{
            this.nav.current.style.transform = `rotate(0deg)`
            this.nav.current.style.left = "5vh"
        }
        prevScrollpos = currentScrollPos;
     }

     nav = React.createRef();

     componentDidMount(){
         window.addEventListener('scroll',this.handleScroll)
     }
     componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
     
    render() { 

        const {active, activeNav} = this.state;

        return (
        <>
        <button ref={this.nav} className='navBtn' onClick={this.state.flag ? this.handleClick : null}>
            <span className={activeNav ? 'top bar active' : 'top bar'}></span>
            <span className={activeNav ? 'mid bar active' : 'mid bar'}></span>
            <span className={activeNav ? 'bot bar active' : 'bot bar'}></span>
            
        </button>
      
        <nav className={activeNav ? 'active' : ''}>
            <ul>
                <NavLink to='/' onClick={this.handleClick}><li><span className={active ? 'number active' : 'number'}>01</span><span className={active ? 'txt active' : 'txt'}>ABOUT US</span></li></NavLink>
                <NavLink to='/offer' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>02</span><span className={active ? 'txt active' : 'txt'}>SERVICES</span></li></NavLink>
                <NavLink to='/place' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>03</span><span className={active ? 'txt active' : 'txt'}>OUR WORK</span></li></NavLink>
                <NavLink to='/contact' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>04</span><span className={active ? 'txt active' : 'txt'}>BAR a FLEURS</span></li></NavLink>
                <NavLink to='/contact' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>05</span><span className={active ? 'txt active' : 'txt'}>SHOP</span></li></NavLink>
                <NavLink to='/contact' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>06</span><span className={active ? 'txt active' : 'txt'}>CONTACT US</span></li></NavLink>
                <NavLink to='/contact' onClick={this.state.flag ? this.handleClick : null}><li><span className={active ? 'number active' : 'number'}>07</span><span className={active ? 'txt active' : 'txt'}>BLOG</span></li></NavLink>
            </ul>
            {window.innerWidth>1280 ? <img src={img} alt=""/> : ''}
        </nav>
        </>
          );
    }
}
 
export default Nav;