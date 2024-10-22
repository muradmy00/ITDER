import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderProvider from "./ContextAPIs/OrderProvider";
const queryClient = new QueryClient();
import "primereact/resources/themes/lara-light-cyan/theme.css";
import BasicProvider from "./ContextAPIs/BasicProvider.jsx";
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <OrderProvider>
        <BasicProvider>
          <RouterProvider router={Router} />
        </BasicProvider>
      </OrderProvider>
    </QueryClientProvider>
  </>
);
