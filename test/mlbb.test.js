const fs = require('fs'), path = require('path');
const ROOT = '/home/hatch/workspace/mlbb-coach';
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const src = html.split('/*ENGINE-START*/')[1].split('/*ENGINE-END*/')[0];
if (!src) { console.log('FAIL: engine block tidak ketemu'); process.exit(1); }
globalThis.FLEX = require(path.join(ROOT, 'data/flex_picks.json'));
globalThis.TALENTS = null;
const HEROES = require(path.join(ROOT, 'data/heroes.json'));
const ITEMS = require(path.join(ROOT, 'data/items.json'));
const EMBLEMS = require(path.join(ROOT, 'data/emblems.json'));

const T = `
;(function(){
let pass=0,fail=0;
const ok=(c,m)=>{c?pass++:(fail++,console.log('FAIL:',m));};
const B=id=>HEROES.find(h=>h.id===id);
// 1. flexKind
ok(flexKind(B('ruby'),'gold')==='flex','Ruby flex gold');
ok(flexKind(B('harith'),'jungle')==='flex','Harith flex jungle');
ok(flexKind(B('valentina'),'roam')==='flex','Valentina roam flex');
ok(flexKind(B('marcel'),'jungle')==='flex','Marcel flex jungle');
ok(flexKind(B('ruby'),'mid')===null,'Ruby bukan kandidat mid');
ok(flexKind(B('layla'),'gold')==='role','Layla role gold');
// 2. scoreHero tidak membuang flex
const goldSlot=SLOTS.find(s=>s.lane==='gold');
const an0=analyzeEnemy([],HEROES);
const rs=scoreHero(B('ruby'),goldSlot,an0,[],[],[]);
ok(rs.s>-1e8,'Ruby lolos filter gold, s='+rs.s);
ok(rs.why.some(w=>w.indexOf('flex')>=0),'alasan flex muncul: '+rs.why.join('|'));
// 3. recommendTeam 5 lane unik, bukan musuh
const e1=['kadita','eudora','pharsa','aamon','lunox'];
const R=recommendTeam(e1,HEROES,ITEMS,EMBLEMS);
ok(R.picks.length===5,'5 picks, dapat '+R.picks.length);
ok(new Set(R.picks.map(p=>p.hero.id)).size===5,'pick unik');
ok(!R.picks.some(p=>e1.includes(p.hero.id)),'tidak pick musuh');
// 4. rush Athena vs magic burst
const mm=R.picks.find(p=>p.lane==='gold');
ok(mm&&mm.build.rush.indexOf("Athena's Shield")>=0,'Athena rush vs magic: '+(mm?mm.build.map(i=>i.name).join(','):'-'));
ok(mm&&mm.build.slice(0,3).some(i=>i.name==="Athena's Shield"),'Athena di 3 slot awal');
// 5. rush anti-heal vs tim healer
const eHeal=['estes','floryn','yu_zhong','rafaela','angela'];
const anH=analyzeEnemy(eHeal.map(B),HEROES);
const bH=buildFor(B('granger'),anH,ITEMS);
ok(bH.rush.some(n=>/sea halberd|dominance/i.test(n)),'anti-heal rush: '+bH.map(i=>i.name).join(','));
ok(bH.slice(0,3).some(i=>/sea halberd|dominance/i.test(i.name)),'anti-heal di 3 slot awal');
// 6. rush Antique Cuirass vs physical burst
const ePhys=['fanny','lancelot','hayabusa','saber','granger'];
const anP=analyzeEnemy(ePhys.map(B),HEROES);
const bP=buildFor(B('lolita'),anP,ITEMS);
ok(bP.rush.indexOf('Antique Cuirass')>=0,'Antique rush vs phys burst: '+bP.map(i=>i.name).join(','));
// 7. heroModes memuat flex
ok(heroModes(B('valentina')).indexOf('roam')>=0,'Valentina mode roam');
ok(heroModes(B('harith')).indexOf('jungle')>=0,'Harith mode jungle');
ok(heroModes(B('ruby')).indexOf('gold')>=0,'Ruby mode gold');
// 8. buildGlobal + konteks musuh
const G=buildGlobal(B('miya'),'gold',ITEMS,e1.map(B));
ok(G.rush.indexOf("Athena's Shield")>=0,'buildGlobal rush Athena: '+G.build.map(i=>i.name).join(','));
const G0=buildGlobal(B('miya'),'gold',ITEMS,[]);
ok(G0.rush.length===0,'tanpa musuh tanpa rush');
// 9. flex data valid
let fok=true;
for(const id of Object.keys(FLEX)){
  if(!B(id)){fok=false;console.log('flex id hilang:',id);}
  if(!FLEX[id].lanes||!FLEX[id].lanes.length){fok=false;console.log('flex tanpa lanes:',id);}
}
ok(fok&&Object.keys(FLEX).length>=15,'flex valid ('+Object.keys(FLEX).length+')');
// 10. tanpa flex, filter lama tetap jalan (Layla gold, Franco roam)
ok(scoreHero(B('layla'),goldSlot,an0,[],[],[]).s>-1e8,'Layla tetap kandidat gold');
const roamSlot=SLOTS.find(s=>s.lane==='roam');
ok(scoreHero(B('miya'),roamSlot,an0,[],[],[]).s<-1e8,'Miya tetap bukan roam');
console.log('\\n'+pass+' lolos, '+fail+' gagal');
process.exit(fail?1:0);
})();
`;
eval(src + T);
