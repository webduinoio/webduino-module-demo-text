Blockly.Blocks['text_show'] = {
  init: function() {
  this.appendValueInput('string_')
      .setCheck('String')
      .appendField(Blockly.Msg.TEXT_SHOW);
  this.setOutput(true, null);
  this.setTooltip('');
  this.setColour(Blockly.Blocks.colour.HUE);
  this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};

Blockly.Blocks['text_size'] = {
  init: function () {
    this.appendValueInput("size_")
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_SIZE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};

Blockly.Blocks['text_lineheight'] = {
  init: function () {
    this.appendValueInput("lineheight_")
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_LINEHEIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};

Blockly.Blocks['text_color'] = {
  init: function () {
    this.appendValueInput("color_")
        .appendField(Blockly.Msg.TEXT_SET)
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_COLOR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl(mainUrl + 'basic/blockly/blockly-information.html' + utmUrl);
  }
};

Blockly.Blocks['text_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('string'), 'stringVariable_')
        .appendField(Blockly.Msg.TEXT_BREAK);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};