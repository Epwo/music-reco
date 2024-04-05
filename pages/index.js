import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Voici ma <a href="https://www.deezer.com/fr/playlist/11208978444">Propagande</a> musicale
        </h1>

        <p className={styles.description}>
          Cliquez sur un des genres ci-dessous pour commencer
        </p>

      <div className={styles.grid}>
          <a href="HouseMusic" className={styles.card}>
            <h3>House &rarr;</h3>
            <div className={styles.cardContent}>
              <img src="/house_color.svg" alt="House logo" className={styles.GenreLogo} />
              <p>
            La recette de la house ? de la disco, la synthpop des 80s et la hi-NRG.
              </p>
            </div>
          </a>


          <a href="rap" className={styles.card}>
            <h3>Rap &rarr;</h3>
            <div className={styles.cardContent}>
              <img src="/dvd_color.svg" alt="House logo" className={styles.GenreLogo} />
              <p>
              La recette du rap ? t'as vraiment besoin que je te la donne?
              </p>
            </div>
          </a>

          <a href="electroSwing" className={styles.card}>
            <h3>Electro Swing &rarr;</h3>
            <div className={styles.cardContent}>
              <img src="/saxophone_color.svg" alt="electroSwing logo" className={styles.GenreLogo} />
              <p>
              L'électro swing ? Quand le jazz/blues et l'électro moderne ont eu un rejeton.
              </p>
            </div>
          </a>

          <a href="Various" className={styles.card}>
            <h3>Various genres &rarr;</h3>
            <div className={styles.cardContent}>
              <img src="/musical_note_color.svg" alt="various logo" className={styles.GenreLogo} />
              <p>
                C'est un bazar ici, mais c'est pour ça qu'on aime la musique.
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://swagman.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <img src="/swagman-SignB.svg" alt="signature" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
