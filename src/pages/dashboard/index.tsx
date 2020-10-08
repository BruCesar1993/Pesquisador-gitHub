import React, {useState,FormEvent, useEffect} from 'react'
import {Title, Form, Repositories, Error} from './style'
import logo from '../../images/logo.svg'
import {FiChevronsRight} from 'react-icons/fi'
import api from '../../services/api'
import {Link} from 'react-router-dom'

interface Repository{
  full_name:string;
  description: string;
  owner: {
    login:string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = ()=>{

  const [inputError, setInputError]= useState('')
  const [newRepo, setNewRepo]= useState('')

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@projeto-react:repositories'
    )
    if(storagedRepositories){
      return JSON.parse(storagedRepositories)
    }else{
      return []
    }
  })


  useEffect(() => {
    localStorage.setItem(
      '@projeto-react:repositories' , JSON.stringify(repositories)
    )
  },[repositories])

  async function HandleAddRepository(event:FormEvent <HTMLFormElement> ):Promise<void>{
    event.preventDefault()

    if(!newRepo){
      setInputError('Digite o autor ou nome do repositorio')
      return
    }

   try{
    const response = await api.get(`repos/${newRepo}`)

    const repository = response.data;

    setRepositories([... repositories, repository])
    setNewRepo('')
    setInputError('')
   }catch(err){
     setInputError('Erro na busca')
   }

  }

  return (

    <>

       <img src= {logo} alt= "GitHub Explorer"/>

       <Title> Pesquisador GitHub </Title>

       <Form hasError={!!inputError} onSubmit = {HandleAddRepository}>
         <input
         value = {newRepo}
         onChange={(e)=>setNewRepo(e.target.value)}
         placeholder= "Digite o nome do repositorio"/>
         <button type= "submit">Pesquisar</button>
       </Form>

       {inputError && <Error>{inputError}</Error>}

       <Repositories>
          {repositories.map((repository)=>(
              <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>

              <img src= {repository.owner.avatar_url}
                   alt= {repository.owner.login} />
              <div>
                <strong> {repository.full_name} </strong>
                <p> {repository.description} </p>
              </div>

              <FiChevronsRight/>

            </Link>
          ))}
       </Repositories>


    </>

    )

}

export default Dashboard
