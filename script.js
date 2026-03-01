/* ============================================================
   ELITE TIMER — script.js
   WOD Library (60) · Theme Engine · Custom WOD Creator
   Wake Lock · State Machine · Web Audio API
   ============================================================ */

'use strict';

/* ============================================================
   WOD LIBRARY — 60 classic CrossFit benchmarks
   Schema: { id, name, category, type, description, defaultConfig }
   Types: 'fortime' | 'amrap' | 'emom' | 'tabata' | 'custom'
   ============================================================ */
const WOD_LIBRARY = [

  /* ── THE GIRLS (20) ───────────────────────────────────────── */
  {
    id: 'fran', name: 'Fran', category: 'girl', type: 'fortime',
    description: '21-15-9 reps for time of:\n• Thrusters (95 / 65 lb)\n• Pull-ups',
    defaultConfig: { timeCap: 10 * 60 * 1000 },
  },
  {
    id: 'grace', name: 'Grace', category: 'girl', type: 'fortime',
    description: '30 Clean & Jerks for time\n(135 / 95 lb)',
    defaultConfig: { timeCap: 10 * 60 * 1000 },
  },
  {
    id: 'helen', name: 'Helen', category: 'girl', type: 'fortime',
    description: '3 rounds for time:\n• 400 m Run\n• 21 Kettlebell Swings (53 / 35 lb)\n• 12 Pull-ups',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'karen', name: 'Karen', category: 'girl', type: 'fortime',
    description: '150 Wall Balls for time\n(20 / 14 lb to 10 / 9 ft target)',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'annie', name: 'Annie', category: 'girl', type: 'fortime',
    description: '50-40-30-20-10 reps for time of:\n• Double-Unders\n• Sit-ups',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'isabel', name: 'Isabel', category: 'girl', type: 'fortime',
    description: '30 Snatches for time\n(135 / 95 lb)',
    defaultConfig: { timeCap: 10 * 60 * 1000 },
  },
  {
    id: 'diane', name: 'Diane', category: 'girl', type: 'fortime',
    description: '21-15-9 reps for time of:\n• Deadlifts (225 / 155 lb)\n• Handstand Push-ups',
    defaultConfig: { timeCap: 10 * 60 * 1000 },
  },
  {
    id: 'elizabeth', name: 'Elizabeth', category: 'girl', type: 'fortime',
    description: '21-15-9 reps for time of:\n• Cleans (135 / 95 lb)\n• Ring Dips',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'amanda', name: 'Amanda', category: 'girl', type: 'fortime',
    description: '9-7-5 reps for time of:\n• Muscle-ups\n• Snatches (135 / 95 lb)',
    defaultConfig: { timeCap: 10 * 60 * 1000 },
  },
  {
    id: 'linda', name: 'Linda', category: 'girl', type: 'fortime',
    description: '10-9-8-7-6-5-4-3-2-1 reps for time of:\n• Deadlift (1.5 × bodyweight)\n• Bench Press (bodyweight)\n• Clean (0.75 × bodyweight)',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'mary', name: 'Mary', category: 'girl', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 5 Handstand Push-ups\n• 10 Pistols (alternating legs)\n• 15 Pull-ups',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'eva', name: 'Eva', category: 'girl', type: 'fortime',
    description: '5 rounds for time:\n• 800 m Run\n• 30 Kettlebell Swings (70 / 53 lb)\n• 30 Pull-ups',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'jackie', name: 'Jackie', category: 'girl', type: 'fortime',
    description: 'For time:\n• 1000 m Row\n• 50 Thrusters (45 lb)\n• 30 Pull-ups',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'kelly', name: 'Kelly', category: 'girl', type: 'fortime',
    description: '5 rounds for time:\n• 400 m Run\n• 30 Box Jumps (24 / 20 in)\n• 30 Wall Balls (20 / 14 lb)',
    defaultConfig: { timeCap: 40 * 60 * 1000 },
  },
  {
    id: 'nicole', name: 'Nicole', category: 'girl', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 400 m Run\n• Max Pull-ups\n\nRecord pull-up reps for each round.',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'nancy', name: 'Nancy', category: 'girl', type: 'fortime',
    description: '5 rounds for time:\n• 400 m Run\n• 15 Overhead Squats (95 / 65 lb)',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'cindy', name: 'Cindy', category: 'girl', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 5 Pull-ups\n• 10 Push-ups\n• 15 Air Squats',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'lynne', name: 'Lynne', category: 'girl', type: 'fortime',
    description: '5 rounds for max reps (no time limit per round):\n• Bench Press (bodyweight)\n• Pull-ups\n\nRest as needed between rounds. Score = total reps.',
    defaultConfig: { timeCap: 0 },
  },
  {
    id: 'christine', name: 'Christine', category: 'girl', type: 'fortime',
    description: '3 rounds for time:\n• 500 m Row\n• 12 Deadlifts (bodyweight)\n• 21 Box Jumps (20 in)',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'ingrid', name: 'Ingrid', category: 'girl', type: 'fortime',
    description: 'For time:\n• 21 Thrusters (65 / 45 lb)\n• 400 m Run\n• 21 Thrusters (65 / 45 lb)',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },

  /* ── HEROES (27) ─────────────────────────────────────────── */
  {
    id: 'murph', name: 'Murph', category: 'hero', type: 'fortime',
    description: 'For time (with 20 lb vest / body armor):\n• 1 Mile Run\n• 100 Pull-ups\n• 200 Push-ups\n• 300 Air Squats\n• 1 Mile Run\n\nPartition pull-ups, push-ups, and squats as needed.',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'dt', name: 'DT', category: 'hero', type: 'fortime',
    description: '5 rounds for time:\n• 12 Deadlifts (155 / 105 lb)\n• 9 Hang Power Cleans (155 / 105 lb)\n• 6 Push Jerks (155 / 105 lb)',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'michael', name: 'Michael', category: 'hero', type: 'fortime',
    description: '3 rounds for time:\n• 800 m Run\n• 50 Back Extensions\n• 50 Sit-ups',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'nate', name: 'Nate', category: 'hero', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 2 Muscle-ups\n• 4 Handstand Push-ups\n• 8 Kettlebell Swings (70 / 53 lb)',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'danny', name: 'Danny', category: 'hero', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 30 Box Jumps (24 in)\n• 20 Push-ups\n• 10 Pull-ups',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'josh', name: 'Josh', category: 'hero', type: 'fortime',
    description: '21-15-9 reps for time of:\n• Overhead Squats (95 / 65 lb)\n• Pull-ups',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'griff', name: 'Griff', category: 'hero', type: 'fortime',
    description: 'For time:\n• 800 m Run\n• 400 m Run (backwards)\n• 800 m Run\n• 400 m Run (backwards)',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'manion', name: 'Manion', category: 'hero', type: 'fortime',
    description: '7 rounds for time:\n• 400 m Run\n• 29 Back Squats (135 / 95 lb)',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'loredo', name: 'Loredo', category: 'hero', type: 'fortime',
    description: '6 rounds for time:\n• 24 Air Squats\n• 24 Push-ups\n• 24 Walking Lunges\n• 400 m Run',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'whitten', name: 'Whitten', category: 'hero', type: 'fortime',
    description: '5 rounds for time:\n• 22 Kettlebell Swings (53 / 35 lb)\n• 22 Box Jumps (24 / 20 in)\n• 400 m Run\n• 22 Burpees\n• 22 Wall Balls (20 / 14 lb)',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'arnie', name: 'Arnie', category: 'hero', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 21 Double-Unders\n• 9 Power Snatches (75 / 55 lb)',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'badger', name: 'Badger', category: 'hero', type: 'fortime',
    description: '3 rounds for time:\n• 30 Squat Cleans (95 / 65 lb)\n• 30 Pull-ups\n• 800 m Run',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'omar', name: 'Omar', category: 'hero', type: 'fortime',
    description: '10 rounds for time:\n• 10 Front Squats (95 / 65 lb)\n• 15 Double-Unders',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'spehar', name: 'Spehar', category: 'hero', type: 'fortime',
    description: '5 rounds for time:\n• 30 Cal Row\n• 25 Deadlifts (225 / 155 lb)',
    defaultConfig: { timeCap: 40 * 60 * 1000 },
  },
  {
    id: 'luce', name: 'Luce', category: 'hero', type: 'fortime',
    description: '3 rounds for time:\n• 1.5 Mile Run\n• 100 Pull-ups',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'jack', name: 'Jack', category: 'hero', type: 'amrap',
    description: 'AMRAP 20 minutes:\n• 10 Push Press (115 / 85 lb)\n• 10 Kettlebell Swings (53 / 35 lb)\n• 10 Box Jumps (24 / 20 in)',
    defaultConfig: { totalMs: 20 * 60 * 1000 },
  },
  {
    id: 'tommy-v', name: 'Tommy V', category: 'hero', type: 'fortime',
    description: 'For time:\n• 21 Thrusters (115 / 85 lb)\n• 12 Rope Climbs (15 ft)\n• 15 Thrusters (115 / 85 lb)\n• 9 Rope Climbs (15 ft)\n• 9 Thrusters (115 / 85 lb)\n• 6 Rope Climbs (15 ft)',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'hansen', name: 'Hansen', category: 'hero', type: 'fortime',
    description: '5 rounds for time:\n• 30 Kettlebell Swings (70 / 53 lb)\n• 30 Pull-ups\n• 30 Box Jumps (24 in)\n• 30 Double-Unders',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'mcghee', name: 'McGhee', category: 'hero', type: 'fortime',
    description: '30 rounds for time:\n• 5 Pull-ups\n• 10 Push-ups\n• 15 Air Squats',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'klepto', name: 'Klepto', category: 'hero', type: 'fortime',
    description: '5 rounds for time:\n• 10 Handstand Push-ups\n• 15 Pull-ups\n• 200 m Run',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'nutts', name: 'Nutts', category: 'hero', type: 'fortime',
    description: 'For time:\n• 10 Handstand Push-ups\n• 15 Deadlifts (250 / 170 lb)\n• 25 Box Jumps (30 / 24 in)\n• 50 Pull-ups\n• 100 Wall Balls (20 / 14 lb)\n• 200 Double-Unders\n• 400 m Run w/ 45 lb plate',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'santora', name: 'Santora', category: 'hero', type: 'fortime',
    description: '3 rounds for time:\n• 23 Pull-ups\n• 23 Back Squats (195 / 135 lb)',
    defaultConfig: { timeCap: 40 * 60 * 1000 },
  },
  {
    id: 'daniel', name: 'Daniel', category: 'hero', type: 'fortime',
    description: 'For time:\n• 50 Pull-ups\n• 400 m Run\n• 21 Thrusters (95 / 65 lb)\n• 800 m Run\n• 21 Thrusters (95 / 65 lb)\n• 400 m Run\n• 50 Pull-ups',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'coe', name: 'Coe', category: 'hero', type: 'fortime',
    description: '10 rounds for time:\n• 10 Rings Dips\n• 15 Push-ups',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'bulger', name: 'Bulger', category: 'hero', type: 'fortime',
    description: 'For time:\n• 200 m Run\n• 25 Kettlebell Swings (53 / 35 lb)\n• 200 m Run\n• 25 Burpees\n• 200 m Run\n• 25 Pull-ups\n• 200 m Run\n• 25 Wall Balls (20 / 14 lb)\n• 200 m Run',
    defaultConfig: { timeCap: 40 * 60 * 1000 },
  },
  {
    id: 'the-seven', name: 'The Seven', category: 'hero', type: 'fortime',
    description: '7 rounds for time:\n• 7 Handstand Push-ups\n• 7 Thrusters (135 / 95 lb)\n• 7 Knees-to-Elbows\n• 7 Deadlifts (245 / 170 lb)\n• 7 Burpees\n• 7 Kettlebell Swings (70 / 53 lb)\n• 7 Pull-ups',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'lumberjack-20', name: 'Lumberjack 20', category: 'hero', type: 'fortime',
    description: 'For time:\n• 20 Deadlifts (275 / 185 lb)\n• 400 m Run\n• 20 KB Swings (70 / 53 lb)\n• 400 m Run\n• 20 Overhead Squats (115 / 80 lb)\n• 400 m Run\n• 20 Burpees\n• 400 m Run\n• 20 Chest-to-Bar Pull-ups\n• 400 m Run\n• 20 Box Jumps (24 in)\n• 400 m Run\n• 20 DB Squat Cleans (45 / 30 lb)\n• 400 m Run',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },

  /* ── BENCHMARKS (13) ──────────────────────────────────────── */
  {
    id: 'fight-gone-bad', name: 'Fight Gone Bad', category: 'benchmark', type: 'custom',
    description: '3 rounds × 5 stations × 1 minute each, 1 min rest between rounds:\n• Wall Balls (20 / 14 lb)\n• Sumo Deadlift High Pull (75 / 55 lb)\n• Box Jumps (20 in)\n• Push Press (75 / 55 lb)\n• Row (calories)\n\nScore = total reps + calories across all rounds.',
    defaultConfig: { workMs: 60 * 1000, restMs: 60 * 1000, rounds: 3 },
  },
  {
    id: 'tabata-something-else', name: 'Tabata Something Else', category: 'benchmark', type: 'tabata',
    description: '32 intervals of 20 s on / 10 s off (8 rounds each):\n• Pull-ups\n• Push-ups\n• Sit-ups\n• Air Squats\n\nScore = total reps (lowest count per exercise × 8 × 4).',
    defaultConfig: { workMs: 20 * 1000, restMs: 10 * 1000, rounds: 32 },
  },
  {
    id: 'death-by-pull-ups', name: 'Death By Pull-ups', category: 'benchmark', type: 'emom',
    description: 'EMOM: Minute 1 = 1 pull-up, Minute 2 = 2 pull-ups…\nContinue until you cannot complete the required reps within 60 s.\n\nScore = last complete minute.',
    defaultConfig: { intervalMs: 60 * 1000, rounds: 20 },
  },
  {
    id: 'barbara', name: 'Barbara', category: 'benchmark', type: 'fortime',
    description: '5 rounds for time (3 min rest between rounds):\n• 20 Pull-ups\n• 30 Push-ups\n• 40 Sit-ups\n• 50 Air Squats\n\nNote: Rest is self-timed; use Skip between rounds.',
    defaultConfig: { timeCap: 60 * 60 * 1000 },
  },
  {
    id: 'chelsea', name: 'Chelsea', category: 'benchmark', type: 'emom',
    description: 'EMOM 30 minutes:\n• 5 Pull-ups\n• 10 Push-ups\n• 15 Air Squats\n\nIf you cannot complete all reps in 60 s, switch to Cindy style.',
    defaultConfig: { intervalMs: 60 * 1000, rounds: 30 },
  },
  {
    id: 'randy', name: 'Randy', category: 'benchmark', type: 'fortime',
    description: '75 Power Snatches for time\n(75 / 55 lb)',
    defaultConfig: { timeCap: 15 * 60 * 1000 },
  },
  {
    id: 'kalsu', name: 'Kalsu', category: 'benchmark', type: 'fortime',
    description: '100 Thrusters for time (135 / 95 lb)\n\nAt the top of every minute (including 0:00) perform 5 Burpees before continuing Thrusters.\n\nScore = total time.',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'king-kong', name: 'King Kong', category: 'benchmark', type: 'fortime',
    description: '3 rounds for time:\n• 1 Deadlift (455 / 310 lb)\n• 2 Muscle-ups\n• 3 Squat Cleans (250 / 170 lb)\n• 4 Handstand Push-ups',
    defaultConfig: { timeCap: 20 * 60 * 1000 },
  },
  {
    id: 'angie', name: 'Angie', category: 'benchmark', type: 'fortime',
    description: 'For time:\n• 100 Pull-ups\n• 100 Push-ups\n• 100 Sit-ups\n• 100 Air Squats\n\nComplete all reps of each exercise before moving to the next.',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'filthy-fifty', name: 'Filthy Fifty', category: 'benchmark', type: 'fortime',
    description: 'For time — 50 reps of each:\n• Box Jumps (24 / 20 in)\n• Jumping Pull-ups\n• Kettlebell Swings (35 / 26 lb)\n• Walking Lunges\n• Knees-to-Elbows\n• Push Press (45 lb)\n• Back Extensions\n• Wall Balls (20 / 14 lb)\n• Burpees\n• Double-Unders',
    defaultConfig: { timeCap: 45 * 60 * 1000 },
  },
  {
    id: 'the-chief', name: 'The Chief', category: 'benchmark', type: 'amrap',
    description: '5 × 3-minute AMRAPs with 1 min rest between each:\n• 3 Power Cleans (135 / 95 lb)\n• 6 Push-ups\n• 9 Air Squats\n\nResume where you left off each round. Score = total rounds + reps.',
    defaultConfig: { totalMs: 3 * 60 * 1000 },
  },
  {
    id: 'row-5k', name: '5k Row', category: 'benchmark', type: 'fortime',
    description: 'Row 5000 m for time.\n\nPace strategy: negative split recommended.\nScore = total time.',
    defaultConfig: { timeCap: 30 * 60 * 1000 },
  },
  {
    id: 'run-5k', name: 'Run 5k', category: 'benchmark', type: 'fortime',
    description: 'Run 5000 m (3.1 miles) for time.\n\nScore = total time.',
    defaultConfig: { timeCap: 35 * 60 * 1000 },
  },
];

