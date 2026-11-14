'use strict';
const rounds=[
{title:'The playground',theme:'What gets rewarded?',shows:[{title:'The Prank Champion',desc:'Max has a prank planned for the new kid. Will it make the others laugh?',lines:['Max spots a carefully built tower.','He knocks it down. The other kids laugh.','Max takes a bow. Nobody checks on the builder.']},{title:'BOLT & BEEP: BUILD IT',desc:'Two workshop robots try to build a tower. Can they help each other?',lines:['Bolt’s tower wobbles, then tumbles down.','“Start with a wide base,” says Beep.','They build it together—and celebrate together.']}],question:'“Oh no… I worked so hard on that.”',context:'At the playground, a child drops their blocks. What do you do?',actions:['"Ha ha ha!"','Help rebuild'],results:['A nearby child laughs with you. The builder gathers the blocks alone. Attention can reward unkind behaviour, just as it did on screen.','You help rebuild the tower. The child smiles: “Wow, thank you for helping me!” You chose cooperation, whether or not your show modelled it.'],lesson:'SOCIAL LEARNING · We can observe behaviour and its rewards, then choose whether to imitate it.'},
{title:'Who gets to play?',theme:'Who belongs in the story?',shows:[{title:'The Clubhouse Rule',desc:'The Rockets are picking a team. Their captain has a rule about who belongs.',lines:['The Rockets need a spaceship pilot.','“Girls can’t be pilots!” says the captain.','The team cheers him. The girl is left behind.']},{title:'Everyone Has a Part',desc:'A young pilot joins a robot crew. Can they navigate an asteroid field together?',lines:['“Can I try being the pilot?”','She steers around an asteroid.','The whole crew celebrates their new teammate.']}],question:'“Can I be the pilot this time?”',context:'A girl asks to join your playground spaceship. What do you say?',actions:['“You can’t be the pilot.”','“Let’s take turns.”'],results:['She walks away. The team is smaller now. A rule repeated on screen can become an expectation—but it can also be questioned.','She joins the crew. You make space for someone else. A shared adventure begins.'],lesson:'REPRESENTATION + SOCIAL LEARNING · Stories can model exclusion or show broader possibilities.'},
{title:'The mystery in the park',theme:'What do you expect to find?',shows:[{title:'Monster Watch',desc:'Three tiny adventures. Strange noises and shadows make every room feel frightening.',lines:['“AHHH!” Something is moving in the bush.','A knock at the door. It opens... nobody is there.','“Someone is there!” The light reveals a branch outside the window.']},{title:'The Mystery Next Door',desc:'Something is making strange noises. Follow the clues with the neighbourhood explorers.',lines:['With a trusted adult, they check a rustling bush: a squirrel.','A knock: their neighbour has a parcel.','The light comes on: the shadow in the window was a branch.']}],question:'Rustle, rustle… “What was that?”',context:'You are walking with your caregiver. Something moves in a bush.',actions:['“Let’s leave. It’s a monster!”','“Can we look together?”'],results:['Your caregiver walks with you: “It’s okay to feel scared.” The mystery stays unresolved. Repeated scary stories may shape what you expect; being afraid is not a failure.','You pause together at a safe distance. A squirrel hops out. “Now we know,” your caregiver says. Checking with support adds new information.'],lesson:'CULTIVATION · Recurring portrayals may shape expectations over time. This short sequence is a simplified illustration.'}
];

const boundaryEncounter={question:'“Everyone has seen it. Want the link?”',context:'A friend offers you an age-restricted link. You feel curious, but you can set your own boundaries.',actions:['Pass the link around','“No thanks. Let’s do something else.”'],results:['You pass the link on. Someone else feels uncomfortable. Being curious does not mean you have to share something—or pretend you are ready for it.','You decline without judging your friend. You can ask a trusted adult about anything confusing, and choose something you both feel comfortable with.']};
rounds.push(
 {title:'Power and pressure',theme:'Who sets the rules?',shows:[
 {kind:'restricted',title:'18+ · RESTRICTED CHANNEL',desc:'An adults-only channel appears. This game shows only its warning screen, never adult imagery. The encounter explores curiosity and peer pressure.',lines:['An 18+ warning fills the screen.','Adult material is not shown in this game.','Curiosity is normal. You can choose your boundaries.'],encounter:boundaryEncounter},
 {kind:'action',title:'FURY CITY · ACTION SHOW',desc:'A fictional action hero settles every argument with force. Non-graphic cartoon conflict.',lines:['Two rivals argue over a stolen device.','The hero knocks the rival back. The crowd cheers.','The show ends before anyone deals with the consequences.'],encounter:{question:'“He took my ball. Let’s shove him!”',context:'At the park, a friend wants you to join a confrontation. The action show made force look easy.',actions:['Join the confrontation','Help them talk it out'],results:['You join the shouting. The disagreement grows and the game stops. Real conflicts do not end neatly when a scene cuts away.','You ask what happened and help return the ball. You can admire a fictional hero without copying every action.']}},
 {kind:'super',title:'NOVA SHIELD · SUPERHERO MOVIE',desc:'A masked hero uses their powers to protect a stranger. Bravery means noticing who needs help.',lines:['A broken bridge leaves a traveller stranded.','Nova makes a shield so the traveller can cross.','The hero stays to help repair the bridge.'],encounter:{question:'“Can someone help me carry these?”',context:'Outside the corner shop, a neighbour is struggling with her shopping bags. Helping does not require superpowers.',actions:['Walk past','Stop and help'],results:['You walk past. Watching someone help does not automatically turn the idea into action. There will be another chance to choose.','You pick up her shopping bags and carry them together. The neighbour thanks you. A story offered an idea; you decided to act on it.']}}
 ],lesson:'SOCIAL LEARNING · Fiction can model behaviour. Context and your response shape what you take from it.'},
 {title:'Fear and curiosity',theme:'What do you expect?',shows:[
 {kind:'restricted',title:'18+ · AFTER HOURS',desc:'Another adults-only listing appears. A non-graphic warning screen leads to a conversation about pressure and boundaries.',lines:['The channel is marked 18+.','Only the warning is shown. No adult material plays.','You do not need to watch something to fit in.'],encounter:{question:'“Come on, watch it with me. Don’t be a baby.”',context:'At your friend’s house, he picks an 18+ channel. You feel unsure. You can stay or walk away.',actions:['Watch together','“No thanks.” Walk away'],results:['You stay and watch with your friend. After a while, it is time to head home.','You say no and walk away. Your friend’s teasing does not decide your boundary. You do not owe anyone an explanation.']}},
 {kind:'horror',title:'THE EMPTY STATION · HORROR',desc:'A shadow crosses an abandoned station. Suspense makes every ordinary sound feel threatening.',lines:['The platform lights go out.','A masked figure steps out from behind a pillar.','The film cuts to black before the mystery is solved.'],encounter:{question:'“What’s making that sound?”',context:'Walking past the corner shop, you hear a tapping sound from its alley. You can stay at a distance and ask your caregiver to check with you.',actions:['“Something is after us!”','Ask your caregiver to check'],results:['You move away with your caregiver. You are safe, but the mystery remains. Feeling afraid is not a failure; frightening stories can colour expectations.','Together, from a safe distance, you spot a loose sign tapping in the wind. New evidence changes your first impression.']}},
 {kind:'space',title:'BEYOND ORBIT · SPACE EXPLORERS',desc:'A spacecraft crew investigates a strange signal by gathering evidence and comparing explanations.',lines:['The crew detects a mysterious signal.','They compare readings before jumping to conclusions.','A tiny probe is calling for help. They bring it home.'],encounter:{question:'“Is that light an alien spaceship?”',context:'At the lookout, a friend spots a bright moving light in the night sky. You can compare explanations together.',actions:['Insist it must be aliens','Look for clues together'],results:['You settle on the exciting explanation without checking. Confidence does not make a guess true.','You watch its regular blinking lights and ask an adult to help identify it. It looks like an aircraft. Curiosity works well with evidence.']}}
 ],lesson:'EXPECTATIONS + MEDIA LITERACY · Stories can shape first impressions. You can pause, question and seek more information.'}
);
rounds.push(
 {title:'Finding your place',theme:'AGE 15 · BELONGING',shows:[
 {kind:'rage',title:'THE LOUDER VOICE',desc:'A streamer turns every disagreement into an enemy. The chat rewards whoever shouts loudest.',lines:['A guest disagrees. The host cuts them off.','“If they’re not with us, they’re against us.”','The comments race past. Nobody hears the other side.'],encounter:{question:'“You don’t agree? Then you don’t belong.”',context:'At the lookout, your friends disagree about a club project. One person is being pushed out.',actions:['Join in and shut them down','Ask them to explain'],results:['You talk over them. They leave, and the group loses a perspective it never heard. The loudest answer was not necessarily the best one.','You make room for an answer. You still disagree about parts of the plan, but everyone gets to contribute.']}},
 {kind:'status',title:'THE PERFECT DROP',desc:'A polished creator presents expensive shoes as the price of fitting in. The sponsorship gets a tiny mention.',lines:['New shoes. New outfit. Another perfect reveal.','“Everyone who matters has these.”','“Without these? You’re not cool.” The pitch turns shoes into a test of belonging.'],encounter:{question:'“You’re seriously wearing those?”',context:'Outside the shop, a friend mocks another teen’s old shoes. The ad’s idea of belonging suddenly feels familiar.',actions:['Laugh at the shoes','“Who cares? They’re just shoes.”'],results:['You laugh along. The other teen stays behind. A sales pitch became a rule for who deserved to be included.','You stand up for them. Their shoes do not tell you what kind of friend they will be.']}},
 {kind:'community',title:'ROOM FOR ONE MORE',desc:'A short documentary follows young people making a shared space. They disagree, listen, and build something together.',lines:['The workshop has one spare chair.','A newcomer brings an idea nobody considered.','Their different skills turn an empty room into a shared project.'],encounter:{question:'“Is there room for me?”',context:'A newcomer asks to join your group’s outdoor art project. There is one empty spot at the table.',actions:['“Get lost!”','Make room and pass a brush'],results:['You keep the group closed. The newcomer walks away without a chance to show what they could bring.','You move over and pass a brush. Their contribution changes the picture. Inclusion becomes something you do.']}}
 ],lesson:'SOCIAL LEARNING + REPRESENTATION · Media offer scripts for belonging. You can choose which ones to use.'},
 {title:'Before you pass it on',theme:'AGE 18 · JUDGEMENT',shows:[
 {kind:'rumour',title:'CAUGHT ON CAMERA?',desc:'A dramatic clip accuses someone of stealing. The video starts halfway through, but the caption sounds certain.',lines:['A hand reaches for a bag. The clip abruptly ends.','“THIEF!” fills the screen before any explanation.','Shares multiply. The missing context stays missing.'],encounter:{question:'“Post it. Everyone should know what he did.”',context:'Outside the shop, a friend wants you to spread an accusation about someone nearby. You have only seen the cropped clip.',actions:['Repeat the accusation','Ask what happened first'],results:['You repeat it. The person tries to explain, but the group has already decided. A confident caption has become someone else’s reputation.','You ask. The person was returning the bag to its owner. The full story changes what the short clip seemed to show.']}},
 {kind:'comparison',title:'EVERYONE ELSE IS AHEAD',desc:'A feed strings together travel, awards, and perfect relationships. Every ordinary moment has been edited out.',lines:['A graduation. A holiday. Another big announcement.','Hundreds of highlights become one impossible life.','Your own quiet afternoon suddenly seems smaller.'],encounter:{question:'“I feel like everyone’s ahead of me.”',context:'At the lookout, a friend admits they are struggling. The feed made success look constant and effortless.',actions:['“You just need to try harder.”','Listen without comparing'],results:['You give them another standard to meet. They go quiet. A highlight reel did not show you what their day was really like.','You sit together and listen. You do not solve everything, but your friend no longer has to pretend that everything is fine.']}},
 {kind:'context',title:'BEYOND THE CLIP',desc:'A reporter traces a viral claim back to its source, asks who is missing, and corrects an early assumption.',lines:['A short clip seems to tell an obvious story.','The reporter finds the full recording and asks both people.','The evidence changes the report. The correction stays visible.'],encounter:{question:'“So… are we sharing this?”',context:'A friend shows you a dramatic claim. The source is unclear, and the person in the clip is standing nearby.',actions:['Share before someone else does','Check the source and ask'],results:['You race to be first. More people see the claim before anyone checks it. Speed has done the work that evidence should have done.','You find the original recording and ask the person involved. You share the correction instead of the accusation.']}}
 ],lesson:'MEDIA LITERACY · Ask who made a message, what is missing, and what evidence supports it.'}
);
function isTeen(){return state.round>=5;}
function enterTeenPlay(){state.teenPriorCount??=state.tokens.length;state.teenOutfit??=outfitFromTokens(state.tokens);state.round=5;state.selected=0;state.response=undefined;actorX=180;setPhase('choose');}
let recapPaused=false,recapCardKey='';
function finishJourney(){if(state.phase==='finalFilm')return;delete state.finalResponse;delete state.endingAnswer;state.endingMood=score();recapPaused=false;recapCardKey='';setPhase('finalFilm');}
function finishCredits(){setPhase('complete');}

function isPreteen(){return state.round>=3;}
function positiveShow(){return state.selected===(isPreteen()?2:1);}
function currentRound(){const r=rounds[Math.min(state.round,6)],current={...r,...(r.shows[state.selected]?.encounter||{})};if(state.round===0){current.results=[...current.results];current.results[1]='You help rebuild the tower. The child smiles: “Wow, thank you for helping me!” '+(state.selected===1?'You build from the bottom up, just like you learned on TV.':'You choose to help instead of copying the prank you watched.');}return current;}
function enterPreteen(){state.childhoodCount=state.round<3?state.tokens.length:(state.childhoodCount??(state.history.length>=3?6:0));state.age11Outfit=outfitFromTokens(state.tokens.slice(0,state.childhoodCount));state.round=3;state.selected=0;state.response=undefined;actorX=180;musicNewSong();setPhase('chapter');}

