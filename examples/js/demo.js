var conditions, actions, nameField, ageField, occupationField, submit, allData;
(function($) {
  var occupationOptions = [ "Software Engineer", "Biz Dev", "Marketing" ];

  function getInitialData() {
    return {"variables": [
            {'field_type': 'select',
                'label': 'Age Band / Gender',
                'name': 'age_band_or_gender',
                'options': ['Adult',
                    'Men',
                    'Women',
                    'Kids',
                    'Boys',
                    'Girls',
                    'Babies']},
            {'field_type': 'select',
                'label': 'Match Type',
                'name': 'match_type',
                'options': ['Contains', 'Exactly Matches']},
            {'field_type': 'string',
                'label': 'Phrase',
                'name': 'phrase',
                'options': []}
                        ],
          "actions": [
              {'label': 'Get Filter Operation',
                  'name': 'get_filter_operation',
                  'params': [{'fieldType': 'select',
                      'label': 'Filter Operation',
                      'name': 'filter_operation',
                      'options': [{'label': 'Only Include',
                          'name': 'only_include'},
                          {'label': 'Exclude',
                              'name': 'exclude'}]}]},
              {'label': 'Get Operator',
                  'name': 'get_operator',
                  'params': [{'fieldType': 'select',
                      'label': 'Operator',
                      'name': 'operator',
                      'options': [{'label': 'IN', 'name': 'IN'}]}]},
              {'label': 'Get Property',
                  'name': 'get_property',
                  'params': [{'fieldType': 'select',
                      'label': 'Property',
                      'name': 'property',
                      'options': [{'label': 'Category',
                          'name': 'category'}]}]},
              {'label': 'Get Synonym',
                  'name': 'get_synonym',
                  'params': [{'fieldType': 'select',
                      'label': 'Synonym/Hyponym',
                      'name': 'synonym_or_hyponym',
                      'options': [{'label': 'Synonym', 'name': 'synonym'},
                          {'label': 'Hyponym',
                              'name': 'hyponym'}]}]}
          ],
          "variable_type_operators": {
              'boolean': [
                  {'input_type': 'none',
                  'label': 'Is False',
                  'name': 'is_false'},
                  {'input_type': 'none',
                      'label': 'Is True',
                      'name': 'is_true'}],
              'numeric': [
                  {'input_type': 'numeric',
                  'label': 'Equal To',
                  'name': 'equal_to'},
                  {'input_type': 'numeric',
                      'label': 'Greater Than',
                      'name': 'greater_than'},
                  {'input_type': 'numeric',
                      'label': 'Greater Than Or Equal To',
                      'name': 'greater_than_or_equal_to'},
                  {'input_type': 'numeric',
                      'label': 'Less Than',
                      'name': 'less_than'},
                  {'input_type': 'numeric',
                      'label': 'Less Than Or Equal To',
                      'name': 'less_than_or_equal_to'}],
              'select': [
                  {'input_type': 'select',
                  'label': 'Contains',
                  'name': 'contains'},
                  {'input_type': 'select',
                      'label': 'Does Not Contain',
                      'name': 'does_not_contain'}],
              'select_multiple': [
                  {'input_type': 'select_multiple',
                  'label': 'Contains All',
                  'name': 'contains_all'},
                  {'input_type': 'select_multiple',
                      'label': 'Is Contained By',
                      'name': 'is_contained_by'},
                  {'input_type': 'select_multiple',
                      'label': 'Shares At Least One Element With',
                      'name': 'shares_at_least_one_element_with'},
                  {'input_type': 'select_multiple',
                      'label': 'Shares Exactly One Element With',
                      'name': 'shares_exactly_one_element_with'},
                  {'input_type': 'select_multiple',
                      'label': 'Shares No Elements With',
                      'name': 'shares_no_elements_with'}],
              'string': [
                  {'input_type': 'text',
                  'label': 'Contains',
                  'name': 'contains'},
                  {'input_type': 'text',
                      'label': 'Ends With',
                      'name': 'ends_with'},
                  {'input_type': 'text',
                      'label': 'Equal To',
                      'name': 'equal_to'},
                  {'input_type': 'text',
                      'label': 'Equal To (case insensitive)',
                      'name': 'equal_to_case_insensitive'},
                  {'input_type': 'text',
                      'label': 'Matches Regex',
                      'name': 'matches_regex'},
                  {'input_type': 'none',
                      'label': 'Non Empty',
                      'name': 'non_empty'},
                  {'input_type': 'text',
                      'label': 'Starts With',
                      'name': 'starts_with'}]}
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
