import HOC from "./HOC";
import React from 'react'

function Posts({data}) {
  return (
    <div>
        {
            data.map ((x)=>{
                return (
                    <div>
                     <p> <strong>{x.body}</strong> </p> 
                     </div>
                )
            })
        }
    </div>
  )
}

const SearchPosts = HOC(Posts, "posts")
export default SearchPosts;