const $=id=>document.getElementById(id),canvas=$('world'),c=canvas.getContext('2d');c.imageSmoothingEnabled=false;
let state={round:0,phase:'welcome',tokens:[],history:[],selected:0},elapsed=0,phaseStart=0,actorX=70,last=0,sound=false,audio=null,note=0,menuPaused=false,channelFlash=-100;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const art={};for(const name of ['room','park','hero','room-dark','cast','bush','bedroom','hero-poses','cast-walk','boys-motion','hero-walk-v2','bedroom-preteen','alley','neighbour','lookout','friend-bedroom','bedroom-teen','sneaker']){art[name]=new Image();art[name].src='assets/'+name+'.png';}
let saved=null;try{saved=JSON.parse(localStorage.getItem('signals-v1'))}catch{}
function persist(){if(['welcome','opening','title'].includes(state.phase))return;try{saved=JSON.parse(JSON.stringify(state));localStorage.setItem('signals-v1',JSON.stringify(state))}catch{}}
function score(){return state.tokens.reduce((a,t)=>a+({bad:1,good:-.55,reflect:-.8,rest:.55,stuck:.6}[t]||0),0)}
function token(t){state.tokens.push(t);hud()}
function hud(){$('bar').innerHTML=Array.from({length:isTeen()?14:isPreteen()?10:6},(_,i)=>`<i class="seg ${state.tokens[i]||''}"></i>`).join('');$('bar').setAttribute('aria-label',`${state.tokens.length} experiences collected`);$('progress').textContent=`${isTeen()?state.round-4:isPreteen()?Math.min(state.round-2,2):Math.min(state.round+1,3)} / ${isTeen()||isPreteen()?2:3}`;$('stage').textContent='';}
function setPhase(p){document.body.classList.remove?.('watch-blackout');if(p==='result')state.sharedAudioPlayed=false;if(p==='exit'){state.exitX=state.drawX||176;state.exitElapsed=elapsed-phaseStart;state.exitAdult=state.adultX;state.exitGirl=state.girlPosition?{...state.girlPosition}:null;}if(p==='walking')state.walkFrom=actorX;if(p==='encounter'){state.girlPosition=null;state.adultX=undefined;state.lastSignKnock=-1;}state.phase=p;phaseStart=elapsed;renderUI();persist()}
function button(text,fn,cls=''){const b=document.createElement('button');b.className=cls;b.textContent=text;b.onclick=fn;return b}
function panel(eye,title,body){$('panel').innerHTML=`<p class="eyebrow">${eye}</p><h2>${title}</h2><p class="description">${body}</p><div class="actions"></div>`;return $('panel').querySelector('.actions')}
function logo(){return '<div class="tv-logo" aria-label="SIGNALS"><div class="aerial"></div><div class="logo-case"><div class="logo-screen"><canvas class="crt-noise" width="480" height="180" aria-hidden="true"></canvas><span><img src="assets/signals-wordmark.svg" alt="SIGNALS"></span><div class="crt-scan" aria-hidden="true"></div><div class="crt-roll" aria-hidden="true"></div><div class="crt-break" aria-hidden="true"></div></div><div class="logo-dials"><b></b><b></b><em></em></div></div><div class="tv-feet"></div></div>'}
function musicNewSong(){musicScene='game';if(!audio)enableMusic();}
function begin(){state={round:0,phase:'chapter',tokens:[],history:[],selected:0};actorX=180;musicNewSong();setPhase('chapter')}
function openChapter(n){
 if(n===1){begin();return;}
 const previous=saved?JSON.parse(JSON.stringify(saved)):{tokens:[],history:[]};
 if(n===2){const count=previous.childhoodCount??Math.min(6,previous.tokens.length);state={round:2,phase:'chapter',tokens:previous.tokens.slice(0,count),history:previous.history.slice(0,3),selected:0};enterPreteen();return;}
 const count=previous.teenPriorCount??Math.min(10,previous.tokens.length);state={round:4,phase:'teenChapter',tokens:previous.tokens.slice(0,count),history:previous.history.slice(0,5),selected:0,teenOutfit:outfitFromTokens(previous.tokens.slice(0,count))};actorX=180;musicNewSong();setPhase('teenChapter');
}
function resume(){state=JSON.parse(JSON.stringify(saved));if(['intro','welcome','opening','title'].includes(state.phase))return begin();if(['clip','walking','preview'].includes(state.phase))state.phase='choose';if(state.phase==='exit'){if(state.round===2)state.phase='level';else if(state.round===4)state.phase='end';else if(state.round===5){state.round=6;state.phase='teenLater';}else if(state.round>=6)state.phase='finalChoice';else{state.round++;state.phase='choose'}}if(state.phase==='end'&&state.round===2){state.round=3;state.selected=0;state.phase='chapter';}actorX=180;if(state.phase==='finalChoice'){finishJourney();return;}setPhase(state.phase);}
function channel(dir){fx('channel');const n=rounds[state.round].shows.length;state.selected=(state.selected+dir+n)%n;channelFlash=elapsed;renderUI();persist();}
function renderUI(){hud();document.body.classList.toggle('ending-black',['finalFilm','complete','finalVerdict'].includes(state.phase));const cinema=['welcome','opening','title','chapter','level','influence','sleep','end','teenChapter','teenLater','finalFilm','finalVerdict'].includes(state.phase);document.body.classList.toggle('cinematic',cinema);canvas.height=cinema?360:280;c.imageSmoothingEnabled=false;$('overlay').className=state.phase;$('overlay').style.display=cinema?'flex':'none';$('overlay').innerHTML='';$('caption').style.display='none';$('panel').style.display=cinema?'none':'flex';$('tvTargets').innerHTML='';const r=currentRound();let a;
if(state.phase==='welcome'){$('overlay').innerHTML='<div class=boot><p>A SIGNAL IS WAITING...</p><button id=bootStart>ENTER SIGNALS &gt;</button></div>';$('bootStart').onclick=startIntro;return;}
if(state.phase==='opening'){$('overlay').innerHTML='<div class="opening-words" aria-live="polite"></div><button class="skip" id="skipOpening">SKIP INTRO &gt;</button>';$('skipOpening').onclick=()=>setPhase('title');return;}
if(state.phase==='title'){$('overlay').innerHTML=`<div class="title-content">${logo()}<div class="title-actions chapter-menu"></div></div>`;const chapters=$('overlay').querySelector('.title-actions');chapters.append(button('▶ START GAME',begin,'start start-game'));[1,2,3].forEach(n=>chapters.append(button('CHAPTER '+n,()=>openChapter(n),'response')));return;}
if(state.phase==='chapter'&&isPreteen()){$('overlay').innerHTML='<div class="chapter-label"><p>CHAPTER TWO</p><h1>PRETEEN</h1><span>AGE 11 · TWO ROUNDS</span></div><button class="cinema-next" id="enterChapter">ENTER &gt;</button>';$('enterChapter').onclick=()=>setPhase('choose');return;}
if(state.phase==='chapter'){$('overlay').innerHTML='<div class="chapter-label"><p>CHAPTER ONE</p><h1>CHILDHOOD</h1><span>AGE 6–7</span></div><button class="cinema-next" id="enterChapter">ENTER &gt;</button>';$('enterChapter').onclick=()=>setPhase('choose');return;}
if(state.phase==='level'){$('overlay').innerHTML='<div class="chapter-label"><p>LEVEL UP</p><h1>AGE 11</h1><span>PRETEEN</span></div><p class="wiring-caption">YOUR EXPERIENCES COME WITH YOU</p><button class="cinema-next" id="nextRoom">TO YOUR ROOM &gt;</button>';$('nextRoom').onclick=enterPreteen;return;}
if(['choose','preview'].includes(state.phase)){const s=r.shows[state.selected];a=panel('FLIP CHANNELS · CHOOSE WHAT TO WATCH',s.title,s.desc);const label=document.createElement('div');label.className='channel-label';label.textContent=`CHANNEL ${state.selected+1} OF ${r.shows.length}`;$('panel').append(label);a.classList.add('channel-controls');a.append(button('‹',()=>channel(-1),'channel-arrow'),button('WATCH ▶',()=>setPhase('walking'),'primary'),button('›',()=>channel(1),'channel-arrow'));a.firstChild.setAttribute('aria-label','Previous channel');a.lastChild.setAttribute('aria-label','Next channel');const hit=button('Watch channel',()=>setPhase('walking'),'tv-hit');hit.setAttribute('aria-label','Watch this channel');$('tvTargets').append(hit);}
if(state.phase==='walking'){panel('REMOTE IN HAND','LET’S SEE WHAT’S ON…','');}
if(state.phase==='clip'){a=panel('NOW WATCHING',r.shows[state.selected].title,'');a.append(button('SKIP CLIP >',finishClip,'subtle'));$('caption').style.display='block';}
if(state.phase==='influence'){$('overlay').innerHTML=`<div class='chapter-label'><p>A NEW EXPERIENCE</p><h1>${positiveShow()?'A CONNECTION FORMS':'A TANGLE FORMS'}</h1></div><button class='cinema-next' id='returnRoom'>BACK TO THE ROOM &gt;</button>`;$('returnRoom').onclick=()=>setPhase('rift');return;}
if(state.phase==='rift'){a=panel('THE SIGNAL STAYS','WHAT WILL YOU DO NEXT?','');a.append(button(isPreteen()&&state.round===4&&state.selected===0?'VISIT YOUR FRIEND >':'GO OUTSIDE >',()=>{actorX=176;setPhase('encounter')},'primary'),button('GO TO SLEEP',sleepTonight,'response'));}
if(state.phase==='sleep'){$('overlay').innerHTML=`<div class='sleep-copy'><p>THE DAY ENDS</p><h1>${positiveShow()?'A QUIET NIGHT':'THE STORY LINGERS'}</h1><p>${positiveShow()?'You rest. Without trying the idea with someone else, today stays neutral.':'You stay in. With no new experience to challenge it, the darker story stays with you.'}</p></div><button class='cinema-next' id='wakeUp'>${state.round===6?'FINISH CHAPTER >':state.round===5?'AGE 18 >':state.round===4?'FINISH CHAPTER >':state.round===2?'GROW UP >':'NEXT DAY >'}</button>`;$('wakeUp').onclick=advanceDay;return;}
if(state.phase==='encounter'){a=panel('YOUR TURN',r.question,r.context);r.actions.forEach((s,i)=>a.append(button(s,()=>respond(i),'response')));}
if(state.phase==='result'&&state.round===4&&state.selected===0&&state.response===0){a=panel('','', '');a.append(button('HEAD HOME >',()=>setPhase('exit'),'primary'));a.lastChild.id='sharedContinue';a.lastChild.disabled=true;return;}
if(state.phase==='result'){a=panel('WHAT HAPPENS NEXT',state.response===1?'A DIFFERENT POSSIBILITY':state.round===2?'TAKE YOUR TIME':'A CHOICE LEAVES A TRACE',r.results[state.response]);a.append(button(state.round===6?'FINISH CHAPTER >':state.round===5?'GO BACK TO YOUR ROOM >':state.round===4?'FINISH CHAPTER >':state.round===2?'GROW UP >':'BACK TO YOUR ROOM >',()=>setPhase('exit'),'primary'));}
if(state.phase==='exit'){panel('','MOVING ON…','');}
if(state.phase==='end'){$('overlay').innerHTML='<div class="chapter-label"><p>LEVEL UP</p><h1>AGE 15</h1><span>THE TEEN YEARS BEGIN</span></div><p class="wiring-caption">YOUR EXPERIENCES COME WITH YOU</p><button class="cinema-next" id="enterTeen">NEXT CHAPTER &gt;</button>';$('enterTeen').onclick=()=>{state.teenOutfit=outfitFromTokens(state.tokens);setPhase('teenChapter');};return;}
if(state.phase==='teenChapter'){$('overlay').innerHTML='<div class="chapter-label"><p>CHAPTER THREE</p><h1>TEEN YEARS</h1><span>AGES 15–18</span></div><p class="wiring-caption">MORE FREEDOM. NEW PRESSURES. YOUR CHOICES.</p><button class="cinema-next" id="enterTeenRoom">ENTER &gt;</button>';$('enterTeenRoom').onclick=enterTeenPlay;return;}
if(state.phase==='teenLater'){$('overlay').innerHTML='<div class="chapter-label"><p>THREE YEARS LATER</p><h1>AGE 18</h1><span>BEFORE YOU PASS IT ON</span></div><button class="cinema-next" id="enterAge18">CONTINUE &gt;</button>';$('enterAge18').onclick=()=>setPhase('choose');return;}
if(state.phase==='finalChoice'){finishJourney();return;}
if(state.phase==='finalFilm'){
 recapCardKey='';$('overlay').innerHTML='<div class="ending-words" aria-live="polite"></div><div class="recap-controls"><button id="pauseRecap">PAUSE</button><button id="nextRecap">NEXT &gt;</button></div>';
 $('pauseRecap').onclick=()=>{recapPaused=!recapPaused;$('pauseRecap').textContent=recapPaused?'PLAY':'PAUSE';};
 $('nextRecap').onclick=()=>{const cards=endingCards(),t=elapsed-phaseStart;let cursor=0;for(const card of cards){cursor+=card.duration;if(cursor>t+.01){phaseStart=elapsed-cursor;break;}}recapCardKey='';if(elapsed-phaseStart>=endingDuration())finishCredits();};return;
}
if(state.phase==='finalVerdict'){$('overlay').innerHTML='<div class="ending-words"></div><button class="cinema-next" id="restartEnding">RESTART GAME &gt;</button>';$('restartEnding').onclick=begin;return;}
if(state.phase==='complete'){renderEndingSummary();return;}



}
function select(i){state.selected=i;setPhase('preview')}
function finishClip(){if(state.phase!=='clip')return;token(positiveShow()?'good':'bad');setPhase('influence')}
function respond(i){if(state.phase!=='encounter')return;state.resultFrom=state.drawX;state.resultAdult=state.adultX;state.response=i;token(i===1?'reflect':state.round===2?'bad':'bad');state.history.push({round:state.round,selected:state.selected,show:rounds[state.round].shows[state.selected].title,response:currentRound().actions[i]});setPhase('result')}
function reset(){menuPaused=false;saved=null;try{localStorage.removeItem('signals-v1')}catch{};state={round:0,phase:'title',tokens:[],history:[],selected:0};actorX=180;setPhase('title')}
$('restart').onclick=()=>{if(['opening','title','end'].includes(state.phase))reset();else{menuPaused=true;const a=panel('RESTART JOURNEY?','Start childhood again?','This will clear this playthrough.');a.append(button('RESTART',reset),button('KEEP PLAYING',()=>{menuPaused=false;renderUI()},'primary'));}};$('about').onclick=()=>$('info').showModal();$('closeInfo').onclick=()=>$('info').close();
let musicTimer=null,beat=0,master=null,nextNote=0,noiseBuffer=null,musicMood=0,pendingGameMusic=false;
async function enableMusic(){try{if(!audio){audio=new(window.AudioContext||window.webkitAudioContext)();master=audio.createGain();master.gain.value=.55;const filter=audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=16000;filter.Q.value=.5;master.connect(filter);filter.connect(audio.destination);noiseBuffer=audio.createBuffer(1,audio.sampleRate*.3,audio.sampleRate);const data=noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;}await audio.resume();sound=true;master.gain.setTargetAtTime(.55,audio.currentTime,.04);if(nextNote<audio.currentTime)nextNote=audio.currentTime+.05;$('sound').textContent='MUTE';$('sound').setAttribute('aria-pressed','true');loadRecordedMusic();musicStep();if(!musicTimer)musicTimer=setInterval(musicStep,60);}catch{$('sound').textContent='Tap for music';}}
function tone(freq,when,duration,volume,type='triangle'){if(!audio||!master)return;const o=audio.createOscillator(),g=audio.createGain();o.type=type;o.frequency.setValueAtTime(freq,when);g.gain.setValueAtTime(.0001,when);g.gain.exponentialRampToValueAtTime(volume,when+.015);g.gain.setTargetAtTime(.0001,when+duration*.5,duration*.18);o.connect(g);g.connect(master);o.start(when);o.stop(when+duration+.1);}
function drum(kind,t,soft=1){if(kind==='kick'){const o=audio.createOscillator(),g=audio.createGain();o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(42,t+.12);g.gain.setValueAtTime(.18*soft,t);g.gain.exponentialRampToValueAtTime(.0001,t+.18);o.connect(g);g.connect(master);o.start(t);o.stop(t+.2);return;}const src=audio.createBufferSource(),filter=audio.createBiquadFilter(),g=audio.createGain();src.buffer=noiseBuffer;filter.type='highpass';filter.frequency.value=kind==='hat'?7200:1500;g.gain.setValueAtTime((kind==='hat'?.024:.065)*soft,t);g.gain.exponentialRampToValueAtTime(.0001,t+(kind==='hat'?.04:.13));src.connect(filter);filter.connect(g);g.connect(master);src.start(t);src.stop(t+.16);if(kind==='snare')tone(185,t,.08,.035,'triangle');}
function pitch(n,uneasy){if(uneasy&&[4,9,11].includes(n%12))n--;return 440*2**((n-69)/12);}
// Two authored arrangements. Notes are [sixteenth offset, MIDI pitch, sixteenths held].
const introLead=[
 [[0,64,4],[6,67,2],[8,69,6]],[[0,72,6],[8,71,2],[10,67,5]],
 [[0,69,3],[4,67,3],[8,64,6]],[[0,62,6],[8,59,3],[12,62,3]],
 [[0,64,4],[4,67,2],[6,69,2],[8,72,6]],[[0,74,3],[4,72,3],[8,71,4],[14,67,2]],
 [[0,69,6],[8,67,3],[12,64,3]],[[0,62,4],[6,64,2],[8,67,7]],
 [[0,76,6],[8,74,3],[12,72,3]],[[0,71,4],[6,72,2],[8,74,6]],
 [[0,72,6],[8,69,6]],[[0,67,4],[6,64,2],[8,62,6]],
 [[0,64,3],[4,67,3],[8,72,6]],[[0,71,4],[6,69,2],[8,67,6]],
 [[0,62,4],[4,64,4],[8,67,6]],[[0,60,14]]
];
// Original call-and-response hook, with space between phrases and a higher chorus.
const verseLead=[
 [[0,67,2],[3,72,2],[6,76,3],[10,74,2],[12,72,3]],[[0,69,3],[6,72,2],[10,76,5]],
 [[0,69,2],[3,72,2],[6,77,3],[10,76,2],[12,72,3]],[[0,71,3],[6,74,3],[12,67,3]],
 [[0,67,2],[3,72,2],[6,76,3],[10,79,2],[12,76,3]],[[0,76,3],[4,72,2],[8,69,5]],
 [[0,69,3],[6,67,2],[10,65,3]],[[0,67,3],[6,71,2],[10,74,5]],
 [[0,72,3],[4,76,2],[8,81,3],[12,79,3]],[[0,77,5],[8,76,2],[12,72,3]],
 [[0,76,3],[6,72,3],[12,67,3]],[[0,71,3],[6,74,2],[10,79,5]],
 [[0,77,3],[6,76,2],[10,72,5]],[[0,74,3],[6,69,2],[10,65,5]],
 [[0,67,2],[4,71,2],[8,74,3],[12,71,3]],[[0,72,8],[12,67,2],[14,69,2]]
];
const chorusLead=[
 [[0,79,3],[4,76,2],[7,72,3],[12,76,3]],[[0,81,5],[8,79,2],[12,76,3]],
 [[0,77,3],[4,81,2],[8,84,5]],[[0,83,3],[6,79,2],[10,74,5]],
 [[0,79,3],[4,76,2],[7,72,3],[12,76,3]],[[0,81,3],[6,79,2],[10,76,5]],
 [[0,74,2],[3,76,2],[6,79,3],[10,74,2],[12,71,3]],[[0,72,10],[12,67,2],[14,71,2]]
];
const bridgeLead=[[[0,69,10]],[[4,65,8]],[[0,64,6],[8,67,5]],[[0,62,12]],[[0,65,6],[8,69,6]],[[0,64,8]],[[0,62,6],[8,59,6]],[[0,67,12]]];
const songChords=[48,45,53,55,48,45,53,55,45,53,48,55,53,50,55,48];
function scheduleBar(t,step,bar,intro){
 const seconds=60/(intro?116:112)/4;
 // Change harmony only at bar boundaries; blend neighbouring moods over several bars.
 if(step===0&&!intro)musicMood+=(clamp(score()/4)-musicMood)*.3;
 const mood=intro?0:musicMood,ending=['finalFilm','complete','finalVerdict'].includes(state.phase);
 const quiet=(state.phase==='clip'?.62:1)*(state.phase==='sleep'?.5:1)*(ending?.65:1)*(sharedWatchActive()?0.0001:1);
 let notes,root,energy=1;
 if(intro){notes=introLead[bar];root=songChords[bar];energy=bar<2?.65:bar>=14?.6:1;}
 else if(bar<16){notes=verseLead[bar];root=songChords[bar];energy=.75;}
 else if(bar<24){notes=chorusLead[bar-16];root=songChords[bar-16];}
 else if(bar<32){notes=bridgeLead[bar-24];root=[45,53,48,55,53,48,50,55][bar-24];energy=.35;}
 else if(bar<40){notes=chorusLead[bar-32];root=songChords[bar-32];energy=.95;}
 else{notes=bar<47?verseLead[bar-32]:[[0,60,10],[12,67,2],[14,71,2]];root=songChords[bar-32];energy=.55;}
 function voice(n,d,v,type='triangle'){
  const bright=pitch(n,false),dark=pitch(n,true);
  if(bright===dark)tone(bright,t,d,v*quiet,type);
  else{if(mood<1)tone(bright,t,d,v*quiet*(1-mood),type);if(mood>0)tone(dark,t,d,v*quiet*mood,type);}
 }
 for(const [at,n,len] of notes)if(step===at){voice(n,len*seconds,.052,'triangle');voice(n,len*seconds,.019,'square');if(!intro&&bar>=32&&bar<40)voice(n-12,len*seconds,.017);}
 const third=[45,50].includes(root)?3:4;
 if(step===0)for(const interval of [0,third,7])voice(root+12+interval,seconds*13,.012);
 // Light off-beat arpeggios and an answering bass line keep the hook moving.
 if(!intro&&energy>.6&&step%2===1){const intervals=[0,7,third,7];voice(root+24+intervals[Math.floor(step/2)%4],seconds*.8,.012*(1-mood*.4),'square');}
 if([0,6,8,14].includes(step))voice(root+(step===6?12:step===14?7:0),seconds*(step===0||step===8?2.7:1.6),.075);
 if([0,8].includes(step)&&energy>.4)drum('kick',t,.65*quiet*energy);
 if([4,12].includes(step)&&energy>.5)drum('snare',t,.47*quiet*energy);
 if(step%2===0&&energy>.5)drum('hat',t,(step%4===2?.24:.13)*quiet);
 if(!intro&&bar%8===7&&step>=14&&energy>.5)drum('snare',t,.18*quiet);
}
// Uploaded recordings use their own continuous playback source, separate from button effects.
const recordedMusic={buffers:{},loading:false,current:null,failed:false};
function desiredMusicTrack(){
 if(['finalChoice','finalFilm','complete','finalVerdict'].includes(state.phase))return 'ending';
 return ['welcome','opening','title'].includes(state.phase)?'opening':'gameplay';
}
function recordedMood(){return clamp(score()/6);}
function loadRecordedMusic(){
 if(recordedMusic.loading||!audio?.decodeAudioData)return;
 recordedMusic.loading=true;
 for(const name of ['opening','gameplay','ending']){
  fetch('assets/music/'+(name==='gameplay'?'gameplay-loop.wav':name+'.mp3')).then(r=>{if(!r.ok)throw new Error('Audio unavailable');return r.arrayBuffer();})
   .then(bytes=>audio.decodeAudioData(bytes)).then(buffer=>{recordedMusic.buffers[name]=buffer;musicStep();})
   .catch(()=>{recordedMusic.failed=true;$('sound').textContent='RETRY MUSIC';recordedMusic.loading=false;});
 }
}
function musicStep(){
 if(!sound||!audio?.createBufferSource)return;
 const name=desiredMusicTrack(),buffer=recordedMusic.buffers[name],now=audio.currentTime;
 if(!buffer)return;
 let current=recordedMusic.current;
 if(!current||current.name!==name){
  const source=audio.createBufferSource(),gain=audio.createGain(),filter=audio.createBiquadFilter();
  source.buffer=buffer;source.loop=true;filter.type='lowpass';filter.Q.value=.45;
  const mood=name==='gameplay'?recordedMood():0;
  source.playbackRate.value=1-mood*.16;filter.frequency.value=14000-mood*11200;
  gain.gain.setValueAtTime(.0001,now);gain.gain.linearRampToValueAtTime(.85,now+1.4);
  source.connect(filter);filter.connect(gain);gain.connect(master);source.start(now);
  if(current){current.gain.gain.cancelScheduledValues(now);current.gain.gain.setValueAtTime(current.gain.gain.value,now);current.gain.gain.linearRampToValueAtTime(.0001,now+1.4);current.source.stop(now+1.5);}
  current=recordedMusic.current={name,source,gain,filter,fadeUntil:now+1.4};
 }
 // Same source stays alive across levels, choices, mute and the ending's text cards.
 const mood=name==='gameplay'?recordedMood():0;
 current.source.playbackRate.setTargetAtTime(1-mood*.16,now,2.5);
 current.filter.frequency.setTargetAtTime(14000-mood*11200,now,2.5);
 const volume=sharedWatchActive()?.0001:state.phase==='clip'?.5:state.phase==='sleep'?.4:.85;
 if(now>=current.fadeUntil)current.gain.gain.setTargetAtTime(volume,now,1.8);
}