/* ─── Freeze built-in library ───────────────────────────────── */
Object.freeze(WOD_LIBRARY);

/* ============================================================
   THEME ENGINE
   Persists to localStorage['elite-timer-theme']
   Drives data-theme on <html> + updates meta-theme-color
   ============================================================ */
const THEME_KEY = 'elite-timer-theme';

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved, false);
}

function applyTheme(theme, save = true) {
  document.documentElement.dataset.theme = theme;

  // Update browser chrome color
  const metaTheme = document.getElementById('meta-theme-color');
  if (metaTheme) metaTheme.content = theme === 'light' ? '#FFFFFF' : '#121212';

  // Sync switcher buttons
  const dark  = document.getElementById('btn-theme-dark');
  const light = document.getElementById('btn-theme-light');
  if (dark)  dark.classList.toggle('active',  theme === 'dark');
  if (light) light.classList.toggle('active', theme === 'light');

  if (save) localStorage.setItem(THEME_KEY, theme);
}

/* ============================================================
   CUSTOM WOD SYSTEM
   Persists to localStorage['elite-timer-custom-wods']
   ============================================================ */
const CUSTOM_WOD_KEY = 'elite-timer-custom-wods';
let customWODs = [];

function loadCustomWODs() {
  try {
    const raw = localStorage.getItem(CUSTOM_WOD_KEY);
    customWODs = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(customWODs)) customWODs = [];
  } catch (_) { customWODs = []; }
}

