$(document).ready(function() {
  $('.new-entry').click(function() {
    $('.create').show();
    $('.new-entry').hide();
  });
});

Template.create.date = function() {
  return moment().format('LLL');
};

// Template.create.events = {
//   'click .add': function(e) {
//     var new_record = {};
//     new_record['date'] = moment().valueOf();

//     var weight = $('#weight-input').val();
//     new_record['weight'] = moment().valueOf();

//     var weight = $('#weight-input').val();
//     new_record['weight'] = moment().valueOf();
//   }
// };
