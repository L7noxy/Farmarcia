import React from 'react'

function Home() {
  return (
    <div>
      <body>
        <div className='fundo-ibuprofeno'>
          <img src="./public/img/ibuprofeno.jpg" className='ibuprofeno' height={250} />
        </div>
        <h1 className='title-ibuprofeno'>ibuprofeno 25,99R$</h1>


        <div className='fundo-Dorflex'>
          <img src="./public/img/Dorflex.png" className='Dorflex' height={250} />
        </div>
        <h1 className='title-dorflex-uno'>dorflex uno 40R$</h1>


        <div className='fundo-Dorflex-Comprimido'>
          <img src="./public/img/Dorflex-Comprimido.png" className='Dorflex-Comprimido' height={250} />
        </div>
        <h1 className='title-dorflex'>dorflex 32R$</h1>


        <div className='fundo-Buscopan'>
          <img src="./public/img/buscopan.png" className='buscopan' height={250} />
        </div>
        <h1 className='title-buscopan'>buscopan 20,50R$</h1>


        <div className='fundo-trigental'>
          <img src="./public/img/trigental.png" className='trigental' height={250} />
        </div>
        <h1 className='title-trigental'>trigental 29,99R$</h1>


        <div className='fundo-antipulgas'>
          <img src="./public/img/antipulgas.png" className='antipulgas' height={400} />
        </div>
        <h1 className='title-antipulgas'>Antipulgas 10R$</h1>


      </body>
    </div>
  )
}

export default Home
