import style from "./Navigation.module.css";
const Navigation = () => {
  return(
    <nav className={style.navigation}>
      {/* <nav className={' ${style.navigation} container'}> */}
    <div className='logo'>
      <img src='./images/Frame 2 1.png' alt="do some thing"/>
    </div>
    <ul>
      <li href='#'>Home</li>
      <li href='#'>About</li>
      <li href='#'>Contact</li>
    </ul>
    </nav>
  )
}

export default Navigation;