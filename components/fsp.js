import Link from "next/link";
import useInterval from '../lib/useInterval'
import Clock from './clock'
import { useStore } from '../lib/store'

export default function Fsp() {
  const { tick } = useStore()

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true)
  }, 1000)

  return (
    <>
      <Clock />
    </>
  )
}
