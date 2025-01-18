import React from 'react'
import data from './CoordData'
import styles from './CoordDisplay.module.css'

type axis = number | string | undefined
type Coord = [axis, axis, axis]
export interface Equipment {
  /** 装置名称 */
  name: string

  /** 装置图标 */
  avatar?: string[] | string

  /** 主世界坐标 */
  world?: Coord

  /** 地狱坐标 */
  nether?: Coord

  /** 末地坐标 */
  end?: Coord

  /** 作者 */
  author?: string[]

  /** 损坏请联系 */
  fix?: string[]

  /** 备注 */
  note?: string

  /** 使用方法 */
  usage?: string

  /** 是否需要自备材料 */
  material?: boolean
}

function coord_2_string(_coord: Coord) {
  const coord = _coord.map(c => (c === undefined ? '~' : c))
  return coord.join(' ')
}

function AutoImage({ src }: { src: string }) {
  const [isLowResolution, setIsLowResolution] = React.useState(false)

  React.useEffect(() => {
    setIsLowResolution(true)
    const img = new Image()
    img.src = src
    img.onload = () => {
      if (img.width < 20 || img.height < 20) {
        setIsLowResolution(true)
      }
      else {
        setIsLowResolution(false)
      }
    }
  }, [src])

  return (
    <img
      className={styles.img}
      src={src}
      alt=""
      style={isLowResolution ? { imageRendering: 'pixelated' } : { imageRendering: 'auto' }}
    />
  )
}

function ImageDisplay({ src }: { src: string[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % src.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [src.length])

  return (
    <AutoImage src={src[currentIndex]} />
  )
}

function CoordDisplayCard({
  name,
  avatar,
  world,
  nether,
  end,
  author,
  fix,
  note,
  usage,
}: Equipment) {
  return (
    <div className={styles.card}>
      <div style={{ width: 'calc(100% - var(--ifm-h2-font-size) * 1.5)', textAlign: 'right' }}>
        {avatar
        && (
          Array.isArray(avatar)
            ? (<ImageDisplay src={avatar} />)
            : (<AutoImage src={avatar} />)
        )}
      </div>
      <p className={`${styles.title} ${styles.p}`}>
        {name}
      </p>
      {note && <p className={styles.p}>{note}</p>}

      {world && (
        <p className={styles.p}>
          主世界坐标：
          <span className={styles.coord}>
            (
            {coord_2_string(world)}
            )
          </span>
        </p>
      )}
      {nether && (
        <p className={styles.p}>
          地狱坐标：
          <span className={styles.coord}>
            (
            {coord_2_string(nether)}
            )
          </span>
        </p>
      )}
      {end && (
        <p className={styles.p}>
          末地坐标：
          <span className={styles.coord}>
            (
            {coord_2_string(end)}
            )
          </span>
        </p>
      )}
      {author && (
        <p className={styles.p}>
          作者：
          {author.join('，')}
        </p>
      )}
      {fix && (
        <p className={styles.p}>
          损坏请联系：
          {fix.join('，')}
        </p>
      )}
      {usage && <p className={styles.p}>{usage}</p>}
    </div>
  )
}

function CoordDisplay({ equipments }: { equipments: Equipment[] }) {
  return (
    <div className={styles.grid}>
      {equipments.map(equipment => (
        <CoordDisplayCard key={equipment.name} {...equipment} />
      ))}
    </div>
  )
}

const CoordDisplayComponent = () => CoordDisplay({ equipments: data })

export default CoordDisplayComponent
