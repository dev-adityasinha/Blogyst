import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="flex justify-between p-4 border-b font-semibold text-black align-middle items-center border-black">
                <div>
                    <h1 className="text-xl font-semibold">Blogyst</h1>
                </div>
                <div className="flex gap-x-5 items-center">
                    <Link to={"/signin"}>
                        <h1 className="rounded-sm p-2 hover:bg-purple-800">Sign In</h1>
                    </Link>
                    <Link to={"/signup"}>
                        <h1 className=" bg-black text-white rounded-full pr-4 pl-4 pb-1 pt-1 hover:bg-purple-800">Get Started</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;