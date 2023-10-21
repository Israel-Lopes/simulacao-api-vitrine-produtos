# Vitrine de Produtos para Farmácia

Este projeto fornece uma API para a construção de uma vitrine de produtos de farmácia e uma página de `/product`.

## Configuração do Projeto

Para configurar o projeto, siga os passos abaixo:

1. Execute o seguinte comando para instalar as dependências: `` npm install``


2. Execute o projeto com o seguinte comando: ``npm run dev``


## Rotas

Aqui estão as rotas disponíveis neste projeto:

| Rota                                 | Descrição                                            |
|--------------------------------------|------------------------------------------------------|
| `http://localhost:3000/uploads/*`    | Acesse imagens, por exemplo: `http://localhost:3000/uploads/tarja_vermelha.webp` |
| `http://localhost:3000/api/produtos`  | Acesse a vitrine de produtos                          |

### Upload de Imagem

Você também pode fazer o upload de imagens para o servidor com a rota:

- `POST http://localhost:3000/api/upload`

Certifique-se de incluir um arquivo de imagem usando o campo `imagem` no formulário de envio. Após o upload bem-sucedido, você receberá uma resposta JSON com a mensagem "Upload bem-sucedido".

## Objetivos

O objetivo deste projeto é simular uma API que fornece imagens e um objeto JSON de produtos para construir uma vitrine de produtos de farmácia e uma página de `/product`.

## Exemplo de retorno da api de produtos

```json
[
  {
    "id": 1,
    "nome": "GLIFAGE XR 500MG 30 COMPRIMIDOS DE AÇÃO PROLONGADA",
    "preco": "7,70",
    "img": "/uploads/tarja_vermelha.webp",
    "descricao": [
      "Indicações: Está indicado como agente antidiabético, associado ao regime alimentar, para o tratamento de Diabetes do Tipo II, não dependente de insulina (diabetes da maturidade, diabetes do",
      "obeso, diabetes em adultos de peso normal), isoladamente ou complementando a ação das sulfoniluréias; Diabetes do Tipo I, dependente de insulina: como complemento da insulinoterapia em",
      "casos de diabetes instável ou insulino-resistente. Também é indicado na Síndrome dos Ovários Policísticos. ",
      "Contraindicações: Está contraindicada nos casos de reconhecida hipersensibilidade à qualquer um dos componentes da fórmula; em casos de insuficiência cardíaca congestiva que requer",
      "tratamento medicamentoso; infarto agudo do miocárdio; gravidez; insuficiência renal orgânica ou funcional; patologias agudas comportando risco de alteração da função renal: desidratação",
      "(diarréias, vômitos), febre, estados infecciosos e/ou hipóxicos graves (choque, septicemia, infecção urinária, pneumopatia); insuficiência hepatocelular; consumo excessivo de álcool agudo ou",
      "crônico; descompensação cetoacidótica e pré-coma diabético.",
      "Reações adversas: Pode causar alterações gastrointestinais, como náusea, vômito e diarreia."
    ]
  },
  {
    "id": 2,
    "nome": "ROSUVASTATINA 20MG 30 COMPRIMIDOS - LEGRAND - GENÉRICO",
    "preco": "13,99",
    "img": "/uploads/tarja_vermelha_generico.jpg",
    "descricao": [
      "Indicações: Está indicado como agente antidiabético, associado ao regime alimentar, para o tratamento de Diabetes do Tipo II, não dependente de insulina (diabetes da maturidade, diabetes do",
      "obeso, diabetes em adultos de peso normal), isoladamente ou complementando a ação das sulfoniluréias; Diabetes do Tipo I, dependente de insulina: como complemento da insulinoterapia em",
      "casos de diabetes instável ou insulino-resistente. Também é indicado na Síndrome dos Ovários Policísticos. ",
      "Contraindicações: Está contraindicada nos casos de reconhecida hipersensibilidade à qualquer um dos componentes da fórmula; em casos de insuficiência cardíaca congestiva que requer",
      "tratamento medicamentoso; infarto agudo do miocárdio; gravidez; insuficiência renal orgânica ou funcional; patologias agudas comportando risco de alteração da função renal: desidratação",
      "(diarréias, vômitos), febre, estados infecciosos e/ou hipóxicos graves (choque, septicemia, infecção urinária, pneumopatia); insuficiência hepatocelular; consumo excessivo de álcool agudo ou",
      "crônico; descompensação cetoacidótica e pré-coma diabético.",
      "Reações adversas: Pode causar alterações gastrointestinais, como náusea, vômito e diarreia."
    ]
  }
]

```