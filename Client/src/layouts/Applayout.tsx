import Menubar from "src/layouts/Menubar";
import Header from "src/layouts/Header";

export default function Applayout(props: any) {
    return (
        <>
            <div className='min-h-screen bg-primaryOne'>
                {/* <Header /> */}
                <div className='flex justify-center'>
                    <main className="container mx-16 py-16">{props.children}</main>
                    <Menubar />
                </div>
            </div>
        </>
    )
}