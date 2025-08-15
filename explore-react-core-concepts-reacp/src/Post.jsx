export default function Post({ post }) {
  // console.log(post);
  const { title, body, userId, id } = post;
  return (
    <div>
      <h4>Tittle : {title}</h4>
      <p>
        <small>UserId : {userId} </small>
      </p>
      <p>
        <small>PostId : {id}</small>
      </p>
      <p>{body}</p>
    </div>
  );
}
