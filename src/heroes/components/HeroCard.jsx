import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters}) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
     ? <></>
     : <p>{ characters }</p>;
}


export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters ,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card m-4 align-items-center text-center" style={{width: "18rem"}}>
                <img src={ heroImageUrl } className="card-img-top" alt={ id } />
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>
                    <p className="card-text">{ first_appearance }</p>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    )
}