$('sound').onclick=()=>{if(sound){sound=false;if(master)master.gain.setTargetAtTime(.0001,audio.currentTime,.03);$('sound').textContent='UNMUTE';$('sound').setAttribute('aria-pressed','false');}else enableMusic()};
document.addEventListener('click',e=>{if(e.target.closest('button')&&!e.target.closest('#sound'))fx();},true);
function rect(x,y,w,h,col){c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),w,h)}function text(s,x,y,size=8,col='#f6e8ca'){c.fillStyle=col;c.font=`bold ${size}px monospace`;c.textAlign='center';c.fillText(s,x,y)}
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=v=>{v=clamp(v);return v*v*(3-2*v)};
const mix=(a,b,t)=>a+(b-a)*clamp(t);
function shadow(x,y,w=16){c.save();c.globalAlpha=.22;c.fillStyle='#17162c';c.beginPath();c.ellipse(x,y,w,3,0,0,Math.PI*2);c.fill();c.restore()}
// Sprite pivots remain fixed; an articulated gait replaces the two-frame flip.
const boyWalkFrames=[[164,139,244,452],[703,139,243,452],[1242,139,243,452],[1773,139,242,452]];
function hero(x,feet,h=76,walking=false,face=1,pose='idle'){shadow(x,feet,h*.19);if(walking){sprite(art['hero-walk-v2'],boyWalkFrames[Math.floor(elapsed*6)%4],x,feet,h,face);return;}sprite(art.hero,pose==='remote'?[792,729,308,435]:[197,95,234,440],x,feet,h,face);}
function parkPeer(x,y,pose='laugh',face=1,h=72){const f=pose==='idle'?[138,484,205,367]:pose==='walk'?[[138,484,205,367],[557,484,204,367]][Math.floor(elapsed*8)%2]:[[987,484,205,367],[1433,486,203,365]][Math.floor(elapsed*4)%2];shadow(x,y,13);sprite(art['boys-motion'],f,x,y,h,face);}
const castFrames={girl:[180,104,271,431],boy:[806,111,214,424],adult:[207,643,234,543],max:[776,691,264,495]};
const walkFrames={adult:[[132,21,214,411],[564,20,209,412],[1000,21,209,411],[1444,20,205,413]],girl:[[112,476,225,375],[555,475,218,375],[994,476,217,375],[1430,475,216,376]]};
function npc(id,x,feet,h=70,pose='idle',face=1,t=elapsed){const f=castFrames[id];if(!f)return;shadow(x,feet,h*.17);if(pose==='walk'&&walkFrames[id]){sprite(art['cast-walk'],walkFrames[id][Math.floor(t*8)%4],x,feet,h,face);return;}const bob=pose==='cheer'&&!reduce?Math.abs(Math.sin(t*7))*2:0;sprite(art.cast,f,x,feet-bob,h,face);}
function toyBlock(x,y,size=10,color='#d8a85e',angle=0){c.save();c.translate(x,y);c.rotate(angle);rect(-size/2,-size,size,size,'#594236');rect(-size/2+1,-size+1,size-2,size-2,color);rect(-size/2+2,-size+2,size-4,2,'#ffe5a4');rect(size/2-3,-size+3,2,size-5,'#90633f');rect(-size/2+2,-3,size-4,1,'#a77648');c.restore()}
function bush(x,y,w=90,rustle=0){if(!art.bush.complete||!art.bush.naturalWidth)return;const burst=Math.sin(elapsed*4)>-.3?1:.15;const shake=reduce?0:Math.sin(elapsed*22)*rustle*2*burst;c.save();c.translate(x+shake,y);c.rotate(shake*.009);shadow(0,-1,w*.43);const h=w*art.bush.naturalHeight/art.bush.naturalWidth;c.drawImage(art.bush,-w/2,-h+4,w,h);if(rustle&&!reduce){for(let i=0;i<3;i++){const q=(elapsed*.6+i*.3)%1;rect(-w*.3+i*w*.3+Math.sin(elapsed*5+i)*4,-h*.7-q*10,3,2,'#b5ca71');}}c.restore();}
function sparkles(x,y,t){for(let i=0;i<8;i++){const a=i*Math.PI/4;const d=15+(t%1)*20;rect(x+Math.cos(a)*d,y+Math.sin(a)*d,3,3,['#e7be68','#f4dd9c','#90cbb0'][i%3]);}}
function roomSet(){rect(0,0,300,160,'#e7c4a0');rect(0,120,300,40,'#b68c64');rect(0,119,300,3,'#755b4b');for(let i=0;i<8;i++)rect(i*42,145,35,1,'#9f7555');rect(25,25,60,65,'#8f6a52');rect(29,29,52,57,'#9dc5c1');rect(54,29,3,57,'#eddcb9');rect(29,55,52,3,'#eddcb9');rect(224,30,45,60,'#b38369');rect(230,36,33,48,'#819685');}
function spaceSet(){rect(0,0,300,160,'#1e2445');for(let i=0;i<25;i++)rect((i*61+13)%300,(i*37+9)%120,2,2,i%3?'#d9d6d7':'#e9bf75');rect(0,137,300,23,'#575774');}
function ship(x,y,t=0,pilot=false){c.save();c.translate(x,y);c.rotate(t);rect(-23,-25,46,40,'#39485a');rect(-19,-30,38,45,'#e6cab0');rect(-11,-37,22,8,'#dd8975');rect(-15,-21,30,24,'#79b4c6');rect(-11,-18,22,18,'#375978');if(pilot)tvPerson('girl',0,2,23,'idle',1,0);rect(-29,4,10,20,'#d18572');rect(19,4,10,20,'#d18572');rect(-13,15,26,7,'#665775');rect(-9,22,18,9+Math.abs(Math.sin(elapsed*20))*8,'#f0b95f');rect(-4,22,8,8,'#fff1b1');c.restore()}
function door(x,y,open=0){rect(x-23,y-80,46,80,'#624837');rect(x-19,y-76,38,76,'#25263c');rect(x-19,y-76,38*(1-open),76,'#bc8060');if(open<.6)rect(x+11-open*35,y-36,3,3,'#edc56e');rect(x-25,y,50,4,'#8c7462');}
function branch(x,y,t=0){c.save();c.translate(x,y);c.rotate(reduce?0:Math.sin(t*2)*.025);c.strokeStyle='#68513e';c.lineCap='round';c.lineWidth=9;c.beginPath();c.moveTo(-27,0);c.bezierCurveTo(-20,-35,12,-52,36,-75);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(4,-40);c.lineTo(-4,-70);c.moveTo(20,-59);c.lineTo(44,-56);c.stroke();for(const [xx,yy] of [[-5,-73],[31,-77],[43,-58],[12,-49]]){c.fillStyle='#76a267';c.beginPath();c.ellipse(xx,yy,10,5,-.6,0,Math.PI*2);c.fill();}c.restore();}
// The TV uses its own cast and staged movement, not the player's sprite.
function mini(x,y,w,h,choice,time){if(isTeen()){teenTV(x,y,w,h,choice,time);return;}if(isPreteen()){preteenTV(x,y,w,h,choice,time);return;}const previousWidth=bubbleSceneWidth;bubbleSceneWidth=300;c.save();c.translate(x,y);c.scale(w/300,h/160);c.beginPath();c.rect(0,0,300,160);c.clip();const playing=time>=0,tt=playing?time:0,phase=Math.min(2,Math.floor(tt/4)),local=tt%4,q=ease(local/2.8);const good=choice===1;
if(state.round===0){roomSet();const ground=137;
if(!good){const maxX=phase===0?mix(59,108,ease(tt/3)):108;tvPerson('boy',207,ground,68,phase>0?'sad':'idle',-1,tt);tvPerson('girl',259,ground,64,phase>0?'cheer':'idle',-1,tt);tvPerson('max',maxX,ground,72,phase===1?'push':phase===2?'bow':'walk',1,local);if(phase===0)tower(148,ground,6,11);else fallenBlocks(148,ground,phase===2?1:clamp(local/1.5));if(phase===2){bubble('HA HA!',248,43,11);bubble('Ta-da!',103,43,11);}}
else{robot('cyan',94,ground,70,phase===0?'sad':phase===1?'help':'cheer',1,tt);robot('gold',210,ground,69,phase===1?'help':phase===2?'cheer':'idle',-1,tt);if(phase===0)fallenBlocks(151,ground,clamp((tt-.6)/1.3));if(phase===1){buildTower(150,ground,local,11);bubble('A wider base!',211,43,10);}if(phase===2){tower(150,ground,6,11);sparkles(150,91,tt);bubble('We did it!',153,33,11);}}}
else if(state.round===1){spaceSet();if(!good){ship(184,100,0,false);tvPerson('max',98,143,67,phase===1?'angry':phase===2?'cheer':'idle',phase===1?-1:1,tt);tvPerson('boy',244,143,64,phase>0?'cheer':'idle',-1,tt);tvPerson('girl',phase===2?mix(43,-20,ease(local/3)):43,143,65,phase===2?'walk':'sad',phase===2?-1:1,tt);if(phase===1)bubble('Girls can’t be pilots!',116,40,10);if(phase===2)bubble('Go, captain!',242,40,10);}else{if(phase===0){ship(160,106,0,false);tvPerson('girl',60,143,66,'idle',1,tt);robot('cyan',240,143,64,'idle',-1,tt);bubble('Can I try?',63,48,10);}if(phase===1){const sx=150+Math.sin(local*1.7)*36,sy=86+Math.sin(local*2)*15;ship(sx,sy,Math.sin(local*1.7)*.12,true);const ax=300-local*70;rect(ax,43,22,20,'#74718a');rect(ax+4,38,14,26,'#8b8497');}if(phase===2){ship(155,96,0,true);robot('cyan',70,143,65,'cheer',1,tt);robot('gold',240,143,65,'cheer',-1,tt);sparkles(155,55,tt);bubble('Great flying!',153,26,11);}}}
else{scaryShow(good,phase,local,tt);}
c.restore();bubbleSceneWidth=previousWidth;}
let bubbleSceneWidth=640;
function bubble(s,x,y,size=11){c.save();c.font=`${size}px 'Signal Pixel', monospace`;const pad=15,maxText=Math.min(350,bubbleSceneWidth-48),words=s.split(' '),lines=[];let line='';for(const word of words){const next=line?line+' '+word:word;if(c.measureText(next).width>maxText&&line){lines.push(line);line=word;}else line=next;}if(line)lines.push(line);const width=Math.min(bubbleSceneWidth-20,Math.max(...lines.map(z=>c.measureText(z).width))+pad*2),height=lines.length*(size+7)+20,left=clamp(x-width/2,10,bubbleSceneWidth-width-10),top=Math.max(5,y-height+8);c.fillStyle='#07100ff5';c.strokeStyle='#aeed7d';c.lineWidth=1;c.beginPath();c.roundRect(left,top,width,height,5);c.fill();c.stroke();const tail=clamp(x,left+12,left+width-12);c.beginPath();c.moveTo(tail-4,top+height);c.lineTo(tail,top+height+6);c.lineTo(tail+4,top+height);c.fill();c.fillStyle='#efffe1';c.textAlign='center';c.textBaseline='top';lines.forEach((z,i)=>c.fillText(z,left+width/2,top+11+i*(size+7)));c.restore();}
function blockPositions(x,ground,size=10){return [[x-size-1,ground],[x,ground],[x+size+1,ground],[x-(size+1)/2,ground-size],[x+(size+1)/2,ground-size],[x,ground-size*2]];}
function tower(x,ground,n=6,size=10){blockPositions(x,ground,size).slice(0,n).forEach(([xx,yy],i)=>toyBlock(xx,yy,size,['#d6a35d','#b87868','#6faaa0'][i%3]));}
function fallenBlocks(x,y,t=1){const p=blockPositions(x,y,11);for(let i=0;i<6;i++){const q=clamp(t*1.25-i*.035),[sx,sy]=p[i],angle=q*(i%2?-.28:.24),dx=(i-2.5)*12;const contact=11*.5*Math.abs(Math.sin(angle));const by=mix(sy,y-contact,ease(q))-Math.sin(q*Math.PI)*(8+i*1.5);toyBlock(mix(sx,x+dx,ease(q)),by,11,['#d6a35d','#b87868','#6faaa0'][i%3],angle);}}
function buildTower(x,y,t,size=11){const count=Math.min(6,Math.floor(Math.max(0,t)*2));tower(x,y,count,size);if(count<6){const dest=blockPositions(x,y,size)[count],q=(Math.max(0,t)*2)%1;toyBlock(mix(x+28,dest[0],ease(q)),mix(y-7,dest[1],q)-Math.sin(q*Math.PI)*28,size,['#d6a35d','#b87868','#6faaa0'][count%3]);}}
function squirrel(x,y,t=0){c.save();const hop=reduce?0:Math.abs(Math.sin(t*5))*3;c.translate(x,y-hop);shadow(0,0,12);c.fillStyle='#81553b';c.beginPath();c.ellipse(-12,-15,9,16,-.4,0,Math.PI*2);c.fill();c.fillStyle='#bf8754';c.beginPath();c.ellipse(-13,-16,6,12,-.4,0,Math.PI*2);c.fill();rect(-6,-15,14,13,'#9b6645');rect(-2,-13,7,10,'#d5ad7d');rect(2,-24,11,12,'#ad754a');rect(3,-29,4,7,'#8c573b');rect(10,-27,3,5,'#8c573b');rect(10,-21,2,2,'#141d20');rect(13,-18,4,3,'#d0a174');rect(16,-18,2,2,'#30251e');rect(-6,-3,8,3,'#654735');rect(5,-3,9,3,'#654735');rect(9,-9,7,3,'#8d5b3e');c.restore();}
function brainShape(){c.beginPath();c.moveTo(0,-37);c.bezierCurveTo(-17,-53,-36,-44,-37,-29);c.bezierCurveTo(-56,-30,-64,-9,-52,5);c.bezierCurveTo(-65,24,-47,42,-30,37);c.bezierCurveTo(-22,54,-7,45,0,36);c.bezierCurveTo(12,50,29,50,34,37);c.bezierCurveTo(53,42,65,23,51,6);c.bezierCurveTo(64,-11,54,-29,37,-29);c.bezierCurveTo(33,-47,13,-53,0,-37);c.closePath();}
function drawBrain(x,y,scale=1,progress=1,mode=null,motion=elapsed){c.save();c.translate(x,y);c.scale(scale,scale);brainShape();c.fillStyle='#111b20';c.fill();c.strokeStyle='#b3f47d';c.lineWidth=2;c.stroke();c.save();brainShape();c.clip();const bad=mode===null?state.tokens.filter(t=>t==='bad').length:mode;for(let i=0;i<12;i++){const a=i*2.4,b=(i+3)*1.9,xx=Math.cos(a)*40,yy=Math.sin(a)*32,tx=Math.cos(b)*40,ty=Math.sin(b)*32;const tangled=i<bad*2;c.strokeStyle=tangled?'#ff514c':i%3===0?'#e5c778':'#87cca3';c.globalAlpha=clamp(progress*1.8-i*.04);c.lineWidth=1.6;c.beginPath();c.moveTo(xx,yy);const wave=reduce?0:Math.sin(motion*1.8+i)*5,cx1=tangled?-xx*2+wave:xx*.3+wave,cy1=tangled?yy*3:yy*.4-wave,cx2=tangled?tx*2-wave:tx*.4-wave,cy2=tangled?-ty*2:ty*.5+wave;
 c.bezierCurveTo(cx1,cy1,cx2,cy2,tx,ty);c.stroke();c.fillStyle=c.strokeStyle;c.fillRect(xx-2,yy-2,4,4);const u=reduce?.5:(motion*.24+i*.083)%1,v=1-u,px=v*v*v*xx+3*v*v*u*cx1+3*v*u*u*cx2+u*u*u*tx,py=v*v*v*yy+3*v*v*u*cy1+3*v*u*u*cy2+u*u*u*ty;c.fillStyle='#efffce';c.fillRect(px-1.3,py-1.3,2.6,2.6);}c.restore();c.strokeStyle='#64945b';c.lineWidth=1.5;c.beginPath();c.moveTo(0,-35);c.lineTo(0,35);c.stroke();c.restore();}
