const db = require('./db.json');

module.exports = {
  post: ({ id }) => db.posts.find(post => post.id == id),
  posts: ({ author }) => db.posts.filter(post => post.author == author),
  // posts: param => console.log(param),
};
