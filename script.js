function calculateLevel() {
    let score = 0;

    const form = document.forms['levelTestForm'];

    // Evaluar la pregunta 1
    if (form['q1'].value === 'goes') {
        score += 1;
    }

    // Evaluar la pregunta 2
    if (form['q2'].value === 'bought') {
        score += 1;
    }

    // Evaluar la pregunta 3
    if (form['q3'].value === 'hers') {
        score += 1;
    }

     // Evaluar la pregunta 4
     if (form['q4'].value === 'at') {
        score += 1;
    }

     // Evaluar la pregunta 5
     if (form['q5'].value === 'are') {
        score += 1;
    }

     // Evaluar la pregunta 6
     if (form['q6'].value === 'clever') {
        score += 1;
    }

     // Evaluar la pregunta 7
     if (form['q7'].value === 'cheap') {
        score += 1;
    }

     // Evaluar la pregunta 8
     if (form['q8'].value === 'museum') {
        score += 1;
    }

     // Evaluar la pregunta 9
     if (form['q9'].value === 'increase') {
        score += 1;
    }

     // Evaluar la pregunta 10
     if (form['q10'].value === 'cold') {
        score += 1;
    }

     // Evaluar la pregunta 11
     if (form['q11'].value === 'good night!') {
        score += 1;
    }

     // Evaluar la pregunta 12
     if (form['q12'].value === 'some') {
        score += 1;
    }

     // Evaluar la pregunta 13
     if (form['q13'].value === 'both a and b') {
        score += 1;
    }

     // Evaluar la pregunta 14
     if (form['q14'].value === 'My name is Emma') {
        score += 1;
    }

     // Evaluar la pregunta 15
     if (form['q15'].value === 'Where is the bathroom?') {
        score += 1;
    }


    // Calcular el nivel basado en el puntaje
    let level = '';
    if (score >= 13 && score <= 15) {
        level = 'B1 (Intermediate)';
    } else if (score >= 10 && score <= 12) {
        level = 'A2+ (Pre-intermediate)';
    } else if (score >= 6 && score <= 9) {
        level = 'A2 (Basic)';
    } else if (score >= 1 && score <= 5) {
        level = 'A1 (Beginner)';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = `Your English Level: ${level}`;
}
