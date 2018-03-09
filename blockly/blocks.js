var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['text_class'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_SHOW);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text_set'] = {
  init: function () {
    this.appendValueInput('string_')
        .setCheck(['Boolean', 'String', 'Number'])
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_DISPLAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text_size'] = {
  init: function () {
    this.appendValueInput('size_')
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_SIZE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text_color'] = {
  init: function () {
    this.appendValueInput('color_')
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_COLOR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['text_align'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_ALIGNMENT)
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.TEXT_ALIGN_LEFT, 'left'],
          [Blockly.Msg.TEXT_ALIGN_CENTER, 'center'],
          [Blockly.Msg.TEXT_ALIGN_RIGHT, 'right']
        ]), 'align_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
