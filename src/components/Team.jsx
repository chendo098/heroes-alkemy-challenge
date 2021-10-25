import CardTeam from './CardTeam';
import Powerstats from './Powerstats';
import '../index.css';

export default function Team({ team, handleDelete }) {

    return (
        <>
            <div className="card d-flex flex-wrap row-2 row-lg-3 row-sm-1" style={{border:'solid' }}>
                <h3>Miembros de Equipo: {team.length}</h3>
                <div className="d-flex flex-wrap my-3 column-3 column-lg-3">                 
                {team.length !== 0 && (   
                <Powerstats className="card" team={team}/>
                )}
                {team.map((team) => (
                <div>
                <CardTeam team={team} handleDelete={handleDelete} />
                </div>
                ))}
                </div>
            </div>
        </>
    );
};
