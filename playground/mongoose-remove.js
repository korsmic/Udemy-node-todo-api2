const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59057d920f7a3fd2c81ff9fc'}).then((todo) => {
  
});

Todo.findByIdAndRemove("59057d920f7a3fd2c81ff9fc").then((todo) => {
  console.log(todo);
});