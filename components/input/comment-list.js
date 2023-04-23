import { useEffect, useState } from 'react';
import classes from './comment-list.module.css';

function CommentList({ eventId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${eventId}`).then(res => res.json()).then(data => {
      console.log(data);
      setComments(data);
    });
  }, []);

  return (
    <ul className={classes.comments}>
      {comments && comments.length ? (
        comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>By <address>{comment.name}</address></div>
          </li>
        ))
      ) : (
        <li>
          <h2>Loading....</h2>
        </li>
      )}
    </ul>
  );
}

export default CommentList;
