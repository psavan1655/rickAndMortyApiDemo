import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Curostride - Savan Patel</title>
        <meta name="description" content="Assignment created by savan patel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <a style={{cursor: 'pointer'}}>Samarth!</a>
        </h1>

        <h4 className={styles.description} onClick={() => router.push('/users')}>
          <a>Take me to the listing page </a>
        </h4>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://curostrides.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assignment by CuroStrides
        </a>
      </footer>
    </div>
  )
}
