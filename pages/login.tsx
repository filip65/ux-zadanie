import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    if (email === "filip.katusin@gmail.com" && password === "filip123") {
      router.push("/home");
    }
  };

  return (
    <div className="h-screen flex items-end bg-hamburger overflow-hidden">
      <div className="bg-red w-full px-8 relative">
        <div className="bg-red absolute -left-[150%] -top-[10vw] w-[400vw] h-[400vw] rounded-full z-1"></div>
        <div className="relative z-10 pb-10">
          <h1 className="text-4xl font-bold text-white leading-normal mb-4">
            Čau! <br /> Tu sa prihlás ✌️
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border-none rounded-full text-red text-lg px-6 py-3 placeholder:text-gray-400 focus:border-2 focus:border-black"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Heslo"
              className="w-full border-none rounded-full text-red text-lg px-6 py-3 placeholder:text-gray-400 focus:border-2 focus:border-black"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-center text-white text-sm">
              Ešte nemáte účet?{" "}
              <a className="font-bold underline cursor-pointer">
                Registrovať sa tu
              </a>
            </p>

            <button className="bg-green text-white font-bold w-full px-6 py-3 text-lg rounded-full">
              Prihlásiť
            </button>

            <div className="flex space-x-6 justify-center">
              <button className="bg-white p-2 rounded-lg">
                <img src="/images/google-logo.svg" alt="" className="h-8 w-8" />
              </button>

              <button className="bg-white p-2 rounded-lg">
                <img
                  src="/images/facebook-logo.svg"
                  alt=""
                  className="h-8 w-8"
                />
              </button>

              <button className="bg-white p-2 rounded-lg">
                <img src="/images/apple-logo.svg" alt="" className="h-8 w-8" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
