import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapsible-table-header-cell', 'Integration | Component | collapsible table header cell', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{collapsible-table-header-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#collapsible-table-header-cell}}
      template block text
    {{/collapsible-table-header-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
