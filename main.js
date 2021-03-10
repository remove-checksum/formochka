const specializations = {
  html: {
    ru: ['теги', 'css-стили'],
    en: ['tags', 'css styles'],
  },
  js: {
    ru: ['функции', 'массивы'],
    en: ['functions', 'arrays'],
  },
  node: {
    ru: ['файловая система', 'асинхронность'],
    en: ['file system', 'async'],
  },
  react: {
    ru: ['хуки', 'redux'],
    en: ['hooks', 'redux'],
  },
};

function createCheckbox(checkboxName) {
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = checkboxName;
  label.innerText = checkboxName;
  label.appendChild(checkbox);
  return label;
}

function handleLanguage(e) {
  specializationSelect.disabled = false;
}

function handleCheckboxes(e) {
  checkboxGroup.innerHTML = '';
  const language = languageSelect.value;
  const spec = e.target.value;
  specializations[spec][language].forEach((feature) => {
    checkboxGroup.append(createCheckbox(feature));
  });
}

const languageSelect = document.querySelector('#language');
const specializationSelect = document.querySelector('#specialization');
const checkboxGroup = document.querySelector('.checkbox-group');

document.onload = () =>
  specializations[specializationSelect.value].forEach((feature) =>
    checkboxGroup.append(createCheckbox(feature))
  );

languageSelect.addEventListener('change', handleLanguage);
specializationSelect.addEventListener('change', handleCheckboxes);
