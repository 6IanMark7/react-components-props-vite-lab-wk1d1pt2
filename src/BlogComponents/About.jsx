/*eslint-disable react/prop-types*/

function About({aboutBlog}) {
    return (
        <aside>
            <>
                <img src={aboutBlog.image} alt="Blog Logo"/> 
                <p>{aboutBlog.about}</p>
                
            </>
        </aside>
    )
    
}
export default About;