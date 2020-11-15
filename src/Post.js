import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body, author }) {
  // return an input that displays our text whenever we make changes
  return (
    <>
      <div className="Post">
        <div className="PostHeader">
          <h1>{title}</h1>
          <h3>
            {author}
          </h3>
        </div>
        <p>
          {body}
        </p>
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