function emotion(x,y,type){c.save();c.translate(x,y);c.fillStyle='#06110ff0';c.strokeStyle=type==='angry'?'#ff5b57':type==='heart'?'#ff83bc':'#d7dc89';c.lineWidth=1;c.beginPath();c.roundRect(-19,-17,38,30,6);c.fill();c.stroke();c.fillStyle=type==='angry'?'#ff5b57':type==='heart'?'#ff83bc':'#f3d67c';if(type==='heart'){c.beginPath();c.moveTo(0,7);c.bezierCurveTo(-18,-5,-8,-15,0,-7);c.bezierCurveTo(8,-15,18,-5,0,7);c.fill();}else{rect(-8,-5,3,3,c.fillStyle);rect(5,-5,3,3,c.fillStyle);if(type==='laugh'){rect(-7,2,14,7,c.fillStyle);rect(-4,3,8,2,'#fff1d0');}else rect(-6,5,12,2,c.fillStyle);if(type==='angry'){c.strokeStyle='#ff5b57';c.lineWidth=2;c.beginPath();c.moveTo(-11,-11);c.lineTo(-3,-7);c.moveTo(11,-11);c.lineTo(3,-7);c.stroke();}}c.restore();}
function robot(id,x,feet,h=60,pose='idle',face=1,t=elapsed){const palettes={cyan:['#4ea9bd','#9fd9df','#294e67'],gold:['#d2a856','#ffe1a0','#795b42'],violet:['#8c78a9','#c5b4e0','#493f69']};const p=palettes[id]||palettes.cyan;c.save();c.translate(x,feet-(pose==='cheer'?Math.abs(Math.sin(t*7))*3:0));c.scale(face*h/64,h/64);shadow(0,0,14);rect(-13,-60,26,22,'#1c2333');rect(-10,-57,20,16,p[0]);rect(-7,-54,14,10,'#bddbd6');rect(-4,-51,3,3,'#1c3344');rect(3,-51,3,3,'#1c3344');rect(-5,-45,11,2,pose==='sad'?'#644e71':'#587785');rect(-17,-54,4,10,p[2]);rect(13,-54,4,10,p[2]);rect(-2,-66,3,7,p[2]);rect(-4,-68,7,4,p[1]);rect(-13,-37,26,24,p[2]);rect(-10,-34,20,18,p[0]);rect(-6,-29,12,6,p[1]);rect(-4,-28,3,3,'#efffff');rect(2,-28,3,3,p[2]);rect(-9,-19,18,2,p[1]);rect(-22,-34,7,20,p[2]);rect(-21,-31,5,12,p[0]);const push=pose==='help'||pose==='push';rect(15,-34,push?20:7,push?7:20,p[2]);rect(16,-32,push?17:5,push?4:12,p[0]);rect(-11,-12,8,9,p[2]);rect(4,-12,8,9,p[2]);rect(-15,-4,13,4,p[0]);rect(3,-4,13,4,p[0]);c.restore();}
function chapterScene(t){if(isPreteen()){rect(0,0,640,360,'#030906');youth(320,280,106,true);return;}rect(0,0,640,360,'#030906');for(let i=0;i<40;i++)rect((i*97)%640,(i*71)%360,1,1,'#253b20');hero(320,275,100,true,1);}
function transitionScene(t){rect(0,0,640,360,'#030906');const q=ease(t/5);drawBrain(390,225,1.18,q);youth(250,280,mix(76,90,q),false);text(score()>1?'TANGLED':score()<-.8?'CONNECTED':'NEUTRAL',390,303,11,'#b8ed85');}
function draw(){
 const rt=elapsed-phaseStart;const shared=state.phase==='result'&&state.round===4&&state.selected===0&&state.response===0;document.body.classList.toggle('watch-blackout',shared&&rt>=1.7&&rt<5.7);if(shared){const next=$('sharedContinue');if(next)next.disabled=rt<5.7;if(rt>=1.7&&!state.sharedAudioPlayed){state.sharedAudioPlayed=true;sharedViewingSound();}}
 if(['welcome','opening','title','chapter','level','influence','sleep','end','teenChapter','teenLater','finalFilm','finalVerdict'].includes(state.phase)){
  rect(0,0,640,360,'#030906');
  if(state.phase==='opening')cinematicIntro(rt);
  else if(state.phase==='influence')drawBrain(320,225,1.35,ease(rt/3));
  else if(state.phase==='chapter')chapterScene(rt);
  else if(state.phase==='level')transitionScene(rt);
  else if(state.phase==='end'||state.phase==='teenChapter'||state.phase==='teenLater')teenScene(rt,state.phase==='end');
  else if(state.phase==='finalFilm')endingFilm(rt);
  else if(state.phase==='finalVerdict'){rect(0,0,640,360,'#000');const w=$('overlay').querySelector('.ending-words');if(w)w.innerHTML=introLines(state.endingAnswer?'Bad choice.':'Good choice.',Math.floor(rt*18));}
  else if(state.phase==='sleep'){for(let i=0;i<18;i++)rect((i*91+27)%640,210+(i*43)%95,2,2,'#39523a');c.fillStyle='#94b675';c.beginPath();c.arc(320,255,22,0,Math.PI*2);c.fill();c.fillStyle='#030906';c.beginPath();c.arc(330,247,21,0,Math.PI*2);c.fill();}
  else if(state.phase==='title')animateLogo(elapsed);
  return;
 }
 if(isTeen()){drawTeen(rt);return;}
 if(isPreteen()){drawPreteen(rt);return;}
 const out=['encounter','result','exit'].includes(state.phase),exiting=state.phase==='exit',result=['result','exit'].includes(state.phase),st=exiting?state.exitElapsed:rt,help=result&&state.response===1,d=clamp(score()/4);
 rect(0,0,640,280,'#182236');
 if(out&&state.round===1)playgroundSet();else{const bg=out?art.park:art.bedroom;if(bg.complete&&bg.naturalWidth)c.drawImage(bg,0,0,640,280);}
 if(d){c.globalAlpha=d*.23;rect(0,0,640,280,'#30223b');c.globalAlpha=1;}
 if(!out){mini(320,111,145,78,state.selected,-1);tvGlitch(320,111,145,78);}
 let hx=out?(state.round===1?280:176):actorX,feet=out?248:270,walk=state.phase==='walking'&&rt<2.1,face=1,pose=state.phase==='walking'&&rt>=2.1?'remote':'idle';
 if(out&&state.round===0){
  npc('boy',410,248,73,help&&st>5?'cheer':'idle',-1,elapsed);
  if(help){hx=st<4.8?mix(state.resultFrom||176,330,ease(st/1.5)):mix(330,278,ease((st-4.8)/1.2));walk=st<1.5||(st>=4.8&&st<6);pose=st>=1.5&&st<4.8?'build':'idle';
   if(st<1.5)fallenBlocks(330,248,1);else buildTower(330,248,st-1.5,10);
   if(st>5.8&&!exiting)bubble('Wow, thank you for helping me!',410,154,11);
  }else{fallenBlocks(330,248,state.phase==='encounter'?clamp(st/1.3):1);if(result){const peerX=mix(70,112,ease(st/1.2));parkPeer(peerX,248,st<1.2?'walk':'laugh',1);if(!exiting){bubble('Ha ha ha!',hx,150,12);if(st>1.3)bubble('Ha ha!',peerX,177,10);}}}
 }
 if(out&&state.round===1){
  const rejected=result&&state.response===0;
  let gx=rejected?mix(425,710,ease(st/3.5)):help?mix(425,465,ease(st/2.5)):425;
  if(exiting)gx=mix(state.exitGirl?.x??gx,710,ease(rt/2.5));
  state.girlPosition={x:gx,y:248};
  npc('girl',gx,248,72,exiting||((rejected||help)&&st<3.5)?'walk':help?'cheer':'idle',(exiting||((rejected||help)&&st<3.5))?1:-1,elapsed);
  if(help){hx=mix(state.resultFrom||280,355,ease(st/2.5));walk=st<2.5;if(st>2.5&&!exiting)bubble('My turn to fly!',465,150,12);}
 }
 if(out&&state.round===2){
  let ax,awalk=false,aface=1;
  if(state.phase==='encounter'){hx=mix(76,176,ease(rt/2.3));ax=hx-57;walk=rt<2.3;awalk=walk;}
  else if(help){hx=state.resultFrom??176;ax=state.resultAdult??119;}
  else{hx=mix(state.resultFrom??176,110,ease(st/2.4));ax=hx-57;walk=st<2.4;awalk=walk;face=-1;aface=-1;}
  if(exiting){ax=mix(state.exitAdult??ax,-115,ease(rt/2.5));awalk=true;aface=-1;}
  state.adultX=ax;
  npc('adult',ax,248,91,awalk?'walk':'idle',aface,elapsed);
  bush(405,248,94,help&&st>1.2?0:1);
  if(help&&st>1.2){squirrel(mix(405,480,ease((st-1.2)/2)),248,elapsed);if(st>3&&!exiting)bubble('Now we know.',ax,120,12);}
  if(result&&!help&&st>2.4&&!exiting)bubble('It’s okay to feel scared.',Math.max(125,ax),120,12);
 }
 if(exiting){hx=mix(state.exitX??176,-60,ease(rt/2.5));face=-1;walk=true;pose='idle';}
 if(pose==='build')builderBack(hx,feet,elapsed);else if(state.phase==='end')youth(hx,feet,90,walk);else hero(hx,feet,76,walk,face,pose);
 state.drawX=hx;
 if(!out&&state.tokens.length&&state.phase!=='clip')rift(hx,feet-93,elapsed);
 if(state.phase==='clip'){
  rect(49,5,542,267,'#111629');rect(55,11,530,255,'#bfb5c6');rect(61,17,518,243,'#555371');mini(72,24,470,224,state.selected,rt);rect(553,46,14,14,'#141a30');rect(553,77,14,4,'#c4b9cb');rect(553,87,14,4,'#c4b9cb');$('caption').textContent=rounds[state.round].shows[state.selected].lines[Math.min(2,Math.floor(rt/4))];
 }
}
function sprite(img,f,x,y,h,face=1){if(!img)return;const isCanvas=typeof img.getContext==='function';if(isCanvas?!(img.width>0&&img.height>0):(!img.complete||!img.naturalWidth))return;c.save();c.translate(x,y);c.scale(face,1);const w=h*f[2]/f[3];c.drawImage(img,...f,-w/2,-h,w,h);c.restore();}
let greenHero=null;
function introHero(x,y,h){if(!art['hero-walk-v2'].complete||!art['hero-walk-v2'].naturalWidth)return;if(!greenHero){greenHero=document.createElement('canvas');greenHero.width=art['hero-walk-v2'].naturalWidth;greenHero.height=art['hero-walk-v2'].naturalHeight;const g=greenHero.getContext('2d');g.drawImage(art['hero-walk-v2'],0,0);g.globalCompositeOperation='source-atop';g.globalAlpha=.62;g.fillStyle='#75c95d';g.fillRect(0,0,greenHero.width,greenHero.height);}const f=boyWalkFrames[Math.floor(elapsed*6)%4],w=h*f[2]/f[3];c.drawImage(greenHero,...f,x-w/2,y-h,w,h);}
function animateLogo(t){crtTexture(t);const el=$('overlay').querySelector('.logo-screen span');if(!el)return;const burst=!reduce&&t%3.4<.32;el.style.transform='none';el.style.filter='none';el.style.opacity=burst&&Math.floor(t*24)%3===0?'.22':'1';el.style.clipPath=burst&&t%.16<.055?'inset(0 0 9% 0)':'none';}
function tvGlitch(x,y,w,h){if(elapsed-channelFlash>.28)return;c.save();c.beginPath();c.rect(x,y,w,h);c.clip();for(let i=0;i<65;i++){const yy=y+(i*19+Math.floor(elapsed*150))%h;rect(x,yy,w,1+i%2,i%2?'#d8ffdba8':'#071b16ee');}rect(x,y+(elapsed*130)%h,w,10,'#c9ffa866');c.restore();}
function tvBush(x,y,w=90,t=0){c.save();c.translate(x+(reduce?0:Math.sin(t*21)*2),y);c.scale(w/90,w/90);rect(-38,-32,76,32,'#273e48');rect(-44,-26,88,23,'#273e48');rect(-28,-43,53,34,'#273e48');rect(-36,-30,73,25,'#486457');rect(-24,-40,47,30,'#527c5b');for(let i=0;i<11;i++)rect(-34+(i*19)%66,-33+(i*13)%25,12,6,i%2?'#759566':'#365547');rect(-36,-6,74,6,'#2b4545');c.restore();}
function monster(x,y,h=65,t=0){c.save();c.translate(x,y);c.scale(h/70,h/70);const jaw=reduce?3:3+Math.abs(Math.sin(t*6))*4;
 // A low, spined creature: long snout, tail, claws and four legs; no human silhouette.
 const poly=(pts,col)=>{c.fillStyle=col;c.beginPath();pts.forEach(([xx,yy],i)=>i?c.lineTo(xx,yy):c.moveTo(xx,yy));c.closePath();c.fill();};
 poly([[-18,-18],[-47,-18],[-62,-42],[-46,-31],[-29,-36]],'#4d375e');
 poly([[-30,-21],[-29,-49],[-17,-63],[9,-60],[28,-44],[45,-41],[49,-22],[19,-12]],'#30253f');
 poly([[-28,-21],[-25,-46],[-14,-56],[8,-53],[23,-37],[43,-34],[43,-22],[13,-17]],'#76517e');
 for(const xx of [-23,-8,8])poly([[xx,-49],[xx-2,-67],[xx+13,-52]],'#b197a6');
 for(const xx of [-23,-8,15,29]){rect(xx,-23,8,20,'#50394f');poly([[xx-3,0],[xx+2,-8],[xx+5,0],[xx+9,-7],[xx+13,0]],'#e5d7b5');}
 rect(17,-46,11,8,'#e8c557');rect(23,-46,3,8,'#251d35');rect(29,-31,20,jaw+4,'#24192f');
 for(let i=0;i<4;i++)poly([[30+i*5,-31],[33+i*5,-25],[35+i*5,-31]],'#f2e3c5');rect(43,-38,5,3,'#24192f');c.restore();}
