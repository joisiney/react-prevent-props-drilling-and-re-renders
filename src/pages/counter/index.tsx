import {HeaderTodo} from '@/components/todo/header';
import {Button} from '@/components/shadcn-ui/button';
import {Card, CardContent} from '@/components/shadcn-ui/card';
import {ActionsCounter} from './components/actions';
import {LabelCounter} from './components/label';

export const CounterPage:React.FC = () => {
    
    return (
        <Card className="w-[350px]">
            <HeaderTodo title='Contador' description='Clique nos botões (+) ou (-) para interagir' />
            <CardContent>
                <LabelCounter/>
                <ActionsCounter/>
            </CardContent>
        </Card>
    );
};