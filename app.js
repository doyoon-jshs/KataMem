const kana = [
  ["あ", "a", "아", "あ행", "입을 편하게 열고 짧게 발음해요."],
  ["い", "i", "이", "あ행", "입꼬리를 살짝 당겨 맑게 소리 내요."],
  ["う", "u", "우", "あ행", "입술을 너무 둥글게 말지 않고 가볍게 소리 내요."],
  ["え", "e", "에", "あ행", "짧은 에 소리로 또렷하게 읽어요."],
  ["お", "o", "오", "あ행", "입을 둥글게 하되 짧게 마무리해요."],
  ["か", "ka", "카", "か행", "ㅋ 소리를 가볍게 붙여 읽어요."],
  ["き", "ki", "키", "か행", "두 획이 분리된 모양을 기억해요."],
  ["く", "ku", "쿠", "か행", "꺾인 한 획 모양이에요."],
  ["け", "ke", "케", "か행", "세로획과 열린 오른쪽 모양을 봐요."],
  ["こ", "ko", "코", "か행", "두 줄이 살짝 휘어진 모양이에요."],
  ["さ", "sa", "사", "さ행", "ち와 헷갈리기 쉬워요. 아래가 열린 쪽이에요."],
  ["し", "shi", "시", "さ행", "낚싯바늘처럼 아래에서 올라오는 모양이에요."],
  ["す", "su", "스", "さ행", "가운데 고리가 있는 글자예요."],
  ["せ", "se", "세", "さ행", "가로선과 세로선의 교차를 기억해요."],
  ["そ", "so", "소", "さ행", "한 번 접힌 흐름으로 읽어요."],
  ["た", "ta", "타", "た행", "な와 비슷하지만 왼쪽 위 십자 모양이 보여요."],
  ["ち", "chi", "치", "た행", "さ와 닮았지만 방향과 흐름이 달라요."],
  ["つ", "tsu", "츠", "た행", "옆으로 누운 큰 곡선이에요."],
  ["て", "te", "테", "た행", "짧은 가로획 뒤 아래로 흐르는 모양이에요."],
  ["と", "to", "토", "た행", "작은 체크와 곡선 조합이에요."],
  ["な", "na", "나", "な행", "た보다 오른쪽 아래가 더 길게 이어져요."],
  ["に", "ni", "니", "な행", "왼쪽 세로획과 오른쪽 두 줄을 봐요."],
  ["ぬ", "nu", "누", "な행", "め와 닮았지만 끝에 작은 고리가 있어요."],
  ["ね", "ne", "네", "な행", "れ와 닮았지만 끝이 둥글게 말려요."],
  ["の", "no", "노", "な행", "한 바퀴 도는 단순한 곡선이에요."],
  ["は", "ha", "하", "は행", "ほ와 헷갈리기 쉬워요. 오른쪽 가로획이 하나예요."],
  ["ひ", "hi", "히", "は행", "양쪽으로 벌어진 곡선이에요."],
  ["ふ", "fu", "후", "は행", "세 조각처럼 보이는 독특한 글자예요."],
  ["へ", "he", "헤", "は행", "산 모양의 한 획이에요."],
  ["ほ", "ho", "호", "は행", "は보다 오른쪽 가로획이 하나 더 있어요."],
  ["ま", "ma", "마", "ま행", "오른쪽 아래 고리와 두 가로선을 봐요."],
  ["み", "mi", "미", "ま행", "위아래가 이어지는 리듬으로 기억해요."],
  ["む", "mu", "무", "ま행", "오른쪽 아래 작은 점 같은 마무리가 있어요."],
  ["め", "me", "메", "ま행", "ぬ와 닮았지만 끝 고리가 없어요."],
  ["も", "mo", "모", "ま행", "し에 가로획 두 개가 붙은 느낌이에요."],
  ["や", "ya", "야", "や행", "왼쪽 위 작은 획과 큰 곡선을 같이 봐요."],
  ["ゆ", "yu", "유", "や행", "가운데 세로선이 지나는 둥근 모양이에요."],
  ["よ", "yo", "요", "や행", "위 짧은 가로획과 아래 고리를 기억해요."],
  ["ら", "ra", "라", "ら행", "ち와 닮았지만 위에 작은 획이 있어요."],
  ["り", "ri", "리", "ら행", "두 세로획이 나란히 내려와요."],
  ["る", "ru", "루", "ら행", "ろ와 닮았지만 아래에 고리가 있어요."],
  ["れ", "re", "레", "ら행", "ね와 닮았지만 끝이 곧게 빠져요."],
  ["ろ", "ro", "로", "ら행", "る와 닮았지만 아래 고리가 없어요."],
  ["わ", "wa", "와", "わ행", "ね와 닮았지만 끝 고리가 없어요."],
  ["を", "wo", "오", "わ행", "조사로 자주 쓰이고 보통 오처럼 읽어요."],
  ["ん", "n", "응", "わ행", "받침 ㄴ 또는 ㅇ처럼 끝소리를 만들어요."]
].map(([char, romaji, korean, row, hint]) => ({ char, romaji, korean, row, hint }));

