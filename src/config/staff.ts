export type C4DMEmployee = {
	image: string
	link?: URL
	name: string
	role: 'Studio Manager' | 'Technical Director' | 'Facilities Manager' | 'Director of C4DM'
}

export const staff: readonly C4DMEmployee[] = [
	{
		image: '/images/edward-hoskins.jpeg',
		name: 'Ciarán Corr',
		role: 'Studio Manager',
	},
	{
		image: '/images/lewis-wolstanholme.jpeg',
		link: new URL('https://lewiswolstanholme.co.uk'),
		name: 'Lewis Wolstanholme',
		role: 'Studio Manager',
	},
	{
		image: '/images/edward-hoskins.jpeg',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/hoskinsedward.html'),
		name: 'Edward Hoskins',
		role: 'Facilities Manager',
	},
	{
		image: '/images/edward-hoskins.jpeg',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/pauwelsjohan.html'),
		name: 'Johan Pauwels',
		role: 'Technical Director',
	},
	{
		image: '/images/edward-hoskins.jpeg',
		link: new URL('https://annaxambo.me/'),
		name: 'Anna Xambo Sedo',
		role: 'Technical Director',
	},
	{
		image: '/images/mark-sandler.png',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/sandlermark.html'),
		name: 'Mark Sandler',
		role: 'Director of C4DM',
	},
] as const
