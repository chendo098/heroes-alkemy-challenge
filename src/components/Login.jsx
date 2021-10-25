import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import swal from "sweetalert";
import '../index.css';
import { useHistory } from 'react-router-dom';

export default function Login({setToken}) {
    const history = useHistory();
    const [input, setInput] = useState({});
    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://challenge-react.alkemy.org/",
                input
            );
            localStorage.setItem("token", JSON.stringify(data));
            setToken(data.token);
            swal({
                title: "Bienvenido a Alkemy Heroes",
                icon: "success",
            }).then(() => {
            history.push('/');
            });
        } catch (error) {
            console.log(error.response);
            swal({
            title: "Credenciales Erróneas!",
            icon: "error",
            });
            }
    };

    return (
        <>
        <div className="formHeroes d-flex flex-wrap my-3 row-3 row-lg-3 row-sm-1 justify-content-around align-items-center text-center">
        <div>
        <Form onSubmit={handleSubmit} className="card mx-auto p-4 mt-5" style={{ width: '400px' }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    minLength={6}
                    maxLength={30}
                />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    required
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Ingrese su contraseña"          
                    minLength={1}
                    maxLength={10}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
        </Form>
        </div>
        </div>
        </>
    );
}
