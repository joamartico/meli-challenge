import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = (props) => {
  return (
    <div className={styles["breadcrumbsContainer"]}>
      {props.categories.map((category, index) => (
        <span key={index}
        style={{
          fontWeight: index === props.categories.length - 1 ? "600" : "normal",
        }}
        >
          {category}
          {index < props.categories.length - 1 && "  >  "} {/* Use &nbsp; for spaces */}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
