import { Suspense } from 'react';
import AppBar from "./appbar/AppBar";

const Layout = ({children}) => {
    return(
        <div style={{height: "100%"}}>
            <AppBar />
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}

export default Layout;
