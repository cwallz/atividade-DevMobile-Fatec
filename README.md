# App de Receitas do Wallz – Projeto Ionic

## 📌 Descrição do Projeto
Este projeto foi desenvolvido como parte da disciplina ILP-506 - Programação para Dispositivos Móveis (4º Semestre de Análise e Desenvolvimento de Sistemas) na FATEC Zona Sul, no ano de 2026.

O objetivo principal foi criar um aplicativo móvel estruturado com navegação entre páginas, explorando os componentes visuais do framework Ionic, o roteamento do Angular e a customização profunda do tema global de cores através de variáveis CSS/SCSS.

---

## 🎯 Objetivos da Atividade
➡️ Criar um aplicativo com no mínimo 2 páginas: Tela Inicial (boas-vindas) e uma Tela Secundária.

➡️ Aplicar componentes obrigatórios do Ionic: ion-header, ion-toolbar, ion-title, ion-content, ion-button, ion-list ou ion-card, e ion-icon.

➡️ Estruturar a Segunda Página: Utilizar listas ou cartões para exibir no mínimo 5 itens, contendo título, descrição e elemento visual (imagem/ícone).

➡️ Implementar Navegação: Utilizar o Angular Router para transitar entre as telas.

➡️ Dominar o uso de Cores: - Utilizar pelo menos 3 cores diferentes do tema padrão (primary, secondary, tertiary, etc.).

➡️ Alterar no mínimo uma cor padrão manipulando o arquivo variables.scss.

➡️ Aplicar o esquema de cores em botões, fundos de componentes, textos e ícones.

---

## 🛠️ O Que Foi Desenvolvido e Entregue
Todos os requisitos propostos foram atendidos com sucesso. O aplicativo contém as seguintes características:

➡️ Página 1 (Home): Conta com o texto de boas-vindas e botões coloridos (ion-button), incluindo a ação de navegação principal.

➡️ Página 2 (Receita do Bolo de Cenoura): - Utiliza ion-card para estruturar a apresentação da receita, combinando imagens e textos alinhados.

➡️ Implementa um ion-list contendo 6 itens de ingredientes, utilizando elementos visuais (emojis/ícones) como marcadores.

➡️ Roteamento Moderno: Navegação implementada utilizando a abordagem atual do Angular com Standalone Components (loadComponent nas rotas).

➡️ Customização de Cores (CSS/SCSS): O arquivo variables.scss foi totalmente reescrito, alterando as paletas base do aplicativo (cores primárias em tons de roxo) e as cores de contraste aplicadas aos cartões (secondary), títulos e botões (tertiary, danger, dark).

---

## 🌟 Funcionalidades Extras (Além do Exigido)
➡️ Alternância de Tema (Dark Mode): Implementação de um botão que injeta dinamicamente a classe .dark no aplicativo. O global.scss foi configurado para o modo dark.class, permitindo ao usuário escolher entre o tema Claro ou Escuro, alterando os fundos e as cores de texto perfeitamente.

➡️ Design com Flexbox e Transparência: Criação de layouts customizados usando caixas de instruções com fundos translúcidos (rgba), ajustando o padding e alinhando o tempo de preparo lado a lado para um visual mais limpo e moderno.

---

## 💻 Tecnologias Utilizadas
➡️ Ionic Framework

➡️ Angular (Standalone Components)

➡️ HTML5 & SCSS

➡️ TypeScript
