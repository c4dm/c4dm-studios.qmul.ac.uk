export type C4DMEmployee = {
	name: string
	role: 'Studio Manager' | 'Technical Director' | 'Facilities Manager' | 'Director'
	link?: URL
	image?: string
}

export const Staff: readonly C4DMEmployee[] = [
	{
		name: 'Ciarán Corr',
		role: 'Studio Manager',
	},
	{
		name: 'Lewis Wolstanholme',
		link: new URL('https://lewiswolstanholme.co.uk'),
		role: 'Studio Manager',
	},
	{
		name: 'Edward Hoskins',
		image: '/images/edward-hoskins.jpeg',
		link: new URL('https://lewiswolstanholme.co.uk'),
		role: 'Facilities Manager',
	},
	{
		name: 'Johan Pauwels',
		link: new URL('https://lewiswolstanholme.co.uk'),
		role: 'Technical Director',
	},
	{
		name: 'Anna Xambo Sedo',
		link: new URL('https://annaxambo.me/'),
		role: 'Technical Director',
	},
	{
		name: 'Mark Sandler',
		image: '/images/mark-sandler.png',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/sandlermark.html'),
		role: 'Director',
	},
] as const
