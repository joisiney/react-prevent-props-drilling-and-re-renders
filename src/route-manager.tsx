import {FC} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {LayoutTemplate} from '@/templates/layout';
import {TodoPage} from '@/pages/todo';
import {ProfilePage} from '@/pages/profile';
import {CounterPage} from './pages/counter';


export const RouteManager:FC = () => (<BrowserRouter>
    <LayoutTemplate>
        <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/counter" element={<CounterPage />} />
        </Routes>
    </LayoutTemplate>
</BrowserRouter>);
