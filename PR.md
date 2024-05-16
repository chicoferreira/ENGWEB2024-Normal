# Teste 2024

## Passos para importação dos dados

1. Converter para json usando https://csvjson.com/csv2json
2. Criar um arquivo `dataset.json` com o conteúdo do json
3. Trocar o nome do campo do identificador para `_id`
4. Executar o container que já conta com o mongo import


### Resultado

```bash
mongo-seed-1  | 2024-05-16T13:12:24.299+0000    36377 document(s) imported successfully. 0 document(s) failed to import.
```