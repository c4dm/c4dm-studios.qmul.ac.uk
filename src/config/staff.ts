export type C4DMEmployee = {
	image: string
	link?: URL
	name: string
	role: 'Studio Manager' | 'Technical Director' | 'Facilities Manager' | 'Director of C4DM'
}

export const staff: readonly C4DMEmployee[] = [
	{
		image: '/images/staff/ciaran-corr.jpeg',
		name: 'Ciarán Corr',
		role: 'Studio Manager',
	},
	{
		image: '/images/staff/lewis-wolstanholme.jpeg',
		link: new URL('https://lewiswolstanholme.co.uk'),
		name: 'Lewis Wolstanholme',
		role: 'Studio Manager',
	},
	{
		image: '/images/staff/edward-hoskins.jpeg',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/hoskinsedward.html'),
		name: 'Edward Hoskins',
		role: 'Facilities Manager',
	},
	{
		image: '/images/staff/johan-pauwels.jpeg',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/pauwelsjohan.html'),
		name: 'Johan Pauwels',
		role: 'Technical Director',
	},
	{
		image: '/images/staff/anna-xambo.jpeg',
		link: new URL('https://annaxambo.me/'),
		name: 'Anna Xambo Sedo',
		role: 'Technical Director',
	},
	{
		image: '/images/staff/mark-sandler.png',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/sandlermark.html'),
		name: 'Mark Sandler',
		role: 'Director of C4DM',
	},
] as const
