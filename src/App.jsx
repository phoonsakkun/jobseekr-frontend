import Router from "./routes/Router";
import useLoading from "./hook/useLoading";
import Spinner from "./component/spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading } = useLoading();

  return (
    <div>
      {/* {loading && <Spinner />} */}
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={4000} />
    </div>
  );
}

export default App;
