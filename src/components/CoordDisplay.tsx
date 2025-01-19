/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { marked } from 'marked'
import React from 'react'
import data from './CoordData'
import styles from './CoordDisplay.module.css'

type axis = number | string | undefined
type Coord = [axis, axis, axis]
export interface Contraptions {
  /** 装置名称 */
  name: string

  /**
   * 备注
   *
   * 可以使用 Markdown 格式
   */
  note?: string

  /**
   * 装置图标
   *
   * 如果是字符串，则为图片地址
   * 如果是字符串数组，则为图片地址数组，用于轮播
   */
  avatar?: string[] | string

  /**
   * 装置图片
   *
   * 如果是字符串，则为图片地址
   * 如果是字符串数组，则为图片地址数组，用于轮播
   */
  image?: string[] | string

  /** 主世界坐标 */
  world?: Coord

  /** 地狱坐标 */
  nether?: Coord

  /** 末地坐标 */
  end?: Coord

  /** 作者 */
  author?: string[] | string

  /** 损坏请联系 */
  fix?: string[] | string

  /**
   * 使用方法
   *
   * 可以使用 Markdown 格式
   */
  usage?: string

  /** 是否需要自备材料 */
  material?: boolean
}

function coord_2_string(_coord: Coord) {
  const coord = _coord.map(c => (c === undefined ? '~' : c))
  return coord.join(' ')
}

function AutoResolutionImage({ src }: { src: string }) {
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

  // cache images
  if (typeof Image !== 'undefined') {
    src.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % src.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [src.length])

  return (
    <AutoResolutionImage src={src[currentIndex]} />
  )
}

function CoordDisplayCard({
  name,
  avatar,
  image,
  world,
  nether,
  end,
  author,
  fix,
  note,
  usage,
}: Contraptions) {
  return (
    <div className={styles.card}>
      <div style={{ width: 'calc(100% - var(--ifm-h2-font-size) * 1.5)', textAlign: 'right' }}>
        {avatar
        && (
          Array.isArray(avatar)
            ? (<ImageDisplay src={avatar} />)
            : (<AutoResolutionImage src={avatar} />)
        )}
      </div>
      <p className={`${styles.title} ${styles.p}`}>
        {name}
      </p>
      {note && <p className={styles.p} dangerouslySetInnerHTML={{ __html: marked.parse(note) }}></p>}
      {image && (
        Array.isArray(image)
          ? (image.map(element => (
              <img
                className={styles.display_img}
                src={element}
                alt=""
                key={element}
              />
            )))
          : (
              <img
                className={styles.display_img}
                src={Array.isArray(image) ? image[0] : image}
                alt=""
              />
            )
      )}
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
          {Array.isArray(author) ? author.join('，') : author}
        </p>
      )}
      {fix && (
        <p className={styles.p}>
          损坏请联系：
          {Array.isArray(fix) ? fix.join('，') : fix}
        </p>
      )}
      {usage && <p className={styles.p} dangerouslySetInnerHTML={{ __html: marked.parse(usage) }}></p>}
    </div>
  )
}

function CoordDisplay({ equipments }: { equipments: Contraptions[] }) {
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
