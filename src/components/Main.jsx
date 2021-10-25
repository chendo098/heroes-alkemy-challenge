import React from 'react';
import {useState} from 'react';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import CardHeroe from '../components/CardHeroe'
import Team from '../components/Team'
import swal from "sweetalert";
import '../index.css';
import { useHistory } from "react-router";

export default function Main({token}) {
    const [input, setInput] = useState('');
    const [heroes, setHeroes] = useState('');
    const [team, setTeam] = useState([]);

    const history = useHistory();


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        try {
            const idHeroe = input;
            if (idHeroe === 0){
              swal({
                title: "Heroe Inexistente",
                icon: "warning",
              });
              form.reset();
            }else {
            const response = await axios.get(`/${idHeroe}`);
            setHeroes(response.data);
            form.reset();
          }
        } catch (error) {
            console.log(error);
        }
    };

    const teamSubmit = async (event) => {
        event.preventDefault();
        if(team.length <= 5) {
        try {
            const idHeroeTeam = input;
            const heroeteam = await axios.get(`/${idHeroeTeam}`);
            if(team.filter((teammate) => teammate.id === idHeroeTeam).length > 0 ){
              swal({
                title: "Heroe ya incluido!",
                icon: "warning",
              });
              
            }else{
              if (team.filter((teammate) => teammate?.biography.alignment === "bad").length  === 3 && heroeteam.data.biography.alignment === "bad") {
                swal({
                  title: "No puedes agregar a otro villano, intenta con un heroe!",
                  icon: "warning",
                });
              } else {
                if (team.filter((teammate) => teammate?.biography.alignment === "good").length === 3 && heroeteam.data.biography.alignment === "good") {
                  swal({
                  title: "No puedes agregar a otro heroe, intenta con un villano!",
                  icon: "warning",
                });
                } else {
                  setTeam([...team, heroeteam.data]);
                }                 
              }
            };
        } catch (error) {
            console.log(error);
        }
    } else {
        swal({
            title: "Equipo Completo! Elimina un heroe para agregar otro.",
            icon: "warning",
          });
    }       
  };

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const handleDelete = async(event) => {
        swal({
          title: "Está seguro que quiere eliminar al Heroe?",
          text: "Una vez eliminado puedes volver a seleccionarlo!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then(async (willDelete) => {
          if (willDelete) {
            swal("Heroe eliminado con éxito!", {
              icon: "success",
            });
            const newTeam=team.filter((teammate) => teammate.id !== event.target.value);
            setTeam(newTeam);              
          } else {
            swal("Heroe no eliminado!");
          }
        });
      };

      if (!token) {
        history.push("/login");
      };

return (
    <div className="formHeroes d-flex flex-wrap my-3 row-3 row-lg-3 row-sm-1 justify-content-center text-center">
    <div>
        <Form  noValidate className="card p-4 m-5 mx-sm-center" style={{ width: '20rem', border:'solid' }} onSubmit={handleSubmit}>
       <Form.Group className="container-search">
        <Form.Label className="search-div">
        <h4>Encuentra tu Heroe</h4>
        </Form.Label>
        <Form.Control type="number" 
            required 
            minLength={1}
            maxLength={3} 
            className="mx-sm-center search-form" 
            name="idHeroe" 
            onChange={handleChange}  />
        <Button size="sm" className="btn btn-warning mt-3 mx-sm-center" type="submit">
          Buscar
        </Button>
      </Form.Group>
    </Form>
    </div>
    <div>
    <Form onSubmit={teamSubmit}>
    {heroes !== '' && (
    <CardHeroe heroes={heroes} />
    )}
    </Form>
    </div>
    <div className="m-4 formHeroes"> 
    <Form>
    {team.length !== 0 && (                                       
    <Team team={team} handleDelete={handleDelete}/>       
    )}
    </Form>
    </div> 
    </div>
);
}
