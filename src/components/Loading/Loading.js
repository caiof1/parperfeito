import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          Par Perfeito
        </text>
      </svg>
    </div>
  );
};

export default Loading;
