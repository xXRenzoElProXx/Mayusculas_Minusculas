function convertText(action) {
    const textArea = document.getElementById('textInput');
    let text = textArea.value;
    const resultElement = document.getElementById('result');

    switch (action) {
        case 'capitalize':
            textArea.value = text
                .toLowerCase()
                .replace(/\b\w/g, char => char.toUpperCase());
            break;
        case 'toLowerCase':
            textArea.value = text.toLowerCase();
            break;
        case 'toUpperCase':
            textArea.value = text.toUpperCase();
            break;
        case 'sentenceCase':
            textArea.value = text
                .toLowerCase()
                .replace(/(?:^|\.\s*)([a-z])/g, (match) => match.toUpperCase());
            break;
        case 'invertText':
            textArea.value = text.split('').reverse().join('');
            break;
        case 'removeExtraSpaces':
            textArea.value = text.replace(/\s+/g, ' ').trim();
            break;
        case 'countWords':
            resultElement.textContent = `Número de palabras: ${text.split(/\s+/).filter(Boolean).length}`;
            return;
        case 'countChars':
            resultElement.textContent = `Número de caracteres: ${text.length}`;
            return;
        case 'countCharsNoSpaces':
            const charCountNoSpaces = text.replace(/\s+/g, '').length;
            resultElement.textContent = `Número de caracteres (sin espacios): ${charCountNoSpaces}`;
            return;
        case 'countCharsNoPunctuation':
            const charCountNoPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').length;
            resultElement.textContent = `Número de caracteres (ignorando puntuación): ${charCountNoPunctuation}`;
            return;
        case 'clear':
            textArea.value = '';
            resultElement.textContent = '';
            break;
        default:
            break;
    }
    resultElement.textContent = '';
    updateButtonStates();
}

function updateButtonStates() {
    const text = document.getElementById('textInput').value.trim();
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.classList.toggle('enabled', text.length > 0);
    });
}