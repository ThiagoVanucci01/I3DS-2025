import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>
      <img src={props.Poster} alt="" />
      <span>{props.Type}</span>
      <h3>{props.Title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default MovieCard;
