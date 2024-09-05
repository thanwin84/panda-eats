import { Routes , Route, Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import { HomePage } from "./pages";

export default function AppRoutes(){
    return (
        <Routes>
            <Route
                path="/"
                element={
                <Layout>
                    <HomePage/>
                </Layout> 
             }
            />
            <Route
                path="*"
                element={<Navigate to="/"/>}
            />
        </Routes>
    )
}