import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage";
import ProductsPage from "./src/pages/ProductsPage";

const app = document.querySelector("#app");
const render = async (target, content) => {
  target.innerHTML = await content();
};
const router = new Navigo("/", { linksSelector: "a" });

router.on("/home", () => render(app, HomePage));
router.on("/", () => render(app, router.navigate("/home")));
router.on("/products", () => render(app, ProductsPage));

router.resolve();
