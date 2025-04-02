import { faker } from '@faker-js/faker';

export function generateContactData(){
    return{
        email:faker.internet.email(),
        order: faker.number.int({ min: 100000, max: 999999 }),
        message:faker.lorem.paragraph()
    }
}