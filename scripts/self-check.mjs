import {execFileSync} from 'child_process';
import {readFileSync,readdirSync,statSync} from 'fs';
import path from 'path';
execFileSync('npm',['run','build'],{stdio:'inherit'});
const {defaultSettings,generateGame}=await import('../dist/assets/lib/generateGame.js');
const {runAll}=await import('../dist/assets/lib/voting.js');
const systems=['plurality','runoff','irv','approval','score','star','borda','condorcet','council'];
const teaching=generateGame({...defaultSettings('classroom'),teachingExample:true});
const winners=Object.fromEntries(runAll(['plurality','irv','borda','condorcet'],teaching.ballots,teaching.candidates).map(r=>[r.systemId,r.winnerLabel]));
const expected={plurality:'Flynn Fox',irv:'Olive Owl',borda:'Dolly Dolphin',condorcet:'Dolly Dolphin'};
for(const [k,v] of Object.entries(expected)){if(winners[k]!==v)throw new Error(`${k} expected ${v}, got ${winners[k]}`)}
const random=generateGame({...defaultSettings('lab'),seed:'self-check'});
const all=runAll(systems,random.ballots,random.candidates);if(all.length!==9)throw new Error('Not all voting systems ran');
const before=JSON.stringify(random.ballots);runAll(['plurality'],random.ballots,random.candidates);runAll(['score','star'],random.ballots,random.candidates);if(JSON.stringify(random.ballots)!==before)throw new Error('Voting systems mutated ballots');
function walk(d,files=[]){for(const f of readdirSync(d)){const p=path.join(d,f);if(p.includes('dist')||p.includes('.git'))continue;const st=statSync(p);if(st.isDirectory())walk(p,files);else if(/\.(ts|tsx|md|html|css)$/.test(p))files.push(p)}return files}
const text=walk('.').map(f=>readFileSync(f,'utf8')).join('\n');
if(/[\u3400-\u9FFF]/.test(text))throw new Error('Chinese text detected');
const banned=['Democrat','Republican','Donald Trump','Joe Biden','Kamala Harris','MAGA'];for(const word of banned){if(text.includes(word))throw new Error(`Banned political reference detected: ${word}`)}
console.log('Self-check passed:',JSON.stringify(winners));
