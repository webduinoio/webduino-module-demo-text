Blockly.JavaScript['text_show'] = function (block) {
  var value_string_ = Blockly.JavaScript.valueToCode(block, 'string_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new blocklyText('+ value_string_ +')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_size'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_size_ = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_string_ + '.setSize(' + value_size_ + ');\n';
  return code;
};

Blockly.JavaScript['text_lineheight'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_lineheight_ = Blockly.JavaScript.valueToCode(block, 'lineheight_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_string_ + '.setLineHeight(' + value_lineheight_ + ');\n';
  return code;
};

Blockly.JavaScript['text_color'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_string_ + '.setColor(' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['text_break'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var code = variable_string_ + '.addLineBreak();\n';
  return code;
};