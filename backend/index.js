const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const productRoutes = require("./routes/productRoutes.js")
const contactRoute = require("./routes/ContactRoute.js")
const authRoutes = require("./routes/authRoutes.js")
const cookieParser = require("cookie-parser")
// Load environment variables
dotenv.config({ path: "../.env" })

const app = express()
const PORT = process.env.PORT || 8000
const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://localhost:27017/tenFashion"

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json()) 

app.use(cookieParser())

// Database connection
connectDB(CONNECTION_URL)

// Routes
app.use("/", productRoutes)
app.use("/", contactRoute)
app.use("/api/auth", authRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
