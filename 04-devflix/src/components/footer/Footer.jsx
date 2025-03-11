import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        Feito com ❤️ <a href={props.devLinks}>{props.devName} </a>
      </p>
    </footer>
  );
};

export default Footer;
