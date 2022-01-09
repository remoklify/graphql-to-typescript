<p align="center">
  <a href="https://remoklify.com">
    <img src="https://raw.githubusercontent.com/remoklify/remoklify.github.io/master/assets/logo/favicon.png" alt="Logo" width=100>
  </a>
</p>

<h1 align="center">
Remoklify - GraphQL to Typescript
</h1>

[![GitHubRepo](https://img.shields.io/badge/GitHub-Repository-24292e.svg?style=for-the-badge&logo=github)](https://github.com/remoklify/graphql-to-typescript)
[![SonarCloud](https://img.shields.io/sonar/quality_gate/remoklify_graphql-to-typescript?server=https%3A%2F%2Fsonarcloud.io&label=Sonar%20Cloud&style=for-the-badge&logo=sonarcloud)](https://sonarcloud.io/dashboard?id=remoklify_graphql-to-typescript)

Command-line interface generator that generates typescript codes for client by only taking the inputs GraphQL Api url and Authorization.

## About the NPM Package

### Package Installation

```sh
npm install -g @remoklify/graphql-to-typescript
```

### Usage
Go to directory you want to generate client typescript codes from graphql schema:
```sh
cd Directory
```

Run command:

```sh
remoklify-graphql-codegen
```

Give the GraphQL API url and auth token if necessary (without bearer)

* ? GraphQL API Url:  https://api.github.com/graphql
* ? Auth Token (Optional):  ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Check the directory /schema
```sh
cd schema
```

# Sponsors

No sponsors yet! **Will you be the first?**

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/fatihturker"><img src="https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4" width="100px;" alt=""/><br /><sub><b>Fatih Turker</b></sub></a><br /><a href="https://github.com/remoklify/graphql-to-typescript/issues/created_by/fatihturker" title="Answering Questions">💬</a> <a href="https://github.com/remoklify/graphql-to-typescript/commits?author=fatihturker" title="Documentation">📖</a> <a href="https://github.com/remoklify/graphql-to-typescript/pulls?q=is%3Apr+reviewed-by%3Afatihturker" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## LICENSE

The source code for this project is released under the [MIT License](https://github.com/remoklify/graphql-to-typescript/blob/develop/LICENSE).
