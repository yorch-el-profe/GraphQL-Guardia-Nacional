import Post from "../components/post";
import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    getPosts {
      content
      author {
        username
      }
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) {
    return (
      <div className="text-center">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return (
      <div className="text-center">
        <h1>Error!</h1>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {data.getPosts.map((post) => (
        <Post
          content={post.content}
          createdAt={post.createdAt}
          author={post.author}
        />
      ))}
    </div>
  );
}

export default Home;
