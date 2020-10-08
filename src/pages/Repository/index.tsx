import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import {Header, RepositoryInfo, Inssues} from './styles'
import logoImg from '../../images/logo.svg'
import { FiChevronLeft, FiAlignRight } from 'react-icons/fi'

interface RepositoryParams{
  repository :string
}

const Repository: React.FC = ()=>{

  const {params} = useRouteMatch<RepositoryParams>()

  return (
    <>
    <Header>
      <img src= {logoImg} alt= "Github Explorer"/>
      <Link to="/">

        <FiChevronLeft size = {16}/>
        Voltar



      </Link>
    </Header>
    <RepositoryInfo>

      <header>
        <img src = "https://avatars2.githubusercontent.com/u/61169682?s=400&u=1b085260ef0d4a1e7cb476dd4d906091ef6a422e&v=4" alt= "Gabi"/>
        <div>
            <strong>Gabi/unform</strong>
            <p>descriçao</p>
        </div>
      </header>
      <ul>

        <li>
          <strong>1880</strong>
          <span>start</span>
        </li>

        <li>
          <strong>1880</strong>
          <span>start</span>
        </li>

        <li>
          <strong>1880</strong>
          <span>start</span>
        </li>

      </ul>

    </RepositoryInfo>

    <Inssues>
      <Link to= "nada">
        <div>
           <strong>repository.full_name</strong>
           <p>repository.description</p>
        </div>
        <FiAlignRight size={20}/>
      </Link>
    </Inssues>








    </>

  )
}

export default Repository
