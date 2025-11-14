<script setup lang="ts">
import { h, ref } from 'vue';
import { UiDataTable, UiSwitch, UiDatePicker } from '../../shared/ui';
import { convertUnixToDate } from '../../shared/utils';

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
];

const MOCK_DATA: {
  key: number,
  steName: string | null | undefined,
  isActual: boolean
  priceEndDate: string | null | undefined,
  priceNotNds: string | null | undefined,
  nds: string | null | undefined,
  price: string | null | undefined,
  fillEndDate: string | null | undefined,
}[] = MOCK_NAMES.map((name, index) => ({
  key: index,
  steName: name,
  isActual: true,
  priceEndDate: '14.11.2025',
  priceNotNds: null,
  nds: null,
  price: null,
  fillEndDate: '21.03.2023'
}
));

const data = ref(MOCK_DATA);

const setDataToConsole = (row: any) => {
  console.log(row);
}

const COLUMNS = [
  {
    key: "steName",
    title: "Наименование СТЕ",
    sorter: 'default',
  },
  {
    key: "isActual",
    title: "В наличии",
    render(row: any, index: number) {
      return h(UiSwitch, {
        isActive: row.isActual,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('isActual')) {
            data.value[index].isActual = v
          }
          setDataToConsole(row);
        }
      })
    }
  },
  {
    key: "priceEndDate",
    title: "Срок действия предоставленных сведений",
    render(row: any, index: number) {
      return h(UiDatePicker, {
        value: row.priceEndDate,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('priceEndDate')) {
            data.value[index].priceEndDate = convertUnixToDate(v);
          }
          setDataToConsole(row);
        }
      })
    }
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
    render(row: any, index: number) {
      return h(UiDatePicker, {
        value: row.fillEndDate,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('fillEndDate')) {
            data.value[index].fillEndDate = convertUnixToDate(v);
          }
          setDataToConsole(row);
        }
      })
    }
  },
];

</script>

<template>
  <UiDataTable
    :columns="COLUMNS"
    :data="MOCK_DATA"
  />
</template>