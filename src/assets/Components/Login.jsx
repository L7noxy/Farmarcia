import React from 'react'

function Login() {
  return (
    <body>



        <div className='parte-login'>

          <h1 className='Login-title'>Login</h1>
          <p className='paragrafo2'>digite seus dados de acesso nos campos abaixo</p>

          <h1 className='E-mail-title'>E-mail</h1>
          <input type="email" placeholder='Digite seu e-mail' className='email'/>

          <h1 className='Senha-title'>Senha</h1>
          <input type="password" placeholder='Digite sua senha' className='senha'/>

          <a href="#" className='esqueci'>Esqueci a minha senha</a>
          <button type="submit" className='Acessar'>Acessar</button>
        </div>
    </body>
  )
}

export default Login
