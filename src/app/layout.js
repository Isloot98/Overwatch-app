import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Overwatch stats App",
  description: "An app that shows hero and player details from overwatch 2",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
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
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>This is my footer</p>
        </footer>
      </body>
    </html>
  );
}
