import React from 'react';
import Head from 'next/head';


const About = () => {
    return (
        <div>
            <Head>
                <title>About Title</title>
                <meta 
                    name='description'
                    content='This is the about page'
                />  
            </Head>
        <h1>Welcome to About</h1>
        </div>
    )
}

export default About

