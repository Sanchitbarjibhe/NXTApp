import Menubar from "src/layouts/Menubar";
import Header from "src/layouts/Header";
import 'src/custom/output.css';

export default function Root(props: any) {
    return (
        <div className='min-h-screen bg-primaryOne'>
            <div className='flex justify-center'>
                <Header />
                <main className="container mx-auto p-4">{props.children}</main>
                <Menubar />
            </div >
        </div>
    )
}