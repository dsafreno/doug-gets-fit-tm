Template.records.records = function() {
  return Workouts.find();
};

Template.record.date = function() {
  return moment(this.date).format('L');
};
