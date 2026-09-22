(() => {
  const quiz = document.querySelector('#quiz');
  const summary = document.querySelector('#summary');
  const submitArea = document.querySelector('#submitArea');
  const intro = document.querySelector('#intro');
  const progress = document.querySelector('#progress');
  const answered = document.querySelector('#answered');
  const submit = document.querySelector('#submit');
  const startButton = document.querySelector('#start');
  const startAllButton = document.querySelector('#startAll');
  const resetButton = document.querySelector('#reset');
  const changeTrackButton = document.querySelector('#changeTrack');
  const setSize = () => activeTrack === 'full' ? 40 : 15;
  const tracks = {
    prepare: {
      title: 'Prepare the data',
      description: 'Practise connecting, profiling, cleaning, transforming, and loading data for Power BI.',
      tip: 'Merge adds related columns. Append stacks rows. Unpivot turns repeated columns into rows.',
      scope: 'Study scope: connecting to data, storage modes, Power Query profiling, cleaning, transformations, merge/append, keys, query loading, and fact/dimension preparation.',
      questions: () => window.QUESTION_BANK || []
    },
    model: {
      title: 'Model the data',
      description: 'Practise relationships, date roles, DAX calculations, and semantic model performance.',
      tip: 'Dimension → fact is the normal filter path. Dynamic aggregation → measure. Alternate date role → USERELATIONSHIP.',
      scope: 'Study scope: table and column properties, star-schema relationships, date tables, calculated objects, DAX measures, time intelligence, calculation groups, and performance optimization.',
      questions: () => window.MODEL_QUESTION_BANK || []
    },
    manage: {
      title: 'Manage and secure Power BI',
      description: 'Practise workspace governance, sharing, refresh, gateways, and row-level security.',
      tip: 'Workspace = builders. App = broad consumers. Gateway = reach on-premises data. RLS = restrict rows.',
      scope: 'Study scope: workspaces, apps, dashboards, distribution, subscriptions, alerts, endorsement, gateways, scheduled refresh, permissions, row-level security, and sensitivity labels.',
      questions: () => window.MANAGE_QUESTION_BANK || []
    },
    visualize: {
      title: 'Visualize and analyze the data',
      description: 'Practise report design, storytelling, accessibility, navigation, and insight discovery.',
      tip: 'Trend over time → line chart. Rich hover detail → report page tooltip. One visual only → visual-level filter.',
      scope: 'Study scope: selecting and formatting visuals, filtering, themes, navigation, accessibility, mobile layouts, report storytelling, AI visuals, and trend analysis.',
      questions: () => window.VISUALIZE_QUESTION_BANK || []
    },
    full: {
      title: 'Full practice test',
      description: 'A weighted 40-question PL-300 practice test across all four skills areas.',
      tip: '40 questions: 11 Prepare, 11 Model, 11 Visualize, and 7 Manage & secure.',
      scope: 'Weighted study scope: Prepare 27.5%, Model 27.5%, Visualize 27.5%, and Manage & secure 17.5%.',
      questions: () => []
    }
  };
  let activeTrack = 'prepare';
  let set = [];
  let graded = false;
  let practiceMode = 'random';

  const shuffle = values => {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const randomizeChoices = question => {
    if (!question.type.startsWith('Choose')) return { ...question };
    const correctLetters = new Set(question.answer.split(' and ').map(value => value.trim()));
    const choices = shuffle(question.options.map((text, index) => ({
      text,
      correct: correctLetters.has(String.fromCharCode(65 + index))
    })));
    return {
      ...question,
      options: choices.map(choice => choice.text),
      answer: choices
        .map((choice, index) => choice.correct ? String.fromCharCode(65 + index) : null)
        .filter(Boolean)
        .join(' and ')
    };
  };
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const current = () => tracks[activeTrack];
  const questionBank = () => current().questions();

  const updateTrackCopy = () => {
    const track = current();
    document.querySelector('#syllabusTitle').textContent = track.title;
    document.querySelector('#syllabusDescription').textContent = track.description;
    document.querySelector('#practicePill').textContent = activeTrack === 'full' ? '40 weighted questions · 65 minutes' : `${setSize()} random questions · 25 minutes`;
    document.querySelector('#introCopy').textContent = activeTrack === 'full' ? 'This full practice test selects 40 original, exam-style questions using PL-300 weightings: 11 Prepare, 11 Model, 11 Visualize, and 7 Manage & secure.' : `Each attempt selects ${setSize()} original, exam-style questions at random from the ${track.title} library.`;
    startButton.textContent = activeTrack === 'full' ? 'Start 40-question full test' : 'Start 15-question test';
    startAllButton.textContent = activeTrack === 'full' ? '' : `Practice all ${questionBank().length} questions`;
    startAllButton.classList.toggle('hidden', activeTrack === 'full');
    document.querySelector('#quickTipText').textContent = track.tip;
    document.querySelector('#footerScope').innerHTML = `${escape(track.scope)} Review the official <a href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300">PL-300 study guide</a> before booking an exam.`;
    document.querySelector('#prepareCount').textContent = `${tracks.prepare.questions().length} original practice questions`;
    document.querySelector('#modelCount').textContent = `${tracks.model.questions().length} original practice questions`;
    document.querySelector('#visualizeCount').textContent = `${tracks.visualize.questions().length} original practice questions`;
    document.querySelector('#manageCount').textContent = `${tracks.manage.questions().length} original practice questions`;
    document.querySelector('#fullCount').textContent = '40 questions · exam-weighted mix';
    document.querySelectorAll('[data-track]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.track === activeTrack)));
  };

  const choiceMarkup = (question, index) => {
    const count = question.type === 'Choose TWO' ? 2 : 1;
    return `<div class="choices">${question.options.map((option, optionIndex) => `<label class="choice"><input type="${count === 1 ? 'radio' : 'checkbox'}" name="q${index}" value="${optionIndex}"><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escape(option)}</span></label>`).join('')}</div>`;
  };
  const select = (name, choices) => `<select name="${name}" aria-label="${name}"><option value="">Choose…</option>${choices.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('')}</select>`;
  const caseMarkup = question => question.caseStudy ? `<aside class="case-context"><p class="case-label">${escape(question.caseStudy.title)}</p><p>${escape(question.caseStudy.intro)}</p></aside>` : '';
  const structuredMarkup = (question, index) => {
    if (question.type === 'Order ALL four steps') return `<div class="sequence">${[1, 2, 3, 4].map(n => `<label>Position ${n}${select(`q${index}-${n}`, question.options)}</label>`).join('')}</div>`;
    const pairs = question.answer.split(';').map(v => v.trim().split(' = '));
    const choices = question.type === 'Answer YES or NO for EACH statement' ? ['Yes', 'No'] : [...new Set(pairs.map(pair => pair[1]))];
    return `<div class="sequence">${pairs.map(([number]) => {
      const statement = question.options.find(option => option.startsWith(`${number}.`)) || `Statement ${number}`;
      return `<label><span class="statement-label">${escape(statement)}</span>${select(`q${index}-${number}`, choices)}</label>`;
    }).join('')}</div>`;
  };
  const render = () => {
    quiz.innerHTML = set.map((question, index) => `<article class="question" id="q-${index}"><p class="q-meta">Question ${String(index + 1).padStart(2, '0')} · ${escape(question.type)}</p>${caseMarkup(question)}<p class="prompt">${escape(question.prompt)}</p>${question.type.startsWith('Choose') ? choiceMarkup(question, index) : structuredMarkup(question, index)}<div class="feedback"><p class="result"></p><details><summary>Read the explanation</summary><p class="why"><strong>The basic idea:</strong> ${escape(question.why)}</p><p class="why"><strong>Why the alternatives fail:</strong> ${escape(question.wrong)}</p><p class="why"><strong>Remember:</strong> ${escape(question.remember)}</p></details></div></article>`).join('');
    quiz.querySelectorAll('input, select').forEach(control => control.addEventListener('change', updateProgress));
    updateProgress();
  };
  const complete = (question, index) => {
    if (question.type.startsWith('Choose')) {
      const needed = question.type === 'Choose TWO' ? 2 : 1;
      return document.querySelectorAll(`[name="q${index}"]:checked`).length === needed;
    }
    if (question.type === 'Order ALL four steps') return [1, 2, 3, 4].every(n => document.querySelector(`[name="q${index}-${n}"]`).value);
    return question.answer.split(';').every(pair => document.querySelector(`[name="q${index}-${pair.trim().split(' = ')[0]}"]`).value);
  };
  const updateProgress = () => {
    const done = set.filter(complete).length;
    progress.style.width = `${set.length ? (done / set.length) * 100 : 0}%`;
    answered.textContent = `${done} of ${set.length} answered`;
  };
  const response = (question, index) => {
    if (question.type.startsWith('Choose')) return [...document.querySelectorAll(`[name="q${index}"]:checked`)].map(node => Number(node.value)).sort().join(',');
    if (question.type === 'Order ALL four steps') return [1, 2, 3, 4].map(n => document.querySelector(`[name="q${index}-${n}"]`).value).join(' → ');
    return question.answer.split(';').map(pair => {
      const number = pair.trim().split(' = ')[0];
      return `${number} = ${document.querySelector(`[name="q${index}-${number}"]`).value}`;
    }).join('; ');
  };
  const expected = question => question.type.startsWith('Choose') ? question.answer.split(' and ').map(letter => letter.trim().charCodeAt(0) - 65).sort().join(',') : question.answer;
  const fullSet = () => shuffle([
    ...shuffle(tracks.prepare.questions()).slice(0, 11),
    ...shuffle(tracks.model.questions()).slice(0, 11),
    ...shuffle(tracks.visualize.questions()).slice(0, 11),
    ...shuffle(tracks.manage.questions()).slice(0, 7)
  ]);
  const newSet = (mode = 'random') => {
    const all = questionBank();
    if (activeTrack !== 'full' && all.length < setSize()) return;
    practiceMode = activeTrack === 'full' ? 'weighted' : mode;
    set = (activeTrack === 'full' ? fullSet() : practiceMode === 'all' ? shuffle(all) : shuffle(all).slice(0, setSize())).map(randomizeChoices);
    graded = false;
    summary.style.display = 'none';
    quiz.classList.remove('hidden');
    submitArea.classList.remove('hidden');
    intro.classList.add('hidden');
    submit.textContent = 'Submit answers';
    resetButton.textContent = practiceMode === 'all' ? 'Restart full bank' : practiceMode === 'weighted' ? 'Another weighted test' : 'Another random set';
    document.querySelector('#practicePill').textContent = practiceMode === 'all' ? `${set.length} questions · full bank` : practiceMode === 'weighted' ? '40 weighted questions · 65 minutes' : `${set.length} random questions · 25 minutes`;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const showChooser = () => {
    set = [];
    graded = false;
    summary.style.display = 'none';
    quiz.classList.add('hidden');
    quiz.innerHTML = '';
    submitArea.classList.add('hidden');
    intro.classList.remove('hidden');
    updateTrackCopy();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const grade = () => {
    if (graded) return;
    const missing = set.filter((question, index) => !complete(question, index)).length;
    if (missing && !window.confirm(`${missing} question${missing === 1 ? ' is' : 's are'} incomplete. Submit anyway?`)) return;
    let score = 0;
    set.forEach((question, index) => {
      const card = document.querySelector(`#q-${index}`);
      const good = response(question, index) === expected(question);
      card.classList.add('graded', good ? 'correct' : 'incorrect');
      const result = card.querySelector('.result');
      result.textContent = good ? 'Correct' : `Review this answer · Correct answer: ${question.answer}`;
      result.classList.add(good ? 'good' : 'bad');
      card.querySelectorAll('input, select').forEach(control => { control.disabled = true; });
      if (good) score++;
    });
    graded = true;
    const percent = Math.round((score / set.length) * 100);
    const nextLabel = practiceMode === 'all' ? 'Restart full bank' : practiceMode === 'weighted' ? 'Start another weighted test' : 'Start another random set';
    summary.innerHTML = `<h2>${score} / ${set.length} correct (${percent}%)</h2><p>${percent >= 80 ? 'Strong result. Review any close calls and then take another set.' : percent >= 60 ? 'A useful baseline. Start with the explanations for your mistakes, then try another set.' : 'Use the explanations as a learning pass, practise the weak areas, then try a new set.'}</p><div class="controls"><button class="secondary" id="openMistakes">Open explanations for mistakes</button><button id="nextSet">${nextLabel}</button><button class="secondary" id="summaryChangeTrack">Change syllabus area</button></div>`;
    summary.style.display = 'block';
    document.querySelector('#openMistakes').onclick = () => document.querySelectorAll('.question.incorrect details').forEach(detail => { detail.open = true; });
    document.querySelector('#nextSet').onclick = () => newSet(practiceMode);
    document.querySelector('#summaryChangeTrack').onclick = showChooser;
    summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
    submit.textContent = 'Submitted';
  };

  document.querySelectorAll('[data-track]').forEach(button => button.addEventListener('click', () => {
    activeTrack = button.dataset.track;
    updateTrackCopy();
  }));
  startButton.onclick = () => newSet('random');
  startAllButton.onclick = () => newSet('all');
  submit.onclick = grade;
  resetButton.onclick = () => newSet(practiceMode);
  changeTrackButton.onclick = showChooser;
  updateTrackCopy();
})();
