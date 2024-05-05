## Props Drilling / re-render

Observe o fluxograma abaixo: Ao adicionar/editar uma mensagem, a Context API solicita ao React avaliar as dependências e recriar os elementos necessários. Embora o DOM virtual otimize a recriação, o React ainda precisa avaliar se deve ou não recriar os componentes X, Y e Z, embora saibamos que isso não deveria ser necessário, pois eles não dependem dessa informação. Além disso, o fato de o React calcular o que deve ser reescrito ou não pode acionar a execução de `useMemo` ou `useEffects`, embora isso geralmente seja um erro do programador. Mas, por que nos preocupar com isso se o componente nem deveria saber dessa atualização, né?


![Fluxo do Observer](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/context-api_jl7xhp.png)


## Fluxo do Observer

Vamos analisar o fluxograma abaixo: Trabalhando com `observers`, não há um contexto geral. Apenas os componentes que têm `observers` serão atualizados. Ao adicionar/editar, apenas os componentes com `observers` serão atualizados. Assim, o React não precisa considerar re-renderizar componentes fora desse escopo. Embora pareça ideal, há cenários em que esse fluxo não é adequado, como quando há uma grande quantidade de elementos que utilizam `observers`. Nesses casos, usar `context` ou similar é mais sensato. Porém, em situações com um número controlado de `observers`, o custo é significativamente menor do que recriar/recalcular todos os componentes dentro do contexto, além de evitar `props drilling` ou recálculo/execução desnecessária de `useMemo` ou `useEffects`.

![Fluxo da Context API](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/observer_g8jexw.png)

## 🚀 Tecnologias

Principais tecnologias que utilizamos para desenvolver esta aplicação

- [React JS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Chadcn](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [Radix](https://www.radix-ui.com/)
- [React Router](https://reactrouter.com/en/main)


## 💻 Começando

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/joisiney/react-prevent-props-drilling-and-re-renders && cd react-prevent-props-drilling-and-re-renders
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Para finalizar, execute
$ yarn dev

# Muito bem, o projeto foi iniciado!
```

## Desvendando o Funcionamento!

Se você já está familiarizado com a programação orientada a domínio, então está no seu território! Este processo é simples e emocionante de trabalhar. Aqui está como você pode começar:

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

## Mapa mental do projeto

```
.
├── app.tsx
├── globals.css
├── main.tsx
├── application
│   ├── entities
│   │   ├── message.ts
│   │   └── user.ts
│   ├── helpers
│   │   └── observer
│   │       ├── create.hook.ts
│   │       └── index.ts
│   ├── models
│   │   ├── message.ts
│   │   └── user.ts
│   ├── observers
│   │   └── in-memory
│   │       ├── messages.ts
│   │       └── user.ts
│   └── repositories
│       └── in-memory
│           ├── messages.ts
│           └── user.ts
├── components
├── contexts
│   └── message
│       ├── hooks
│       │   ├── index.ts
│       │   ├── message.ts
│       │   └── user.ts
│       ├── index.context.ts
│       ├── index.dto.ts
│       ├── index.hook.ts
│       └── index.tsx
├── pages
│   ├── home.tsx
│   └── profile
│       ├── index.hook.ts
│       └── index.tsx
├── templates
│   ├── header.tsx
│   ├── layout.tsx
│   ├── todo-context
│   │   ├── components
│   │   │   ├── message
│   │   │   │   ├── index.dto.ts
│   │   │   │   ├── index.hook.ts
│   │   │   │   └── index.tsx
│   │   │   └── messages
│   │   │       ├── index.hook.ts
│   │   │       └── index.tsx
│   │   ├── index.hook.ts
│   │   └── index.tsx
│   └── todo-observer
│       ├── components
│       │   ├── message
│       │   │   ├── index.dto.ts
│       │   │   ├── index.hook.ts
│       │   │   └── index.tsx
│       │   └── messages
│       │       ├── index.hook.ts
│       │       └── index.tsx
│       ├── index.hook.ts
│       └── index.tsx
└── utils
    ├── cn.ts
    └── parseEventToFormData.ts
```

## Vídeo de demonstração:

No vídeo abaixo, observamos que o lado do `observer` (store) realiza re-renderizações muito menos frequentes em comparação com o lado que utiliza `context`. Isso ocorre devido à natureza do `observer`, que atualiza apenas os componentes que estão diretamente relacionados às mudanças nos dados, enquanto o `context` pode acionar re-renderizações em toda a árvore de componentes afetados, mesmo que nem todos necessitem ser atualizados. Essa diferença na eficiência de re-renderização destaca a vantagem do `observer` em manter uma renderização cirurgica.

<a href="https://vimeo.com/942328752" target="_blank">
    <img src="https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714743540/Captura_de_Tela_2024-05-03_a%CC%80s_10.32.33_zzftoc.png" style="max-width: 100%;">
</a>

## 🤔 Como contribuir

**Faça um fork deste repositório**

```bash
# Fork usando a linha de comando oficial do GitHub
# Se você não tiver a CLI do GitHub, use o site para fazer isso.

$ gh repo fork joisiney/react-prevent-props-drilling-and-re-renders
```

**Siga os passos abaixo**

```bash
# Clone seu fork
$ git clone your-fork-url && cd react-prevent-props-drilling-and-re-renders

# Crie uma ramificação com a sua feature
$ git checkout -b my-feature

# Faça commit das suas alterações
$ git commit -m 'Feature: My new feature'

# Envie seu código para a branch remota
$ git push origin my-feature
```

Depois que sua solicitação pull for mesclada, você pode excluir sua ramificação

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - consulte  [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💚 por Joisiney 🤝 [Veja nosso linkedin](https://www.linkedin.com/in/joisiney/)