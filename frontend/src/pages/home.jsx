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
                        <h1 className="rounded-sm p-2">Sign In</h1>
                    </Link>
                    <Link to={"/signup"}>
                        <h1 className=" bg-black text-white rounded-full pr-4 pl-4 pb-1 pt-1">Get Started</h1>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="flex text-[9.5rem] justify-center text-center align-middle items-center font-semibold -mt-8">Ideas Worth</p>
                <p className="flex -mt-20 text-[10rem] justify-center text-center align-middle items-center font-semibold">Sharing.</p>
            </div>
            <div className="flex justify-center">
                <div className="flex align-middle justify-center items-center w-[800px] -mt-5">
                    <p className="flex text-center justify-center text-3xl mb-2 p-4">Exploring the Future of technology is transforming the way we live and work. In this post, we'll dive into the what the future may hold </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="flex align-middle justify-center bg-black text-white pl-4 pr-4 pt-2 pb-2 rounded-md text-xl mt-5 mb-10 cursor-pointer">Start Reading</button>
            </div>
            <div className="border-t flex">
                <p className="flex w-full text-center items-center justify-center mt-2">Aditya Sinha || Copyright-2025</p>
            </div>
        </>
    )
}

export default Home;