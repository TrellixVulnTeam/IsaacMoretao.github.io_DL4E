import './Stilles.scss';

import Pessoa from '../../Assets/pessoa.png';
import { Usados } from '../../Components/MaisUsados/index';
import { Link } from 'react-router-dom';

import { CaretCircleLeft } from 'phosphor-react';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';

import Homem from '../../Assets/Homem.png'
import { Certificados } from '../../Components/Certificados/Index';

export function Sobre() {
return(

<body className='Color'>
  <header className='headerProjects'>
    <Link to='/portfolio/'>
    <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
    </Link>

    <Link to='/portfolio/Home/contato'>
    <img src={Isaac} alt="Logo-Isaac" />
    </Link>

    <figure>
    <img src={logo} alt="" />
    </figure>

  </header>
  <div className='Sobre'>



    <article >
      <p className='P-1'>
        Olá! Me chamo <br />
      </p>
      <strong className='P-2'>
        Isaac Moretao
      </strong> <br />
      <p className='P-3'>
        Sou Desenvolvedor Front-End
      </p>
    </article>
    <aside className='Asside'>
      <div>
        <div />
        <img src={Pessoa} alt="" />
      </div>
    </aside>
  </div>
  <Certificados/>
  <img src={Homem} alt="" className='Homem' />
  <div className='MaisSobre'>
    <strong className='Chavs'>
      &#36;&#123; mais sobre mim &#125;
    </strong>
    <div>

      <Usados Name={'Programação'} text={'Expecialização: ReactJS '}
        br={<br />}
        textDois={' Experiência com montagens Web com ReactJs e NextJs'} margin={'150px'} />

      <Usados Name={'Isaac'} text={'idade: 17'} textDois={'Cidade: Arujá-SP'} margin={'0'} />

      <Usados Name={'Work'} text={'Trabalho como freelancer junto com "Caio Cezar" , fazendo o front-END'}
        margin={'150px'} />

      <Usados Name={'Objetivo'} text={'Conseguir a primeira vaga como programador Front-End'} br={<br/>} textDois={''} margin={'0'} />

    </div>

  </div>
</body>
)
}