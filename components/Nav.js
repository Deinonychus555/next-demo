import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/about2'>About2</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
