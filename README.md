# bookstore
Um pequeno e-commerce que permita aos usuários comprar livros de tecnologia.

Os principais objetivos do aplicativo são:

   - Garanta o acesso seguro aos usuários e seus dados
   - Permitir pesquisas de livros
   - Permitir fazer compras dos produtos selecionados

Todo o desenvolvimento é baseado em ReactJS, e aplicação adaptar-se a diferentes tamanhos e orientações de ecrã, todas rotas definidas

## Rotas
   - /: é o caminho de acesso ao aplicativo
   - /books: é o caminho padrão (home) onde serão exibidos os últimos livros publicados
   - /books/{book_id}: neste percurso as informações específicas de um livro serão exibidas pelo seu ID (visualização de detalhes)
   - /users/{user_id} – Esta rota exibirá o perfil do usuário por seu ID
   - /users/{user_id}/cart – Esta rota exibirá o carrinho de compras de um usuário por seu ID
   - /checkout/{user_id}: esta rota conterá o fluxo para efetuar o pagamento dos produtos selecionados pelo user ID

## Autenticação e autorização

    O padrão OAuth2 é usado para autenticação do usuário. Que é suportado por um servidor Keycloak a partir do qual serão fornecidas as credenciais para a sua utilização para o email de contacto registado pelo requerente.

   - O domínio de autenticação tem dois cenários possíveis: um onde o cliente se cadastra com um usuário e senha;  
   - e outro onde é usado o acesso do Google para se cadastrar.
   - Para ambos os casos, o serviço Keycloak já está configurado para fornecer essa funcionalidade.

   O módulo do usuário tem duas visualizações: 
   - uma visualiza as informações do perfil 
   - e outra o carrinho de compras.

## Perfil de usuário

 É exibidos os dados pessoais capturados no idToken obtido na autenticação. 

     nome completo do usuário
     o email
     avatar

## Carrinho de compras

 Esta visualização mostra todos os produtos que o usuário selecionou para uma possível compra.  

   > para cada produto:
         Nome
         quantia
         preço unitário
         Subtotal
   > no resumo da lista:
         quantidade total de produtos
         número total de itens
         Preço total

 A vista tem uma ação que inicie o pagamento dos produtos (ver módulo Checkout).

 A integração deste módulo é realizada a partir das operações exportadas por um serviço que está disponível no seguinte endereço https://bookstore-api.gyfted.dev/api/cart.


 O serviço tem 4 operações:

   - GET /api/cart: obtém o carrinho de compras para o usuário atual
   - POST /api/cart/book: permite adicionar ou modificar os produtos no carrinho de compras
   - DELETE /api/cart/book/:book_id – remove o produto com book_id do carrinho de compras
   - POST /api/cart: conclui ou fecha um carrinho de compras, esta ação deve ser executada ao concluir o checkout

   Todas as operações descritas acima requerem o uso de autenticação por meio do token de acesso JWT obtido por meio da autenticação do usuário.


 
 ## MÓDULO DE LIVROS

 API ItEbooks é utilizada para a consulta das informações dos livros.  A referida API dispõe dos recursos necessários para visualizar e consultar a informação que se requer.

 > vista principal

 Nesta visualização, a lista de livros é mostrada e também tem uma opção de pesquisa. Pode se pesquisar por title, author e ISBN.

 Se você clicar em qualquer livro, irá para a visualização de detalhes do livro selecionado (consulte: Visualização de detalhes)
 vista de detalhe

 > Informações detalhadas de cada livro:

   - Título
   - rubrica
   - Autor
   - editorial
   - código ISBN
   - ano de publicação
   - preço
   - Descrição do conteúdo
   - Avaliação

 Além disso, haverá ações para adicionar o produto atual ao carrinho quantas vezes o usuário desejar.  Se este produto existir no carrinho, serão adicionados os valores selecionados e o existente no carrinho de compras.
 


## módulo de checkout

 Neste módulo possui 3 visualizações como passos sequenciais (steps, ou wizard).  As 3 visualizações a serem consideradas são:

   - detalhe da compra
   - detalhes do pagamento
   - confirmação e obrigado

 O usuário poderá ir e voltar desde que a compra não tenha sido confirmada.
 
 > Detalhe da compra

 O detalhe da compra é um resumo dos produtos que o usuário selecionou.É mostrado os produtos e suas quantidades, bem como os respectivos cálculos parciais e totais do pagamento a ser efetuado.  Essa visão se funde perfeitamente com o carrinho de compras. 
 
 > Dados de pagamento

 Para capturar os dados de pagamento, é utilizada a integração com o Stripe.  Os solicitantes receberão as chaves de acesso de uma conta de teste para que possam realizar quantas compras desejarem usando a referida integração. O formulário básico deve registrar:

   - os dados do meio de pagamento,
   - dados de compra (número de produtos e número total de itens) produto e
   - o e-mail do usuário


 Uma vez efetuado o pagamento, o utilizador é informado do resultado do mesmo.  Caso seja bem-sucedido, é mostrado uma mensagem na referência e, é dada a opção para o usuário navegar até a visualização principal do aplicativo (consulte Visualização principal).  Em caso de erro, é exibido uma mensagem com o erro recebido e dê a opção de retornar ao carrinho de compras para tentar novamente.



<p align='center'> Está em construção 🚧. </p>
