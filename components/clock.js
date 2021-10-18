import { useStore } from '../lib/store'
import shallow from 'zustand/shallow'



const useClock = () => {
  return useStore(
    (store) => ({ lastUpdate: store.lastUpdate, light: store.light }),
    shallow
  )
}

const formatTime = (time) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const { lastUpdate, light } = useClock()
  return (
    <div className={light ? 'light' : ''}>
      {formatTime(lastUpdate)}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #000;
          font: 12px "Menlo", monospace;
          background-color: transparent;
          z-index: 100;
        }

        .light {
          background-color: transparent;
          z-index: 100;
        }
      `}</style>
    </div>
  )
}

export default Clock
