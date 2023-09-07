const router = require("express").Router();
const view = require("../controllers/user.controller");

router.get("/logout", view.logout);
router.post("/login", view.login);
router.post("/register", view.registerUser);
router.get("/get", view.getUser);
router.post("/addProduct", view.addProduct);
router.get("/getProduct", view.getProduct);
router.get("/getImg", view.getImg);
router.post("/addbuyer", view.addbuyer);
router.post("/addseller", view.addseller);
router.post("/getbuyer", view.getbuyer);
router.post("/getseller", view.getseller);
router.post("/addseller",view.addseller);
router.post("/addsellerproducts",view.addsellerproducts);
router.get("/getsellerproducts",view.getsellproducts);

module.exports = router;
