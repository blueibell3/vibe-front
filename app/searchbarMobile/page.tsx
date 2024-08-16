import SearchBar from "../Components/Header/SearchBar/SearchBar"
import styles from './searchbarMobile.module.scss'

const searchbarMobile = () => {
    return (
        <div className={styles.container}>
            <h3>Search</h3>
            <SearchBar />
        </div>
    )
}

export default searchbarMobile