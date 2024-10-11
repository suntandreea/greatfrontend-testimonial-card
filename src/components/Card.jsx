import styles from './Card.module.scss';

export default function Card({avatar, user, handle, desc}) {

  return (
    <article className={styles.card}>
      <header className={styles["card-header"]}>
        <img className={styles["user-avatar"]} src={avatar} alt={`A picture of ${user}`} />
        <div className={styles["user-info"]}>
          <div><p className={`${styles["user-name"]} ${styles.truncate}`}>{user}</p>
          </div>
          <div><p className={`${styles["user-handle"]} ${styles.truncate}`}>{handle}</p></div>
        </div>

      </header>
      <section className={styles["card-content"]}>
        <p>{desc}</p>
      </section>
    </article>
  );
}
