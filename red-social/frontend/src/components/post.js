import * as moment from "moment";
import "moment/locale/es";

function Post({ author, content, createdAt }) {
  return (
    <div className="card border-secondary">
      <div className="card-header text-bg-secondary">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <i className="bi-person-circle fs-3" />
            <span className="ms-2 fs-4">{author.username}</span>{" "}
          </div>
          <span className="fs-5">
            {moment(createdAt).locale("es").fromNow()}
          </span>
        </div>
      </div>
      <div className="card-body">{content}</div>
    </div>
  );
}

export default Post;