function saveCustomWODs() {
  localStorage.setItem(CUSTOM_WOD_KEY, JSON.stringify(customWODs));
}

function addCustomWOD(wod) {
  customWODs.unshift(wod); // newest first
  saveCustomWODs();
}

function deleteCustomWOD(id) {
  customWODs = customWODs.filter(w => w.id !== id);
  saveCustomWODs();
}

/* ============================================================
   WEB AUDIO API
   ============================================================ */
let audioCtx = null;

function getAudioCtx() {
  const AC = window.AudioContext || /** @type {any} */ (window).webkitAudioContext;
  if (!audioCtx) audioCtx = new AC();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function beep(freq = 880, dur = 0.08, gain = 0.6, type = 'square') {
  if (!settings.soundOn) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    env.gain.setValueAtTime(gain, ctx.currentTime);
    env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(env); env.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + dur + 0.01);
  } catch (_) { /* audio not available */ }
}

const beepCountdown = () => beep(660, 0.09, 0.7, 'square');
const beepGo        = () => beep(1046, 0.22, 0.8, 'square');
const beepRest      = () => beep(440, 0.28, 0.7, 'sine');
const beepFinish    = () => { beep(880, 0.15, 0.8, 'square'); setTimeout(() => beep(1320, 0.3, 0.8, 'square'), 200); };

/* ============================================================
   WAKE LOCK API  — keeps screen on while a workout is active
   ============================================================ */
let wakeLock = null;

async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => { wakeLock = null; });
    dom.wakelockDot?.classList.add('active');
  } catch (_) { /* permission denied or not supported */ }
}

function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
  dom.wakelockDot?.classList.remove('active');
}

document.addEventListener('visibilitychange', async () => {
  if (
    document.visibilityState === 'visible' &&
    timer.state !== STATE.IDLE &&
    timer.state !== STATE.FINISHED &&
    !timer.isPaused
  ) {
    await acquireWakeLock();
  }
});

/* ============================================================
   STATE MACHINE
   ============================================================ */
const STATE = Object.freeze({
  IDLE:      'idle',
  COUNTDOWN: 'countdown',
  WORKING:   'working',
  RESTING:   'resting',
  FINISHED:  'finished',
});

/* ============================================================
   SETTINGS
   ============================================================ */
const settings = {
  mode: 'amrap',       // 'amrap' | 'emom' | 'tabata' | 'custom' | 'fortime'
  soundOn: true,
  showMs: true,
  countdownDuration: 10,
  activeWOD: null,     // WOD_LIBRARY entry, customWODs entry, or null

  amrap:   { totalMs: 20 * 60 * 1000 },
  emom:    { intervalMs: 60 * 1000, rounds: 10 },
  tabata:  { workMs: 20 * 1000, restMs: 10 * 1000, rounds: 8 },
  custom:  { workMs: 45 * 1000, restMs: 15 * 1000, rounds: 10 },
  fortime: { timeCap: 10 * 60 * 1000 }, // 0 = no cap
};

/* ============================================================
   TIMER STATE
   ============================================================ */
const timer = {
  state:           STATE.IDLE,
  rafId:           null,
  startTs:         0,
  pausedElapsed:   0,
  isPaused:        false,

  phaseDurationMs: 0,
  phaseElapsedMs:  0,

  currentRound:    0,
  totalRounds:     0,

  workoutStartTs:   0,
  workoutElapsedMs: 0,

  beepedAt: { 5: false, 4: false, 3: false, 2: false, 1: false },
};

/* ============================================================
   DOM REFS
   ============================================================ */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

