import { Metadata } from "next";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Header from "../Components/Header/Header";
import NavBarMenu from "../Components/NavBarMenu/NavBarMenu";
import NavBarMobile from "../Components/NavBarMobile/NavBarMobile";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import TopAlbumsPage from "./topalbums/page";
import RecoilWrapper from "../Components/RecoilWrapper/RecoilWrapper";
import MusicPlayer from "../Components/PlayerController/MusicPlayer/MusicPlayer";
import Test from "../Components/MusicList/Tests";


type Props = {
  children: ReactNode
}

const AuthLayout = (props: Props) => {
  return (
    <RecoilWrapper>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.pages}>
          <div className={styles.navMenuContainer}>
            <NavBarMenu isBurgerMenu={true} />
          </div>
          {/* {props.children} */}
          <div className={styles.menuMain}>
            <BurgerMenu />
          </div>
          <div className={styles.mobileNavBarContainer}>
            <NavBarMobile />
          </div>
          <div className={styles.children}>
            {props.children}
            <div className={styles.musicList}>
              <div className={styles.test}>
                <Test />
              </div>
              <div className={styles.MusicPlayer}>
                <MusicPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecoilWrapper>

  )
};

export default AuthLayout