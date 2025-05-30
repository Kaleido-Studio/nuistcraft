/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import Fuse from 'fuse.js'
import { marked } from 'marked'
import React, { useMemo, useState } from 'react'
import VillagerData from './VillagerData'
import styles from './VillagerDisplay.module.css'

export interface Trades {
  item: string
  price: string
}

type axis = number | string | undefined
type Coord = [axis, axis, axis]

export interface Villager {
  position: Coord
  profession: string
  trades: Trades[]
  world?: "主世界" | "地狱" | "末地"
  image?: string
  note?: string
}

function coord_2_string(_coord: Coord) {
  const coord = _coord.map(c => (c === undefined ? '~' : c))
  return coord.join(' ')
}

function get_random_uid() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function VillagerDisplay({ villager }: { villager: Villager }) {
  return (
    <div className={styles.card}>
      <h3 style={{ fontWeight: 'bold' }}>{villager.profession}</h3>
      <p>
        {villager.world ? `(${villager.world})` : '主世界'}坐标：
        <span className={styles.coord}>
          {coord_2_string(villager.position)}
        </span>
      </p>
      {villager.image && <img src={villager.image} alt={villager.profession} />}
      {villager.note && <p className={styles.note} dangerouslySetInnerHTML={{ __html: marked.parse(villager.note) }}></p>}
      <div>
        {villager.trades.map((trade, index) => (
          <div
            key={trade.item + trade.price}
            style={{ marginTop: index !== 0 ? '0.5em' : '0' }}
            className="villager-items"
          >
            <span className={styles['villager-item-name']}>
              <strong>{trade.item}</strong>
            </span>
            ：
            <span className={styles['villager-item-price']}>
              {trade.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VillagersDisplay({ villagers }: { villagers: Villager[] }) {
  const [searchQuery, setSearchQuery] = useState('')

  // 配置 Fuse.js 搜索选项
  const fuseOptions = {
    includeScore: true,
    threshold: 0.6, // 搜索阈值，0-1，数值越小匹配越严格
    keys: [
      'profession',
      'trades.item',
      'trades.price',
      'note'
    ]
  }

  const fuse = useMemo(() => new Fuse(villagers, fuseOptions), [villagers])

  // 根据搜索查询过滤和排序村民
  const filteredVillagers = useMemo(() => {
    if (!searchQuery.trim()) {
      return villagers
    }

    const results = fuse.search(searchQuery)
    return results.map(result => result.item)
  }, [fuse, searchQuery, villagers])

  return (
    <div>
      {/* 搜索框 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="搜索村民（职业、交易物品、价格、备注）..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 'var(--ifm-pagination-nav-border-radius)',
            outline: 'none',
            transition: 'all 0.2s',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--ifm-color-emphasis-400)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--ifm-color-emphasis-300)'
          }}
        />
      </div>

      {/* 搜索结果统计 */}
      {searchQuery.trim() && (
        <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
          找到 {filteredVillagers.length} 个匹配结果
        </div>
      )}

      {/* 村民卡片网格 */}
      <div className={styles.grid}>
        {filteredVillagers.map(villager => (
          <VillagerDisplay key={`${villager.profession}-${villager.position.join('-')}-${get_random_uid()}`} villager={villager} />
        ))}
      </div>

      {/* 无搜索结果提示 */}
      {searchQuery.trim() && filteredVillagers.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          color: '#999',
          fontSize: '16px'
        }}>
          没有找到匹配的村民，请尝试其他关键词
        </div>
      )}
    </div>
  )
}

const VillagersDisplayComponent = () => VillagersDisplay({ villagers: VillagerData })

export default VillagersDisplayComponent
