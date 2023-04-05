import './index.scss';
import SideBar from '../SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
    <SideBar/>
    <div className='page'>
        <span className='tags top-tags'>&lt;body&lt;</span>

        <Outlet />
            <span className='tag bottom-tags'>
            &lt;body&lt;
            <br />
            <span className='bottom-tag-html'>&lt;html&lt;</span>
            </span>
    </div>
    </div>
    )
}

export default Layout