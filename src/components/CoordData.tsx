import type { Equipment } from './CoordDisplay'

export default [
  {
    name: '史莱姆农场',
    world: [-751, undefined, -165],
    nether: [-99, 128, -141],
    avatar: '/img/items/slime_ball.png',
  },
  {
    name: '简易单核守卫者农场',
    world: [-147, 64, 273],
    nether: [-19, 137, 39],
  },
  {
    name: '地狱自动蜂蜜机',
    world: [353, 126, -85],
    nether: [15, 128, -17],
    avatar: ['/img/items/honey_bottle.png', '/img/items/honeycomb.png'],
  },
  {
    name: '猪灵交易机',
    nether: [101, 128, -18],
    avatar: ['/img/items/gold_ingot.png', '/img/items/gold_nugget.png'],
  },
  {
    name: '装书塔1（刷绿宝石）',
    world: [488, 195, -394],
    nether: [61, 128, -49],
    note: '刷村民绿宝石',
    avatar: '/img/items/emerald.png',
  },
  {
    name: '信大陆酿药机',
    world: [223, 68, -840],
    note: '自动酿造药水',
    avatar: ['/img/items/brewing_stand.png', '/img/items/glass_bottle.png'],
  },
  {
    name: '信大陆高速熔炉',
    world: [264, 66, -807],
    note: '快速烧制物品',
  },
  {
    name: '信大陆16色羊毛机',
    world: [291, 67, -827],
    note: '刷全色羊毛',
  },
  {
    name: '信大陆AFK树场',
    world: [148, 68, -729],
    note: '自动伐木',
  },
  {
    name: '信大陆刷铁机',
    avatar: '/img/items/iron_ingot.png',
    world: [130, 68, -744],
    note: '生成铁锭',
  },
  {
    name: '信大陆村民交易站',
    world: [215, 68, -905],
    note: '村民交易',
    avatar: ['/img/items/emerald.png', '/img/items/enchanted_book.png'],
  },
  {
    name: '信大陆综合工业设施',
    world: [233, 74, -525],
    note: '刷石、高速熔炉、村民交易、各类农作物、骨粉、苔藓、甘蔗、竹子',
    avatar: ['/img/items/potato.png', '/img/items/bone_meal.png', '/img/items/moss_block.png', '/img/items/sugar_cane.png', '/img/items/bamboo.png'],
  },
  {
    name: '杀凋机',
    note: '刷下界之星，制作信标',
    nether: [-386, 123, -354],
    avatar: ['/img/items/nether_star.png', '/img/items/beacon.png'],
    author: ['Apocalypse'],
    fix: ['Apocalypse'],
    usage: '按照指引站在指定位置上，对准铁质活板门防止方块',
  },
] as Equipment[]
