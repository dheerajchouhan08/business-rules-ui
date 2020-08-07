var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {"variables": [
            {
                'field_type': 'select',
                'label': 'Age Band / Gender',
                'name': 'age_band_or_gender',
                'options': [
                    'Adult',
                    'Men',
                    'Women',
                    'Kids',
                    'Boys',
                    'Girls',
                    'Babies'
                ]
            },
            {
                'field_type': 'string',
                'label': 'Search Term',
                'name': 'search_term',
                'options': []
            }],
          "actions": [
              {
                  'name': 'filter',
                  'label': 'Filter',
                  'params': [{
                      'name': 'inclusion_rule',
                      'label': 'Inclusion Rule',
                      'fieldType': 'select',
                      'options': [
                          {
                              'name': '123',
                              'label': 'Saree'
                          },
                          {
                              'name': '234',
                              'label': 'Kurti'
                          }
                          ]
                  }]
              },
              {
                  'name': 'look_up_for_matching_phrase',
                  'label': 'Look Up Matching Phrase',
                  'params': [{
                      'name': 'look_up',
                      'label': 'Look Up',
                      'fieldType': 'select',
                      'options':[
                          {
                            'name': 'yes',
                            'label': 'YES'
                          },
                          {
                              'name': 'no',
                              'label': 'NO'
                          }
                      ]
                  }]
              },
              ],
          "variable_type_operators": {
              'boolean': [
                  {
                      'input_type': 'none',
                      'label': 'Is False',
                      'name': 'is_false'
                  },
                  {
                      'input_type': 'none',
                      'label': 'Is True',
                      'name': 'is_true'
                  }],
              'numeric': [
                  {
                      'input_type': 'numeric',
                      'label': 'Equal To',
                      'name': 'equal_to'
                  },
                  {
                      'input_type': 'numeric',
                      'label': 'Greater Than',
                      'name': 'greater_than'
                  },
                  {
                      'input_type': 'numeric',
                      'label': 'Greater Than Or Equal To',
                      'name': 'greater_than_or_equal_to'
                  },
                  {
                      'input_type': 'numeric',
                      'label': 'Less Than',
                      'name': 'less_than'
                  },
                  {
                      'input_type': 'numeric',
                      'label': 'Less Than Or Equal To',
                      'name': 'less_than_or_equal_to'
                  }],
              'select': [
                  {
                      'input_type': 'select',
                      'label': 'EQUALS',
                      'name': 'equals'
                  },
                  ],
              'select_multiple': [
                  {
                      'input_type': 'select_multiple',
                      'label': 'Contains All',
                      'name': 'contains_all'
                  },
                  {
                      'input_type': 'select_multiple',
                      'label': 'Is Contained By',
                      'name': 'is_contained_by'
                  },
                  {
                      'input_type': 'select_multiple',
                      'label': 'Shares At Least One Element With',
                      'name': 'shares_at_least_one_element_with'
                  },
                  {
                      'input_type': 'select_multiple',
                      'label': 'Shares Exactly One Element With',
                      'name': 'shares_exactly_one_element_with'
                  },
                  {
                      'input_type': 'select_multiple',
                      'label': 'Shares No Elements With',
                      'name': 'shares_no_elements_with'
                  }],
              'string': [
                  {
                      'input_type': 'text',
                      'label': 'Contains',
                      'name': 'contains'
                  },
                  {
                      'input_type': 'text',
                      'label': 'Matches (case insensitive)',
                      'name': 'matches_case_insensitive'
                  },
                  {
                      'input_type': 'text',
                      'label': 'Matches Regex',
                      'name': 'matches_regex'
                  },
                  ]}
    };
  };

  function onReady() {
    conditions = $("#conditions");
    actions = $("#actions");
    nameField = $("#nameField");
    occupationField = $("#occupationField");
    ageField = $("#ageField");
    submit = $("#submit");
    allData = getInitialData();

    initializeConditions(allData);
    initializeActions(allData);
    initializeForm();
  }

  function initializeConditions(data) {
    conditions.conditionsBuilder(data)
  }

  function initializeActions(data) {
    actions.actionsBuilder(data);
  }

  function initializeForm() {
    for(var i=0; i < occupationOptions.length; i++) {
      var o = occupationOptions[i];
      occupationField.append($("<option>", {value: o.name, text: o.label}));
    }

    submit.click(function(e) {
      e.preventDefault();
      console.log("CONDITIONS");
      console.log(JSON.stringify(conditions.conditionsBuilder("data")));
      console.log("ACTIONS");
      console.log(JSON.stringify(actions.actionsBuilder("data")));
    });
  }
  $(onReady);
})(jQuery);
