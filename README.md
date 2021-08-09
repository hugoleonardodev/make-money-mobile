# Monetus Money Mobile

Um aplicativo React Native para mercado financeiro com atualização em tempo real.

- Database from [IEX API](https://cloud.iexapis.com/)

This applications is configured with:

- [Expo](https://docs.expo.dev/) with [Metro](https://github.com/facebook/metro) bundler
- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Components and styles with [styled-components](https://styled-components.com/)
- Carousels from [react-native-swiper-flatlist](https://github.com/gusgard/react-native-swiper-flatlist)
- Chart [react-native-responsive-linechart](https://github.com/N1ghtly/react-native-responsive-linechart)
- Drawer Navigator [React Navigation](https://reactnavigation.org/docs/drawer-navigator/)

More details on devDependencies check package.json file.

## Layout

Figma prototype [Figma](https://www.figma.com/file/QnP6TS75p4unSQyoz8GIRx/Teste-Front-end-Monetus?node-id=21%3A23)

Adaptado do Figma

![image](/assets/home.png)

Imagem do navegador Drawer

![image](/assets/home-drawer.png)

## How to use

É preciso ter o gerenciador de pacotes Expo para iniciar a aplicação.

```bash
  yarn add --global expo-cli
```

- Install - install the application modules

```bash
  yarn install
```

- Start - expo start

Roda a aplicação no Browser em modo Web.

```bash
  expo start
```

## Considerações finais

Foi muito massa fazer essa aplicação. Não sou expecialista em React Native. Nem em desenvolvimento mobile.
Mas tenho muito interesse em também desenvolver aplicações nativas. Principalmente pela facilidade que o React Native
proporciona para quem já conhece a API do React. Então não foi muito difícil pegar a lógica da aplicação web e usar ela
no mobile. Exceto pela parte dos componentes. Mas o context e os hooks foram praticamente os mesmos. Outra exceção fica
na parte das requisições. Onde foi possível criar uma classe instanciando fetch. Que no React Native tem suporte fora do
Browser. O que facilitou muito o trabalho com as requisições. Sem necessiadade de tratamentos adicionais.

Não usei o Android Studio ou outra ferramenta do tipo. Aqui só dá pra ficar no VS Code mesmo. Pois meu PC já é antigo.
Processador de 2 núcleos. Já tentei instalar outras IDEs e suporte para multiplas linguagens, Mas fica muito pesado.
Então fui para o bom e velho VS Code mesmo. Com a telinha do browser simulando a tela do celular ou tablet. E, como não havia protótipo para a aplicação mobile, tive que usar muita criatividade e experiencia. Para desenvolver alguma coisa
que fosse apresentável.

Um problema foi a parte das imagens com SVG. Não tive tempo para aprofundar e resolver o miestério. Entao acabei usando
PNG mesmo. Porém in-line com hashs em base 64 geradas em um site. Então não temos conjutos pesados de imagens e ícones
na a aplicação. Esse problema com SVG tem solução. Eu já consegui fazer. Mas dessa vez não encontrei a resposta. A
comunidade do React Native não é tão popular quanto a do React. Então não é tão fácil encontrar respostas, exemplos e
soluções de problema. Tenho que pegar o hábito de guardar tudo que for encontrando do React Native.

Outro problema foi o gráfico. Já que não houve nenhuma recomendação, acabei tendo que pesquisar e dando um tiro meio que
no escuro. Deu certo, mas parcialmente. Alguns gráficos eu não consegui montar o dominio dos eixos X e Y corretamente.
Então eles não são renderizados. Mas algumas funcionas bem. Como Amazon `AMZN`, Twitter `TWTR`, Facebook `FB`. Oûtras
não renderizam corretamente. Também tem um warning que acho que é devido ao suporte ao SVG que não instalei corretamente.
Foi uma decepção esse gráfico. Mas no mais. Está tudo OK. Fiquei feliz com o desafio e com o resultado.

Eu consigo testar a aplicação também. Com React Native Testing Library e Jest. Mas dessa vez vou deixar pra lá. Pois já
estou muito cansado. Fiz todos os requisitos e o bonus. Então estou tranquilo quanto isso. E o TypeScript já valida muita
coisa. Então fica como validação pra essa aplicação mobile. Novamente, não me apguei muito aos detalhes. Mas as funcções
e alguns estilos.

Bom já estou bem cansado. Então já devo ter escrito até um monte de besteiras. Igual no outro README. Do projeto web.

Espero que esteja de bom humor para relevar tudo isso. Se não for pra frente o processo. Não tem problema. Fica pra uma
próxima. Só não deixa de me avisar. Nem que seja um email automático. Aqui não tem mimimi. Rolou, rotou, não rotou bola
pra frente. Assim que as coisas são.

Uma ótima sema para todos nós.

Paz, saúde e sucesso!

Atencioasamente,

Hugo Leonardo
Desenvolvedor Front-End
TypeScript/JavaScript
React/Next/React Native

Contatos:

(31)99969-9361

hugoleonardo.dev@gmail.com

[LinkedIn](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)

[CodeSandBox](https://codesandbox.io/u/hugoleonardo.dev)
