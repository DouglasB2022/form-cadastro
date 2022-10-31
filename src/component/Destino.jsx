import { useState, useEffect }  from 'react';
import axios from "axios";



function Destino () {
    
    const [paises, setPaises] = useState([]);
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
      const buscaPaises = async () => {
        
        const { data } = await axios.get('https://amazon-api.sellead.com/country');
       
        setPaises(data);
      console.log( data )
    };

    const buscaCidades = async () => {
        
        const { data } = await axios.get('https://amazon-api.sellead.com/city');

        setCidades(data);
        console.log( data )
    };
    buscaPaises();
    buscaCidades();
    
}, []);
    
    return(
<div>  
    <label>
        Pais
        <select >
            {paises.map((pais) => (
            <option key={pais.id} value={pais.name}>
            {pais.name}
            </option>
    ))} 
        </select>
    </label>
    <br/>
        <label>
            Cidade
        <select >
            {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.name}>
            {cidade.name}
            </option>
            ))}
        </select>
    </label>
    
</div>
    );
}
export default Destino;