Blockly.JavaScript['text_class'] = function (block) {
  var code = 'new demoText(\'' + block.id.replace(/[^a-zA-Z0-9]/g, '') + '\')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_set'] = function(block) {
  var stringvariable_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'string_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = stringvariable_ + '.setText(' + value_name + ');\n';
  return code;
};

Blockly.JavaScript['text_size'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_size_ = Blockly.JavaScript.valueToCode(block, 'size_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_string_ + '.setSize(' + value_size_ + ');\n';
  return code;
};

Blockly.JavaScript['text_color'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var value_color_ = Blockly.JavaScript.valueToCode(block, 'color_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_string_ + '.setColor(' + value_color_ + ');\n';
  return code;
};

Blockly.JavaScript['text_align'] = function (block) {
  var variable_string_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('stringVariable_'), Blockly.Variables.NAME_TYPE);
  var dropdown_align_ = block.getFieldValue('align_');
  var code = variable_string_ + '.setAlignment(\'' + dropdown_align_ + '\');\n';
  return code;
};
