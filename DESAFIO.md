# Desafio

Você foi contratado como desenvolvedor de uma instituição financeira que está reformulando
os sistemas de caixas eletrônicos. Como parte da equipe de desenvolvimento, você terá que
implementar uma rotina que vai solicitar o valor desejado de saque ao usuário e em seguida,
apresentar as opções de cédulas que ele pode sacar. Os caixas operam apenas com cédulas de
circulação atuais – moedas não são aceitas. Se for possível, apresente ao usuário mais de uma
combinação de cédulas para saque e não mais que 3 possibilidades.

## User Story

**Eu** como cliente do banco XYZ
**Quero** optar por uma combinação de cédulas que correspondem ao valor do meu saque
**Para** sacar a maior quantidade de cédulas do numerário que eu desejo

## Critérios de aceite _(considerando como exemplo, o valor de saque em 100 reais)_

**Dado que** estou autenticado no sistema de caixa eletrônico
**E** informo o valor desejado de saque em 100 reais
**Então** o sistema me possibilitará escolher sacar as seguintes combinações:

1. 2 cédulas de 50 reais;
2. 1 cédula de 50 reais, 2 cédulas de 20 reais e 1 cédula de 10 reais;
3. 1 cédula de 100 reais.

O código-fonte da solução deve estar em C# ou Web JavaScript.

Esse desafio tem o propósito de entender como você estrutura a solução desse problema, sendo
assim, fique à vontade para usar os seus conhecimentos.

Agradecemos a sua disponibilidade em participar dessa etapa de avaliação.
