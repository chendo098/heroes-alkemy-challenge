import { Button, Form, Modal } from 'react-bootstrap';
import '../index.css';
import React, {useState} from 'react'
import axios from 'axios';

export default function CardTeam({team,handleDelete}) {
    const [showInfo, setShowInfo] = useState(false);
    const handleCloseInfo = () => setShowInfo(false);
    const [showDetalle, setShowDetalle] = useState(null);
    const handleShowInfo = async (event) => {
        const idHeroe = event.target.value;
        const detalle = await axios.get(`/${idHeroe}`);
        setShowDetalle(detalle.data);
        setShowInfo(true);
      };
      
      return (
        <>
            <div className="card" style={{ width: '10rem'}}>
            <img src={team.image?.url} alt="heroe" className="img-fluid" />
            <p>Nombre: {team.name}</p>
            <p>Inteligencia: {team.powerstats?.intelligence}</p>
            <p>Fuerza: {team.powerstats?.strength}</p>
            <p>Velocidad: {team.powerstats?.speed}</p>
            <p>Dureza: {team.powerstats?.durability}</p>
            <p>Poder: {team.powerstats?.power}</p>
            <p>Combate: {team.powerstats?.combat}</p>
            <Button
                          size="sm"
                          className="btn m-2 sm btn-secondary mx-1"
                          onClick={handleShowInfo}
                          value={team?.id}
                        >
                          Detalle
                        </Button>
                        <Button
                        size="sm"
                        className="btn m-2 sm btn-danger mx-1 table-buttons"
                        onClick={handleDelete}
                        value={team?.id}>
                        Eliminar
                      </Button>
            </div>
          <div>
      <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header>
          <Modal.Title>Más información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              {showDetalle && (
                <Form.Label>
                  <p>Alias: {showDetalle.biography?.aliases}</p>
                  <p>Altura: {showDetalle.appearance?.height}</p>
                  <p>Peso: {showDetalle.appearance?.weight}</p>
                  <p>Color de ojos: {showDetalle.appearance?.['eye-color']}</p>
                  <p>Color de cabello: {showDetalle.appearance?.['hair-color']}</p>
                  <p>Lugar de Trabajo: {showDetalle.work?.base}</p>
                </Form.Label>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </>
    );
  }
  