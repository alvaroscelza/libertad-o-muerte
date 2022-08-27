import classes from './Menu.module.css';
import {Link} from 'react-router-dom';
import profileImage from '../../images/profile.png';

const Menu = () => {
    return (
        <aside className={classes.aside}>
            <h1 className={classes.h1}>Libertad o Muerte</h1>
            <h5 className={classes.h5}>Libertarismo en Uruguay</h5>
            <Link to='/'>
                <img className={classes.img} src={profileImage} alt='Profile'/>
            </Link>
        </aside>
    );
}

export default Menu;
