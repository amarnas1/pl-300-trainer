(() => {
  const all = window.QUESTION_BANK || [];
  const quiz = document.querySelector('#quiz');
  const summary = document.querySelector('#summary');
  const submitArea = document.querySelector('#submitArea');
  const intro = document.querySelector('#intro');
  const progress = document.querySelector('#progress');
  const answered = document.querySelector('#answered');
  const submit = document.querySelector('#submit');
  const startButton = document.querySelector('#start');
  const shuffleButton = document.querySelector('#shuffle');
  const resetButton = document.querySelector('#reset');
  const setSize = 15;
  let set = [];
  let graded = false;

  const shuffle = values => {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const choiceMarkup = (question, index) => {
    const count = question.type === 'Choose TWO' ? 2 : 1;
    return `<div class="choices">${question.options.map((option, optionIndex) => `<label class="choice"><input type="${count === 1 ? 'radio' : 'checkbox'}" name="q${index}" value="${optionIndex}"><span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escape(option)}</span></label>`).join('')}</div>`;
  };
  const select = (name, choices) => `<select name="${name}" aria-label="${name}"><option value="">Choose…</option>${choices.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('')}</select>`;
  const structuredMarkup = (question, index) => {
    if (question.type === 'Order ALL four steps') {
      return `<div class="sequence">${[1, 2, 3, 4].map(n => `<label>Position ${n}${select(`q${index}-${n}`, question.options)}</label>`).join('')}</div>`;
    }
    const pairs = question.answer.split(';').map(v => v.trim().split(' = '));
    const choices = question.type === 'Answer YES or NO for EACH statement' ? ['Yes', 'No'] : [...new Set(pairs.map(pair => pair[1]))];
    return `<div class="sequence">${pairs.map(([number]) => `<label>Statement ${number}${select(`q${index}-${number}`, choices)}</label>`).join('')}</div>`;
  };
  const render = () => {
    quiz.innerHTML = set.map((question, index) => `<article class="question" id="q-${index}"><p class="q-meta">Question ${String(index + 1).padStart(2, '0')} · ${escape(question.topic)} · ${escape(question.type)}</p><p class="prompt">${escape(question.prompt)}</p>${question.type.startsWith('Choose') ? choiceMarkup(question, index) : structuredMarkup(question, index)}<div class="feedback"><p class="result"></p><details><summary>Read the explanation</summary><p class="why"><strong>The basic idea:</strong> ${escape(question.why)}</p><p class="why"><strong>Why the alternatives fail:</strong> ${escape(question.wrong)}</p><p class="why"><strong>Remember:</strong> ${escape(question.remember)}</p></details></div></article>`).join('');
    quiz.querySelectorAll('input, select').forEach(control => control.addEventListener('change', updateProgress));
    updateProgress();
  };
  const complete = (question, index) => {
    if (question.type.startsWith('Choose')) return document.querySelectorAll(`[name="q${index}"]:checked`).length > 0;
    if (question.type === 'Order ALL four steps') return [1, 2, 3, 4].every(n => document.querySelector(`[name="q${index}-${n}"]`).value);
    return question.answer.split(';').every(pair => document.querySelector(`[name="q${index}-${pair.trim().split(' = ')[0]}"]`).value);
  };
  const updateProgress = () => {
    const total = set.length;
    const done = set.filter(complete).length;
    progress.style.width = `${total ? (done / total) * 100 : 0}%`;
    answered.textContent = `${done} of ${total} answered`;
  };
  const response = (question, index) => {
    if (question.type.startsWith('Choose')) return [...document.querySelectorAll(`[name="q${index}"]:checked`)].map(node => Number(node.value)).sort().join(',');
    if (question.type === 'Order ALL four steps') return [1, 2, 3, 4].map(n => document.querySelector(`[name="q${index}-${n}"]`).value).join(' → ');
    return question.answer.split(';').map(pair => {
      const number = pair.trim().split(' = ')[0];
      return `${number} = ${document.querySelector(`[name="q${index}-${number}"]`).value}`;
    }).join('; ');
  };
  const expected = question => {
    if (!question.type.startsWith('Choose')) return question.answer;
    return question.answer.split(' and ').map(letter => letter.trim().charCodeAt(0) - 65).sort().join(',');
  };
  const newSet = () => {
    set = shuffle(all).slice(0, setSize);
    graded = false;
    summary.style.display = 'none';
    quiz.classList.remove('hidden');
    submitArea.classList.remove('hidden');
    intro.classList.add('hidden');
    submit.textContent = 'Submit answers';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const grade = () => {
    if (graded) return;
    const missing = set.filter((question, index) => !complete(question, index)).length;
    if (missing && !window.confirm(`${missing} question${missing === 1 ? ' is' : 's are'} unanswered. Submit anyway?`)) return;
    let score = 0;
    set.forEach((question, index) => {
      const card = document.querySelector(`#q-${index}`);
      const good = response(question, index) === expected(question);
      card.classList.add('graded', good ? 'correct' : 'incorrect');
      const result = card.querySelector('.result');
      result.textContent = good ? 'Correct' : `Review this answer · Correct answer: ${question.answer}`;
      result.classList.add(good ? 'good' : 'bad');
      if (good) score++;
    });
    graded = true;
    const percent = Math.round((score / set.length) * 100);
    summary.innerHTML = `<h2>${score} / ${set.length} correct (${percent}%)</h2><p>${percent >= 80 ? 'Strong result. Review any close calls and then take another set.' : percent >= 60 ? 'A useful baseline. Start with the explanations for your mistakes, then try another set.' : 'Use the explanations as a learning pass, practise the weak areas, then try a new set.'}</p><div class="controls"><button class="secondary" id="openMistakes">Open explanations for mistakes</button><button id="nextSet">Start another random set</button></div>`;
    summary.style.display = 'block';
    document.querySelector('#openMistakes').onclick = () => document.querySelectorAll('.question.incorrect details').forEach(detail => detail.open = true);
    document.querySelector('#nextSet').onclick = newSet;
    summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
    submit.textContent = 'Submitted';
  };
  startButton.onclick = newSet;
  shuffleButton.onclick = newSet;
  submit.onclick = grade;
  resetButton.onclick = newSet;
  document.querySelector('.pill').textContent = `${setSize} random questions · 25 minutes`;
})();