const storageKey = "kanamem-progress-v1";
const state = {
  mode: "chart",
  quizType: "cards",
  quiz: [],
  quizIndex: 0,
  answered: false,
  recentQuestions: [],
  renderedQuestionIndex: -1,
  progress: loadProgress()
};

const els = {
  tabs: document.querySelectorAll(".tab"),
  panels: {
    quiz: document.querySelector("#quiz-panel"),
    chart: document.querySelector("#chart-panel")
  },
  quizTypeButtons: document.querySelectorAll("[data-quiz-type]"),
  quizKana: document.querySelector("#quiz-kana"),
  answerGrid: document.querySelector("#answer-grid"),
  reviewWeak: document.querySelector("#review-weak"),
  chart: document.querySelector("#kana-chart"),
  masteredPercent: document.querySelector("#mastered-percent"),
  totalCount: document.querySelector("#total-count"),
  masteredCount: document.querySelector("#mastered-count"),
  weakCount: document.querySelector("#weak-count"),
  ring: document.querySelector(".progress-ring")
};

function loadProgress() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return {};

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function entryFor(char) {
  state.progress[char] ||= { seen: 0, correct: 0, wrong: 0, mastered: false };
  return state.progress[char];
}

function setMode(mode) {
  state.mode = mode;
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
  Object.entries(els.panels).forEach(([name, panel]) => panel.classList.toggle("active", name === mode));

  if (mode === "quiz" && state.quiz.length === 0) startQuiz();
  if (mode === "chart") renderChart();
}

function weightedKana() {
  const weak = kana.filter((item) => {
    const entry = state.progress[item.char];
    return entry && (entry.wrong > entry.correct || (!entry.mastered && entry.seen > 0));
  });

  const unseen = kana.filter((item) => !state.progress[item.char]);
  return [...weak, ...weak, ...unseen, ...kana];
}

function startQuiz(list = weightedKana()) {
  state.quiz = makeQuizSequence(list.length ? list : kana);
  state.quizIndex = 0;
  state.answered = false;
  state.renderedQuestionIndex = -1;
  renderQuiz();
}

function renderQuiz() {
  const item = state.quiz[state.quizIndex];
  rememberRenderedQuestion(item);
  const useTable = state.quizType === "table";
  const askKana = useTable ? false : Math.random() > 0.35;
  const options = useTable ? kana : makeOptions(item, askKana ? "romaji" : "char");

  els.quizKana.textContent = askKana ? item.char : `${item.romaji} · ${item.korean}`;
  els.answerGrid.classList.toggle("full-chart", useTable);
  els.answerGrid.innerHTML = "";
  state.answered = false;

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = useTable ? "answer-button chart-choice" : "answer-button";
    button.type = "button";
    button.textContent = askKana ? formatReading(option) : option.char;
    button.dataset.answer = option.char;
    button.addEventListener("click", () => answerQuiz(button, option.char === item.char));
    els.answerGrid.append(button);
  });
}

function answerQuiz(button, isCorrect) {
  if (state.answered) return;
  state.answered = true;

  const item = state.quiz[state.quizIndex];
  const entry = entryFor(item.char);
  entry.seen += 1;

  if (isCorrect) {
    entry.correct += 1;
    entry.mastered = entry.correct >= 3 && entry.correct > entry.wrong;
    button.classList.add("correct");
  } else {
    entry.wrong += 1;
    entry.mastered = false;
    button.classList.add("wrong");
    els.answerGrid
      .querySelector(`[data-answer="${CSS.escape(item.char)}"]`)
      ?.classList.add("correct");
  }

  saveProgress();
  renderStats();

  setTimeout(() => {
    if (state.quizIndex >= state.quiz.length - 1) {
      startQuiz();
      return;
    }

    state.quizIndex += 1;
    renderQuiz();
  }, isCorrect ? 650 : 1100);
}

