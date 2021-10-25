import { Button } from "react-bootstrap";
import '../index.css';

export default function CardHeroe({heroes}) {
    
    return (
        <div className="card m-5 text-center" style={{ width: '20rem' }}>
            <img src={heroes?.image?.url} alt="heroe" className="img-fluid" />
            <p>Nombre: {heroes?.name}</p>
            <p>Clase: {heroes?.biography?.alignment}</p>
            <Button size="sm" className="btn m-2 btn-primary mx-auto" type="submit">
              Agregar
            </Button>
            </div>
    );
};