import { useState } from 'react';
import  Destino  from './components/Destino';
import './assets/App.css';

function App() {      

// const [state, setState] = {paises: []};



// const ComponentDidMount = async e =>{
  
  //   const response = await Destino.get("")
  //   setState({ ...state, response})
  //   console.log(state, response.data)
  // };
  const [formValues, setFormValues] = useState({});
  
  const handleSubmit = e =>{
  e.preventDefault();
  
  const formData   = new FormData(e.target);
  const data  = Object.fromEntries(formData);
  
}

const handleInputChange = e =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues,[name]: value });
}

  return (
    <>
  <form onSubmit={handleSubmit}>
    <h1>Cadastro Pessoal</h1>
    <label>Nome
        <input type="text" 
        name="name" 
        value={formValues.name} 
        onChange={ handleInputChange || "" }    
        placeholder="Nome"  
        required />
    </label>  

    <label>Cpf
        <input type="text" 
        name="cpf" 
        value={formValues.cpf} 
        onChange={ handleInputChange || "" }  
        placeholder="Cpf"  required/>
    </label>

    <label >Email
        <input type="email" 
        name="email"  
        value={formValues.email} 
        onChange={ handleInputChange || "" }  
        placeholder="Email"  required/>
    </label>

    <label>telefone
        <input type="tel" 
        name="telefone" 
        value={formValues.telefone} 
        onChange={ handleInputChange || "" }  
        placeholder="Telefone" required />

      <Destino  value={formValues.pais || ""} onChange={handleInputChange}
      />

        <button 
        type="submit" >
            Enviar</button>
    </label>
  </form>
  </>
    );
  }

export default App;