const dom = {
  /* clock */
  clockMin:    $('clock-minutes'),
  clockSec:    $('clock-seconds'),
  clockMs:     $('clock-ms'),
  clockEl:     $('clock'),
  clockWrapper:$('clock-wrapper'),
  phaseText:   $('phase-text'),
  progressFill:$('progress-fill'),

  /* stat bar */
  statRound:        $('stat-round'),
  statTotal:        $('stat-total'),
  statElapsed:      $('stat-elapsed'),
  statLabelRound:   $('stat-label-round'),
  statLabelTotal:   $('stat-label-total'),
  statLabelElapsed: $('stat-label-elapsed'),

  /* controls */
  btnStart:  $('btn-start'),
  btnReset:  $('btn-reset'),
  btnSkip:   $('btn-skip'),
  iconPlay:  document.querySelector('.icon-play'),
  iconPause: document.querySelector('.icon-pause'),

  /* settings */
  settingsDrawer:  $('settings-drawer'),
  settingsOverlay: $('settings-overlay'),
  btnSettings:     $('btn-settings'),
  btnClose:        $('btn-close-settings'),
  btnApply:        $('btn-apply-settings'),
  toggleSound:     $('toggle-sound'),
  toggleMs:        $('toggle-ms'),
  modeButtons:     $$('.mode-btn'),
  settingsSections: {
    amrap:   $('settings-amrap'),
    emom:    $('settings-emom'),
    tabata:  $('settings-tabata'),
    custom:  $('settings-custom'),
  },
  inputs: {
    amrapMin:         $('amrap-min'),
    amrapSec:         $('amrap-sec'),
    emomIntervalMin:  $('emom-interval-min'),
    emomIntervalSec:  $('emom-interval-sec'),
    emomRounds:       $('emom-rounds'),
    tabataWork:       $('tabata-work'),
    tabataRest:       $('tabata-rest'),
    tabataRounds:     $('tabata-rounds'),
    customWorkMin:    $('custom-work-min'),
    customWorkSec:    $('custom-work-sec'),
    customRestMin:    $('custom-rest-min'),
    customRestSec:    $('custom-rest-sec'),
    customRounds:     $('custom-rounds'),
    countdownDuration:$('countdown-duration'),
  },

  /* theme */
  btnThemeDark:  $('btn-theme-dark'),
  btnThemeLight: $('btn-theme-light'),

  /* WOD picker */
  btnWod:        $('btn-wod'),
  wodBanner:     $('wod-banner'),
  wodBannerName: $('wod-banner-name'),
  wodBannerType: $('wod-banner-type'),
  wodBannerCap:  $('wod-banner-cap'),
  btnWodInfo:    $('btn-wod-info'),
  wodDrawer:     $('wod-drawer'),
  wodOverlay:    $('wod-overlay'),
  btnWodClose:   $('btn-wod-close'),
  wodSearch:     $('wod-search'),
  wodList:       $('wod-list'),
  wodCats:       $$('.wod-cat'),
  btnCreateWod:  $('btn-create-wod'),

  /* WOD info */
  wodInfoDrawer:   $('wod-info-drawer'),
  wodInfoOverlay:  $('wod-info-overlay'),
  btnWodInfoClose: $('btn-wod-info-close'),
  wodInfoName:     $('wod-info-name'),
  wodInfoBadge:    $('wod-info-badge'),
  wodInfoCap:      $('wod-info-cap'),
  wodInfoDesc:     $('wod-info-description'),
  btnWodUse:       $('btn-wod-use'),
  btnDeleteWod:    $('btn-delete-wod'),

  /* WOD create */
  wodCreateDrawer:   $('wod-create-drawer'),
  wodCreateOverlay:  $('wod-create-overlay'),
  btnCreateClose:    $('btn-create-close'),
  createName:        $('create-name'),
  createType:        $('create-type'),
  createConfigBlocks: {
    fortime: $('create-config-fortime'),
    amrap:   $('create-config-amrap'),
    emom:    $('create-config-emom'),
    tabata:  $('create-config-tabata'),
    custom:  $('create-config-custom'),
  },
  createInputs: {
    fortimeCapMin: $('create-cap-min'),
    fortimeCapSec: $('create-cap-sec'),
    amrapMin:      $('create-amrap-min'),
    amrapSec:      $('create-amrap-sec'),
    emomMin:       $('create-emom-min'),
    emomSec:       $('create-emom-sec'),
    emomRounds:    $('create-emom-rounds'),
    tabataWork:    $('create-tabata-work'),
    tabataRest:    $('create-tabata-rest'),
    tabataRounds:  $('create-tabata-rounds'),
    customWorkMin: $('create-work-min'),
    customWorkSec: $('create-work-sec'),
    customRestMin: $('create-rest-min'),
    customRestSec: $('create-rest-sec'),
    customRounds:  $('create-custom-rounds'),
  },
  createDescription: $('create-description'),
  createError:       $('create-error'),
  btnSaveWod:        $('btn-save-wod'),

  /* finished */
  finishedOverlay:     $('finished-overlay'),
  finishedRounds:      $('finished-rounds'),
  finishedTime:        $('finished-time'),
  finishedLabelRounds: $('finished-label-rounds'),
  btnFinishedClose:    $('btn-finished-close'),

  /* wake lock indicator */
  wakelockDot: document.querySelector('.wakelock-dot'),

  /* landscape FABs */
  lsBtnReset:  $('ls-btn-reset'),
  lsBtnStart:  $('ls-btn-start'),
  lsIconPlay:  document.querySelector('.icon-play-ls'),
  lsIconPause: document.querySelector('.icon-pause-ls'),
};

/* ============================================================
   FORMATTING
   ============================================================ */
const pad = n => String(Math.floor(n)).padStart(2, '0');

function formatMs(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}

/* ============================================================
   RENDER
   ============================================================ */
function renderClock(remainingMs) {
  const s = Math.max(0, Math.floor(remainingMs / 1000));
  dom.clockMin.textContent = pad(Math.floor(s / 60));
  dom.clockSec.textContent = pad(s % 60);
  dom.clockMs.textContent  = pad(Math.floor((remainingMs % 1000) / 10));
}

function renderCountUp(elapsedMs) {
  const s = Math.floor(elapsedMs / 1000);
  dom.clockMin.textContent = pad(Math.floor(s / 60));
  dom.clockSec.textContent = pad(s % 60);
  dom.clockMs.textContent  = pad(Math.floor((elapsedMs % 1000) / 10));
}

function renderProgress(elapsed, total) {
  const ratio = Math.min(1, Math.max(0, total > 0 ? elapsed / total : 0));
  dom.progressFill.style.strokeDashoffset = (1 - ratio) * 992.73;
}

function setPhaseColor(state) {
  document.body.dataset.state = state;
  const clr = getComputedStyle(document.body).getPropertyValue('--clr-state').trim();
  dom.progressFill.style.stroke = clr;
  dom.progressFill.style.filter = `drop-shadow(0 0 6px ${clr})`;
}

function setPhaseLabel(text) { dom.phaseText.textContent = text; }

function setPlayPauseIcon(playing) {
  dom.iconPlay.classList.toggle('hidden', playing);
  dom.iconPause.classList.toggle('hidden', !playing);
  dom.lsIconPlay?.classList.toggle('hidden', playing);
  dom.lsIconPause?.classList.toggle('hidden', !playing);
}

function updateStatBar() {
  const mode = settings.mode;

  if (timer.state === STATE.IDLE) {
    dom.statLabelRound.textContent   = 'ROUND';
    dom.statLabelTotal.textContent   = 'TOTAL';
    dom.statLabelElapsed.textContent = 'ELAPSED';
    dom.statRound.textContent   = '—';
    dom.statTotal.textContent   = '—';
    dom.statElapsed.textContent = '0:00';
    return;
  }

  if (mode === 'fortime') {
    dom.statLabelRound.textContent   = 'MODE';
    dom.statLabelTotal.textContent   = 'TIME CAP';
    dom.statLabelElapsed.textContent = 'ELAPSED';
    dom.statRound.textContent  = 'TIME';
    dom.statTotal.textContent  = settings.fortime.timeCap > 0
      ? formatMs(settings.fortime.timeCap) : '∞';
    dom.statElapsed.textContent = formatMs(timer.workoutElapsedMs);
    return;
  }

  dom.statLabelRound.textContent   = 'ROUND';
  dom.statLabelTotal.textContent   = 'TOTAL';
  dom.statLabelElapsed.textContent = 'ELAPSED';
  dom.statRound.textContent   = timer.currentRound > 0 ? timer.currentRound : '—';
  dom.statTotal.textContent   = timer.totalRounds  > 0 ? timer.totalRounds  : '∞';
  dom.statElapsed.textContent = formatMs(timer.workoutElapsedMs);
}

