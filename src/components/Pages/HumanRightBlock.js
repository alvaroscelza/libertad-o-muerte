import classes from "./HumanRightBlock.module.css";

const HumanRightBlock = (props) => {
    const image = props.image;
    const imageAltText = props.imageAltText;
    const rightName = props.rightName;

    return (
        <div className={classes.humanRightContainer}>
            <img className={classes.humanRightImage} src={image} alt={imageAltText} width="200" height="200"/>
            <h3 className={classes.humanRightName}>Derecho a la {rightName}</h3>
            {props.children}
        </div>
    );
}

export default HumanRightBlock;
