<h1 align="center">
  <img src="public/favicon.png" alt="Logo IMC Tracker" width="80" />
  <br>
  IMC Tracker App
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar-aplicação">Executar Aplicação</a>
</p>

<br>

## 💻 Projeto

Bem-vindo ao repositório do **IMC Tracker**, uma aplicação web front-end desenvolvida em **React.js**. Este projeto foi construído para auxiliar usuários no cálculo e monitoramento do Índice de Massa Corporal (IMC), fornecendo classificações precisas baseadas nos padrões de saúde da OMS. ⚖️

> Projeto focado na construção de Single Page Applications (SPA), manipulação dinâmica de formulários e gerenciamento de estado para exibição de resultados em tempo real.

🔗 **Demo Online:** [imc-tracker.github.io](https://wanderson-a-timoteo.github.io/imc-tracker/)

<br>

## 🚀 Funcionalidades

- **Cálculo de IMC em Tempo Real:** Processamento instantâneo do índice a partir da entrada de peso e altura.
- **Classificação Dinâmica:** Identificação automática da categoria de peso (Abaixo do peso, Peso normal, Sobrepeso, Obesidade, etc.) com feedback visual por cores.
- **Histórico de Registros:** Armazenamento local das medições anteriores, permitindo que o usuário acompanhe a evolução de sua composição corporal ao longo do tempo.
- **Interface Intuitiva:** Formulários controlados e validados para evitar entradas incorretas de dados.
- **Otimização com Hooks:** Uso estratégico de `useState` para controle de entradas e `useEffect` para persistência de dados no `localStorage`.
- **Design Responsivo:** Layout fluido desenvolvido com React Bootstrap, garantindo uma excelente experiência de uso em smartphones, tablets e desktops.

<br>

## 🛠️ Tecnologias Utilizadas

- **React.js** (Hooks: `useState`, `useEffect`)
- **React Router DOM** (Navegação entre seções, se aplicável)
- **React Bootstrap & Bootstrap** (Componentes de UI e Grid System)
- **Bootstrap Icons** (Elementos visuais e indicadores)
- **CSS3** (Customização de temas e animações de transição)
- **Git & GitHub** (Versionamento e hospedagem de código)

<br>

## 🔥 Executando Localmente a Aplicação

Caso você deseje executar o projeto na sua máquina local para visualização ou modificação, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve clonar o repositório do projeto na sua máquina e instalar as dependências.

#### ❗️ Instalando as Dependências:

Abra o seu terminal (WSL/Ubuntu, CMD ou PowerShell) e navegue até o diretório onde deseja armazenar o projeto:

```bash
git clone git@github.com:Wanderson-A-Timoteo/imc-tracker.git
```

Depois, acesse a pasta clonada e digite a seguinte instrução para baixar todas as dependências (node_modules) necessárias:

Acesse a pasta clonada

```bash
cd imc-tracker
```
Baixar todas as dependências

```bash
npm install
```

### 💨 Executando a Aplicação

Com as dependências devidamente instaladas, inicie o servidor de desenvolvimento local digitando:

```bash
npm start
```

Pronto! Dessa forma o projeto estará rodando localmente em sua máquina. Acesse no navegador:

```
http://localhost:3000
```

<br>

### 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/imc-tracker/issues)**. Assim que possível, estarei respondendo a todas as dúvidas que tiverem!

<br>

## 🚀 Deploy no GitHub Pages

Para disponibilizar o **IMC Tracker** online, utilizamos o **GitHub Pages**. Abaixo, o passo a passo para configurar e realizar o deploy da aplicação de forma automatizada.

### 1. Instalação do Pacote
O primeiro passo é instalar o pacote `gh-pages` como uma dependência de desenvolvimento no projeto:

```bash
npm install gh-pages --save-dev
```

### 2. Configuração do package.json

É necessário informar ao React qual será a URL base da aplicação e quais comandos devem ser executados para o deploy.

- Adicionar Homepage: No arquivo package.json, adicione a seguinte propriedade (substituindo pelo link do seu repositório):

```JSON
"homepage": "https://SEU-NOME-DE-USUARIO-DO-GITHUB.github.io/NOME-DO-PROJETO",
```

- Configurar Scripts: No mesmo arquivo, dentro do bloco "scripts", adicione os comandos de predeploy e deploy:


```JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start", // Já existe
  ...mantém o resto
}
```
### 3. Executando o Deploy

Com tudo configurado, basta rodar o comando abaixo no terminal. Ele irá gerar uma build otimizada da aplicação e criar automaticamente uma branch chamada gh-pages no GitHub com os arquivos prontos para produção:

```bash
npm run deploy
```

<br>

## Autor:

Feito com ♥ by

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>

