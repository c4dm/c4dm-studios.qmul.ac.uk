import {
	type JSX,
	type KeyboardEvent as ReactKeyboardEvent,
	type MouseEvent as ReactMouseEvent,
	useCallback,
	useEffect,
	useState,
} from 'react'

// src
import '../style/gallery.scss'
import ArrowSVG from './svg/arrow.svg?react'

const NULL: JSX.Element = <></>
const regex = { file_extension: /\.[^.]*$/u }
const root = '/images/gallery'
const slideshow_interval = 5000
const transition_duration = 200

function Arrow(direction: 1 | -1, onChange?: (direction: 1 | -1) => void): JSX.Element {
	const _onClick = (e: ReactMouseEvent): void => {
		e.stopPropagation()
		if (onChange) {
			onChange(direction)
		}
	}
	return (
		<button
			aria-label={`View the ${direction === 1 ? 'next' : 'previous'} image.`}
			onClick={_onClick}
			type='button'
			tabIndex={-1}
		>
			<ArrowSVG style={{ transform: `scaleX(${direction.toString()})` }} />
		</button>
	)
}

function Image({ file }: { file: string | undefined }): JSX.Element {
	if (file) {
		const img_title = file.replace(regex.file_extension, '')
		return (
			<img
				aria-label={`View ${img_title} in full screen gallery mode.`}
				alt={img_title}
				height={400}
				src={`${root}/${file}`}
				width={1000}
			/>
		)
	}
	return NULL
}

export function Gallery(): JSX.Element {
	// load images
	const [slideshow, setSlideshow] = useState<boolean>(true)
	const [gallery, setGallery] = useState<string[]>([])
	const [imageVisible, setVisible] = useState<number>(0)
	useEffect((): void => {
		void fetch(`${root}/images.json`)
			.then((res: Response) => res.json())
			.then((json: string[]) => {
				setGallery(json.sort(() => Math.random() - 0.5))
			})
			.catch()
	}, [])

	// image transition
	const [transition, setTransition] = useState<boolean>(false)
	const changeImage = useCallback(
		(direction: -1 | 1): void => {
			if (transition || gallery.length === 0) {
				return
			}
			setTransition(true)
			window.setTimeout(() => {
				setVisible((current) => (gallery.length + current + direction) % gallery.length)
				setTransition(false)
			}, transition_duration)
		},
		[transition, gallery.length],
	)

	// slideshow
	useEffect((): (() => void) | undefined => {
		if (gallery.length === 0) {
			return (): void => {
				/* */
			}
		}
		let interval: number | null = null
		if (slideshow) {
			interval = window.setInterval(() => {
				changeImage(1)
			}, slideshow_interval)
		}
		return (): void => {
			if (typeof interval === 'number') {
				window.clearInterval(interval)
			}
		}
	}, [gallery, slideshow, changeImage])

	// event handlers
	const _onArrow = (direction: -1 | 1): void => {
		setSlideshow(false)
		changeImage(direction)
	}
	const _onContextMenu = (e: ReactMouseEvent<HTMLDivElement>): void => {
		e.preventDefault()
	}
	const _onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>): void => {
		switch (e.key) {
			case 'ArrowLeft':
			case 'Left':
				setSlideshow(false)
				changeImage(-1)
				break
			case 'ArrowRight':
			case 'Right':
				setSlideshow(false)
				changeImage(1)
				break
			default:
				break
		}
	}

	return (
		<section
			aria-label='Image gallery'
			className='gallery'
			onContextMenu={_onContextMenu}
			onKeyDown={_onKeyDown}
			tabIndex={0}
		>
			{Arrow(-1, _onArrow)}
			<figure className={transition ? 'transition' : ''}>
				<Image file={gallery[imageVisible]} />
				<figcaption className='sr-only'>
					Image {imageVisible + 1} of {gallery.length}
				</figcaption>
			</figure>
			{Arrow(1, _onArrow)}
		</section>
	)
}
