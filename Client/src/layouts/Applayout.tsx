import Menubar from "src/layouts/Menubar";
import Header from "src/layouts/Header";
import 'src/custom/output.css'

export default function Root(props: any) {
    return (

        <div className='flex bg-primaryTwo h-screen'>
            <div>
                <Header />
            </div>
            {props.children}
            <div>
                <Menubar />
            </div>
        </div>
    )
}