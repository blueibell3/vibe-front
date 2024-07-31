import { Metadata } from "next";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Header from "../Components/Header/Header";
import NavBarMenu from "../Components/NavBarMenu/NavBarMenu";
import NavBarMobile from "../Components/NavBarMobile/NavBarMobile";
import styles from "./layout.module.css";
import { ReactNode } from "react";

type Props = {
  children:ReactNode
}

const AuthLayout = (props:Props) => {
  return (
      <div>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.navMenuContainer}>
          <NavBarMenu />
        </div>
        <div className={styles.menuMain}>
          <BurgerMenu />
        </div>
        <div className={styles.mobileNavBarContainer}>
          <NavBarMobile/>
        </div>
           {props.children}
        </div>

  )
};

export default AuthLayout