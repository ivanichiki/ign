import React, {useEffect, useState} from 'react';

function SearchFilter() {
const people = [
    'Siri',
    'Alexa',
    'Goggle',
    'Facebook'
    ]



    const [searchTerm,setSearchTerm]= useState()
   const [searchResults,setSearchResults] = useState([])
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(()=> {
        const results = people.filter(person =>
        person.toLocaleLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className="App">
         <input
         type='text'
         placeholder='Search'
         value={searchTerm}
         onChange={handleChange}

         />

         <ul>
             {searchResults.map(el=>(
                 <li>{el}</li>
             ) )}


         </ul>
        </div>
    );
}

export default SearchFilter;
