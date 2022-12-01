import Head from 'next/head'
import Image from 'next/image'
import LayoutStructure from '../Components/LayoutStructure/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <LayoutStructure isHome={true}>
      <p>oiiiii</p>
    </LayoutStructure>
  )
}
