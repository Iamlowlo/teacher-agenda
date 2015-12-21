import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('classinfo-tag', 'Integration | Component | classinfo tag', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{classinfo-tag}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#classinfo-tag}}
      template block text
    {{/classinfo-tag}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
