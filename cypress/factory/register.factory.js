import { faker } from '@faker-js/faker';

export function generateRegisterData() {
    return {
        email: faker.internet.email(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        password: faker.internet.password(),
        day: faker.number.int({ min: 1, max: 31 }), // Génère un jour entre 1 et 31
        month: faker.number.int({ min: 1, max: 12 }), // Génère un mois entre 1 et 12
        year: faker.number.int({ min: 1950, max: 2005 }) // Génère une année plausible
    };
}