/* ============================================================
   HEARTBEAT — final 5 s
   ============================================================ */
let heartbeatActive = false;

function checkHeartbeat(remSec) {
  if (remSec <= 5 && remSec > 0 && !heartbeatActive) {
    dom.clockEl.classList.add('heartbeat');
    heartbeatActive = true;
  } else if (remSec > 5 && heartbeatActive) {
    dom.clockEl.classList.remove('heartbeat');
    heartbeatActive = false;
  }
}
function clearHeartbeat() {
  dom.clockEl.classList.remove('heartbeat');
  heartbeatActive = false;
}

/* ============================================================
   COUNTDOWN BEEPS — 3-2-1
   ============================================================ */
function checkCountdownBeeps(remSec) {
  const s = Math.ceil(remSec);
  if (s <= 3 && s >= 1 && !timer.beepedAt[s]) {
    timer.beepedAt[s] = true;
    beepCountdown();
  }
}
function resetBeepedAt() { for (const k in timer.beepedAt) timer.beepedAt[k] = false; }

/* ============================================================
   RAF LOOP
   ============================================================ */
function tick(now) {
  if (timer.isPaused) return;

  const elapsed = timer.pausedElapsed + (now - timer.startTs);
  timer.phaseElapsedMs   = elapsed;
  timer.workoutElapsedMs = timer.state === STATE.COUNTDOWN
    ? 0
    : performance.now() - timer.workoutStartTs;

  switch (timer.state) {
    case STATE.COUNTDOWN: tickCountdown(elapsed); break;
    case STATE.WORKING:   tickWorking(elapsed);   break;
    case STATE.RESTING:   tickResting(elapsed);   break;
    default: return;
  }

  updateStatBar();
  timer.rafId = requestAnimationFrame(tick);
}

/* ── Phase tickers ──────────────────────────────────────────── */
function tickCountdown(elapsed) {
  const remaining = timer.phaseDurationMs - elapsed;
  renderClock(remaining);
  renderProgress(elapsed, timer.phaseDurationMs);
  checkCountdownBeeps(remaining / 1000);
  checkHeartbeat(remaining / 1000);
  if (remaining <= 0) { clearHeartbeat(); resetBeepedAt(); transitionToWorking(); }
}

function tickWorking(elapsed) {
  const mode = settings.mode;

  /* ── FOR TIME — stopwatch counting up, optional cap ──────── */
  if (mode === 'fortime') {
    const cap = settings.fortime.timeCap;
    renderCountUp(elapsed);

    if (cap > 0) {
      renderProgress(elapsed, cap);
      const remSec = (cap - elapsed) / 1000;
      checkCountdownBeeps(remSec);
      checkHeartbeat(remSec);
      if (elapsed >= cap) { clearHeartbeat(); transitionToFinished(); }
    } else {
      renderProgress(0, 1); // empty ring — no cap
    }
    return;
  }

  /* ── AMRAP — countdown to zero ───────────────────────────── */
  if (mode === 'amrap') {
    const remaining = timer.phaseDurationMs - elapsed;
    renderClock(remaining);
    renderProgress(elapsed, timer.phaseDurationMs);
    const remSec = remaining / 1000;
    checkCountdownBeeps(remSec);
    checkHeartbeat(remSec);
    if (remaining <= 0) { clearHeartbeat(); transitionToFinished(); }
    return;
  }

  /* ── Interval modes (EMOM / TABATA / CUSTOM) ─────────────── */
  const remaining = timer.phaseDurationMs - elapsed;
  renderClock(remaining);
  renderProgress(elapsed, timer.phaseDurationMs);
  const remSec = remaining / 1000;
  checkCountdownBeeps(remSec);
  checkHeartbeat(remSec);

  if (remaining <= 0) {
    clearHeartbeat();
    resetBeepedAt();

    if (timer.currentRound >= timer.totalRounds) {
      transitionToFinished();
    } else if (mode === 'emom') {
      timer.currentRound++;
      startWorkPhase();
      beepGo();
    } else {
      transitionToResting();
    }
  }
}

function tickResting(elapsed) {
  const remaining = timer.phaseDurationMs - elapsed;
  renderClock(remaining);
  renderProgress(elapsed, timer.phaseDurationMs);
  const remSec = remaining / 1000;
  checkCountdownBeeps(remSec);
  checkHeartbeat(remSec);

  if (remaining <= 0) {
    clearHeartbeat();
    resetBeepedAt();
    if (timer.currentRound >= timer.totalRounds) {
      transitionToFinished();
    } else {
      timer.currentRound++;
      transitionToWorking();
    }
  }
}

/* ============================================================
   TRANSITIONS
   ============================================================ */
function transitionToCountdown() {
  const m = settings.mode;
  timer.state            = STATE.COUNTDOWN;
  timer.phaseDurationMs  = settings.countdownDuration * 1000;
  timer.workoutStartTs   = performance.now();
  timer.workoutElapsedMs = 0;
  timer.currentRound     = 0;

  timer.totalRounds =
    m === 'amrap'   ? 0 :
    m === 'fortime' ? 0 :
    m === 'emom'    ? settings.emom.rounds :
    m === 'tabata'  ? settings.tabata.rounds :
                      settings.custom.rounds;

  beginPhase();
  setPhaseColor('countdown');
  setPhaseLabel('GET READY');
  setPlayPauseIcon(true);
}

function transitionToWorking() {
  timer.currentRound++;
  startWorkPhase();
  beepGo();
  setPhaseColor('working');
}

function startWorkPhase() {
  const m = settings.mode;

  // Reset elapsed the moment the first working phase begins (not during countdown)
  if (timer.state === STATE.COUNTDOWN) {
    timer.workoutStartTs   = performance.now();
    timer.workoutElapsedMs = 0;
  }

  if (m === 'amrap') {
    timer.phaseDurationMs = settings.amrap.totalMs;
    timer.currentRound    = 1;
    timer.totalRounds     = 0;
  } else if (m === 'fortime') {
    timer.phaseDurationMs = settings.fortime.timeCap > 0
      ? settings.fortime.timeCap
      : 99 * 60 * 1000;
    timer.currentRound = 0;
    timer.totalRounds  = 0;
  } else if (m === 'emom') {
    timer.phaseDurationMs = settings.emom.intervalMs;
  } else if (m === 'tabata') {
    timer.phaseDurationMs = settings.tabata.workMs;
  } else {
    timer.phaseDurationMs = settings.custom.workMs;
  }

  timer.state = STATE.WORKING;
  setPhaseLabel(m === 'amrap' ? 'AMRAP' : m === 'fortime' ? 'FOR TIME' : 'WORK');
  setPhaseColor('working');
  beginPhase();
}

function transitionToResting() {
  const m = settings.mode;
  timer.state = STATE.RESTING;
  timer.phaseDurationMs = m === 'tabata'
    ? settings.tabata.restMs
    : settings.custom.restMs;
  beepRest();
  setPhaseColor('resting');
  setPhaseLabel('REST');
  beginPhase();
}

