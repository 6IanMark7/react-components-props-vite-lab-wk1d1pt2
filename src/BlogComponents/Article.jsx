/*eslint-disable react/prop-types*/

function Article({articlePost}) {
    
    return (
        <article>
            <h3>{articlePost.title}</h3>
            <small>{articlePost.date}</small>
            <p>{articlePost.preview}</p>
        </article>
    )
}
export default Article