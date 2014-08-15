Workouts = new Meteor.Collection('workouts');
// Fields = ['date', 'weight', 'squats', 'bench', 'press', 'abs', 'biceps', 'run'];

if (Meteor.isServer) {
  Meteor.startup(function () {
    Workouts.remove({})
    Workouts.insert({
      date: moment().valueOf(),
      weight: 160,
      squats: 45,
      press: 10,
      deadlift: 55
    });
  });
}

