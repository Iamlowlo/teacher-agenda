import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapsible-table-content-cell', 'Integration | Component | collapsible table content cell', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{collapsible-table-content-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#collapsible-table-content-cell}}
      template block text
    {{/collapsible-table-content-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
