require("dotenv").config()

const user = process.env.USERCLOUD
const password = process.env.USERPASSWORD

export default {
    port: 5000,
    cloudAccess: `mongodb+srv://${user}:${password}@cluster0.sjdntgj.mongodb.net/?retryWrites=true&w=majority`
}