function transitionToFinished() {
  timer.state    = STATE.FINISHED;
  timer.isPaused = true;
  cancelAnimationFrame(timer.rafId);
  clearHeartbeat();
  releaseWakeLock();
  setPhaseColor('finished');
  setPhaseLabel('DONE');
  setPlayPauseIcon(false);
  beepFinish();

  const mode = settings.mode;
  if (mode === 'fortime') {
    dom.finishedLabelRounds.textContent = 'YOUR TIME';
    dom.finishedRounds.textContent      = formatMs(timer.workoutElapsedMs);
  } else {
    dom.finishedLabelRounds.textContent = 'ROUNDS';
    dom.finishedRounds.textContent      = timer.totalRounds > 0
      ? `${timer.currentRound} / ${timer.totalRounds}`
      : timer.currentRound;
  }
  dom.finishedTime.textContent = formatMs(timer.workoutElapsedMs);
  dom.finishedOverlay.classList.remove('hidden');
}

function beginPhase() {
  timer.startTs       = performance.now();
  timer.pausedElapsed = 0;
  timer.isPaused      = false;
  resetBeepedAt();
  cancelAnimationFrame(timer.rafId);
  timer.rafId = requestAnimationFrame(tick);
}

function resetTimer() {
  cancelAnimationFrame(timer.rafId);
  releaseWakeLock();
  timer.state           = STATE.IDLE;
  timer.isPaused        = false;
  timer.phaseElapsedMs  = 0;
  timer.currentRound    = 0;
  timer.totalRounds     = 0;
  timer.workoutElapsedMs = 0;

  clearHeartbeat();
  setPhaseLabel('READY');
  document.body.dataset.state = 'idle';

  dom.clockMin.textContent = '00';
  dom.clockSec.textContent = '00';
  dom.clockMs.textContent  = '00';
  dom.progressFill.style.strokeDashoffset = 992.73;

  dom.statLabelRound.textContent   = 'ROUND';
  dom.statLabelTotal.textContent   = 'TOTAL';
  dom.statLabelElapsed.textContent = 'ELAPSED';

  setPlayPauseIcon(false);
  updateStatBar();
  dom.btnStart.classList.remove('resting');
}

/* ============================================================
   CONTROLS
   ============================================================ */
dom.btnStart.addEventListener('click', async () => {
  getAudioCtx(); // unlock audio on first gesture

  if (timer.state === STATE.IDLE || timer.state === STATE.FINISHED) {
    await acquireWakeLock();
    transitionToCountdown();
    return;
  }

  if (timer.isPaused) {
    timer.pausedElapsed = timer.phaseElapsedMs;
    timer.startTs       = performance.now();
    timer.isPaused      = false;
    await acquireWakeLock();
    timer.rafId = requestAnimationFrame(tick);
    setPlayPauseIcon(true);
  } else {
    timer.pausedElapsed = timer.phaseElapsedMs;
    timer.isPaused      = true;
    cancelAnimationFrame(timer.rafId);
    releaseWakeLock();
    setPlayPauseIcon(false);
  }
});

dom.btnReset.addEventListener('click', () => {
  resetTimer();
  dom.finishedOverlay.classList.add('hidden');
});

dom.btnSkip.addEventListener('click', () => {
  cancelAnimationFrame(timer.rafId);
  clearHeartbeat();
  resetBeepedAt();

  if (timer.state === STATE.COUNTDOWN) {
    transitionToWorking();
  } else if (timer.state === STATE.WORKING) {
    const mode = settings.mode;
    if (mode === 'amrap' || mode === 'emom' || mode === 'fortime') {
      transitionToFinished();
    } else {
      transitionToResting();
    }
  } else if (timer.state === STATE.RESTING) {
    if (timer.currentRound >= timer.totalRounds) {
      transitionToFinished();
    } else {
      timer.currentRound++;
      transitionToWorking();
    }
  }
});

dom.btnFinishedClose.addEventListener('click', () => {
  dom.finishedOverlay.classList.add('hidden');
  resetTimer();
});

/* ============================================================
   MODE SELECTOR
   ============================================================ */
function setActiveModeTab(mode) {
  dom.modeButtons.forEach(b => {
    const on = mode !== null && b.dataset.mode === mode;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  Object.entries(dom.settingsSections).forEach(([key, el]) => {
    el.classList.toggle('hidden', key !== mode);
  });
}

dom.modeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;

    if (settings.activeWOD) {
      settings.activeWOD = null;
      dom.wodBanner.classList.add('hidden');
    }

    if (mode === settings.mode && timer.state === STATE.IDLE) return;

    if (timer.state !== STATE.IDLE && timer.state !== STATE.FINISHED) resetTimer();

    settings.mode = mode;
    setActiveModeTab(mode);
  });
});

/* ============================================================
   SETTINGS DRAWER
   ============================================================ */
const openSettings  = () => { dom.settingsDrawer.classList.add('open');    dom.settingsDrawer.setAttribute('aria-hidden', 'false'); };
const closeSettings = () => { dom.settingsDrawer.classList.remove('open'); dom.settingsDrawer.setAttribute('aria-hidden', 'true'); };

dom.btnSettings.addEventListener('click', openSettings);
dom.btnClose.addEventListener('click', closeSettings);
dom.settingsOverlay.addEventListener('click', closeSettings);
dom.btnApply.addEventListener('click', () => { applySettings(); closeSettings(); });

function applySettings() {
  const inp = dom.inputs;

  settings.amrap.totalMs =
    (parseInt(inp.amrapMin.value) || 0) * 60000 +
    (parseInt(inp.amrapSec.value) || 0) * 1000;
  if (settings.amrap.totalMs < 1000) settings.amrap.totalMs = 60000;

  settings.emom.intervalMs =
    (parseInt(inp.emomIntervalMin.value) || 0) * 60000 +
    (parseInt(inp.emomIntervalSec.value) || 0) * 1000;
  if (settings.emom.intervalMs < 1000) settings.emom.intervalMs = 60000;
  settings.emom.rounds = Math.max(1, parseInt(inp.emomRounds.value) || 10);

  settings.tabata.workMs = Math.max(1000, (parseInt(inp.tabataWork.value) || 20) * 1000);
  settings.tabata.restMs = Math.max(1000, (parseInt(inp.tabataRest.value) || 10) * 1000);
  settings.tabata.rounds = Math.max(1, parseInt(inp.tabataRounds.value) || 8);

  settings.custom.workMs =
    (parseInt(inp.customWorkMin.value) || 0) * 60000 +
    (parseInt(inp.customWorkSec.value) || 0) * 1000;
  if (settings.custom.workMs < 1000) settings.custom.workMs = 45000;

  settings.custom.restMs =
    (parseInt(inp.customRestMin.value) || 0) * 60000 +
    (parseInt(inp.customRestSec.value) || 0) * 1000;
  if (settings.custom.restMs < 1000) settings.custom.restMs = 15000;
  settings.custom.rounds = Math.max(1, parseInt(inp.customRounds.value) || 10);

  settings.countdownDuration = Math.max(3, parseInt(inp.countdownDuration.value) || 10);

  if (timer.state !== STATE.IDLE && timer.state !== STATE.FINISHED) resetTimer();
}

dom.toggleSound.addEventListener('click', () => {
  settings.soundOn = !settings.soundOn;
  dom.toggleSound.classList.toggle('active', settings.soundOn);
  dom.toggleSound.setAttribute('aria-checked', settings.soundOn);
});

dom.toggleMs.addEventListener('click', () => {
  settings.showMs = !settings.showMs;
  dom.toggleMs.classList.toggle('active', settings.showMs);
  dom.toggleMs.setAttribute('aria-checked', settings.showMs);
  dom.clockMs.classList.toggle('hidden', !settings.showMs);
});

