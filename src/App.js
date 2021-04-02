import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import StudentsComponent from "./components/studentlist";

function App() {
  return (
    <Provider store={store}>
      <StudentsComponent />
    </Provider>
  );
}

export default App;
