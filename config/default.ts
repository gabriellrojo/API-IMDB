require("dotenv").config()
const user = process.env.USERCLOUD
const password = process.env.USERPASSWORD

export default {
    cloudAccess: `mongodb+srv://${user}:${password}@cluster0.sjdntgj.mongodb.net/?retryWrites=true&w=majority`
}