/* ── Landscape FABs ─────────────────────────────────────────── */
dom.lsBtnReset?.addEventListener('click', () => dom.btnReset.click());
dom.lsBtnStart?.addEventListener('click', () => dom.btnStart.click());

/* ── Theme switcher ─────────────────────────────────────────── */
dom.btnThemeDark?.addEventListener('click',  () => applyTheme('dark'));
dom.btnThemeLight?.addEventListener('click', () => applyTheme('light'));

/* ============================================================
   WOD PICKER
   ============================================================ */
let wodFilterCat   = 'all';
let wodSearchQuery = '';
let infoPendingWOD = null; // WOD being previewed in the info drawer

function openWODDrawer() {
  dom.wodDrawer.classList.add('open');
  dom.wodDrawer.setAttribute('aria-hidden', 'false');
  dom.wodSearch.value = '';
  wodSearchQuery = '';
  renderWODList();
  setTimeout(() => dom.wodSearch.focus(), 350);
}
function closeWODDrawer() {
  dom.wodDrawer.classList.remove('open');
  dom.wodDrawer.setAttribute('aria-hidden', 'true');
}

function openWODInfo(wod) {
  infoPendingWOD = wod;
  dom.wodInfoName.textContent  = wod.name;
  dom.wodInfoBadge.textContent = typeLabel(wod.type);
  dom.wodInfoBadge.className   = 'wod-badge ' + typeBadgeClass(wod.type);
  dom.wodInfoCap.textContent   = capLabel(wod);
  dom.wodInfoDesc.textContent  = wod.description;

  // Show delete button only for user-created WODs
  if (dom.btnDeleteWod) {
    dom.btnDeleteWod.classList.toggle('hidden', !wod.isCustom);
  }

  dom.wodInfoDrawer.classList.add('open');
  dom.wodInfoDrawer.setAttribute('aria-hidden', 'false');
}
function closeWODInfo() {
  dom.wodInfoDrawer.classList.remove('open');
  dom.wodInfoDrawer.setAttribute('aria-hidden', 'true');
}

dom.btnWod.addEventListener('click', openWODDrawer);
dom.btnWodClose.addEventListener('click', closeWODDrawer);
dom.wodOverlay.addEventListener('click', closeWODDrawer);

dom.btnWodInfo.addEventListener('click', () => {
  if (settings.activeWOD) openWODInfo(settings.activeWOD);
});
dom.btnWodInfoClose.addEventListener('click', closeWODInfo);
dom.wodInfoOverlay.addEventListener('click', closeWODInfo);

dom.btnWodUse.addEventListener('click', () => {
  if (infoPendingWOD) {
    selectWOD(infoPendingWOD);
    closeWODInfo();
  }
});

// Delete custom WOD
dom.btnDeleteWod?.addEventListener('click', () => {
  if (!infoPendingWOD?.isCustom) return;
  if (!confirm(`Delete "${infoPendingWOD.name}"?`)) return;
  deleteCustomWOD(infoPendingWOD.id);
  if (settings.activeWOD?.id === infoPendingWOD.id) {
    settings.activeWOD = null;
    dom.wodBanner.classList.add('hidden');
    resetTimer();
  }
  closeWODInfo();
  renderWODList();
});

// Category filter
dom.wodCats.forEach(btn => {
  btn.addEventListener('click', () => {
    dom.wodCats.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    wodFilterCat = btn.dataset.cat;
    renderWODList();
  });
});

// Search
dom.wodSearch.addEventListener('input', () => {
  wodSearchQuery = dom.wodSearch.value.trim().toLowerCase();
  renderWODList();
});

function renderWODList() {
  // Merge built-in + custom
  const allWODs = [...WOD_LIBRARY, ...customWODs];
  const query   = wodSearchQuery;

  const filtered = allWODs.filter(w => {
    // 'custom' filter (MINE button) shows only user-created WODs
    const catOk  = wodFilterCat === 'all' ||
                   (wodFilterCat === 'custom' ? w.isCustom : w.category === wodFilterCat);
    const termOk = !query ||
      w.name.toLowerCase().includes(query) ||
      w.description.toLowerCase().includes(query);
    return catOk && termOk;
  });

  dom.wodList.innerHTML = filtered.length ? '' : '<li class="wod-empty">No WODs found</li>';

  filtered.forEach(wod => {
    const li = document.createElement('li');
    li.className = 'wod-item' + (settings.activeWOD?.id === wod.id ? ' active' : '');
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', settings.activeWOD?.id === wod.id ? 'true' : 'false');
    li.setAttribute('tabindex', '0');
    li.dataset.id = wod.id;

    const firstLine = wod.description.split('\n')[0];
    const customBadge = wod.isCustom
      ? '<span class="wod-badge wod-badge--custom">CUSTOM</span>'
      : '';

    li.innerHTML = `
      <div class="wod-item-main">
        <span class="wod-item-name">${wod.name}</span>
        <span class="wod-item-preview">${firstLine}</span>
      </div>
      <div class="wod-item-side">
        ${customBadge}
        <span class="wod-badge ${typeBadgeClass(wod.type)}">${typeLabel(wod.type)}</span>
        <svg class="wod-item-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </div>`;

    li.addEventListener('click',  () => openWODInfo(wod));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openWODInfo(wod); } });

    dom.wodList.appendChild(li);
  });
}

function selectWOD(wod) {
  settings.activeWOD = wod;

  switch (wod.type) {
    case 'amrap':
      settings.mode = 'amrap';
      settings.amrap.totalMs = wod.defaultConfig.totalMs;
      setActiveModeTab('amrap');
      break;
    case 'emom':
      settings.mode = 'emom';
      settings.emom.intervalMs = wod.defaultConfig.intervalMs;
      settings.emom.rounds     = wod.defaultConfig.rounds;
      setActiveModeTab('emom');
      syncEmomInputs();
      break;
    case 'tabata':
      settings.mode = 'tabata';
      settings.tabata.workMs = wod.defaultConfig.workMs;
      settings.tabata.restMs = wod.defaultConfig.restMs;
      settings.tabata.rounds = wod.defaultConfig.rounds;
      setActiveModeTab('tabata');
      syncTabataInputs();
      break;
    case 'custom':
      settings.mode = 'custom';
      settings.custom.workMs = wod.defaultConfig.workMs;
      settings.custom.restMs = wod.defaultConfig.restMs;
      settings.custom.rounds = wod.defaultConfig.rounds;
      setActiveModeTab('custom');
      break;
    case 'fortime':
    default:
      settings.mode = 'fortime';
      settings.fortime.timeCap = wod.defaultConfig.timeCap || 0;
      setActiveModeTab(null);
      break;
  }

  if (timer.state !== STATE.IDLE && timer.state !== STATE.FINISHED) resetTimer();
  else resetTimer();

  dom.wodBannerName.textContent = wod.name;
  dom.wodBannerType.textContent = typeLabel(wod.type);
  dom.wodBannerType.className   = 'wod-badge ' + typeBadgeClass(wod.type);
  dom.wodBannerCap.textContent  = capLabel(wod);
  dom.wodBanner.classList.remove('hidden');

  closeWODDrawer();
}

/* ── Helpers ────────────────────────────────────────────────── */
function typeLabel(type) {
  return { amrap: 'AMRAP', emom: 'EMOM', tabata: 'TABATA', custom: 'INTERVAL', fortime: 'FOR TIME' }[type] ?? type.toUpperCase();
}
function typeBadgeClass(type) {
  return { amrap: '', emom: 'wod-badge--emom', tabata: 'wod-badge--tabata', custom: 'wod-badge--custom', fortime: '' }[type] ?? '';
}
function capLabel(wod) {
  if (wod.type === 'fortime' && wod.defaultConfig.timeCap > 0)
    return `· Cap ${formatMs(wod.defaultConfig.timeCap)}`;
  if (wod.type === 'amrap' && wod.defaultConfig.totalMs)
    return `· ${formatMs(wod.defaultConfig.totalMs)}`;
  if (wod.type === 'emom' && wod.defaultConfig.rounds)
    return `· ${wod.defaultConfig.rounds} rounds`;
  return '';
}

