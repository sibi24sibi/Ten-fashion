import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { json, useNavigate } from "react-router-dom"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const responce = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!responce.ok) {
        throw new Error("failed to sign in User")
      }
      const data = await responce.json()
      if (data.success === false) {
        return toast.error(data.message)
      }
      toast.success(data.message)
      navigate("/")
    } catch (error) {
      throw new Error(error)
    }
    console.log("Logging in with:", { email, password, remember })
  }

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      {/* Email Field */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="email"
          className="w-24 text-sm font-medium dark:text-white"
        >
          Email:
        </label>
        <TextInput
          id="email"
          type="email"
          placeholder="johndoe@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
      </div>

      {/* Password Field */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="password"
          className="w-24 text-sm font-medium dark:text-white"
        >
          Password:
        </label>
        <TextInput
          id="password"
          type="password"
          placeholder="johndoe@123"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex-1"
        />
      </div>

      {/* Remember Me Checkbox */}
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default LoginForm
