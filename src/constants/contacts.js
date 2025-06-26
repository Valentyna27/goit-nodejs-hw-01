import path from 'node:path';
import { fileURLToPath } from 'node:url';

const directoryName = path.dirname(fileURLToPath(import.meta.url));

export const PATH_DB = path.join(directoryName, '..', 'db', 'db.json');
