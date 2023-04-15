const Task = require("../model/task");

//home controller rendering the home.ejs file
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log(`error while finding the task in db ${err}`);
      return;
    }
    if (tasks) {
      Task.countDocuments({ status: false }, function (err, count) {
        if (err) {
          console.log(err);
        }
        return res.render("home", {
          title: "To Do App",
          tasks: tasks, //passing locals as tasks for all tasks in list
          count: count, //passing locals as count for active task
        });
      });
    }
  });
};
