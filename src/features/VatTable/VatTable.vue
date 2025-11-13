<script setup lang="ts">
import { UiDataTable } from '../../shared/ui';

const TABLE_HEADERS = [
  {
    key: "steName",
    title: "Наименование СТЕ",
    sorter: 'default',
  },
  {
    key: "isActual",
  },
  {
    key: "priceEndDate",
    title: "Срок действия предоставленных сведений",
  },
  {
    key: "priceNotNds",
    title: "Цена, руб. без НДС",
  },
  {
    key: "nds",
    title: "НДС, %",
  },
  {
    key: "price",
    title: "Цена, руб. с НДС",
  },
  {
    key: "fillEndDate",
    title: "Срок заполнения",
  },
];

const MOCK_NAMES = [
  'Корректор канцелярский / корректор ленточный, 5 мм*30 м, Комплект 5 шт.',
  'inФормат PVC A4 Папка-регистратор на кольцах, черная',
  'Веник с совком для уборки, совок и щетка для уборки, метла с длинной ручкой',
  'Кофе капсульный Coffesso Delicato Italiano Espresso, для системы Nespresso, 50 шт',
  'Zikolki Store Заколка для волос 21 шт.',
  'Camay Спрей мист для тела и волос парфюмированный женский Пион и ягоды, 190 мл',
  'Щипцы Hyundai H-HS1415 25Вт макс.темп.:180С покрытие:керамико-турмалиновое черный',
  'Стаканы одноразовые бумажные 200 мл 90 шт, стаканчики для кофе',
  'Мешки для мусора 180 л мусорные пакеты 180 л',
  'Умная Швабра с Отжимом без ведра для мытья полов Бабочка',
  'Носки KOMAX термоноски мужские, 5 пар',
  'Рюкзак Staff Strike универсальный, 3 кармана, черно-салатовый, 45х27х12 см'
]

const MOCK_DATA = MOCK_NAMES.map((name, index) => ({
  key: index,
  steName: name,
  isActual: true,
  priceEndDate: null,
  priceNotNds: null,
  nds: null,
  price: null,
  fillEndDate: null
}))
</script>

<template>
  <UiDataTable
    :columns="TABLE_HEADERS"
    :data="MOCK_DATA"
  />
</template>