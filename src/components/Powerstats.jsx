import React from 'react'
import { Button } from "react-bootstrap";

export default function Powerstats({team}) {

    return (
        <div className="p-4 m-3" style={{ width: '20rem' }}>
        <h4>Nivel del Equipo</h4>
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.intelligence);
          }, 0)}</Button> Inteligencia Total </p> 
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.strength);
          }, 0)}</Button> Fuerza Total</p> 
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.speed);
          }, 0)}</Button> Velocidad Total</p> 
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.durability);
          }, 0)}</Button> Durabilidad Total</p> 
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.power);
          }, 0)}</Button> Poder Total</p> 
          <p><Button size="sm" className="sm btn btn-success">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.combat);
          }, 0)}</Button> Combate Total</p> 
          <p><Button size="sm" className=" sm btn btn-dark">{team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.intelligence)/team.length;
          }, 0)}</Button> Peso del Equipo</p> 
          <p><Button size="sm" className="sm btn btn-dark"> {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.intelligence)/team.length;
          }, 0)}</Button> Altura del Equipo</p> 
        </div>
    );
};
