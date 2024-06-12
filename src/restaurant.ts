import { faker } from '@faker-js/faker';

const review = () => {
	return {
		id: faker.string.nanoid(),
		name: faker.person.fullName(),
		rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
		text: faker.lorem.paragraph(),
	};
};

const generator = () => {
	return {
		id: faker.string.nanoid(),
		name: faker.lorem.sentence({ min: 3, max: 9 }),
		category: faker.helpers.arrayElement(['japanese', 'thai', 'seafood', 'italians', 'mexican', 'indian']),
		price: faker.helpers.rangeToNumber({ min: 10, max: 200 }),
		rating: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
		open: faker.datatype.boolean(),
		image: faker.image.urlLoremFlickr({
			width: 480,
			height: 480,
			category: 'restaurant',
		}),
		location: {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		},
		reviews: faker.helpers.multiple(review, { count: faker.helpers.rangeToNumber({ min: 1, max: 5 }) }),
	};
};

const restaurants = faker.helpers.multiple(generator, { count: 100 });

export default {
	restaurants,
};
