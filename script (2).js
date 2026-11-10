const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RN=['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
const MJ=`The Fool|new beginnings, a leap of faith|recklessness, hesitation|Open your heart to the unknown|Take the bold new venture|Trust the path before you
The Magician|willpower, skill, manifestation|manipulation, untapped talent|Pursue your desire with full intention|Use your skills to launch a project|You already hold every tool you need
The High Priestess|intuition, mystery, inner knowing|secrets, ignored intuition|Listen to what is left unsaid|Observe before you act|Turn inward and trust the quiet voice
The Empress|abundance, nurturing, beauty|smothering, creative block|Warmth, devotion and sensual joy|Creative work flourishes|Nurture yourself as you would a garden
The Emperor|authority, structure, stability|rigidity, domination|Commitment and a protective bond|Leadership and lasting order|Build firm and healthy boundaries
The Hierophant|tradition, guidance, belief|rebellion, dogma|Formal vows and shared values|Mentors, institutions, training|Seek the wisdom of your teachers
The Lovers|union, harmony, a meaningful choice|disharmony, misalignment|A deep soul connection|Aligned partnerships and choices|Choose according to your true values
The Chariot|determination, control, victory|aggression, lost direction|Drive and devotion win the heart|Ambition is rewarded|Harness opposing forces within you
Strength|courage, patience, compassion|self-doubt, raw emotion|Gentle patience heals a bond|Quiet confidence outlasts force|Tame your inner beast with kindness
The Hermit|solitude, introspection, guidance|isolation, withdrawal|Time alone reveals what you need|A search for deeper purpose|Carry your own lantern within
Wheel of Fortune|cycles, fate, a turning point|bad luck, resisting change|Destiny shifts the course of a bond|Opportunity turns in your favor|Accept the ceaseless turning of life
Justice|truth, fairness, cause and effect|dishonesty, unfairness|Honest and balanced partnership|Contracts and fair outcomes|Own the consequences of your choices
The Hanged Man|surrender, pause, new perspective|stalling, needless sacrifice|Pause and see your bond differently|Delay brings insight|Let go in order to gain
Death|endings, transformation, release|resisting change, stagnation|An old pattern ends to make room for new love|One chapter closes, another opens|Release what you have outgrown
Temperance|balance, moderation, patience|excess, imbalance|Harmony and gentle compromise|Collaboration and steady blending|Blend your opposites into wholeness
The Devil|bondage, temptation, shadow|release, breaking free|Obsession or an unhealthy tie|Golden handcuffs; feeling trapped|Face your shadows to be free
The Tower|upheaval, sudden revelation|averted disaster, fear of change|Illusions are shaken to reveal truth|Sudden restructuring|Rebuild upon honest foundations
The Star|hope, renewal, serenity|despair, lost faith|Healing and trust return|Inspired vision and promise|Heal and believe in your light
The Moon|illusion, fear, the subconscious|clarity emerging, confusion lifting|Not all is as it seems|An unclear situation; wait for light|Listen to your dreams
The Sun|joy, success, vitality|temporary sadness, dimmed joy|Radiant, open happiness|Recognition and success|Embrace your vitality
Judgement|reckoning, rebirth, a calling|self-doubt, ignoring the call|Forgive and begin anew|A calling is answered|Rise to meet your higher purpose
The World|completion, fulfillment, wholeness|unfinished business, delay|A union reaches wholeness|Achievement and success|Celebrate, then begin the next spiral`;
const RK=`Ace|new beginnings, potential|delays, a missed chance
Two|balance, choices|imbalance, indecision
Three|growth, collaboration|friction, delays
Four|stability, rest|stagnation, restlessness
Five|conflict, challenge|recovery, resolution
Six|harmony, progress|stalling, nostalgia
Seven|reflection, perseverance|doubt, giving up
Eight|movement, mastery|haste, burnout
Nine|resilience, near completion|exhaustion, anxiety
Ten|culmination, completion|overload, an ending
Page|curiosity, messages|immaturity, delayed news
Knight|action, pursuit|impulsiveness, stalling
Queen|nurturing, mastery|smothering, insecurity
King|authority, control|tyranny, misuse of power`;
const SU=[['Wands','passion and ambition','Passion and chemistry bring','Ambition channels into'],['Cups','emotion and intuition','The heart opens to','Fulfilment at work grows from'],['Swords','mind and truth','Honest words bring','Clear thinking brings'],['Pentacles','work and material life','Loyalty and security bring','Steady effort and finances show']];
const cards=MJ.split('\n').map((l,i)=>{const[n,u,r,lo,ca,gr]=l.split('|');return{i,n,u,r,lo,ca,gr,t:RN[i]}});
SU.forEach((s,si)=>RK.split('\n').forEach((l,k)=>{const[rn,u,r]=l.split('|');cards.push({i:22+si*14+k,s:si,k,n:`${rn} of ${s[0]}`,u:`${s[1]}: ${u}`,r:`${s[1]} blocked: ${r}`,lo:`${s[2]} ${u}`,ca:`${s[3]} ${u}`,gr:`Grow through ${s[1]} by embracing ${u}`,t:k<10?RN[k+1]:['P','Kn','Q','K'][k-10]})}));
/* ---------- engraved-style SVG art ---------- */
const G='#e0a81c',T=(x,y,s,b)=>`<g transform="translate(${x} ${y}) scale(${s})">${b}</g>`;
const o=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f||'none'}"/>`;
const sun=(x,y,r)=>o(x,y,r,G)+`<circle cx="${x}" cy="${y}" r="${r+4}" stroke-dasharray="2 3"/>`;
const moon=(x,y,r)=>`<path d="M${x} ${y-r}a${r} ${r} 0 1 0 0 ${2*r}a${r*.6} ${r} 0 1 1 0-${2*r}z" fill="${G}"/>`;
const star=(x,y,r)=>`<path d="M${x} ${y-r}L${x+r*.3} ${y-r*.3}L${x+r} ${y}L${x+r*.3} ${y+r*.3}L${x} ${y+r}L${x-r*.3} ${y+r*.3}L${x-r} ${y}L${x-r*.3} ${y-r*.3}z" fill="${G}"/>`;
const fig=(x,y,s=1)=>T(x,y,s,'<circle cy="-22" r="6" fill="#f3e2b0"/><path d="M0-16L-13 26H13z" fill="#7a3b12"/><path d="M-17 2L0-8 17 2"/>');
const inf='<path d="M30 36c8-10 14 10 20 0s12 10 20 0"/>';
const MO=[sun(68,38,8)+fig(44,72,.9)+'<path d="M15 98h50v20H15z" fill="#4a2c14"/>',
fig(50,76)+inf+'<path d="M18 102h64"/>'+star(28,92,5)+star(72,92,5),
'<path d="M25 30v80M75 30v80" stroke-width="4"/>'+fig(50,76)+moon(50,38,8),
fig(50,72)+star(36,42,4)+star(50,35,4)+star(64,42,4)+'<path d="M15 112c15-10 55-10 70 0"/>',
'<path d="M30 108V50h40v58z" fill="#4a2c14"/>'+fig(50,76)+sun(50,34,6),
fig(50,72)+'<path d="M28 40v72M72 40v72M50 28v10M45 33h10"/>',
fig(33,80,.8)+fig(67,80,.8)+sun(50,36,9),
'<path d="M28 70h44v28H28z" fill="#4a2c14"/>'+fig(50,66,.7)+o(36,102,7)+o(64,102,7)+star(50,34,6),
fig(38,78)+'<path d="M56 102c0-20 24-20 24 0z" fill="#e0a81c"/>'+inf,
fig(46,78)+'<path d="M66 60v30"/>'+star(66,52,5)+'<path d="M15 114l25-30 25 30z"/>',
o(50,70,28)+o(50,70,9,G)+'<path d="M50 42v56M22 70h56M30 50l40 40M70 50L30 90"/>',
fig(50,78)+'<path d="M50 30v16M28 50h44M28 50l-6 16h12zM72 50l-6 16h12z"/>',
'<path d="M20 30h60"/>'+'<g transform="rotate(180 50 66)">'+fig(50,60)+'</g>'+o(50,98,8),
o(50,50,9,'#f3e2b0')+'<path d="M50 59v34M36 68h28M40 80h20M46 93l-6 14M54 93l6 14M15 112h70"/>'+sun(76,98,7),
fig(50,78)+'<path d="M22 66c8 6 14 6 20 0M58 82c6-6 12-6 20 0"/>'+star(50,38,7),
fig(50,80)+'<path d="M42 56l-6-14M58 56l6-14"/>'+o(30,108,5)+o(70,108,5)+'<path d="M30 108l20-10 20 10"/>',
'<path d="M36 108V54l14-16 14 16v54z" fill="#4a2c14"/><path d="M72 28L56 46h12L54 64" stroke-width="2.5"/>'+star(24,48,4)+star(80,74,4),
star(50,44,14)+star(28,34,4)+star(72,34,4)+star(26,62,4)+star(74,62,4)+'<path d="M20 100c10-8 20 8 30 0s20 8 30 0"/>',
moon(50,52,18)+'<path d="M20 112l14-26 14 26M52 112l14-26 14 26"/>'+star(24,36,3)+star(78,40,3),
sun(50,62,22)+o(50,62,9)+o(24,36,5,G)+o(76,36,5,G)+'<path d="M24 41v22M76 41v22M18 112h64"/>',
'<path d="M26 40l40 14-4 10-38-14z" fill="#e0a81c"/>'+fig(34,100,.5)+fig(66,100,.5)+'<path d="M16 76c10-14 20-4 30-10s20 4 38 10"/>',
o(50,70,32)+'<path d="M50 40c-18 0-18 60 0 60s18-60 0-60z"/>'+fig(50,74,.7)+star(22,28,4)+star(78,28,4)+star(22,112,4)+star(78,112,4)];
const SY=['<path d="M0-13V13M0-4L-6-10M0 3L6-3"/>','<path d="M-7-9h14c0 9-3 11-7 11s-7-2-7-11zM0 2v9M-5 11h10"/>','<path d="M0-14V6M-5 6h10M0 6v8"/>','<circle r="9"/><path d="M0-7L3 3-6-3h12L-3 3z"/>'];
function art(c){let g='';if(c.i<22)g=MO[c.i];else{const{s,k}=c;if(k<10){const n=k+1,r=Math.ceil(n/2);if(n==1)g=T(50,70,2.6,SY[s]);else for(let i=0;i<n;i++){const lone=n%2&&i==n-1,y=r==1?70:34+(i>>1)*72/(r-1);g+=T(lone?50:i%2?68:32,y,n<5?1.4:.7,SY[s])}}else{g=fig(50,82)+T(76,62,1.2,SY[s])+'<path d="M16 112h68"/>'+(k==11?'<path d="M14 104c12-22 44-22 60 0"/>':'');for(let i=0;i<k-9;i++)g+=star(50+(i-(k-10)/2)*10,42,4)}}
return `<svg viewBox="0 0 100 140"><rect x="3" y="3" width="94" height="134"/><rect x="7" y="7" width="86" height="126" stroke-width=".5"/><path d="M12 22h76M12 118h76" stroke-width=".5"/>${g}<text x="50" y="18" font-size="9">${c.t}</text><text x="50" y="128" font-size="5.2">${c.n.toUpperCase()}</text></svg>`}
const BK=`<svg viewBox="0 0 100 140"><rect x="6" y="6" width="88" height="128"/><circle cx="50" cy="70" r="26"/><circle cx="50" cy="70" r="18" stroke-dasharray="2 3"/>${star(50,70,13)}${moon(24,26,6)}${sun(76,114,5)}<path d="M14 40l4 4M86 40l-4 4M14 100l4-4M86 100l-4-4"/></svg>`;
/* ---------- sound ---------- */
let ac,mute=0,deck=[];
function snd(n){if(mute)return;try{ac=ac||new AudioContext();for(let i=0;i<(n?7:1);i++){const b=ac.createBuffer(1,3500,44100),d=b.getChannelData(0);for(let j=0;j<3500;j++)d[j]=(Math.random()*2-1)*(1-j/3500);const s=ac.createBufferSource(),g=ac.createGain();s.buffer=b;g.gain.value=.25;s.connect(g).connect(ac.destination);s.start(ac.currentTime+i*.09)}}catch(e){}}
$('#mute').onclick=e=>{mute^=1;e.target.textContent=mute?'🔇':'🔊'};
/* ---------- helpers ---------- */
const fy=a=>{for(let i=a.length;i>1;){const j=Math.random()*i--|0;[a[i],a[j]]=[a[j],a[i]]}return a},fresh=()=>fy([...cards]);
const cap=s=>s[0].toUpperCase()+s.slice(1),kw=s=>s.split(': ').pop().split(',')[0].toLowerCase();
const cnt=()=>$('#cnt').textContent=deck.length+' cards remain in the deck';
const mean=(c,rev)=>`<h2>${c.n}${rev?' — Reversed':''}</h2><p class="${rev?'':'hl'}"><b>Upright:</b> ${cap(c.u)}.</p><p class="${rev?'hl':''}"><b>Reversed:</b> ${cap(c.r)}.</p><p><b>Love:</b> ${cap(c.lo)}.</p><p><b>Career:</b> ${cap(c.ca)}.</p><p><b>Personal Growth:</b> ${cap(c.gr)}.</p><p class="mys">✦ The cards whisper that ${kw(c.u)} walks beside you. ${rev?`Reversed, you are asked to look closely at ${kw(c.r)}.`:'Let it guide your next step.'} ✦</p>`;
function mk(c,rev,lbl,up){const d=document.createElement('div');d.className='card'+(up?' up':'');d.innerHTML=`<div class="in"><div class="bk">${BK}</div><div class="fr ${rev?'rv':''}">${art(c)}</div></div>${lbl?`<small>${lbl}</small>`:''}`;d.onclick=()=>show(c,rev);return d}
function show(c,rev){$('#mc').innerHTML='';$('#mc').append(mk(c,rev,'',1));$('#mi').innerHTML=mean(c,rev);$('#modal').classList.add('open')}
$('#x').onclick=()=>$('#modal').classList.remove('open');$('#modal').onclick=e=>{if(e.target.id=='modal')$('#x').click()};
/* ---------- nav ---------- */
$$('nav button').forEach(b=>b.onclick=()=>{$$('nav button,.view').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#'+b.dataset.v).classList.add('on')});
/* ---------- draw ---------- */
$$('.dk').forEach(d=>d.innerHTML=BK);
$('#shuf').onclick=()=>{deck=fresh();cnt();$('#deck').classList.add('sh');snd(1);setTimeout(()=>$('#deck').classList.remove('sh'),1300);$('#stage').innerHTML='';$('#info').innerHTML=''};
$('#drw').onclick=()=>{$('#info').innerHTML='';if(!deck.length){$('#stage').innerHTML='';$('#info').innerHTML='<p>The deck is spent. Shuffle to begin anew.</p>';return}
const c=deck.pop(),rev=Math.random()<.3,e=mk(c,rev);e.classList.add('emerge');$('#stage').innerHTML='';$('#stage').append(e);snd();cnt();
setTimeout(()=>{e.classList.add('up');snd()},950);
setTimeout(()=>$('#info').innerHTML=mean(c,rev)+'<button onclick="$(\'#drw\').click()">Draw Another Card</button>',2000)};
/* ---------- daily ---------- */
$('#dbtn').onclick=()=>{let h=0;for(const ch of new Date().toDateString())h=(h*31+ch.charCodeAt(0))%9973;const c=cards[h%78],e=mk(c,0);$('#dst').innerHTML='';$('#dinfo').innerHTML='';$('#dst').append(e);snd();setTimeout(()=>{e.classList.add('up');snd()},500);setTimeout(()=>$('#dinfo').innerHTML=mean(c,0),1600)};
/* ---------- spreads ---------- */
const SP={three:['Past','Present','Future'],love:['You','Your Desire','The Outcome'],career:['Your Situation','The Obstacle','The Advice'],yn:['The Answer']};
$$('[data-s]').forEach(b=>b.onclick=()=>{const k=b.dataset.s,d=fresh(),st=$('#sst'),n=SP[k].length;let h='';st.innerHTML='';$('#sinfo').innerHTML='';snd(1);
SP[k].forEach((l,i)=>{const c=d.pop(),rev=Math.random()<.3,e=mk(c,rev,l);st.append(e);setTimeout(()=>{e.classList.add('up');snd()},700+i*700);
h+=k=='yn'?`<h2>${rev?'NO':'YES'}</h2><p><b>${c.n}${rev?' (reversed)':''}:</b> ${cap(rev?c.r:c.u)}.</p>`:`<p><b>${l} — ${c.n}${rev?' (reversed)':''}:</b> ${cap(k=='love'?c.lo:k=='career'?c.ca:rev?c.r:c.u)}.</p>`});
setTimeout(()=>$('#sinfo').innerHTML=h,700+n*700)});
/* ---------- init ---------- */
cards.forEach(c=>$('#grid').append(mk(c,0,c.n,1)));deck=fresh();cnt();
