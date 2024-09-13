import SearchBar from '@/app/Components/Header/SearchBar/SearchBar'
import styles from './page.module.scss'

const searchbarMobile = () => {
    return (
        <div className={styles.container}>
            <h3>Search</h3>
            <SearchBar/>
        </div>
    )
}

export default searchbarMobile