import DatabaseTreeDisplay from "./tree_config";
import { db_chart_1, db_chart_2, db_chart_3 } from "./tree_schemas";

import React, { useState } from 'react';
import Select from 'react-select';


// output chart
function App() {
  const [selectedOption, setSelectedOption] = useState('db_state_1');
  const [selectedValue, setSelectedValue] = useState(db_chart_1);
  
  const select_onChange = (event) => {
    setSelectedOption(event.label);
    setSelectedValue(event.value);
  };

  const options = [
    { value: db_chart_1, label: 'db chart 1' },
    { value: db_chart_2, label: 'db chart 2' },
    { value: db_chart_3, label: 'db chart 3' },
  ];


  const select_schema = (<Select
    defaultValue={'db_chart_1'}
    onChange={select_onChange}
    options={options}
  />)
  
  return (
    <div>
      {select_schema}
      {DatabaseTreeDisplay(selectedValue)}
    </div>
  );
}

export default App;