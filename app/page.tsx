import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Elije sabiamente</h1>
				<Link href="/red">
					Rojo
				</Link>
				<Link href="/blue">
					Azul
				</Link>
			</div>
		</main>
	);
}
