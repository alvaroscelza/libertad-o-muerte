import generalClasses from "./Pages.module.css";
import homePageClasses from "./HomePage.module.css";
import {useEffect} from "react";
import lifeImage from '../../images/life.png';
import freedomImage from '../../images/freedom.png';
import privatePropertyImage from '../../images/private-property.png';
import ExternalLink from "../UI/ExternalLink";
import HumanRightBlock from "./HumanRightBlock";
import politicalCompassImage from '../../images/political-compass.webp';

const HomePage = () => {
    useEffect(() => {
        document.title = "Libertad o Muerte - Home"
    }, []);

    const NAPLink = "https://en.wikipedia.org/wiki/Non-aggression_principle";

    return (
        <>
            <h1 className={generalClasses.h1}>¿Qué es el Libertarismo?</h1>
            <p className={homePageClasses.justifyText}>
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
            <p className={homePageClasses.justifyText}>
                Primero debemos entender que el clásico espectro político Izquierda-Derecha al que las personas estamos
                tan acostumbradas está incompleto. Apenas incluye algunas ideologías políticas de la enorme cantidad
                existente, y limitarse a dicho espectro es uno de los principales errores de los latinoamericanos, que
                sabemos muy poco sobre política. Esto explica muchos de nuestros problemas: hace más de 200 años que
                venimos probando alternativas repetidas dentro de una visión muy limitada de las verdaderas
                posibilidades. <br/>
                 <br/>
                En 1950 Hans Eysenck percibió que pese a estar en los extremos opuestos, el Nacional Comunismo
                (aplicado en la URRS) y el Fascismo tenían un sorprendente número de características similares. Otros
                pensadores de la época detectaron problemas similares y con el tiempo, nuevos modelos políticos fueron
                surgiendo. <br/>
                 <br/>
                Hoy en día el más utilizado es el compás político de dos ejes, o "The Political Compass". <br/>
                El eje horizontal coincide con el del espectro clásico: izquierda-derecha. Donde la izquierda defiende
                derechos sociales, y la derecha defiende derechos económicos.
                El nuevo eje, el vertical, define dos nuevos opuestos, totalitarismo versus libertad:
            </p>
            <div className={homePageClasses.politicalCompassImageContainer}>
                <img src={politicalCompassImage} alt='Political Compass' width="500" height="500"/>
            </div>
            <p className={homePageClasses.centerText}>
                Como puedes ver, el Nacional Comunismo y el Fascismo, pese a corresponder a izquierda y derecha
                respectivamente, tienen mucho en común por ser ambos totalitarios. <br/>
                <br/>
                El Libertarismo es la oposición perfecta a ambos: prima la libertad, defendiendo los derechos sociales.
                Y en el caso del libertarismo de derecha, también defiende tus derechos económicos.
            </p>
        </>
    );
}

export default HomePage;
