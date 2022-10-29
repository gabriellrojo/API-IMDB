import express from "express"
import Controller from "../controller/Controller"
const route = express.Router()
import movieUpload from "../middlewares/validationMovie"
import validation from "../middlewares/validationMovie"

route.get("/teste", Controller.teste)
route.post("/postFilm", movieUpload(), validation, Controller.postFilm)
route.get("/getFilm/:id", Controller.getFilmById)
route.get("/getFilms", Controller.getFilms)
route.delete("/deleteFilm/:id", Controller.deleteFilm)
route.patch("/update/:id", movieUpload(), validation, Controller.update)

export default route