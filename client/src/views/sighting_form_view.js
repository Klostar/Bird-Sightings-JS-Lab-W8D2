const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);

  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.create(evt.target)
  console.log(newSighting);
  PubSub.publish('SightingFormView:sighting-submitted', newSighting)
}

SightingFormView.prototype.create = function(evt) {
  const newSighting = {
    species: evt.species.value,
    location: evt.location.value,
    date: evt.date.value
  }

return newSighting;

};


module.exports = SightingFormView;
