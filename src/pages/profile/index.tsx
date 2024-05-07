import {Label} from '@radix-ui/react-label';
import {usePage} from './index.hook';
import {Success} from '@/components/success';
import {HeaderTodo} from '@/components/todo/header';
import {Button} from '@/components/shadcn-ui/button';
import {Card, CardContent, CardFooter} from '@/components/shadcn-ui/card';
import {Input} from '@/components/shadcn-ui/input';

export const ProfilePage:React.FC = () => {
    const page = usePage();
    
    return (
        <form onSubmit={page.handleSubmit}>
            <Card className="w-[350px]">
                {page.isSuccess ? <Success>Perfil atualizado com sucesso</Success> : <>
                    <HeaderTodo title='Perfil de seu usuário' description='Perfil atualizado através de observers' />
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Seu nome completo" defaultValue={page.userData?.name} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button type='submit'>Salvar</Button>
                    </CardFooter>
                </>}
            </Card>
        </form>
    );
};