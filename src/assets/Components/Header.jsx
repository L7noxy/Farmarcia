import React from 'react'

function Header() {
  return (
<div>
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <header>
            
            <nav className='nav-bar'>
                
                    <button className='btn'>Ofertas</button>
                    <button className='sobre-nos'>sobre nós</button>
                    <button className='cadastro'>cadastro</button>
                    <button className='login'>login</button>
                    <img src="public/img/logo.png" className='logo-branca'/>

            </nav>
            <h1 className='title'>Farmárcia</h1>
        </header>
    </body>
    </html>
</div>
  )
}

export default Header
