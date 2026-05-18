// biome-ignore-all lint/a11y/noNoninteractiveElementInteractions : unable to find a more meanignful element / role combination than div / application
// biome-ignore-all lint/a11y/noNoninteractiveTabindex : unable to find a more meanignful element / role combination than div / application

import {
	type FC,
	type JSX,
	type KeyboardEvent as ReactKeyboardEvent,
	type MouseEvent as ReactMouseEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

// src
import '../style/gallery.scss'
import ArrowSVG from './svg/arrow.svg?react'

// import images
const gallery_dir = '/images/gallery'
const gallery = Object.entries(import.meta.glob('/public/images/gallery/*.{jpg,jpeg,png,webp}'))
	.map(([path]) => path.split('/').pop() ?? '')
	.sort((a, b) => a.localeCompare(b))

// gloabls
const NULL: JSX.Element = <></>
const regex = { file_extension: /\.[^.]*$/u }
const slideshow_interval = 5000
const transition_duration = 300

const Arrow: FC<{ direction: 1 | -1; onClick: (direction: 1 | -1) => void }> = ({ direction, onClick }) => {
	const _onClick = (): void => {
		onClick(direction)
	}
	return (
		<button
			aria-label={`View the ${direction === 1 ? 'next' : 'previous'} image.`}
			onClick={_onClick}
			tabIndex={-1}
			type='button'
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
				src={`${gallery_dir}/${file}`}
				width={1000}
			/>
		)
	}
	return NULL
}

export const Gallery: FC = () => {
	// image transition
	const [transition, setTransition] = useState<boolean>(false)
	const [imageVisible, setVisible] = useState<number>(0)
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
		[transition],
	)

	// slideshow
	const [slideshow, setSlideshow] = useState<boolean>(true)
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
	}, [slideshow, changeImage])

	// event handlers
	const _onArrow = (direction: -1 | 1): void => {
		setSlideshow(false)
		changeImage(direction)
	}
	const _onContextMenu = (e: ReactMouseEvent<HTMLDivElement>): void => {
		e.preventDefault()
	}
	const self = useRef<HTMLDivElement>(null)
	const _onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>): void => {
		if (self.current) {
			switch (e.key) {
				case 'ArrowLeft':
				case 'Left':
					self.current.focus()
					setSlideshow(false)
					changeImage(-1)
					break
				case 'ArrowRight':
				case 'Right':
					self.current.focus()
					setSlideshow(false)
					changeImage(1)
					break
				default:
					break
			}
		}
	}

	// render dynamic content
	if (gallery.length > 0) {
		return (
			<div
				aria-label='Gallery of Images from C4DM Studios'
				className='gallery'
				onContextMenu={_onContextMenu}
				onKeyDown={_onKeyDown}
				ref={self}
				role='application'
				tabIndex={0}
			>
				<figure className={transition ? 'transition' : ''} tabIndex={-1}>
					<Image file={gallery[imageVisible]} />
					<figcaption>
						Image {imageVisible + 1} of {gallery.length}
					</figcaption>
				</figure>
				{gallery.length > 1 && (
					<>
						<Arrow direction={-1} onClick={_onArrow} />
						<Arrow direction={1} onClick={_onArrow} />
					</>
				)}
			</div>
		)
	}
	return NULL
}
