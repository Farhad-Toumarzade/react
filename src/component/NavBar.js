import styles from "./navbar.module.css"

const NavBar = (props) => {
    console.log('NavBar.js render')
    return ( 
        <header className={styles.navBar} >
            <h2>
            fronthooks shopping
            </h2>
            <span>{props.totalItems}</span>
        </header>
     );
}
 
export default NavBar;