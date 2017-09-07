import MyLayout from '../components/my-layout';
import PostLink from '../components/post-link';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Head from 'next/head';

import styles from  'styles/style.scss';

console.log(styles);

const Index = (props) => (
  <MyLayout>
    <Head>
      <title>This page has a title 🤔</title>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      <link
        rel="stylesheet"
        type="text/css"
        href={`/static/styles/app.css?${props.__NEXT_DATA__}`}/>
    </Head>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
};

export default Index