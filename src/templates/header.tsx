import {FC} from 'react';
import {Link} from 'react-router-dom';
import {buttonVariants} from '../components/shadcn-ui/button';
const linkClassName = buttonVariants({variant:'secondary', className:'text-left'});

export const HeaderTemplate:FC = () => (
    <header className='flex bg-black w-64 p-6 flex-col'>
        <h1 className='text-2xl font-bold text-white'>Observer</h1>
        <span className='text-sm pb-6 text-gray-100'>Casos de uso</span>
        <nav className='flex gap-y-5 flex-col'>
            <Link to="/" className={linkClassName}>Observer vs Context</Link>
            <Link to="/profile" className={linkClassName}>Perfil (Observer)</Link>
            <Link to="/counter" className={linkClassName}>Counter (Observer)</Link>
        </nav>
    </header>
);
