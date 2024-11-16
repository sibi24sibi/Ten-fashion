import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, remember });
  };

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
  );
}

export default LoginForm;
