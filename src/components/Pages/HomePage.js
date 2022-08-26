import generalClasses from "./Pages.module.css";
import homePageClasses from "./HomePage.module.css";
import {useEffect} from "react";
import lifeImage from '../../images/life.png';
import freedomImage from '../../images/freedom.png';
import privatePropertyImage from '../../images/private-property.png';
import ExternalLink from "../UI/ExternalLink";
import HumanRightBlock from "./HumanRightBlock";

const HomePage = () => {
    useEffect(() => {
        document.title = "Libertad o Muerte - Home"
    }, []);

    const NAPLink = "https://en.wikipedia.org/wiki/Non-aggression_principle";

    return (
        <>
            <h1 className={generalClasses.h1}>¿Qué es el Libertarismo?</h1>
            <p className={generalClasses.p}>
                Es una ideología política que nace
                del <ExternalLink link={NAPLink} text="Principio de No Agresión (NAP)"/>, que prima la libertad del
                individuo por sobre todo lo demás y se construye alrededor de tres derechos fundamentales,
                inherentes a cada ser humano:
            </p>
            <div className={homePageClasses.humanRightsContainer}>
                <HumanRightBlock image={lifeImage} imageAltText="Life" rightName="Vida">
                    <p>Nadie debe poder agredirnos ni física, ni psicológicamente.</p>
                </HumanRightBlock>
                <HumanRightBlock image={freedomImage} imageAltText="Freedom" rightName="Libertad">
                    <p>
                        Todas las personas tenemos derecho a perseguir y luchar por nuestros propios intereses,
                        sueños y metas.
                    </p>
                </HumanRightBlock>
                <HumanRightBlock image={privatePropertyImage} imageAltText="Private Property" rightName="Propiedad Privada">
                    <p>Las personas tenemos derecho a poseer y defender nuestra Propiedad Privada.</p>
                </HumanRightBlock>
            </div>
            <h2 className={generalClasses.h2}>El Libertarismo, ¿Es de derechas o de izquierdas?</h2>
        </>
    );
}

export default HomePage;
