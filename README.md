### Aviso: Este repositório está em construção 🚧. Se interessou pelo assunto? Clique em "Watch" para receber atualizações em primeira mão 🙈.

![React Observer?](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714994138/react-js-observer_agfwpd.png)

# CONTEXT API VS OBSERVER

Não podemos simplesmente colocá-los frente a frente e declarar um vencedor, já que cada um tem seu papel específico. No entanto, o padrão Observer ainda é largamente subexplorado no universo do React. Recentemente, enfrentei desafios que me levaram a uma análise profunda dessas duas abordagens.

## CONTEXT API

![Fluxo do Observer](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/context-api_jl7xhp.png)

Dê uma olhada no diagrama acima: ao adicionar ou editar uma mensagem, a Context API pede ao React que reavalie as dependências e, se necessário, recrie os elementos. Em contextos mais complexos, isso pode ser tedioso e custoso para sua aplicação, especialmente em cenários onde passar propriedades através da árvore de componentes React é normal.

![Fluxo do Observer](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714943241/props-drilling_dakh3k.png)

A Context API resolve o problema do "props drilling", mas o recálculo de dependências, como nos componentes X, Y e Z, muitas vezes é desnecessário, pois eles não dependem dessa informação.

Nesse processo de recálculo de dependências, um ou outro `useEffect` pode ser acionado acidentalmente, resultando em um verdadeiro inferno de re-renderização (embora isso geralmente seja erro do programador). Mas por que nos preocuparmos com isso se o componente sequer deveria estar ciente dessa atualização, não é mesmo?

## FLUXO DO OBSERVER

![Fluxo da Context API](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/observer_g8jexw.png)

Vamos analisar o fluxograma acima: trabalhando com `observers`, não há um contexto geral. Apenas os componentes que têm `observers` serão atualizados. Ao adicionar/editar, apenas os componentes com `observers` serão atualizados. Assim, como a Context API resolve o problema de props drilling, os observers também o resolvem, porém com um ganho extra de não re-renderizar componentes que não estão ouvindo, como os componentes X, Y e Z. Eles sequer saberão que houve alteração no estado.

Embora tenhamos um ganho de performance significativo, há cenários em que esse fluxo não é adequado, como quando há uma grande quantidade de elementos que utilizam `observers`. Neste cenário, recriar tudo é mais barato do que observar alteração de elemento por elemento.

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

## Mapa mental do projeto

 Em desenvolvimento 🚧

## Vídeo de demonstração:

No vídeo abaixo, observamos que o lado do `observer` (store) realiza re-renderizações muito menos frequentes em comparação com o lado que utiliza `context`. Isso ocorre devido à natureza do `observer`, que atualiza apenas os componentes que estão diretamente relacionados às mudanças nos dados, enquanto o `context` pode acionar re-renderizações em toda a árvore de componentes afetados, mesmo que nem todos necessitem ser atualizados. Essa diferença na eficiência de re-renderização destaca a vantagem do `observer` em manter uma renderização cirurgica.

<a href="https://vimeo.com/942328752" target="_blank">
    <img src="https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714743540/Captura_de_Tela_2024-05-03_a%CC%80s_10.32.33_zzftoc.png" style="max-width: 100%;">
</a>


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