function sleepTonight(){if(state.phase!=='rift')return;const positive=positiveShow();token(positive?'rest':'stuck');state.history.push({round:state.round,selected:state.selected,show:rounds[state.round].shows[state.selected].title,response:'Go to sleep',outcome:positive?'neutral':'unquestioned'});setPhase('sleep');}
function advanceDay(){state.response=undefined;state.girlPosition=null;state.adultX=undefined;if(state.round===2){setPhase('level');return;}if(state.round===4){setPhase('end');return;}if(state.round>=6){finishJourney();return;}if(state.round===5){state.round=6;state.selected=0;actorX=180;setPhase('teenLater');return;}state.round++;actorX=180;state.selected=0;setPhase('choose');}

function tick(ms){const dt=last?(ms-last)/1000:0;last=ms;if(!document.hidden&&!$('info').open&&!menuPaused){if(state.phase==='finalFilm'&&recapPaused)phaseStart+=dt;elapsed+=dt;if(state.phase==='finalFilm'&&elapsed-phaseStart>=endingDuration())finishCredits();if(state.phase==='opening'&&elapsed-phaseStart>27)setPhase('title');if(state.phase==='walking'){const target=290;actorX=mix(state.walkFrom||180,target,ease((elapsed-phaseStart)/2.1));if(elapsed-phaseStart>2.8)setPhase('clip')}if(state.phase==='clip'&&elapsed-phaseStart>12.2)finishClip();if(state.phase==='exit'&&elapsed-phaseStart>2.7){advanceDay()}}draw();requestAnimationFrame(tick)}
// Original intro score and cinematic vector sequence; gameplay remains pixel art.
let introStarted=false,musicScene='intro';
async function startIntro(){introStarted=true;musicScene='intro';pendingGameMusic=false;beat=0;musicMood=0;await enableMusic();fx('start');setPhase('opening');}
function fx(kind='click'){if(!sound||!audio)return;const t=audio.currentTime+.01;if(kind==='start'){tone(330,t,.09,.06,'square');tone(660,t+.08,.12,.05,'triangle');tone(990,t+.18,.18,.035,'triangle');return;}if(kind==='channel'){drum('snare',t,.4);tone(145,t,.12,.045,'sawtooth');tone(830,t+.07,.08,.03,'square');}else{tone(620,t,.045,.035,'square');tone(920,t+.04,.05,.025,'triangle');}}
const pixelInk={" ":[650,null,null],"!":[650,225,325],"'":[650,225,325],",":[650,125,325],"-":[650,25,525],".":[650,225,425],"/":[650,25,525],"0":[650,25,525],"1":[650,125,425],"2":[650,25,525],"3":[650,25,525],"4":[650,25,525],"5":[650,25,525],"6":[650,25,525],"7":[650,25,525],"8":[650,25,525],"9":[650,25,525],":":[650,225,425],"<":[650,125,525],">":[650,25,425],"?":[650,25,525],"A":[650,25,525],"B":[650,25,525],"C":[650,25,525],"D":[650,25,525],"E":[650,25,525],"F":[650,25,525],"G":[650,25,525],"H":[650,25,525],"I":[650,25,525],"J":[650,25,525],"K":[650,25,525],"L":[650,25,525],"M":[650,25,525],"N":[650,25,525],"O":[650,25,525],"P":[650,25,525],"Q":[650,25,525],"R":[650,25,525],"S":[650,25,525],"T":[650,25,525],"U":[650,25,525],"V":[650,25,525],"W":[650,25,525],"X":[650,25,525],"Y":[650,25,525],"Z":[650,25,525],"a":[650,25,525],"b":[650,25,525],"c":[650,25,525],"d":[650,25,525],"e":[650,25,525],"f":[650,25,525],"g":[650,25,525],"h":[650,25,525],"i":[650,25,525],"j":[650,25,525],"k":[650,25,525],"l":[650,25,525],"m":[650,25,525],"n":[650,25,525],"o":[650,25,525],"p":[650,25,525],"q":[650,25,525],"r":[650,25,525],"s":[650,25,525],"t":[650,25,525],"u":[650,25,525],"v":[650,25,525],"w":[650,25,525],"x":[650,25,525],"y":[650,25,525],"z":[650,25,525]};
function inkOffset(text){let advance=0,left=Infinity,right=-Infinity;for(const ch of text){const m=pixelInk[ch]||pixelInk[' '];if(m[1]!==null){left=Math.min(left,advance+m[1]);right=Math.max(right,advance+m[2]);}advance+=m[0];}return Number.isFinite(left)?(advance-left-right)/2000:0;}
function introLines(copy,count){let offset=0;return copy.split('\n').map(line=>{const visible=line.slice(0,Math.max(0,count-offset));offset+=line.length+1;return '<span class="intro-line"><span style="display:inline-block;transform:translateX('+inkOffset(visible)+'em)">'+visible+'</span></span>';}).join('');}
function cinematicIntro(t){
 rect(0,0,640,360,'#020604');
 const cards=[{start:4,end:7,text:'Influence is not destiny.'},{start:7,end:10,text:'Your response matters.'},{start:15,end:17.5,text:'What you watch,'},{start:17.5,end:20,text:'leaves a trace.'},{start:20,end:23.5,text:'What you do next matters.'}],card=cards.find(z=>t>=z.start&&t<z.end),words=$('overlay').querySelector('.opening-words');
 if(words){words.style.opacity='1';words.style.display=card?'flex':'none';words.innerHTML=card?introLines(card.text,Math.floor((t-card.start)*24)):'';}
 if(card)return;
 if(t<4){rect(0,282,640,2,'#96d561');introHero(-45+t*180,280,126);if(t>.7)emotion(-20+t*180,125,t<1.7?'angry':t<2.6?'neutral':'heart');return;}
 if(t<15){introWatching(t-10);return;}
 signalTransition(t-23.5);
}
function introWatching(t){
 rect(0,0,640,360,'#020805');rect(0,283,640,77,'#0c1a10');rect(100,283,470,2,'#3f6c38');
 c.save();c.translate(381,193);c.scale(1,.52);const glow=c.createRadialGradient(0,0,10,0,0,260);glow.addColorStop(0,'#8cdf6d50');glow.addColorStop(.36,'#6cc55932');glow.addColorStop(.73,'#4d9b3d12');glow.addColorStop(1,'#4d9b3d00');c.fillStyle=glow;c.fillRect(-260,-260,520,520);c.restore();
 rect(365,105,199,159,'#71ac53');rect(373,113,183,143,'#162c1a');rect(384,124,145,119,'#08150e');rect(397,135,119,97,'#183d22');rect(389,265,8,20,'#86b95b');rect(539,265,8,20,'#86b95b');
 for(let i=0;i<8;i++){c.strokeStyle=i%2?'#4c8b45':'#96d77b';c.lineWidth=2;c.beginPath();for(let k=0;k<35;k++){const xx=397+k*3.4,yy=145+i*10+Math.sin(k*.4+t*3+i)*4;k?c.lineTo(xx,yy):c.moveTo(xx,yy);}c.stroke();}
 rect(539,137,8,8,'#b8ee88');rect(539,157,8,8,'#b8ee88');greenRemote(221,283,123);emotion(231,136,t<1.7?'neutral':t<3.3?'angry':'heart');
}
function signalTransition(t){
 const q=ease(t/3.5),fade=1-ease((t-1.5)/2);rect(0,0,640,360,'#030906');
 c.save();c.globalAlpha=fade;c.translate(320,180);for(let i=0;i<13;i++){const r=((i*30+t*100)%420);c.strokeStyle=i%3?'#40753b':'#b5f584';c.lineWidth=i%3?1:2;c.beginPath();c.ellipse(0,0,r,r*.56,0,0,Math.PI*2);c.stroke();}c.restore();
 c.save();c.globalAlpha=fade;for(let j=0;j<6;j++){c.strokeStyle=j%2?'#6aa64f':'#bcff87';c.lineWidth=1.5;c.beginPath();for(let i=0;i<=128;i++){const x=i*5,y=180+Math.sin(i*.2-t*5+j)*Math.sin(Math.PI*i/128)*(65*(1-q)+8)+j*2;i?c.lineTo(x,y):c.moveTo(x,y);}c.stroke();}c.restore();
 const overlay=$('overlay');let reveal=overlay.querySelector('.intro-reveal');
 if(!reveal){reveal=document.createElement('div');reveal.className='title-content intro-reveal';reveal.innerHTML=logo()+'<div class="title-actions"><span class="start-placeholder"></span></div>';overlay.append(reveal);}
 const amount=ease((t-.65)/2.6);reveal.style.opacity=String(amount);reveal.style.transform=`scale(${.92+amount*.08})`;animateLogo(elapsed);
}
let remoteGreen=null;
function greenRemote(x,y,h){if(!art.hero.complete||!art.hero.naturalWidth)return;if(!remoteGreen){remoteGreen=document.createElement('canvas');remoteGreen.width=art.hero.naturalWidth;remoteGreen.height=art.hero.naturalHeight;const g=remoteGreen.getContext('2d');g.drawImage(art.hero,0,0);g.globalCompositeOperation='source-atop';g.globalAlpha=.62;g.fillStyle='#75c95d';g.fillRect(0,0,remoteGreen.width,remoteGreen.height);}const f=[792,729,308,435],w=h*f[2]/f[3];c.drawImage(remoteGreen,...f,x-w/2,y-h,w,h);}
function crtTexture(t){
 const surface=$('overlay').querySelector('.crt-noise');if(!surface)return;
 const g=surface.getContext('2d'),w=480,h=180,burst=!reduce&&t%3.4<.42;
 g.clearRect(0,0,w,h);if(reduce)return;
 for(let i=0;i<(burst?2600:800);i++){g.fillStyle=i%3?'#a4e8a466':'#ddffbdaa';g.fillRect(Math.floor(Math.random()*w),Math.floor(Math.random()*h),burst?3:1,1);}
 // Horizontal CRT scanlines travel downward inside the television only.
 const scroll=(t*22)%6;g.fillStyle='#07150988';for(let y=scroll-6;y<h;y+=6)g.fillRect(0,y,w,2);
 const roll=(t*48)%(h+32)-32;
 for(let j=0;j<24;j++){g.fillStyle=`rgba(190,255,156,${.22*Math.sin(Math.PI*j/24)})`;g.fillRect(0,roll+j,w,1);}
 if(burst){for(let i=0;i<5;i++){const y=Math.floor(Math.random()*h);g.fillStyle=i%2?'#030b08dd':'#dbffb799';g.fillRect(0,y,w,2+Math.random()*5);}}
}

