import React, { useState } from 'react';
import { data } from './data';
import { Usereducer } from './Usereducer';

export const Filter = () => {

  const [dataFilter, setDataFilter] = useState(data);

  const handleFilter = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredItems = data.filter((datass) =>
      datass.title.toLowerCase().includes(inputValue)
    );
    setDataFilter(filteredItems);
  };

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center'>
        <form action=''>
          <input type='text' onChange={handleFilter} />
        </form>
        <ul>
          {dataFilter.map((datass) => (
            <li key={datass.title}>{datass.title}</li>
          ))}
        </ul>
        <Usereducer />

      </div>
    </>
  );
};
