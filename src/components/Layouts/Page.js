import classes from './Page.module.css';

const Page = (props) => {
    return (
        <main className={classes.main}>
            <article className={classes.article}>
                {props.children}
            </article>
            <footer className={classes.footer}>
                <p className={classes.footerText}>© {new Date().getFullYear()} Ing. Alvaro Rodríguez Scelza</p>
            </footer>
        </main>
    );
}

export default Page;
