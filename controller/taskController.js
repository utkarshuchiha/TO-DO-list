const Task = require("../model/task");
//action to add new task to the list into the db
module.exports.addtask = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, task) {
      if (err) {
        console.log(`error in adding new task to db ${err}`);
        return;
      }
      return res.redirect("back");
    }
  );
};

//action to delete a task from the TO_DO list from db
module.exports.delete = function (req, res) {
  Task.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      console.log(`error while deleting the task ${err}`);
      return;
    }
    return res.redirect("back");
  });
};

//action to update the status of the task in the db
module.exports.update = function (req, res) {
  const newstatus = req.query.status;
  Task.findByIdAndUpdate(
    req.params.id,
    { status: newstatus },
    function (err, task) {
      if (err) {
        console.log(`error in finding the task in db ${err}`);
        return;
      }
      return res.redirect("/");
    }
  );
};
