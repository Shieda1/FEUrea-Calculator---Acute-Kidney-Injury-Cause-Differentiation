// https://www.omnicalculator.com/health/feurea

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fractionalexcretionofureaRadio = document.getElementById('fractionalexcretionofureaRadio');
const serumcreatinineRadio = document.getElementById('serumcreatinineRadio');
const serumureaRadio = document.getElementById('serumureaRadio');
const urinecreatinineRadio = document.getElementById('urinecreatinineRadio');
const urineureaRadio = document.getElementById('urineureaRadio');

let fractionalexcretionofurea;
let serumcreatinine = v1;
let serumurea = v2;
let urinecreatinine = v3;
let urineurea = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

fractionalexcretionofureaRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum creatinine';
  variable2.textContent = 'Serum urea';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine urea';
  serumcreatinine = v1;
  serumurea = v2;
  urinecreatinine = v3;
  urineurea = v4;
  result.textContent = '';
});

serumcreatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of urea';
  variable2.textContent = 'Serum urea';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine urea';
  fractionalexcretionofurea = v1;
  serumurea = v2;
  urinecreatinine = v3;
  urineurea = v4;
  result.textContent = '';
});

serumureaRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of urea';
  variable2.textContent = 'Serum creatinine';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine urea';
  fractionalexcretionofurea = v1;
  serumcreatinine = v2;
  urinecreatinine = v3;
  urineurea = v4;
  result.textContent = '';
});

urinecreatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of urea';
  variable2.textContent = 'Serum creatinine';
  variable3.textContent = 'Serum urea';
  variable4.textContent = 'Urine urea';
  fractionalexcretionofurea = v1;
  serumcreatinine = v2;
  serumurea = v3;
  urineurea = v4;
  result.textContent = '';
});

urineureaRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of urea';
  variable2.textContent = 'Serum creatinine';
  variable3.textContent = 'Serum urea';
  variable4.textContent = 'Urine creatinine';
  fractionalexcretionofurea = v1;
  serumcreatinine = v2;
  serumurea = v3;
  urinecreatinine = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fractionalexcretionofureaRadio.checked)
    result.textContent = `Fractional excretion of urea = ${computefractionalexcretionofurea().toFixed(2)}`;

  else if(serumcreatinineRadio.checked)
    result.textContent = `Serum creatinine = ${computeserumcreatinine().toFixed(2)}`;

  else if(serumureaRadio.checked)
    result.textContent = `Serum urea = ${computeserumurea().toFixed(2)}`;

  else if(urinecreatinineRadio.checked)
    result.textContent = `Urine creatinine = ${computeurinecreatinine().toFixed(2)}`;

  else if(urineureaRadio.checked)
    result.textContent = `Urine urea = ${computeurineurea().toFixed(2)}`;
})

// calculation

// fractionalexcretionofurea = (urineurea * serumcreatinine) / (serumurea * urinecreatinine) * 100

function computefractionalexcretionofurea() {
  return ((Number(urineurea.value) * Number(serumcreatinine.value)) / (Number(serumurea.value) * Number(urinecreatinine.value))) * 100;
}

function computeserumcreatinine() {
  return ((Number(fractionalexcretionofurea.value) / 100) / Number(urineurea.value)) * (Number(serumurea.value) * Number(urinecreatinine.value));
}

function computeserumurea() {
  return (Number(urineurea.value) * Number(serumcreatinine.value)) / ((Number(fractionalexcretionofurea.value) / 100) * Number(urinecreatinine.value));
}

function computeurinecreatinine() {
  return (Number(urineurea.value) * Number(serumcreatinine.value)) / (Number(serumurea.value) * Number(fractionalexcretionofurea.value) / 100);
}

function computeurineurea() {
  return ((Number(fractionalexcretionofurea.value) / 100) / Number(serumcreatinine.value)) * (Number(serumurea.value) * Number(urinecreatinine.value));
}