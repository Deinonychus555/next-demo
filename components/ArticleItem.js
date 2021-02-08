import React from 'react';
import styles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({article}) => {
   
    return (
        <Link 
            href='/article/[id]'
            as={`/article/${article.id}`}
        >
        <a className={styles.card}>
            <h3>{article.title}</h3>
            <h2>{article.id}</h2>
            <p>{article.body}</p>
        </a>
     </Link>
    )
}

export default ArticleItem
