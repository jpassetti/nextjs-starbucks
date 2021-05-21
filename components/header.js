import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// next.js components
import Image from 'next/image'
import Link from 'next/link'

// custom components
import Container from './container'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

// styles
import styles from './header.module.scss'

export default function Header() {
	const [isMenuVisible, setMenuVisible] = useState(false)

	const variants = {
		open: {
			x: 0
		},
		closed: {
			x: "100%"
		},
		exit: {
			x: "100%"
		},
	};

	return (
		<header className={styles.header}>
			<Container>
				<Row justifyContentSpaceBetween>
			<Link href="/">
				<a>
					<Image 
						src="/images/starbucks-logo.svg"
						width={100}
						height={100}
						alt="Starbucks logo"
					/>
				</a>
			</Link>
			<ButtonUI icon="menu" clickHandler={() => {
				setMenuVisible(true)
			}} />
			<AnimatePresence>
			{
				isMenuVisible &&
					<motion.div
						className={styles.nav_container}
						initial="closed"
						animate={isMenuVisible ? 'open' : 'closed'}
						variants={variants}
						exit="exit"
					>
						<NavOverlay closeClickHandler={() => {
							setMenuVisible(false)
						}} />
					</motion.div>
			}
			</AnimatePresence>
				</Row>
			</Container>
		</header>
	)
}
