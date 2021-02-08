import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {

    const condition = true;
    return (
        <div>
            <h1 className={styles.title}> 
                <span>
                    WebDev
                </span>
                <p className={styles.description}>Keep up to date with the latest wev deb news</p>
            </h1>
            <style jsx>
                {`
                    .title{
                        color: ${condition ? 'blue' : 'red'};
                    }
                `}
            </style>
        </div>
    )
}

export default Header
