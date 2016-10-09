interface F1Results {
    position: number;
    carNumber: number;
    driver: string;
    car: string;
    laps: number;
    time: string;
    points: number;
}

function F1Results(position: number, carNumber: number, driver: string,
                    car: string, laps: number, time: string, points: number) {
  return {
    position: position,
    carNumber: carNumber,
    driver: driver,
    car: car,
    laps: laps,
    time: time,
    points: points,
  }
}

var results = [
  F1Results(1,  3, "Daniel Ricciardo", "RED BULL RACING TAG HEUER", 56, "1:37:12.776",	25),
  F1Results(2, 33,   "Max Verstappen", "RED BULL RACING TAG HEUER", 56, "+2.443s",      18),
  F1Results(3,  6,     "Nico Rosberg",                  "MERCEDES", 56, "+25.516s",     15)
  /*
4	7	Kimi Räikkönen	FERRARI	56	+28.785s	12
5	77	Valtteri Bottas	WILLIAMS MERCEDES	56	+61.582s	10
6	11	Sergio Perez	FORCE INDIA MERCEDES	56	+63.794s	8
7	14	Fernando Alonso	MCLAREN HONDA	56	+65.205s	6
8	27	Nico Hulkenberg	FORCE INDIA MERCEDES	56	+74.062s	4
9	22	Jenson Button	MCLAREN HONDA	56	+81.816s	2
10	30	Jolyon Palmer	RENAULT	56	+95.466s	1
11	55	Carlos Sainz	TORO ROSSO FERRARI	56	+98.878s	0
12	9	Marcus Ericsson	SAUBER FERRARI	55	+1 lap	0
13	19	Felipe Massa	WILLIAMS MERCEDES	55	+1 lap	0
14	26	Daniil Kvyat	TORO ROSSO FERRARI	55	+1 lap	0
15	94	Pascal Wehrlein	MRT MERCEDES	55	+1 lap	0
16	31	Esteban Ocon	MRT MERCEDES	55	+1 lap	0
NC	12	Felipe Nasr	SAUBER FERRARI	46	DNF	0
NC	44	Lewis Hamilton	MERCEDES	40	DNF	0
NC	21	Esteban Gutierrez	HAAS FERRARI	39	DNF	0
NC	20	Kevin Magnussen	RENAULT	17	DNF	0
NC	8	Romain Grosjean	HAAS FERRARI	7	DNF	0
NC	5	Sebastian Vettel	FERRARI	0	DNF	0
*/
];

function getResults(): Promise<F1Results> {
    return Promise.resolve(results);
}

getResults().then(console.log);
