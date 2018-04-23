const db = require('./db.json');

module.exports = {
  post: ({ id }) => db.posts.find(post => post.id == id),
  posts: ({ status }) => db.posts.filter(post => post.public == status),
};
