import mongoose from "mongoose"
import config from "config"

const cloudAccess = config.get<string>("cloudAccess")
console.log(cloudAccess)
mongoose.connect(cloudAccess)
    .then(() => console.log("Estou conectado ao cloud do MongoDB"))
    .catch((err) => console.log(`Ocorreu um erro ${err}`))

export default mongoose