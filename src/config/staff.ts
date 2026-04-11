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
		link: new URL('https://lewiswolstanholme.co.uk'),
		name: 'Lewis Wolstanholme',
		role: 'Studio Manager',
	},
	{
		image: '/images/edward-hoskins.jpeg',
		link: new URL('https://lewiswolstanholme.co.uk'),
		name: 'Edward Hoskins',
		role: 'Facilities Manager',
	},
	{
		link: new URL('https://lewiswolstanholme.co.uk'),
		name: 'Johan Pauwels',
		role: 'Technical Director',
	},
	{
		link: new URL('https://annaxambo.me/'),
		name: 'Anna Xambo Sedo',
		role: 'Technical Director',
	},
	{
		image: '/images/mark-sandler.png',
		link: new URL('https://www.qmul.ac.uk/eecs/people/profiles/sandlermark.html'),
		name: 'Mark Sandler',
		role: 'Director',
	},
] as const
