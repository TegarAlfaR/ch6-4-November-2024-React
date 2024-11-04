import styles from "./navbarWithStyling.module.css";
import About from "./about/About"

function NavbarWithStyling({menu, name, address, age}) {
  console.log(menu)
  let List

  if(menu){
    List = (
      <ul>
        <li>
          <a href="">{menu[0]}</a>
        </li>
        <li>
          <a href="">{menu[1]}</a>
        </li>
        <li>
          <a href="">{menu[2]}</a>
        </li>
      </ul>
    );
  }else{
    List = (
      <h1>Menu didnt exist</h1>
    );
  }
  return (
    <>
      <div className={styles.navbar}>
      <h1>FSW-2 - {name}</h1>
      
    </div>
    <About name={name} age={age} address={address}/>
    </>
    
  );
}

export default NavbarWithStyling;
