import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

export const metadata = {
  title: "Overwatch stats App",
  description: "An app that shows hero and player details from overwatch 2",
  openGraph: {
    title: "Overwatch stats App",
    description: "An app that shows hero and player details from overwatch 2",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    image:
      "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff90] text-black">
          <nav className={styles.anotherClass}>
            <ul className={styles.navDiv}>
              <li className={styles.home}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.about}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.heroes}>
                <Link href="/heroes/ana">Heroes</Link>
              </li>
              <li className={styles.heroes}>
                <Link href="/posts">Community</Link>
              </li>
              <li className={styles.heroes}>
                <Link href="/players">Players</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <a
            href="https://github.com/Isloot98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="link to my github repo"
              width={30}
              height={30}
              className="dark:invert mb-4 ml-4"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
