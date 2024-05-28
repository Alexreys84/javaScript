document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate-btn');
    const clearBtn = document.getElementById('clear-btn');

    calculateBtn.addEventListener('click', function () {
        const amount = Number(document.getElementById('amount').value.replace(',', '.').replace('R$', '').replace(/\./g, '').replace(/\,/g, '.'));
        const entry = Number(document.getElementById('entry').value.replace(',', '.').replace('R$', '').replace(/\./g, '').replace(/\,/g, '.'));
        const months = Number(document.getElementById('months').value);
        const installment = Number(document.getElementById('installment').value.replace(',', '.').replace('R$', '').replace(/\./g, '').replace(/\,/g, '.'));

        if (isNaN(amount) || isNaN(entry) || isNaN(months) || isNaN(installment)) {
            document.getElementById('result').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
            document.getElementById('result').style.color = 'black'; // Altera a cor do texto para preto
            return;
        }

        const totalLoan = amount - entry;
        const totalInterest = (installment * months) - totalLoan;
        const interestRate = (totalInterest / totalLoan) * 100;

        document.getElementById('result').innerHTML = `
            <p style="color: yellow;">Taxa de juros: ${interestRate.toFixed(2).replace('.', ',')}%</p>
            <p style="color: yellow;">Juros totais: R$ ${totalInterest.toFixed(2).replace(/\./g, ',')}</p>
        `;
    });

    clearBtn.addEventListener('click', function () {
        document.getElementById('amount').value = '';
        document.getElementById('entry').value = '';
        document.getElementById('months').value = '';
        document.getElementById('installment').value = '';
        document.getElementById('result').innerHTML = '';
    });
});
