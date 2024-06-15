import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Elije sabiamente</h1>
				<Link href="/red">
					<button id="red-btn">Rojo</button>
				</Link>
				<Link href="/blue">
					<button id="blue-btn">Azul</button>
				</Link>
				<Link href="/green">
					<button id="green-btn">Verde</button>
				</Link>
			</div>
		</main>
	);
}