function windowMystery(good,t){
 const lit=t>=2.1;rect(0,0,300,160,lit?'#cdb991':'#252b45');rect(0,128,300,32,lit?'#ac8668':'#333144');
 // Bed and lamp establish that the viewer is inside a bedroom.
 rect(12,112,88,26,lit?'#86664f':'#44394b');rect(17,102,77,22,lit?'#649493':'#364757');rect(20,103,23,9,lit?'#e5dac0':'#697381');rect(117,99,23,4,'#765742');rect(127,71,3,28,'#9a8559');rect(118,66,20,13,lit?'#ffe4a0':'#686078');
 rect(162,23,104,98,lit?'#735b4f':'#53556c');rect(168,29,92,85,lit?'#acc7b4':'#4a5771');
 c.save();c.beginPath();c.rect(168,29,92,85);c.clip();
 if(!lit){c.fillStyle='#242a3c';c.beginPath();c.ellipse(214,59,12,14,0,0,Math.PI*2);c.fill();c.beginPath();c.moveTo(190,115);c.lineTo(196,79);c.quadraticCurveTo(213,65,231,81);c.lineTo(242,115);c.fill();}
 else{branch(218,119,t);}
 c.restore();rect(211,27,5,89,lit?'#e6d6b6':'#7f8195');rect(166,72,96,5,lit?'#e6d6b6':'#7f8195');rect(157,117,114,6,'#92745d');
 tvPerson(good?'girl':'max',66,145,60,lit?'idle':'sad',1,t);if(good)tvPerson('adult',116,145,78,'idle',1,t);
 if(t>.35&&t<2)bubble('Someone is there!',78,48,9);if(lit)bubble(good?'Just a branch.':'It was a branch!',205,24,9);
}
function scaryShow(good,phase,t,tt){
 rect(0,0,300,160,good?'#9fc6c0':'#686781');rect(0,125,300,35,good?'#829363':'#55586a');
 if(phase===2){windowMystery(good,t);return;}
 if(phase===0){
  tvBush(183,137,100,t<2?tt:0);
  // Reveal in front of the foliage and step clear, rather than masking the face/body.
  if(!good&&t>1.7){const emerge=ease((t-1.7)/.65),mx=mix(183,228,emerge);c.save();c.globalAlpha=emerge;if(t<2.8)monster(mx,143,64,tt);else wingMonster(mx,143,tt);c.restore();}
  if(good&&t>1.8){squirrel(mix(182,238,ease((t-1.8)/1.8)),137,tt);bubble('A squirrel!',230,69,11);}
 }
 if(phase===1){
  rect(110,0,190,128,good?'#deb595':'#7a6076');const opening=ease((t-1.1)/1.5);door(201,137,opening);
  if(good&&t>1.6){tvPerson('visitor',201,137,76,'idle',-1,tt);rect(185,105,29,19,'#b88559');rect(196,105,5,19,'#ecd1a1');}
  if(t<1.3)bubble('KNOCK KNOCK',200,42,11);else if(!good&&t>2.5)bubble('No one is there...',185,44,10);
 }
 tvPerson(good?'girl':'max',48,143,58,good?'idle':'sad',1,tt);if(good)tvPerson('adult',85,143,79,'idle',1,tt);
 if(!good&&t>2.3&&phase===0)bubble(t<2.8?'AHHH!':'Oh no, a monster!',75,52,10);
}
function wingMonster(x,y,t){c.save();c.translate(x,y);const wing=reduce?0:Math.sin(t*8)*8;c.fillStyle='#484454';c.beginPath();c.moveTo(-9,-18);c.lineTo(-55,-62-wing);c.lineTo(-48,-26);c.lineTo(-32,-34);c.lineTo(-23,-11);c.lineTo(0,-19);c.lineTo(24,-11);c.lineTo(34,-34);c.lineTo(49,-26);c.lineTo(56,-62-wing);c.lineTo(9,-18);c.fill();rect(-15,-53,30,44,'#6d7780');rect(-15,-64,7,18,'#a1adb0');rect(8,-64,7,18,'#a1adb0');rect(-11,-44,8,7,'#ff9966');rect(4,-44,8,7,'#ff9966');rect(-9,-27,19,8,'#242c3e');rect(-7,-27,4,5,'#f0e5ca');rect(4,-27,4,5,'#f0e5ca');rect(-18,-10,13,10,'#454757');rect(6,-10,13,10,'#454757');c.restore();}

function rift(x,y,t){c.save();c.translate(x,y);const mood=score();c.strokeStyle=mood>0?'#ff514c':mood>-.8?'#b0cf78':'#9cf38a';c.shadowColor=c.strokeStyle;c.shadowBlur=7;c.lineWidth=1.7;c.beginPath();for(let i=0;i<90;i++){const a=i*.55,r=10+5*Math.sin(i*2.3+t);const xx=Math.cos(a)*r+Math.sin(i*1.8+t)*3,yy=Math.sin(a)*r+Math.cos(i*2.1-t)*3;if(i===0)c.moveTo(xx,yy);else c.lineTo(xx,yy);}c.stroke();c.restore();}
function tvPerson(id,x,y,h=65,pose='idle',face=1,t=elapsed){const p={max:['#f2c85c','#c9635a','#f0c596'],boy:['#3f3550','#668fc4','#a97859'],girl:['#b26536','#60a8a8','#ecc19a'],adult:['#857dab','#d6ac60','#e8ba90'],visitor:['#65412f','#6e9bd0','#e8ba90'],bagTeen:['#262332','#8aa7b7','#865438']}[id];c.save();c.translate(x,y);c.scale(face*h/64,h/64);const swing=pose==='walk'?Math.round(Math.sin(t*8)*3):0;rect(-10,-20,8,17+swing,'#334459');rect(3,-20,8,17-swing,'#334459');rect(-12,-4+swing,12,4,'#e3dccc');rect(3,-4-swing,12,4,'#e3dccc');rect(-13,-42,26,25,p[1]);rect(-18,-40,6,10,p[1]);rect(-18,-30,6,13,p[2]);if(pose==='angry'||pose==='give'){rect(13,-40,12,7,p[1]);rect(25,-40,12,7,p[2]);rect(33,-42,7,3,p[2]);}else{rect(13,-40,6,10,p[1]);rect(13,-30,6,13,p[2]);}rect(-12,-61,24,23,p[2]);rect(-14,-64,28,10,p[0]);rect(-14,-58,5,13,p[0]);if(id==='girl'){rect(-20,-56,7,27,p[0]);rect(-20,-38,7,4,'#e8bc64');}rect(-6,-53,3,4,'#243043');rect(6,-53,3,4,'#243043');rect(-2,-44,6,2,'#975b51');if(pose==='angry'){rect(-9,-57,7,2,'#4e3338');rect(5,-58,7,2,'#4e3338');}c.restore();}
function playgroundSet(){if(art.park.complete&&art.park.naturalWidth){const im=art.park;c.drawImage(im,im.naturalWidth*.30,im.naturalHeight*.16,im.naturalWidth*.70,im.naturalHeight*.70,0,0,640,280);}}
function builderBack(x,y,t){const frames=[[214,42,192,398],[650,73,214,367],[1106,83,244,357]],f=frames[1+Math.floor(t*3)%2];shadow(x,y,17);sprite(art['hero-poses'],f,x,y,76*f[3]/398,1);}
function outfitFromTokens(tokens){const n=tokens.reduce((a,t)=>a+({bad:1,good:-.55,reflect:-.8,rest:.55,stuck:.6}[t]||0),0);return n>1?'red':n<-.8?'yellow':'gray';}
function youthOutfit(){if(isTeen())return state.teenOutfit||(state.teenOutfit=outfitFromTokens(state.tokens.slice(0,state.teenPriorCount??10)));if(!isPreteen())return outfitFromTokens(state.tokens);if(!state.age11Outfit){state.childhoodCount??=state.history.length>=3?6:0;state.age11Outfit=outfitFromTokens(state.tokens.slice(0,state.childhoodCount));}return state.age11Outfit;}
function youth(x,y,h=72,walking=false,face=1){if(walking){shadow(x,y,h*.17);c.save();c.translate(x,0);c.scale(.865,1);sprite(youthWalkingImage(),boyWalkFrames[Math.floor(elapsed*6)%4],0,y,h,face);c.restore();return;}const f=youthOutfit()==='red'?[222,527,199,426]:youthOutfit()==='yellow'?[1098,528,199,426]:[668,527,201,427];shadow(x,y,h*.17);sprite(art['hero-poses'],f,x,y,h,face);}

