
import blogData from "../data/blog";
import ArticleList from '../BlogComponents/ArticleList';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <ArticleList appBlog={ blogData } />
    </div>
  );
}

export default App;
