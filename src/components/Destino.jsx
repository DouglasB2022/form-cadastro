import { useState, useEffect }  from 'react';



function Destino () {
    
    const [data2, setDados] = useState({});
    const [query, setQuery] = useState('react');

    useEffect(() => {
        let ignore = false; 

async function fetchDados() {
        const result = fetch('https://amazon-api.sellead.com/country' + query).then(() => (Response));
        
        if (!ignore) setDados(result.data2);
    }
    fetchDados();
        return () => { ignore = true; }
    }, [query]);

    
    return(
<>
    <select  name="Paises-cidades" 
                value={query} 
                onChange={e => setQuery(e.target.value)}> 
        <options value="pais">Países</options>
    </select>

    <select 
                value={query} 
                onChange={e => setQuery(e.target.value)} >
        <options value="cidade">Cidades</options>
    </select>
</>
    );
}
export default Destino;