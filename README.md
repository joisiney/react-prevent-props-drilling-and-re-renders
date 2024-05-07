### Aviso: Este repositório está em construção 🚧. Se interessou pelo assunto? Clique em "Watch" para receber atualizações em primeira mão 🙈.

![React Observer?](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714994138/react-js-observer_agfwpd.png)

### MOTIVAÇÃO
Descubra como o padrão Observer cria um contexto global que atualiza granularmente com base na "observers" dos componentes.
[saber mais.](./docs/article.md)

### DOCUMENTAÇÃO E EXEMPLO
Quer ver exemplos diretos e práticos de como funciona essa arquitetura?
[saber mais.](./docs/sample.md)

### ARQUITETURA
Estamos explorando arquiteturas DDD e Strategy, com foco em nosso estudo de caso "Observer". Curioso?
[saber mais.](./docs/architecture.md)

## VÍDEO DE DEMONSTRAÇÃO:

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
