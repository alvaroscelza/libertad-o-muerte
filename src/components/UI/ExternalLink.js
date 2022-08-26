import classes from "../Pages/Pages.module.css";

const ExternalLink = ({link, text}) => {
    return (
        <a target="_blank" rel="noopener noreferrer" className={classes.link} href={link}>
            {text}
        </a>
    );
}

export default ExternalLink;
