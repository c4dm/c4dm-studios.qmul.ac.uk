export type Affiliation = {
	image: string
	link: URL
	name: string
}

export const affiliations: readonly Affiliation[] = [
	{
		image: '/images/affiliations/aim.png',
		link: new URL('https://aim.qmul.ac.uk/'),
		name: 'Artificial Intelligence & Music CDT',
	},
	{
		image: '/images/affiliations/ail.png',
		link: new URL('https://instrumentslab.org/'),
		name: 'Augmented Instruments Lab',
	},
	{
		image: '/images/affiliations/bela.png',
		link: new URL('https://bela.io/'),
		name: 'Bela',
	},
	{
		image: '/images/affiliations/c4dm.png',
		link: new URL('https://c4dm.eecs.qmul.ac.uk/'),
		name: 'Centre for Digital Music',
	},
	{
		image: '/images/affiliations/mat.png',
		link: new URL('https://mat.qmul.ac.uk/'),
		name: 'Media & Arts Technology CDT',
	},
] as const
