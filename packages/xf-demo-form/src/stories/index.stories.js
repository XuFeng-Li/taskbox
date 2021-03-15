import {
  XFCombinInput,
  XFCombinSelect,
} from "../index";
import React from "react";

export default {
  title: "Example/Form",
  component:XFCombinInput,
}

const CombinInputTemplate = (args) => <XFCombinInput {...args} />;
export const CombinInput = CombinInputTemplate.bind({});
CombinInput.args = {
  disabled:true,
  width:'80%',
  setting: [
    {
      "name":"name_01",
      "label":"label_01",
    }
  ]
};

const CombinSelectTemplate = (args) => <XFCombinSelect {...args} />;
export const CombinSelect = CombinSelectTemplate.bind({});
CombinSelect.args = {
  disabled:true,
  width:'80%',
  setting: [
    {
      "name":"name_01",
      "label":"label_01",
      "options":[
        {
          "label":"option01",
          "value":"value01",
        },
        {
          "label":"option02",
          "value":"value02",
        },
        {
          "label":"option03",
          "value":"value03",
        },
        {
          "label":"option04",
          "value":"value04",
        },
      ]
    }
  ]
};