// Chapter two keeps the original canvas art and character vocabulary.
const youthWalkCache={};
// Shirt-only mask shared by every walking frame. Blue trousers must retain their palette.
function tintYouthShirt(data,width,rgb){
 for(const [sx,sy,sw] of boyWalkFrames){
  for(let y=sy+205;y<sy+318;y++)for(let x=sx;x<sx+sw;x++){
   const i=(y*width+x)*4,r=data[i],g=data[i+1],b=data[i+2];
   if(data[i+3]&&g>r*1.4&&b>r*1.3&&g>45&&g>=b*.85){
    const shade=Math.min(1.25,(g+b)/300);for(let j=0;j<3;j++)data[i+j]=Math.min(255,rgb[j]*shade);
   }
  }
 }
}
function youthWalkingImage(){
 const mode=youthOutfit();if(youthWalkCache[mode])return youthWalkCache[mode];
 const im=art['hero-walk-v2'];if(!im.complete||!im.naturalWidth)return im;
 const cv=document.createElement('canvas');cv.width=im.naturalWidth;cv.height=im.naturalHeight;const g=cv.getContext('2d');g.drawImage(im,0,0);
 const pixels=g.getImageData(0,0,cv.width,cv.height);if(!pixels?.data)return im;
 const rgb={red:[205,78,68],yellow:[238,214,128],gray:[156,162,170]}[mode];
 tintYouthShirt(pixels.data,cv.width,rgb);
 g.putImageData(pixels,0,0);youthWalkCache[mode]=cv;return cv;
}
function preteenTV(x,y,w,h,choice,time){
 const old=bubbleSceneWidth;bubbleSceneWidth=300;c.save();c.translate(x,y);c.scale(w/300,h/160);c.beginPath();c.rect(0,0,300,160);c.clip();
 const t=Math.max(0,time),shot=Math.min(2,Math.floor(t/4)),q=ease((t%4)/2.8),kind=rounds[state.round].shows[choice].kind;
 if(kind==='restricted'){
  rect(0,0,300,160,'#151525');rect(18,16,264,128,'#27243b');rect(25,23,250,114,'#10131d');
  c.strokeStyle='#ceaf78';c.lineWidth=3;c.beginPath();c.arc(150,58,28,Math.PI,0);c.stroke();rect(121,57,58,42,'#c9a66b');rect(147,67,6,17,'#302938');
  text('18+',150,123,20,'#f1d7a2');text(shot===0?'AGE-RESTRICTED':shot===1?'CONTENT NOT SHOWN':'YOUR BOUNDARIES MATTER',150,148,10,'#ded6c1');
 }else if(kind==='action'){
  rect(0,0,300,160,'#35384e');for(let i=0;i<7;i++){rect(i*48,14+i%3*12,39,115,'#22283c');for(let j=0;j<4;j++)rect(i*48+10,28+j*22,8,10,'#ddab6b');}rect(0,131,300,29,'#595768');
  const rivalX=shot===1?mix(195,241,q):shot===2?241:195;
  tvPerson('max',shot===1?mix(106,167,q):shot===2?167:106,146,75,shot===1?'angry':'idle',1,t);tvPerson('visitor',rivalX,146,70,shot>0?'sad':'angry',-1,t);
  if(shot===0){rect(151,104,16,10,'#92dbe5');bubble('Give it back!',91,48,10);}else if(shot===1){rect(193,91,7,17,'#f9cc7c');rect(185,97,23,5,'#f9cc7c');}else bubble('The crowd cheers...',151,43,10);
 }else if(kind==='super'){
  rect(0,0,300,160,'#86b4ca');rect(0,119,300,41,'#4d7d98');rect(0,104,110,18,'#7c7686');rect(196,104,104,18,'#7c7686');
  const heroX=shot===0?65:98; // Original masked hero, distinct from the park cast.
  c.fillStyle='#9c426e';c.beginPath();c.moveTo(heroX-8,61);c.lineTo(heroX-30-Math.sin(t*4)*5,99);c.lineTo(heroX+7,93);c.fill();
  rect(heroX-9,66,20,30,'#4e88b3');rect(heroX-9,94,7,13,'#263d68');rect(heroX+5,94,7,13,'#263d68');rect(heroX-10,47,22,22,'#e5bc91');rect(heroX-11,49,24,9,'#344f84');rect(heroX-6,52,4,3,'#e6ffff');rect(heroX+4,52,4,3,'#e6ffff');rect(heroX-3,75,8,8,'#eed687');
  rect(heroX-16,69,7,20,'#37668f');rect(heroX-16,88,7,7,'#e5bc91');
  if(shot===0){rect(heroX+11,69,7,20,'#37668f');rect(heroX+11,88,7,7,'#e5bc91');}else{const lift=shot===1?ease((t%4)/.8):1;rect(heroX+10,69,8+10*lift,7,'#4e88b3');rect(heroX+18+10*lift,69,7,7,'#e5bc91');c.strokeStyle='#b7ffee';c.lineWidth=2;c.beginPath();c.moveTo(heroX+25+10*lift,73);c.lineTo(112,103);c.stroke();}
  if(shot>0){rect(108,103,88*q,7,'#c2f9ed');rect(108,110,88*q,3,'#589fa8');}
  tvPerson('girl',shot===1?mix(239,153,q):shot===2?146:239,105,54,shot===1?'walk':'idle',-1,t);
  if(shot===2){rect(116,107,72,7,'#b99c79');sparkles(144,66,t);bubble('You’re safe!',99,29,10);}
 }else if(kind==='horror'){
  rect(0,0,300,160,shot===0?'#334153':'#101727');rect(0,123,300,37,'#333346');for(let i=0;i<5;i++){rect(i*70+12,19,9,108,'#566078');rect(i*70+3,17,28,5,shot===0?'#d5d9a4':'#45505b');}rect(75,94,75,8,'#646170');rect(81,102,6,20,'#48424f');rect(137,102,6,20,'#48424f');
  tvPerson('boy',52,143,63,'sad',1,t);
  if(shot===1)maskedStalker(mix(281,205,q),142,t);
  if(shot===2){rect(0,0,300,160,'#040710');text('WHAT WAS THAT?',150,82,15,'#b9c7ce');}else if(shot===1)bubble('Who’s there?',64,49,10);
 }else{
  rect(0,0,300,160,'#111b36');for(let i=0;i<42;i++)rect((i*71-t*8+600)%300,(i*31)%150,1+i%2,1,'#d5e5ec');c.fillStyle='#6a6595';c.beginPath();c.arc(246,35,26,0,Math.PI*2);c.fill();
  const sx=shot===0?mix(62,142,q):142;ship(sx,92,Math.sin(t)*.04,true);
  if(shot===0){for(let i=0;i<3;i++){c.strokeStyle='#8ddad0';c.beginPath();c.arc(238,100,8+((t*12+i*8)%26),0,Math.PI*2);c.stroke();}}
  if(shot===1){rect(19,17,115,28,'#263a4f');text('COMPARE READINGS',76,35,9,'#b9ebcc');}
  if(shot>0){const px=shot===2?mix(239,172,q):239;rect(px-9,94,18,14,'#b7bfcc');rect(px-22,97,12,9,'#517faf');rect(px+10,97,12,9,'#517faf');rect(px-3,90,6,5,'#f4d78a');if(shot===2)bubble('Signal found!',149,37,10);}
 }
 c.restore();bubbleSceneWidth=old;
}
function sharedWatchActive(){return state.phase==='result'&&state.round===4&&state.selected===0&&state.response===0&&elapsed-phaseStart>=1.7&&elapsed-phaseStart<5.7;}
function sharedViewingSound(){if(!sound||!audio||!master)return;const t=audio.currentTime+.02;fx('channel');for(const [offset,pitch] of [[.4,220],[.9,277],[1.4,330],[2.1,247]])tone(pitch,t+offset,.25,.025,'triangle');}
function signTap(){if(!sound||!audio)return;const t=audio.currentTime+.01;tone(790,t,.055,.035,'triangle');tone(420,t+.09,.08,.025,'triangle');}
function teenScene(t,transition){
 rect(0,0,640,360,'#030906');const q=transition?ease(t/4):1;
 const mode=state.teenOutfit||outfitFromTokens(state.tokens),f=mode==='red'?[222,527,199,426]:mode==='yellow'?[1098,528,199,426]:[668,527,201,427];
 const im=art['hero-poses'],x=transition?245:320,feet=286,headH=32,bodyH=mix(40,61,q),width=34,split=174;
 shadow(x,feet,16);if(im.complete&&im.naturalWidth){c.drawImage(im,f[0],f[1],f[2],split,x-width/2,feet-bodyH-headH,width,headH);c.drawImage(im,f[0],f[1]+split,f[2],f[3]-split,x-width/2,feet-bodyH,width,bodyH);}
 if(transition)drawBrain(400,233,1.05,q);else rift(x,feet-bodyH-headH-17,elapsed);
}
function maskedStalker(x,y,t){
 c.save();c.translate(x,y);const step=reduce?0:Math.sin(t*4)*2;
 rect(-13,-9,10,9+step,'#131822');rect(4,-9,10,9-step,'#131822');
 rect(-18,-56,36,48,'#171c27');rect(-22,-52,7,36,'#252b37');rect(15,-52,7,36,'#252b37');
 rect(-21,-17,6,8,'#a9a59a');rect(16,-17,6,8,'#a9a59a');rect(-12,-78,25,25,'#20232d');
 rect(-10,-76,21,25,'#ccc8b5');rect(-7,-70,6,5,'#292a30');rect(3,-70,6,5,'#292a30');rect(-2,-59,6,3,'#74756e');
 rect(-12,-79,25,6,'#242832');rect(-2,-50,3,36,'#363d47');rect(7,-39,2,2,'#8e8778');c.restore();
}
function phone(x,y,skin='#f0c596'){rect(x-3,y-8,7,13,'#202b36');rect(x-2,y-7,5,9,'#789eac');rect(x-1,y+3,2,1,'#b6c8c8');rect(x-4,y+1,3,4,skin);rect(x+2,y+1,2,3,skin);}
function youthHand(x,y,walking,face){if(!walking)return {x:x-face*.8,y:y-24};const f=boyWalkFrames[Math.floor(elapsed*6)%4],hands=[[358,430],[884,430],[1414,430],[1944,430]],hand=hands[Math.floor(elapsed*6)%4];return {x:x+face*(hand[0]-f[0]-f[2]/2)*72/f[3]*.865,y:y-72+(hand[1]-f[1])*72/f[3]};}
function shoppingBag(x,bottom,col='#caa16e'){
 c.strokeStyle='#604e3e';c.lineWidth=2;c.beginPath();c.moveTo(x-5,bottom-20);c.lineTo(x-5,bottom-26);c.lineTo(x+5,bottom-26);c.lineTo(x+5,bottom-20);c.stroke();
 rect(x-11,bottom-20,22,20,'#5a4b3e');rect(x-9,bottom-18,18,16,col);rect(x+5,bottom-18,4,16,'#a67b56');rect(x-7,bottom-16,2,12,'#e7c692');
}
function neighbour(x,y,walking=false,face=-1){shadow(x,y,14);if(!walking){sprite(art.neighbour,[293,255,392,1038],x,y,88,face);return;}const im=art.neighbour;if(!im.complete||!im.naturalWidth)return;c.save();c.translate(x,y);c.scale(face*88/1038,88/1038);for(const [sx,dx,side] of [[379,-110,1],[520,31,-1]]){c.save();c.translate(dx+67,-253);c.rotate((reduce?0:Math.sin(elapsed*6)*.12)*side);c.drawImage(im,sx,1030,134,263,-67,-10,134,263);c.restore();}c.drawImage(im,293,255,392,785,-196,-1038,392,785);c.restore();}
function signAngle(t){return Math.sin(t*2.5)*(reduce?.035:.10)+(reduce?0:Math.sin(t*8)*.025);}
function hangingSign(t,moving=true){
 // Coordinates attach to the two chain ends in the generated shop background.
 c.save();c.translate(434,108);c.rotate(moving?signAngle(t):0);
 rect(-23,0,46,26,'#443a36');rect(-21,2,42,22,'#aa7954');rect(-18,5,36,16,'#d4ad72');
 rect(-15,9,29,2,'#896340');rect(-12,14,24,2,'#896340');rect(-19,3,2,2,'#e9cd91');rect(17,3,2,2,'#e9cd91');c.restore();
}
function skyLight(t,reveal){
 const x=300+(t*11)%200,y=62+Math.sin(t*.22)*6;
 c.save();const glow=c.createRadialGradient(x,y,1,x,y,24);glow.addColorStop(0,'#fff8d9dd');glow.addColorStop(.22,'#e6f5ff88');glow.addColorStop(1,'#a9d8ff00');c.fillStyle=glow;c.fillRect(x-24,y-24,48,48);
 if(reveal){rect(x-15,y-2,30,4,'#b2c3cf');rect(x-2,y-10,5,20,'#8ba6bd');rect(x-11,y-6,3,12,'#718da5');}
 rect(x-3,y-2,6,4,'#fff9db');const blink=Math.floor(t*2)%2===0;if(blink){rect(x-12,y+4,3,3,'#ff8a76');rect(x+10,y+4,3,3,'#a5f5d0');}c.restore();
}
function drawPreteen(rt){
 const out=['encounter','result','exit'].includes(state.phase),result=['result','exit'].includes(state.phase),exiting=state.phase==='exit',kind=rounds[state.round].shows[state.selected].kind,help=result&&state.response===1,together=kind==='restricted'&&state.round===4;
 const bg=together&&out?art['friend-bedroom']:!out?art['bedroom-preteen']:kind==='horror'||kind==='super'?art.alley:kind==='space'?art.lookout:art.park;
 if(bg.complete&&bg.naturalWidth)c.drawImage(bg,0,0,640,280);
 let hx=out?176:actorX,walking=state.phase==='walking'&&rt<2.1,face=1,feet=!out||together?270:248,carrying=false;
 const st=exiting?state.exitElapsed:rt;
 if(!out){preteenTV(320,111,145,78,state.selected,-1);tvGlitch(320,111,145,78);}
 if(out){
  if(kind==='restricted'&&!together){
   parkPeer(350,248,'idle',1);phone(364,215);
   const backing=result&&!help;const gx=backing?mix(480,538,ease((st-1.5)/1.5)):480;
   npc('girl',gx,248,72,backing&&st>1.5&&st<3?'walk':'idle',backing&&st>1.5?1:-1,elapsed);
   if(backing){hx=mix(state.resultFrom||176,431,ease(st/1.4));walking=st<1.4;}
   if(result&&!exiting&&st>1.6){if(help)bubble('Okay. We can do something else.',348,138,10);else bubble('Please don’t show me that.',gx,138,10);}
  }
  if(together){
   preteenTV(320,111,145,78,0,-1);parkPeer(304,270,'idle',help?-1:1);
   if(result){if(help){hx=mix(state.resultFrom||176,-45,ease(st/3));walking=st<3;face=-1;}else{hx=mix(state.resultFrom||176,257,ease(st/1.6));walking=st<1.6;}}
   if(result&&!exiting&&help&&st>1.7)bubble('You don’t have to stay.',304,159,10);
  }
  if(kind==='action'){
   parkPeer(351,248,'idle',1);npc('boy',472,248,72,'idle',-1,elapsed);
   if(result){hx=mix(state.resultFrom||176,help?399:417,ease(st/1.7));walking=st<1.7;}
   if(result&&!exiting&&st>1.8)bubble(help?'Let’s take turns.':'Hey! Stop shouting!',440,138,11);
  }
  if(kind==='super'){
   hangingSign(elapsed,false);const nx=exiting&&help?mix(446,-25,ease(rt/2.5)):446;neighbour(nx,248,exiting&&help,-1);state.neighbourX=nx;
   if(help){hx=st<2.6?mix(state.resultFrom||176,366,ease(st/1.7)):mix(366,390,ease((st-2.6)/1.8));walking=st<1.7||(st>2.6&&st<4.4);carrying=st>2||exiting;}
   shoppingBag(carrying?nx-16:405,carrying?241:248,'#c6a276');if(!carrying)shoppingBag(381,248,'#d3b781');
   if(help&&st>3&&!exiting)bubble('Thank you for carrying those!',446,125,10);
   if(result&&!help){hx=mix(state.resultFrom||176,70,ease(st/2));walking=st<2;face=-1;}
  }
  if(kind==='horror'){
   hangingSign(st);
   if(state.phase==='encounter'){const knock=Math.floor(st/2.5);if(knock<3&&knock!==state.lastSignKnock){state.lastSignKnock=knock;signTap();}hx=mix(176,164,ease(st/.6));if(st>.35&&st<2.3)bubble('What was that?',hx,145,11);}else hx=state.resultFrom??164;
   const retreat=result&&!help;
   if(retreat){hx=mix(state.resultFrom||176,110,ease(st/2));walking=st<2;face=-1;}
   let ax=hx-60;if(exiting)ax=mix((state.exitX??hx)-60,-120,ease(rt/2.5));
   npc('adult',ax,248,90,walking||exiting?'walk':'idle',retreat||exiting?-1:1,elapsed);
   if(help&&st>2&&!exiting)bubble('It’s the loose shop sign.',268,139,11);
  }
  if(kind==='space'){
   parkPeer(376,248,'idle',1);skyLight(elapsed,help&&st>2);
   if(help&&st>2&&!exiting)bubble('A plane! Look at the wing lights.',372,146,10);
  }
  if(exiting){hx=mix(state.exitX??hx,-60,ease(rt/2.5));walking=true;face=-1;}
 }
 youth(hx,feet,72,walking,face);state.drawX=hx;
 // Props draw after sprites so a foot/body cannot hide them.
 if(out&&kind==='restricted'&&!together&&result&&!help&&st>1.2){const hand=youthHand(hx,feet,walking,face);phone(hand.x,hand.y,'#f5c68e');}
 if(out&&kind==='action'){
  const bx=help?mix(447,370,ease(st/2.5)):447,by=236;shadow(bx,248,12);c.fillStyle='#f4d8a1';c.beginPath();c.arc(bx,by,12,0,Math.PI*2);c.fill();c.strokeStyle='#66584e';c.lineWidth=2;c.stroke();rect(bx-4,by-4,8,8,'#536878');rect(bx-10,by-1,4,5,'#536878');rect(bx+7,by+3,4,5,'#536878');
 }
 if(carrying)shoppingBag(hx+(face>0?17:-17),feet-5,'#d3b781');
 if(!out&&state.tokens.length&&state.phase!=='clip')rift(hx,feet-87,elapsed);
 if(state.phase==='clip'){
  rect(49,5,542,267,'#111629');rect(55,11,530,255,'#bfb5c6');rect(61,17,518,243,'#555371');preteenTV(72,24,470,224,state.selected,rt);rect(553,46,14,14,'#141a30');$('caption').textContent=rounds[state.round].shows[state.selected].lines[Math.min(2,Math.floor(rt/4))];
 }
}

