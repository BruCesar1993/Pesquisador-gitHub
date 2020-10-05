import React from 'react'
import {Title, Form, Repositories} from './style'
import logo from '../../images/logo.svg'

const dashboard: React.FC = ()=>{

  return (

    <>

       <img src= {logo} alt= "GitHub Explorer"/>

       <Title> Pesquisador GitHub </Title>

       <Form>
         <input placeholder= "Digite o nome do repositorio"/>
         <button type= "submit">Pesquisar</button>

       </Form>

       <Repositories>
         <a href= "teste"

       </Repositories>

    </>

    )

}

export default dashboard
