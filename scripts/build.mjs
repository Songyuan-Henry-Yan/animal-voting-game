import { execFileSync } from 'node:child_process';
import { mkdirSync, copyFileSync, rmSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

rmSync('dist', { recursive: true, force: true });

execFileSync(process.execPath, ['node_modules/typescript/bin/tsc'], {
  stdio: 'inherit'
});

function walk(d) {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith('.js')) {
      let s = readFileSync(p, 'utf8');
      s = s.replace(/from '(\.{1,2}\/[^']+)'/g, (m, a) => a.endsWith('.js') ? m : `from '${a}.js'`);
      s = s.replace(/from "(\.{1,2}\/[^"]+)"/g, (m, a) => a.endsWith('.js') ? m : `from "${a}.js"`);
      writeFileSync(p, s);
    }
  }
}

walk('dist/assets');

mkdirSync('dist/assets', { recursive: true });
copyFileSync('src/styles/global.css', 'dist/assets/global.css');
copyFileSync('index.html', 'dist/index.html');
