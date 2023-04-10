import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper =({children})=> {
    return (
        <>
        <Navbar />
        <div className="wrapper">
            {children}
        </div>
        <Footer />
        </>
    )
}

export default Wrapper;