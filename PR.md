# Teste 2024

## Passos para importação dos dados

1. Converter para json usando https://csvjson.com/csv2json
2. Criar um arquivo `dataset.json` com o conteúdo do json
3. Trocar o nome do campo do identificador para `_id`
4. Correr o script python `convert_dataset.py` para resolver formato do preço em caso de decimal.
4. Executar o container que já conta com o mongo import


### Resultado

```bash
mongo-seed-1  | 2024-05-16T13:12:24.299+0000    36377 document(s) imported successfully. 0 document(s) failed to import.
```

## Testes postman

Podem ser encontrados no arquivo `ex1/Testes.postman_collection.json`

## Frontend

No `http://localhost:16001` pode ser encontrada a tabela pedida com o **número de contratos** na base de dados, sendo isso a metainformação que foi escolhida.