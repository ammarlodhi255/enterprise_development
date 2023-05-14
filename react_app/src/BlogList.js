const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">{
            blogs.map(blog => (
                <div className="blog" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p> { blog.body }</p>       
                    <p> <strong>Written by: { blog.author }</strong></p>       
                    <br />
                </div>
            ))
        }
        </div>
    );
}
 
export default BlogList;