import styles from './Home.module.css'
import React from 'react'
import img from './home.jpg'

function Home(props) {
    return (
        <div className={styles.main}>
            {/* <h1>Welcome</h1> */}
            <div><img className={styles.image} src={img}/>
            </div>
        </div>
    )
}

export default Home
