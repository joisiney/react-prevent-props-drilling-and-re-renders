## Props Drilling / re-render

Observe o fluxograma abaixo: Ao adicionar/editar uma mensagem, a Context API solicita ao React avaliar as dependências e recriar os elementos necessários. Embora o DOM virtual otimize a recriação, o React ainda precisa avaliar se deve ou não recriar os componentes X, Y e Z, embora saibamos que isso não deveria ser necessário, pois eles não dependem dessa informação. Além disso, o fato de o React calcular o que deve ser reescrito ou não pode acionar a execução de `useMemo` ou `useEffects`, embora isso geralmente seja um erro do programador. Mas, por que nos preocupar com isso se o componente nem deveria saber dessa atualização, né?


![Fluxo do Observer](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/context-api_jl7xhp.png)


## Fluxo do Observer

Vamos analisar o fluxograma abaixo: Trabalhando com `observers`, não há um contexto geral. Apenas os componentes que têm `observers` serão atualizados. Ao adicionar/editar, apenas os componentes com `observers` serão atualizados. Assim, o React não precisa considerar re-renderizar componentes fora desse escopo. Embora pareça ideal, há cenários em que esse fluxo não é adequado, como quando há uma grande quantidade de elementos que utilizam `observers`. Nesses casos, usar `context` ou similar é mais sensato. Porém, em situações com um número controlado de `observers`, o custo é significativamente menor do que recriar/recalcular todos os componentes dentro do contexto, além de evitar `props drilling` ou recálculo/execução desnecessária de `useMemo` ou `useEffects`.

![Fluxo da Context API](https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714785779/observer_g8jexw.png)

## Vídeo de demonstração:

No vídeo abaixo, observamos que o lado do `observer` (store) realiza re-renderizações muito menos frequentes em comparação com o lado que utiliza `context`. Isso ocorre devido à natureza do `observer`, que atualiza apenas os componentes que estão diretamente relacionados às mudanças nos dados, enquanto o `context` pode acionar re-renderizações em toda a árvore de componentes afetados, mesmo que nem todos necessitem ser atualizados. Essa diferença na eficiência de re-renderização destaca a vantagem do `observer` em manter uma renderização cirurgica.

<a href="https://vimeo.com/942328752" target="_blank">
    <img src="https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714743540/Captura_de_Tela_2024-05-03_a%CC%80s_10.32.33_zzftoc.png" style="max-width: 100%;">
</a>

## 🚧 Aviso de Construção 🚧

Gostaríamos de informar que nosso repositório de soluções para o desafio de Props Drilling ainda está em desenvolvimento. Estamos trabalhando arduamente para criar uma abordagem eficaz e elegante para lidar com essa questão no React. Pedimos paciência enquanto refinamos nossas soluções e testamos sua robustez. Fiquem atentos para futuras atualizações e agradecemos pelo apoio contínuo!
