import { Metadata } from "next";
import BurgerMenu from "../Components/BurgerMenu/BurgerMenu";
import Header from "../Components/Header/Header";
import NavBarMenu from "../Components/NavBarMenu/NavBarMenu";
import NavBarMobile from "../Components/NavBarMobile/NavBarMobile";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import RecoilWrapper from "../Components/RecoilWrapper/RecoilWrapper";
import MusicPlayer from "../Components/PlayerController/MusicPlayer/MusicPlayer";
import MusicListItems from "../Components/MusicList/MusicListItems";
import ReusableInput from "../Components/ReusableInput/ReusableInput";


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
          <div className={styles.mobileNavBarContainer}>
            <NavBarMobile />
          </div>
          <div className={styles.children}>
            {props.children}
          </div>
          <div className={styles.musicList}>
              <div className={styles.test}>
                <MusicListItems />
              </div>
              <div className={styles.musicContainer}>
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