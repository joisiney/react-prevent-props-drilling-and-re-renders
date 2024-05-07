## Desvendando o Funcionamento!

Se você já está familiarizado DDD (domain driven design), então está no seu território! Este processo é simples e emocionante de trabalhar. Aqui está como você pode começar:

Primeiro, criamos uma aba de perfil. Olhe só para essa `Entity`:
```typescript
type UserEntity = {
    id: number;
    name: string;
    avatar?: string;
};
```

Agora, vamos dar vida a um `Model`. Este é o coração do nosso sistema, responsável por persistir e traduzir os dados para o front-end:

```typescript
export class UserModel {
    constructor(private readonly fields:UserEntity) {
    }
    get id() {
        return this.fields.id;
    }
    get nameUpper() {
        return this.fields.name.toUpperCase();
    }
    get nameLower() {
        return this.fields.name.toLowerCase();
    }
    toJSON() {
        return this.fields;
    }
}
```

Na `entity`, temos um conjunto de propriedades (fiel a API REST), mas no `Model`, escolhemos apenas alguns `getters`. Simplificando para manter a eficiência e a clareza (Keep It Simple, Stupid).

Agora, aqui vem a parte emocionante! Temos o `repository`, que guarda e atualiza os nossos `model`. Mas lembre-se, nunca modificamos um `model`. Sempre recriamos. Veja como:
```typescript
class UserInMemoryRepository extends ObserverHelper<UserModel> {
    update(newUser:Partial<UserEntity>){
        this.data = new UserModel({...this.data.toJSON(), ...newUser});
        this.emitter(['user']);
    }
}
```

Agora, você pode estar se perguntando, como isso se encaixa no React? Ah, é a melhor parte!

Criamos um gancho (hook) e disponibilizamos através de React hooks, onde podemos acessar atualizações usando observadores:

```typescript
const userInMemoryRepository = new UserInMemoryRepository(new UserModel({
    id: 0,
    name: 'Joisiney'
}));

const useUserInMemoryObserver = createHookObserverHelper<UserModel, UserInMemoryRepository>(
    userInMemoryRepository
);
```
Com esse gancho pronto para uso, podemos simplesmente incorporá-lo em qualquer componente:

```typescript
export const ExampleOne:FC = () =>{
    const data = useUserInMemoryObserver({
        observable:['user']
    });
    return <div>
        <h1>{data?.nameUpper}</h1>
        <button onClick={()=>{
            userInMemoryRepository.update({
                name:'leandro'
            });
        }}>Atualizar nome</button>
    </div>;
};
```
E o melhor de tudo, podemos fazer isso globalmente! Veja o `ExampleUsage`:

```typescript
export const ExampleTwo:FC = () =>{
    const data = useUserInMemoryObserver({
        observable:['user']
    });
    return <div>
        <h1>{data?.nameUpper}</h1>
        <button onClick={()=>{
            userInMemoryRepository.update({
                name:'SILVA'
            });
        }}>Atualizar nome</button>
    </div>;
};
```
O mesmo que ocorre com o componente `ExampleOne` ocorre com o componente `ExampleTwo` só que desta vez tudo em minusculo.

```typescript
export const ExampleUsage:FC = () =>{
    const counterRef = useRef(0);
    return <>
        <p>Counter re-render ({counterRef.current++})</p>
        <ExampleOne/>
        <ExampleTwo/>
    </>;
};
```

Neste exemplo, os componentes `ExampleOne` e `ExampleTwo` estão sincronizados. Incrível, não é?

Isso significa que, mesmo que você altere um componente, o outro reage instantaneamente.

E o `ExampleUsage`? Ele não precisa ser renderizado novamente! Isso acontece porque o `repository` é global, mantendo todos os dados intactos enquanto navegamos pelo projeto. Isso também implica que `counterRef.current++` nunca será acionado, pelo menos não por este motivo 🚀.