import express from 'express';

const app = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get('/holidays', (request, response) => {
    response.send(`
        <h1>Feriados 2022</h1>
        ${holidays.map(holiday => {
            return `<p>${holiday.date} - ${holiday.name}</p>`;
        }).join('')}
    `);
});

app.get('/is-today-holiday', (request, response) => {
    const today = new Date();
    const isHoliday = false;
    
    holidays.map(holiday => {
        if(today.toLocaleDateString() === holiday.date) isHoliday = true;
    });

    response.send(`
        <h2>Dia ${today.toLocaleDateString()}</h1>
        ${isHoliday ? `Sim, hoje é feriado` : 'Não, hoje não é feriado'}
    `);
});

app.listen(4000, () => {
    console.log('Deu bom');
});