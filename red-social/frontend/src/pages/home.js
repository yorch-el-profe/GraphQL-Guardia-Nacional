import Post from "../components/post";

function Home() {
  return (
    <div className="d-flex flex-column gap-3">
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
      <Post content="This is a test OMG" author={{ username: "test_user" }} />
    </div>
  );
}

export default Home;