function syncEmomInputs() {
  const total = settings.emom.intervalMs;
  dom.inputs.emomIntervalMin.value = Math.floor(total / 60000);
  dom.inputs.emomIntervalSec.value = Math.floor((total % 60000) / 1000);
  dom.inputs.emomRounds.value      = settings.emom.rounds;
}
function syncTabataInputs() {
  dom.inputs.tabataWork.value   = settings.tabata.workMs / 1000;
  dom.inputs.tabataRest.value   = settings.tabata.restMs / 1000;
  dom.inputs.tabataRounds.value = settings.tabata.rounds;
}

/* ============================================================
   WOD CREATE DRAWER
   ============================================================ */
function openWODCreate() {
  // Reset form
  if (dom.createName) dom.createName.value = '';
  if (dom.createType) dom.createType.value = 'fortime';
  if (dom.createDescription) dom.createDescription.value = '';
  hideCreateError();
  showCreateConfigBlock('fortime');

  dom.wodCreateDrawer?.classList.add('open');
  dom.wodCreateDrawer?.setAttribute('aria-hidden', 'false');
  setTimeout(() => dom.createName?.focus(), 350);
}

function closeWODCreate() {
  dom.wodCreateDrawer?.classList.remove('open');
  dom.wodCreateDrawer?.setAttribute('aria-hidden', 'true');
}

function showCreateConfigBlock(type) {
  Object.values(dom.createConfigBlocks).forEach(el => el?.classList.add('hidden'));
  dom.createConfigBlocks[type]?.classList.remove('hidden');
}

function showCreateError(msg) {
  if (!dom.createError) return;
  dom.createError.textContent = msg;
  dom.createError.classList.add('visible');
}
function hideCreateError() {
  dom.createError?.classList.remove('visible');
}

dom.btnCreateWod?.addEventListener('click', () => {
  closeWODDrawer();
  setTimeout(openWODCreate, 320);
});

dom.wodCreateOverlay?.addEventListener('click', closeWODCreate);
dom.btnCreateClose?.addEventListener('click', closeWODCreate);

dom.createType?.addEventListener('change', () => {
  showCreateConfigBlock(dom.createType.value);
  hideCreateError();
});

dom.btnSaveWod?.addEventListener('click', handleSaveWOD);

function handleSaveWOD() {
  hideCreateError();

  const name = dom.createName?.value.trim();
  if (!name) { showCreateError('Name is required.'); return; }
  if (name.length > 50) { showCreateError('Name must be 50 characters or fewer.'); return; }

  // Check for duplicate name
  const allExisting = [...WOD_LIBRARY, ...customWODs];
  if (allExisting.some(w => w.name.toLowerCase() === name.toLowerCase())) {
    showCreateError('A WOD with this name already exists.');
    return;
  }

  const type = dom.createType?.value || 'fortime';
  const desc = dom.createDescription?.value.trim() || '';
  const ci   = dom.createInputs;

  let defaultConfig = {};

  switch (type) {
    case 'fortime': {
      const capMin = parseInt(ci.fortimeCapMin?.value) || 0;
      const capSec = parseInt(ci.fortimeCapSec?.value) || 0;
      defaultConfig = { timeCap: capMin * 60000 + capSec * 1000 };
      break;
    }
    case 'amrap': {
      const min = parseInt(ci.amrapMin?.value) || 0;
      const sec = parseInt(ci.amrapSec?.value) || 0;
      const ms  = min * 60000 + sec * 1000;
      if (ms < 1000) { showCreateError('AMRAP duration must be at least 1 second.'); return; }
      defaultConfig = { totalMs: ms };
      break;
    }
    case 'emom': {
      const min    = parseInt(ci.emomMin?.value) || 0;
      const sec    = parseInt(ci.emomSec?.value) || 0;
      const ms     = min * 60000 + sec * 1000;
      const rounds = parseInt(ci.emomRounds?.value) || 0;
      if (ms < 1000) { showCreateError('Interval must be at least 1 second.'); return; }
      if (rounds < 1) { showCreateError('Rounds must be at least 1.'); return; }
      defaultConfig = { intervalMs: ms, rounds };
      break;
    }
    case 'tabata': {
      const work   = parseInt(ci.tabataWork?.value) || 0;
      const rest   = parseInt(ci.tabataRest?.value) || 0;
      const rounds = parseInt(ci.tabataRounds?.value) || 0;
      if (work < 1) { showCreateError('Work seconds must be at least 1.'); return; }
      if (rest < 1) { showCreateError('Rest seconds must be at least 1.'); return; }
      if (rounds < 1) { showCreateError('Rounds must be at least 1.'); return; }
      defaultConfig = { workMs: work * 1000, restMs: rest * 1000, rounds };
      break;
    }
    case 'custom': {
      const wMin   = parseInt(ci.customWorkMin?.value) || 0;
      const wSec   = parseInt(ci.customWorkSec?.value) || 0;
      const rMin   = parseInt(ci.customRestMin?.value) || 0;
      const rSec   = parseInt(ci.customRestSec?.value) || 0;
      const rounds = parseInt(ci.customRounds?.value) || 0;
      const wMs    = wMin * 60000 + wSec * 1000;
      const rMs    = rMin * 60000 + rSec * 1000;
      if (wMs < 1000) { showCreateError('Work duration must be at least 1 second.'); return; }
      if (rMs < 1000) { showCreateError('Rest duration must be at least 1 second.'); return; }
      if (rounds < 1) { showCreateError('Rounds must be at least 1.'); return; }
      defaultConfig = { workMs: wMs, restMs: rMs, rounds };
      break;
    }
  }

  const newWOD = {
    id:           'custom-' + Date.now(),
    name,
    category:     'custom',
    type,
    description:  desc || `Custom ${typeLabel(type)} workout`,
    defaultConfig,
    isCustom:     true,
  };

  addCustomWOD(newWOD);
  closeWODCreate();

  // Open picker to MINE tab to show the new WOD
  setTimeout(() => {
    dom.wodCats.forEach(b => {
      const on = b.dataset.cat === 'custom';
      b.classList.toggle('active', on);
    });
    wodFilterCat = 'custom';
    openWODDrawer();
  }, 350);
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea, select')) return;
  switch (e.key) {
    case ' ':
    case 'Enter':      e.preventDefault(); dom.btnStart.click();  break;
    case 'r': case 'R':                    dom.btnReset.click();  break;
    case 's': case 'S': case 'ArrowRight': dom.btnSkip.click();   break;
    case 'Escape':
      closeSettings();
      closeWODDrawer();
      closeWODInfo();
      closeWODCreate();
      break;
  }
});

/* ============================================================
   INIT
   ============================================================ */
(function init() {
  // Load persisted theme (FOUC already handled by inline script in <head>)
  loadTheme();

  // Load custom WODs from localStorage
  loadCustomWODs();

  // Inject wake lock indicator dot
  const dot = document.createElement('div');
  dot.className = 'wakelock-dot';
  document.body.appendChild(dot);
  dom.wakelockDot = dot;

  // Boot state
  document.body.dataset.state = 'idle';
  dom.progressFill.style.strokeDasharray  = '992.73';
  dom.progressFill.style.strokeDashoffset = '992.73';
  dom.clockMs.classList.toggle('hidden', !settings.showMs);
  updateStatBar();

  // Pre-render WOD list
  renderWODList();
})();
