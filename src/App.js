import DatabaseTreeDisplay from "./tree_config";
import { db_chart_1, db_chart_2, db_chart_3 } from "./tree_schemas";

// output chart
function App() {
  return (
    DatabaseTreeDisplay(db_chart_1)
  );
}

export default App;
