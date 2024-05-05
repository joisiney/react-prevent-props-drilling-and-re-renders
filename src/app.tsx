import {FC} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {LayoutTemplate} from '@/templates/layout';
import {HomePage} from '@/pages/home';
import {ProfilePage} from '@/pages/profile';


export const App:FC = () => (<Router>
    <LayoutTemplate>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </LayoutTemplate>
</Router>);
