import HOC from "./HOC";
import React from 'react'

function Posts({ data }) {

    let postData = data.map((x) => {
        return (
            <div>
                <p> <strong>{x.body}</strong> </p>
            </div>
        )
    });
    return (
        <div>
            <div>{postData}</div>
        </div>
    )
}

const SearchPosts = HOC(Posts, "posts")
export default SearchPosts;