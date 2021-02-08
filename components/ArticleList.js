import React from 'react';
import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    console.log(process.env.NEXT_PUBLIC_DEV_SERVER);
    //console.log(process.env.local.DEV_SERVER);
    return (
        <div className={styles.grid}>
           {articles.map(article => (
               <ArticleItem key={article.id} article={article}/>
            ))} 
        </div>
    )
}

export default ArticleList
