## Props Drilling

Este repositório tem como objetivo mitigar renderizações desnecessárias no ReactJS, eliminando a dependência de componentes estarem dentro do mesmo contexto para acessar informações. A proposta é ter um `repository` central para gerenciar a(s) `entity`, acessível através de um `hook observer`. Esse `observer` notificará apenas os componentes interessados nas alterações das informações, garantindo que apenas eles sejam re-renderizados.

**Assista ao vídeo demonstrativo abaixo:**

<a href="https://vimeo.com/942328752" target="_blank">
    <img src="https://res.cloudinary.com/dmoi0mmuj/image/upload/v1714743540/Captura_de_Tela_2024-05-03_a%CC%80s_10.32.33_zzftoc.png" style="max-width: 100%;">
</a>

## 🚧 Aviso de Construção 🚧

Gostaríamos de informar que nosso repositório de soluções para o desafio de Props Drilling ainda está em desenvolvimento. Estamos trabalhando arduamente para criar uma abordagem eficaz e elegante para lidar com essa questão no React. Pedimos paciência enquanto refinamos nossas soluções e testamos sua robustez. Fiquem atentos para futuras atualizações e agradecemos pelo apoio contínuo!
