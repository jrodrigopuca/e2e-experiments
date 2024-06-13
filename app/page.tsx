import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Elije sabiamente</h1>
				<Link href="/red">
					<button>Rojo</button>
				</Link>
				<Link href="/blue">
					<button>Azul</button>
				</Link>
			</div>
		</main>
	);
}
