import Spline from "@splinetool/react-spline";
import {ThemeSelect} from "@/components/theme/ToggleTheme";

export default function Home() {
    return (
        <main className="flex" >
            <div className="flex p-10 max-md:flex-col w-full justify-center items-center h-screen " >
                <div className="flex w-2/3  " >
                    <ThemeSelect/>
                   
                </div>
                <div className="flex w-full h-full  " >
                    <Spline className="z-0"  scene={"/models/macbook1.spline"} />
                </div>
            </div>

        </main>
    );
}
