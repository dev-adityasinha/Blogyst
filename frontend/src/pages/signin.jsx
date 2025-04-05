import { useState } from "react";

function SignIn() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[400px] p-6 rounded-xl shadow-lg animate-fadeIn border">
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
                <form className="flex flex-col gap-4" action={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium">Username</label>
                        <input
                            value={username}
                            onChange={((e) => setUsername(e.target.value))}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
