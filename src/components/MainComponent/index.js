import Product from "../Products";
import SideNav from "../SideNav";

const MainComponent=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <SideNav/>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8">
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainComponent;