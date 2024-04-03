import {createBrowserRouter} from 'react-router-dom';
import { App } from './layouts/App';
import Home from './pages/Home';
import { RestoPage } from './pages/RestoPage';



export const router = createBrowserRouter([
    {
        path:"/",
        element : <App/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path: "/resto",
                element : <RestoPage/>
            }
        ]
    }
])