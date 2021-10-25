import CardTeam from './CardTeam';
import Powerstats from './Powerstats';
import '../index.css';

export default function Team({ team, handleDelete }) {

    return (
        <>
            <div className="m-2 p-2 d-flex flex-wrap">
                <div className="card d-flex flex-wrap row-2 row-lg-3 row-sm-1 justify-content-center text-left" style={{/*  width: '50rem', */ border:'solid' }}>
                <h3>Miembros de Equipo: {team.length}</h3>
                <div className="d-flex flex-wrap my-3 column-3 column-lg-3 justify-content-center text-left">                 
                {team.length !== 0 && (   
                <Powerstats className="card text-left" team={team}/>
                )}
                {team.map((team) => (
                    <div>
                    <CardTeam team={team} handleDelete={handleDelete} />
                    </div>
                ))}
                </div>
                </div>
                </div>
                </>
    );
}
