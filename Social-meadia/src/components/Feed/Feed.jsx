import React from 'react'
import Share from '../Share/Share'
import Posts from '../post/post'
import { MorePost } from '../../dummydata/dummydata'
export default function Feed() {
  return (
    <div className='basis-1/2 bg-white p-4'>
        <Share/>
        {MorePost.map(p=>(
            <Posts key={p.id} post={p}/>
        ))}
      
       
    </div>
  )
}
