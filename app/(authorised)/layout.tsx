import { Metadata } from "next";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Header from "../Components/Header/Header";
import NavBarMenu from "../Components/NavBarMenu/NavBarMenu";
import NavBarMobile from "../Components/NavBarMobile/NavBarMobile";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import TopAlbumsPage from "./topalbums/page";

type Props = {
  children: ReactNode
}

const AuthLayout = (props: Props) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.pages}>
          <div className={styles.navMenuContainer}>
            <NavBarMenu isBurgerMenu={true}  />
          </div>
          {props.children}
          <div className={styles.menuMain}>
          <BurgerMenu />
        </div>
        <div className={styles.mobileNavBarContainer}>
          <NavBarMobile/>
        </div> */}
      {props.children}

    </div>

  )
};

export default AuthLayout