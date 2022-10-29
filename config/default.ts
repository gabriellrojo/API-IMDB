require("dotenv").config()
const user = process.env.USERCLOUD
const password = process.env.USERPASSWORD
const port = process.env.PORT

export default {
    cloudAccess: `mongodb+srv://${user}:${password}@cluster0.sjdntgj.mongodb.net/?retryWrites=true&w=majority`
}