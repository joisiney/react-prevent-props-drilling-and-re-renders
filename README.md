## Props Drilling

Este repositório tem como objetivo mitigar renderizações desnecessárias no ReactJS, eliminando a dependência de componentes estarem dentro do mesmo contexto para acessar informações. A proposta é ter um `repository` central para gerenciar a(s) `entity`, acessível através de um `hook observer`. Esse `observer` notificará apenas os componentes interessados nas alterações das informações, garantindo que apenas eles sejam re-renderizados.

Assista ao vídeo demonstrativo abaixo:

[![Mastering Props Drilling: Enhancing Component Architecture](https://i.vimeocdn.com/video/1845848617-7e4de25285e5e86590e3fd65560c82f12bae983af89d52e937c72d09eb59c684-d?mw=1800&mh=1091&q=70)](https://vimeo.com/942328752 "Clique para Assistir!")

## 🚧 Aviso de Construção 🚧

Gostaríamos de informar que nosso repositório de soluções para o desafio de Props Drilling ainda está em desenvolvimento. Estamos trabalhando arduamente para criar uma abordagem eficaz e elegante para lidar com essa questão no React. Pedimos paciência enquanto refinamos nossas soluções e testamos sua robustez. Fiquem atentos para futuras atualizações e agradecemos pelo apoio contínuo!