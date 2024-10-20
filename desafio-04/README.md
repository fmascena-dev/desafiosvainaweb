## Lâmpada de Aladim - Projeto em React

*Este projeto **React** simula a troca de uma imagem ao clicar em um botão, utilizando um conceito simples de estado. A lâmpada de Aladim é exibida, e ao clicar no botão, a imagem alterna entre a lâmpada simples e uma lâmpada mágica com um mago saindo dela. O layout é responsivo e utiliza SCSS para estilização.*

### Estrutura do Projeto

*O projeto contém os seguintes componentes e arquivos principais:*

**1. App.jsx**

*O componente principal do aplicativo, que importa e renderiza o componente **Main** e os estilos globais.*

**2. Main.jsx**

*O componente **Main** contém a lógica do estado e a interação principal. Utiliza o **hook useState** para controlar a troca da imagem ao clicar no botão.*

**Funções e Lógica:**

- **Estado lampada:** *Define se a lâmpada mágica será exibida ou não.*
- **Função trocarLampada:** *Alterna o estado da lâmpada ao clicar no botão.*

**3. Main.scss**

*Arquivo de estilos em **SCSS** que estiliza o componente **Main**. Ele define a aparência do título (h1), da imagem (img), e do botão. Também inclui media queries para responsividade, adaptando o layout para tablets e dispositivos móveis.*

**Estilos principais:**

- **body:** *Define a imagem de fundo fixa e ajustada ao centro.*
- **main:** *Centraliza o conteúdo e ajusta a disposição em coluna.*
- **h1:** *Define a cor e o tamanho do título.*
- **img:** *Adiciona uma borda verde em torno da imagem.*
- **button:** *Estiliza o botão com cor de fundo, borda arredondada e estados de hover.*
- **Responsividade:** *Inclui media queries para tablets (max-width: 768px) e celulares (max-width: 480px), ajustando tamanhos de fonte, largura da imagem e cores do botão.*

### Instalação e Execução

**Pré-requisitos:**

- *Node.js instalado*
- *Gerenciador de pacotes npm ou yarn*

### Passos para rodar o projeto:

- **Clone o repositório:**

bash
```
git clone https://github.com/fmascena-dev/desafiosvainaweb.git
```

- **Acesse o diretório do projeto:**

bash
```
cd seurepositorio
```

- **Instale as dependências:**

bash
```
npm install
```

- **Execute o projeto:**

bash
```
npm run dev
```

- **Abra o navegador em:**

http://localhost:5173

#### Funcionalidades:

- **Troca de imagem:** *Ao clicar no botão "Clique aqui!", a imagem da lâmpada alterna entre a lâmpada simples e a lâmpada mágica com um mago.*

- **Estilização Responsiva:** *O layout se adapta a diferentes tamanhos de tela, como celulares e tablets.*

- **Efeitos de hover:** *O botão muda de cor ao passar o mouse sobre ele.*

#### Tecnologias Utilizadas:

- **React:** *Biblioteca JavaScript para construção de interfaces de usuário.*

- **Vite:** *Ferramenta de build rápida para desenvolvimento web.*

- **SCSS:** *Extensão do CSS com funcionalidades adicionais como variáveis e aninhamento de regras.*

##

**Autor:**
###### Felipe Mascena
