## Relatório de Processos com Filtros
Este código React é um exemplo de como implementar um filtro simples em um relatório e pode ser usado como base para filtrar diversos tipos de reports. Nesse código, a funcionalidade principal é permitir a filtragem dos processos por ano de início, ano de fim e tipo de processo.

Primerio, rode o servidor de desenvolvimento com:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```


## Funcionamento:
Dados: O componente armazena uma lista de processos em um array processos, onde cada processo tem um código, tipo e ano.

## Filtros:

O usuário pode inserir o ano de início e o ano de fim desejados.
O usuário pode selecionar o tipo de processo ("A", "B", "C" ou todos).

## Filtragem:

A função processosFiltrados utiliza os valores dos filtros para criar uma nova lista contendo apenas os processos que correspondem aos critérios.
Exibição:

A tabela processos-tabela é renderizada, exibindo os processos filtrados.


## Exemplo de uso:
Se o usuário inserir "2022" no campo "Ano Início", "2023" no campo "Ano Fim" e selecionar "Tipo A", a tabela exibirá apenas os processos do tipo A que ocorreram entre 2022 e 2023.

## Autor

<div style="background-color: #181818; display: flex; align-items: center; padding: 20px; border-radius: 10px;">
  <img src="https://avatars.githubusercontent.com/u/61233984?v=4" alt="Foto do Autor" width="100" style="border-radius: 50%; margin-right: 20px;" />
  <div style="color: white;">
    <h2 style="margin: 0; font-size: 1.5em;">Vicente de Sousa</h2>
    <p style="margin: 5px 0;">
      <img src="https://github.com/Vicente-ferrer/assetsRepository/blob/main/linkedin.png" alt="LinkedIn" width="20" style="vertical-align: middle; margin-right: 5px;" />
      <a href="https://www.linkedin.com/in/vicentedesousa" style="color: white; text-decoration: none;">LinkedIn</a>
    </p>
    <p style="margin: 5px 0;">
      <img src="https://github.com/Vicente-ferrer/assetsRepository/blob/main/instagram.png" alt="Instagram" width="20" style="vertical-align: middle; margin-right: 5px;" />
      <a href="https://www.instagram.com/vicentesousa__/" style="color: white; text-decoration: none;  margin-top: -10px;">Instagram</a>
    </p>
  </div>
</div>

