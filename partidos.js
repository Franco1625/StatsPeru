const partidos = [
    {
        equipoLocal: 'Deportivo Municipal',
        equipoVisitante: 'Deportivo Cantolao',
        alineacionLocal: [
            '1 | F. Nicosia',
            '15 | J. Mendieta Rojas',
            '8 | J. Reyes Espinoza',
            '10 | R. Torres Hoya',
            '77 | J. Manzaneda',
            '9 | N. Fernández',
            '30 | A. Perleche Romero',
            '6 | J. Aguirre Luza',
            '18 | S. Rebagliati',
            '5 | S. Arias',
            '12 | J. Aguirre Miñán',
            '20 | J. Canela',
            '11 | M. Matzuda',
            '25 | J. Carranza',
            '19 | J. de la Cruz',
            '14 | L. Alburqueque',
            '17 | F. Fernández Angulo',
            '22 | G. Larios',
            '16 | S. Fernández',
            '50 | W. Guzman',
        ],
        alineacionVisitante: [
            '23 | C. Limousin',
            '29 | S. Lojas',
            '20 | D. Ramírez Cutti',
            '8 | L. Ramírez',
            '18 | D. Acosta',
            '26 | J. Vargas',
            '9 | R. Espinosa Torres',
            '50 | J. Lozada',
            '14 | I. Regalado',
            '4 | M. Moreira',
            '55 | F. Duclós',
            '30 | C. Huerto',
            '19 | A. Tamariz',
            '5 | R. Guarderas',
            '7 | H. Vergara',
            '24 | V. Delgado',
            '27 | S. Velasco',
            '15 | B. Calabrese',
            '34 | Montes',
            '35 | M. Huani',
        ]
    },
    {
        equipoLocal: 'Universidad César Vallejo',
        equipoVisitante: 'Cusco Fútbol Club',
        alineacionLocal: [
            '1 | C. Grados',
            '33 | E. Benítez Santander',
            '23 | R. Quinteros',
            '2 | J. Quiñónes',
            '32 | J. Madrid',
            '7 | J. Vélez Cedeño',
            '27 | A. Ramírez',
            '17 | Y. Mena',
            '20 | O. Noronha',
            '5 | J. Vásquez',
            '19 | C. Ascues',
            '12 | M. Rabines',
            '6 | R. Garcés Mori',
            '14 | C. Cabello',
            '25 | A. Fuentes',
            '22 | F. Flores',
            '13 | N. Rodriguez',
            '16 | S. Torres',
            '24 | S. Olaya',
            '4 | L. Fleitas',
        ],
        alineacionVisitante: [
            '8 | N. Quina',
            '24 | A. Gordillo',
            '1 | D. Ferreyra',
            '25 | É. Hermoza',
            '77 | J. Estrada',
            '18 | J. Velásquez',
            '13 | G. Barreto',
            '31 | H. Arakaki',
            '9 | R. Díaz',
            '5 | M. Aucca',
            '17 | M. Da Luz',
            '4 | F. Alonso',
            '22 | C. Olivares',
            '11 | F. Rodríguez',
            '2 | J. Bilbao Vásquez',
            '6 | A. Ayarza',
            '35 | J. Morales',
            '21 | F. Yovera',
            '23 | J. Guivin Tanta',
            '20 | Zarabia',
        ]
    },
    {
        equipoLocal: 'Sport Boys',
        equipoVisitante: 'Cienciano',
        alineacionLocal: [
            '22 | J. Ríos',
            '4 | C. Ramos',
            '98 | L. Carranza',
            '10 | H. Chávez',
            '14 | O. Benítez',
            '8 | E. Mero',
            '19 | F. Milo',
            '2 | W. Schuler',
            '3 | C. Vásquez',
            '1 | A. Villete',
            '35 | D. Sánchez López',
            '23 | J. Barco',
            '31 | C. Carbajal',
            '13 | D. Caro',
            '30 | K. Peña',
            '20 | F. Roca',
            '15 | A. Domínguez',
            '12 | I. Quispe',
            '25 | R. Salazar',
            '29 | N. Contin',
        ],
        alineacionVisitante: [
            '25 | M. Vargas',
            '7 | P. Hurtado',
            '16 | I. Santillán',
            '9 | D. Carando',
            '6 | A. Ojeda Allauca',
            '19 | A. Quintero',
            '14 | C. Torrejón',
            '17 | L. Garro',
            '13 | C. Beltrán',
            '3 | K. Aparicio',
            '33 | G. González',
            '27 | R. Rodríguez',
            '31 | A. Quintana',
            '22 | S. Ramírez',
            '8 | D. La Torre',
            '99 | N. Colunga',
            '91 | Y. Cordova',
            '2 | F. Evangelista',
            '55 | A. Ramua',
            '12 | J. Josue Nolasco Garces',
        ]
    },
];



function mostrarAlineaciones(equipoLocal, equipoVisitante) {
    const alineacionesContainer = document.getElementById(`alineaciones-${equipoLocal}-${equipoVisitante}`);
    const partido = partidos.find(p => p.equipoLocal === equipoLocal && p.equipoVisitante === equipoVisitante);

    if (partido) {
        const alineacionLocal = partido.alineacionLocal;
        const alineacionVisitante = partido.alineacionVisitante;

     
        alineacionesContainer.innerHTML = `
            <h3>Alineaciones del Partido</h3>
            <p>Alineación ${equipoLocal}:</p>
            <ul>${alineacionLocal.map(jugador => `<li>${jugador}</li>`).join('')}</ul>
            <p>Alineación ${equipoVisitante}:</p>
            <ul>${alineacionVisitante.map(jugador => `<li>${jugador}</li>`).join('')}</ul>
        `;
    }
}

function ocultarAlineaciones(equipoLocal, equipoVisitante) {
    const alineacionesContainer = document.getElementById(`alineaciones-${equipoLocal}-${equipoVisitante}`);
    alineacionesContainer.innerHTML = ''; 
}
