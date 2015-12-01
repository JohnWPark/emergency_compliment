var Compliment = require("../models/compliment");
var complimentsController = {
  index: function(req, res){
    res.render('compliments/index.hbs', {
      compliments: Compliment.all()
    });
  },
  show: function(req, res){
    res.render('compliments/show.hbs',{
      compliment: Compliment.find([req.params.id])
    });
  },
  new: function(req, res){
    res.render('compliments/new.hbs');
  },
  create: function(req, res){
    // use model to create compliment
    var compliment = Compliment.create(req.body.compliment)
    // redirect to compliment
    res.redirect("/compliments")
},
  edit: function(req, res){
      res.render('compliments/edit.hbs', {
          compliment: Compliment.find(req.params.id)
      })
  },
//HEY IM MAKING A CHANGE THAT SHOULD FORCE A MERGE CONFLICT!
 // update action code goes here...
update: function(req, res) {
  // update action
  }
}

module.exports = complimentsController;
