import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;

const server = createServer(async (req, res) => {
  try {
    const htmlPath = join(__dirname, 'index.html');
    const html = await readFile(htmlPath, 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Errore nel caricamento della pagina');
  }
});

server.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
  console.log('Apri il browser per visualizzare la dialog HelloWorld');
});
