import Spline from "@splinetool/react-spline";

export default function Home() {
    return (
        <main className="flex" >
            <div className="flex max-md:flex-col w-full justify-center items-center h-screen " >
                <div className="flex w-2/3 h-screen " >
                    
                   
                </div>
                <div className="flex w-full h-screen " >
                    <Spline className="z-0"  scene={"/models/macbook1.spline"} />
                </div>
            </div>

        </main>
    );
}
