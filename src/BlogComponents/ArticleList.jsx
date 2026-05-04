/*eslint-disable react/prop-types*/

import Article from './Article';
import Header from './Header';
import About from './About';

function ArticleList({appBlog}) {
    
    return (
        <main>
                <>
                    <Header  headerBlog={appBlog} />
                    <About  aboutBlog={appBlog}/>
                </>
            
            {appBlog.posts.map((post) => (
                <Article key={post.id} articlePost={post}/>
        
            ))}

        </main>
    )
}
export default ArticleList;