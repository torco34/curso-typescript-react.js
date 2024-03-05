import React from 'react'
import { UseFetch } from './UseFetch'
import { Product } from './Product'

export const Filter = () => {
  const { data } = UseFetch("https://jsonplaceholder.typicode.com/users")
  console.log(data)

  return (
    <div>
      {data && data.map((user: any) => (<Product key={user.id} user={user} onClick={onclick} /> ))}
    </div>
  )
}