function teenTV(x,y,w,h,choice,time){
 const old=bubbleSceneWidth;bubbleSceneWidth=300;c.save();c.translate(x,y);c.scale(w/300,h/160);c.beginPath();c.rect(0,0,300,160);c.clip();
 const t=Math.max(0,time),shot=Math.min(2,Math.floor(t/4)),kind=rounds[state.round].shows[choice].kind;
 if(kind==='rage'){
  rect(0,0,300,160,'#2a2036');rect(13,12,192,131,'#402c48');rect(214,12,74,131,'#181b28');tvPerson('max',105,138,99,shot?'angry':'idle',1,t);rect(44,116,126,24,'#493b4e');rect(130,91,4,28,'#777f91');rect(123,81,17,15,'#1e2734');text('LIVE',34,28,10,'#ed9486');for(let i=0;i<7;i++)rect(222,28+(i*16-t*18+112)%112,48-i%3*7,4,i%2?'#c69ca9':'#9ba9c1');if(shot===1)bubble('Only our side matters!',112,22,8);if(shot===2)text('LOUDER ≠ RIGHT',110,29,12,'#f2cb9d');
 }else if(kind==='status'){
  rect(0,0,300,160,'#b58c9c');rect(14,14,272,132,'#43394e');const lift=Math.sin(t*1.4)*1.5;c.save();c.translate(0,lift);
  if(art.sneaker.complete)c.drawImage(art.sneaker,65,40,174,88);c.restore();
  sparkles(225,67,t);text(shot===0?'THE NEW DROP':shot===1?'FIT IN. BUY IN.':'NOT COOL WITHOUT THESE.',150,32,shot===2?11:15,'#f6e5ce');if(shot===2)text('Everyone else has a pair.',150,137,10,'#f6e5ce');
 }else if(kind==='community'){
  rect(0,0,300,160,'#91b5a4');rect(0,123,300,37,'#a78d69');rect(94,99,115,10,'#87644c');rect(101,109,7,35,'#6e5747');rect(195,109,7,35,'#6e5747');tvPerson('girl',mix(33,73,ease((t-1)/3)),143,69,t>1&&t<4?'walk':'idle',1,t);tvPerson('boy',237,143,73,'idle',-1,t);rect(116,48,73,49,'#ece0b7');if(shot>0){rect(121,80,61*ease((t-4)/3),11,'#699c73');rect(148,58,15*ease((t-6)/2),18,'#e6b86b');}if(shot===2)bubble('Your idea belongs here.',151,24,9);
 }else if(kind==='rumour'||kind==='context'){
  rect(0,0,300,160,'#9a99b0');rect(0,126,300,34,'#746d7b');const full=kind==='context'&&shot>0;
  const handed=full&&t>=6,bx=full?184:136;
  tvPerson('bagTeen',bx,143,76,'idle',full?1:-1,t);
  if(full)tvPerson('adult',258,143,79,'idle',-1,t);
  shoppingBag(full?(handed?238:204):bx-22,139,'#c3a374');
  if(kind==='rumour'){rect(0,0,300,32,'#6e3544');text(shot?'THIEF? SHARE NOW!':'A CLIP WITHOUT CONTEXT',150,21,12,'#ffe3ce');if(shot===2){for(let i=0;i<5;i++)text('↗',25+i*57,60+(i%2)*20,20,'#f5d59a');}}
  else{rect(0,0,300,29,'#254453');text(shot===0?'WHAT IS MISSING?':shot===1?'WATCH THE FULL RECORDING':'CORRECTION: BAG RETURNED',150,20,11,'#d5f1db');}
 }else{
  rect(0,0,300,160,'#283349');for(let i=0;i<3;i++){const yy=17+i*58-Math.min(t,8)*9;rect(24,yy,252,49,['#a1b5c7','#bca4ae','#9bbaa8'][i]);rect(32,yy+7,37,34,'#e4d4a3');text(['ANOTHER AWARD','PERFECT HOLIDAY','BEST DAY EVER'][i],175,yy+27,11,'#263949');}if(shot===2){rect(0,59,300,43,'#101b29ed');text('A FEED OF HIGHLIGHTS',150,84,13,'#e7eedc');}
 }
 c.restore();bubbleSceneWidth=old;
}
function teenTalkHand(x,feet,face,t,skin='#c78f6b',shirt='#a7a5a0'){
 c.save();c.translate(x,feet);c.scale(face,1);const rise=Math.sin(t*4)*2;rect(11,-48,8,8,shirt);rect(16,-43+rise,11,5,skin);rect(24,-45+rise,5,6,skin);c.restore();
}
function drawTeen(rt){
 if(state.phase==='complete'){rect(0,0,640,280,'#000');return;}
 if(state.phase==='finalChoice'){const bg=art.park;if(bg.complete)c.drawImage(bg,0,0,640,280);youth(228,248,84,false,1);hero(397,248,58,false,-1);phone(394,229);bubble('Should I send it?',397,161,11);return;}
 const kind=rounds[state.round].shows[state.selected].kind,out=['encounter','result','exit'].includes(state.phase),result=['result','exit'].includes(state.phase),exit=state.phase==='exit',help=result&&state.response===1,st=exit?state.exitElapsed:rt;
 const bg=!out?art['bedroom-teen']:['status','rumour','context'].includes(kind)?art.alley:kind==='community'?art.park:art.lookout;
 if(bg.complete&&bg.naturalWidth)c.drawImage(bg,0,0,640,280);
 let hx=out?176:actorX,feet=out?248:270,walking=!out&&state.phase==='walking'&&rt<2.1,face=1;
 if(!out){teenTV(320,111,145,78,state.selected,-1);tvGlitch(320,111,145,78);}
 if(out){
  if(['status','rumour','context'].includes(kind))hangingSign(elapsed,false);
  if(kind==='rage'||kind==='status'){
   parkPeer(358,248,'idle',-1,84);const nx=result&&!help?mix(466,694,ease((st-1)/3)):466;npc('boy',nx,248,84,result&&!help&&st>1&&st<4?'walk':'idle',result&&!help?1:-1,elapsed);
   if(result){hx=mix(state.resultFrom||176,help?288:316,ease(st/1.4));walking=st<1.4;if(!help&&!exit&&st<4)emotion(hx,132,kind==='status'?'laugh':'angry');if(st>2&&!exit){if(help)bubble(kind==='rage'?'Let me hear your idea.':'Who cares? They’re just shoes.',hx,128,10);else if(st<4)bubble('Forget it. I’m leaving.',nx,141,10);else bubble(Math.floor(st/2)%2?'Exactly. You get it.':'That’s what I was saying.',Math.floor(st/2)%2?358:hx,136,10);}}
  }else if(kind==='community'){
   rect(331,219,121,10,'#91684b');rect(340,229,7,19,'#634b3e');rect(435,229,7,19,'#634b3e');rect(360,163,63,54,'#e4d5aa');parkPeer(306,248,'idle',1,84);npc('girl',help?mix(489,450,ease(st/2)):result?mix(489,700,ease(st/3)):489,248,84,result&&st<3?'walk':'idle',help?-1:result?1:-1,elapsed);
   if(help){hx=mix(state.resultFrom||176,244,ease(st/1.6));walking=st<1.6;rect(365,192,53*ease((st-1.8)/2),18,'#72a184');rect(386,175,13*ease((st-1.8)/2),13,'#e9b96d');if(st>2&&!exit)bubble('What should we paint?',415,126,10);}
  }else if(kind==='comparison'){
   npc('boy',385,248,84,'idle',-1,elapsed);if(help){hx=mix(state.resultFrom||176,316,ease(st/1.7));walking=st<1.7;if(st>2&&!exit)bubble('Thanks for listening.',385,135,11);}else if(result&&!exit)bubble('...okay.',385,135,11);
  }else{
   parkPeer(330,248,'idle',1,84);const transfer=ease((st-1.2)/1.5);npc('boy',help?mix(448,489,ease(st/1.2)):448,248,84,help&&st<1.2?'walk':'idle',help?1:-1,elapsed);neighbour(535,248);shoppingBag(help?mix(mix(464,505,ease(st/1.2)),516,transfer):432,243,'#c3a374');
   if(result){hx=mix(state.resultFrom||176,374,ease(st/1.6));walking=st<1.6;if(st>2&&!exit)bubble(help?'He brought my bag back.':'Can I explain?',help?535:448,130,10);}
  }
  if(exit){hx=mix(state.exitX??hx,-60,ease(rt/2.5));face=-1;walking=true;}
 }
 youth(hx,feet,84,walking,face);
 state.drawX=hx;if(!out&&state.tokens.length&&state.phase!=='clip')rift(hx,feet-99,elapsed);
 if(state.phase==='clip'){rect(49,5,542,267,'#111629');rect(55,11,530,255,'#bfb5c6');rect(61,17,518,243,'#555371');teenTV(72,24,470,224,state.selected,rt);rect(553,46,14,14,'#141a30');$('caption').textContent=rounds[state.round].shows[state.selected].lines[Math.min(2,Math.floor(rt/4))];}
}
function endingTableau(q){
 const bg=art.lookout;if(bg.complete)c.drawImage(bg,0,0,640,280);const changed=state.finalResponse===1;
 youth(mix(217,288,q),248,84,q<1,1);hero(changed?mix(399,355,q):399,248,58,false,-1);
 if(changed){c.save();c.globalAlpha=q*.28;rect(0,0,640,280,'#c0d7a1');c.restore();}else phone(396,229);
}
function recallLocation(entry){
 let round=Number.isInteger(entry.round)?entry.round:rounds.findIndex(r=>r.shows.some(show=>show.title===entry.show));
 const selected=Number.isInteger(entry.selected)?entry.selected:rounds[round]?.shows.findIndex(show=>show.title===entry.show);
 const age=round<0?'YOUR JOURNEY':round<3?'AGE 6–7':round<5?'AGE 11':round===5?'AGE 15':'AGE 18';
 if(entry.response==='Go to sleep')return {age,place:'BEDROOM'};
 if(round<0)return {age,place:'YOUR CHOICE'};
 const places=[['PLAYGROUND','PLAYGROUND'],['PLAYGROUND','PLAYGROUND'],['PARK','PARK'],['PARK','PLAYGROUND','OUTSIDE THE SHOP'],['FRIEND’S BEDROOM','SHOP ALLEY','LOOKOUT'],['LOOKOUT','OUTSIDE THE SHOP','PARK ART PROJECT'],['OUTSIDE THE SHOP','LOOKOUT','OUTSIDE THE SHOP']];
 return {age,place:places[round]?.[selected]||'OUTSIDE'};
}
function endingCards(){
 const cards=[{duration:9,approach:true},{duration:1.2,blank:true}];
 for(const entry of state.history||[]){const where=recallLocation(entry);cards.push({duration:4,age:where.age,place:where.place,show:entry.show,response:entry.response,entry});}
 cards.push({duration:5,brain:true});
 cards.push({duration:4,text:'You watched the content.'},{duration:4,text:'You made your choices.'},{duration:5,text:'Did you act accordingly?'},{duration:7,text:'Is this who you want to be…'});
 return cards;
}
function endingDuration(){return endingCards().reduce((sum,card)=>sum+card.duration,0);}
function replayMemory(entry,t){
 const round=Number.isInteger(entry.round)?entry.round:rounds.findIndex(r=>r.shows.some(show=>show.title===entry.show));
 if(round<0)return;
 const selected=Number.isInteger(entry.selected)?entry.selected:rounds[round].shows.findIndex(show=>show.title===entry.show);
 const encounter=rounds[round].shows[selected].encounter||rounds[round];
 const response=encounter.actions.indexOf(entry.response);
 const savedState=state,savedElapsed=elapsed,savedStart=phaseStart,savedActor=actorX;
 try{
  state={...savedState,round,selected,phase:'result',response:Math.max(0,response),resultFrom:round===1?280:176,resultAdult:119,sharedAudioPlayed:true,lastSignKnock:99};
  actorX=180;phaseStart=0;elapsed=Math.max(0,t*1.8);
  c.save();c.translate(0,14);c.scale(1,.9);
  if(entry.response==='Go to sleep'){
   const room=art[round>=5?'bedroom-teen':round>=3?'bedroom-preteen':'bedroom'];if(room.complete)c.drawImage(room,0,0,640,280);
   rect(320,111,145,78,'#080b10');if(round>=3)youth(180,270,72,false,1);else hero(180,270,72,false,1);
   c.globalAlpha=.65;rect(0,0,640,280,'#00051b');c.globalAlpha=1;
  }else draw();c.restore();
 }finally{state=savedState;elapsed=savedElapsed;phaseStart=savedStart;actorX=savedActor;document.body.classList.remove?.('watch-blackout');}
}
function endingApproach(t){
 const bg=art.lookout;
 c.save();c.translate(0,40);
 if(bg.complete)c.drawImage(bg,0,0,640,280);
 const progress=ease(t/3.6),olderX=mix(95,267,progress),childX=mix(548,370,progress),walking=t<3.6;
 youth(olderX,248,84,walking,1);
 hero(childX,248,58,walking,-1);
 // The phone stays in the child's near hand, below his face.
 const walkFrame=Math.floor(elapsed*6)%4,f=boyWalkFrames[walkFrame],hand=[[358,430],[884,430],[1414,430],[1944,430]][walkFrame];
 const phoneX=walking?childX-(hand[0]-f[0]-f[2]/2)*58/f[3]:childX-13;
 const phoneY=walking?248-58+(hand[1]-f[1])*58/f[3]:228;
 phone(phoneX,phoneY);
 if(t>4)bubble('Should I send it?',childX,158,12);
 c.restore();
 const fade= t<.7?1-t/.7:t>8?clamp(t-8):0;
 if(fade){c.save();c.globalAlpha=fade;rect(0,0,640,360,'#000');c.restore();}
}
function endingFilm(t){
 rect(0,0,640,360,'#000');const words=$('overlay').querySelector('.ending-words');if(!words)return;
 const cards=endingCards();let start=0,index=0;while(index<cards.length-1&&t>=start+cards[index].duration){start+=cards[index].duration;index++;}
 const card=cards[index],local=t-start;words.style.opacity='1';words.style.display='flex';words.className='ending-words'+(card.text||card.blank?'':' memory-caption');
 if(card.text){words.innerHTML=introLines(card.text,Math.floor(local*24));return;}
 if(card.approach)endingApproach(local);
 if(card.brain){drawBrain(320,180,2.25,ease(local/1.8),null,local);}
 if(card.entry)replayMemory(card.entry,local);

 if(recapCardKey===String(index))return;recapCardKey=String(index);words.innerHTML='';
 if(card.blank)return;

}
function endingNote(t,step){
 const melody=[60,64,67,72,71,67,64,62,60,65,69,72,71,67,62,64,67,72,76,74,72,67,64,60];
 if(step%4===0)tone(pitch(melody[step/4],false),t,.65,.055,'triangle');if(step%16===0){const root=[48,45,53,55,48,48][step/16];for(const n of [root,root+7,root+12])tone(pitch(n,false),t,2.6,.018,'triangle');}
}
function renderEndingSummary(){
 const a=panel('ONE LAST CHOICE','Are you sure you want to send it?','A younger child wants to share a cruel clip.');
 const decide=yes=>{state.endingAnswer=yes;state.finalResponse=yes?0:1;setPhase('finalVerdict');};
 a.append(button('YES',()=>decide(true),'final-answer'),button('NO',()=>decide(false),'final-answer'));
}
function showJourney(){
 const a=panel('YOUR JOURNEY','WHAT YOU WATCHED. WHAT YOU CHOSE.','Each moment added something. No single programme or choice defined your whole life.');
 const list=document.createElement('ol');list.className='journey-list';for(const entry of state.history){const item=document.createElement('li');item.textContent=entry.show+' — '+entry.response;list.append(item);}const last=document.createElement('li');last.textContent=state.finalResponse===1?'Final choice — Don’t share it.':'Final choice — Send the clip on.';list.append(last);$('panel').insertBefore(list,a);a.append(button('BACK TO ENDING',renderUI,'primary'),button('REPLAY FROM CHILDHOOD',begin,'response'));
}

renderUI();requestAnimationFrame(tick);
