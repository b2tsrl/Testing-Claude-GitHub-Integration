# HelloWorld Dialog Application

Un'applicazione semplice che visualizza "HelloWorld" in una dialog tramite un server HTTP.

## Requisiti

- Node.js (versione 18 o superiore)
- npm

## Installazione

```bash
npm install
```

## Build

```bash
npm run build
```

## Esecuzione

```bash
npm start
```

Oppure per compilare ed eseguire in un solo comando:

```bash
npm run dev
```

## Utilizzo

Dopo aver avviato l'applicazione con `npm start` o `npm run dev`:

1. Apri il browser
2. Vai su `http://localhost:3000`
3. Vedrai una dialog con il messaggio "Hello World!"
4. Clicca su "Chiudi" per chiudere la finestra del browser

## Struttura del Progetto

- `src/index.ts` - Server HTTP che serve la pagina HTML
- `src/index.html` - Pagina con la dialog HelloWorld
- `dist/` - File compilati (generati dopo il build)
