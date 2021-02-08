import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import {server} from '../config';

export default function Home({articles}) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Next Demo Title</title>
        <meta 
          name='description'
          content='This is the description for the project'
        />  
      </Head>
      <h1>Welcome to Home</h1>
      <ArticleList articles={articles}/>
    </div>
  )
}



export const getStaticProps = async () => {

  
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

/*
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
*/