function makeOptions(answer, key) {
  const options = [answer];
  const sameRow = kana.filter((item) => item.row === answer.row && item.char !== answer.char);
  const others = shuffle([...sameRow, ...kana.filter((item) => item.char !== answer.char)]);

  for (const item of others) {
    if (options.length >= 4) break;
    if (!options.some((option) => option[key] === item[key])) options.push(item);
  }

  return shuffle(options);
}

function formatReading(item) {
  return `${item.romaji} · ${item.korean}`;
}

function makeQuizSequence(source, count = 10) {
  const sequence = [];
  const tempRecent = [...state.recentQuestions];
  const pool = source.length ? source : kana;

  while (sequence.length < count) {
    const candidates = pool.filter((item) => !tempRecent.includes(item.char));
    const fallback = kana.filter((item) => !tempRecent.includes(item.char));
    const available = candidates.length ? candidates : fallback.length ? fallback : kana;
    const selected = shuffle(available)[0];

    sequence.push(selected);
    tempRecent.unshift(selected.char);
    tempRecent.length = Math.min(tempRecent.length, 2);
  }

  return sequence;
}

function rememberRenderedQuestion(item) {
  if (state.renderedQuestionIndex === state.quizIndex) return;

  state.renderedQuestionIndex = state.quizIndex;
  state.recentQuestions.unshift(item.char);
  state.recentQuestions.length = Math.min(state.recentQuestions.length, 2);
}

function renderChart() {
  els.chart.innerHTML = "";

  kana.forEach((item) => {
    const entry = state.progress[item.char];
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "kana-tile";
    if (entry?.mastered) tile.classList.add("mastered");
    if (entry && entry.wrong > entry.correct) tile.classList.add("weak");
    tile.setAttribute("aria-pressed", entry?.mastered ? "true" : "false");
    tile.setAttribute("aria-label", `${item.char} ${item.romaji} ${entry?.mastered ? "알고 있음" : "아직 표시 안 함"}`);
    tile.innerHTML = `
      <strong>${item.char}</strong>
      <span>${item.romaji}</span>
      <em>${statusText(entry)}</em>
    `;
    tile.addEventListener("click", () => {
      toggleMastered(item.char);
    });
    els.chart.append(tile);
  });
}

function toggleMastered(char) {
  const entry = entryFor(char);
  entry.seen = Math.max(entry.seen, 1);
  entry.mastered = !entry.mastered;

  if (entry.mastered) {
    entry.correct = Math.max(entry.correct, 3);
    entry.wrong = 0;
  } else {
    entry.correct = 0;
  }

  saveProgress();
  renderStats();
}

function renderStats() {
  const entries = kana.map((item) => state.progress[item.char]).filter(Boolean);
  const mastered = entries.filter((entry) => entry.mastered).length;
  const weak = entries.filter((entry) => entry.wrong > entry.correct).length;
  const percent = Math.round((mastered / kana.length) * 100);

  els.totalCount.textContent = String(kana.length);
  els.masteredCount.textContent = String(mastered);
  els.weakCount.textContent = String(weak);
  els.masteredPercent.textContent = `${percent}%`;
  els.ring.style.setProperty("--progress", `${percent * 3.6}deg`);

  if (state.mode === "chart") renderChart();
}

function statusText(entry) {
  if (!entry) return "";
  if (entry.mastered) return "알고 있음";
  if (entry.wrong > entry.correct) return "복습 필요";
  return "";
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}


els.tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));
els.quizTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.quizType = button.dataset.quizType;
    els.quizTypeButtons.forEach((item) => item.classList.toggle("active", item === button));
    startQuiz();
  });
});
els.reviewWeak.addEventListener("click", () => {
  const weak = kana.filter((item) => {
    const entry = state.progress[item.char];
    return entry && entry.wrong > entry.correct;
  });
  startQuiz(weak.length ? weak : kana.slice(0, 10));
  setMode("quiz");
});
renderChart();
renderStats();
