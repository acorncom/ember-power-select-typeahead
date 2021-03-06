import Ember from 'ember';
import layout from '../templates/components/power-select-typeahead';
const { Component, computed } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  tabindex: -1,
  triggerComponent: 'power-select-typeahead/trigger',
  beforeOptionsComponent: null,
  searchEnabled: false,
  loadingMessage: false,

  // CPs
  concatenatedTriggerClasses: computed('triggerClass', function() {
    let classes = ['ember-power-select-typeahead-trigger'];
    let passedClass = this.get('triggerClass');
    if (passedClass) {
      classes.push(passedClass);
    }
    return classes.join(' ');
  }),

  concatenatedDropdownClasses: computed('dropdownClass', function() {
    let classes = ['ember-power-select-typeahead-dropdown'];
    let passedClass = this.get('dropdownClass');
    if (passedClass) {
      classes.push(passedClass);
    }
    return classes.join(' ');
  }),

  actions: {
    onKeyDown(select, e) {
      let action = this.get('onkeydown');

      if (!action || action(select, e) !== false) {
        if (e.keyCode === 27) {
          select.actions.choose(null);
        }
      }
    }
  }
});
