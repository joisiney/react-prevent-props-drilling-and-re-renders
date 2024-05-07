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