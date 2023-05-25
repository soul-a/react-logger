# Controlle Logger

Classe utilitária criada para computar logs em diferentes ambientes de desenvolvimento (`dev` ou `prod`)

## Ferramentas de Devpl

- Node.js
- Git e GitHub
- VSCode

## Tecnologias Utilizadas

- **React**
- **Vite**

## Getting Start

- Criação do logger no projeto (preferencialmente no `src/utils/logger.ts`)
- Uso do logger

```TypeScript
 // Import to logger ja construido
 import { logger } from './utils/logger';

 async function getAsyncClient() {
   logger.log('Some information'); // If log level is habilited

   logger.warn('Some warning message'); // If warn level is habilited

   logger.error('Some error message'); // If error level is habilited
 }
```

- Caso estiver em modo de desenvolvimento ele terá comportamentos diferentes de execução
