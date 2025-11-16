<script setup lang="ts">
import { computed, h, ref } from 'vue';
import { UiDataTable, UiSwitch, UiDatePicker, UiInputNumber } from '../../shared/ui';
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

interface IRow {
  id: number,
  steName: string | null | undefined,
  isActual: boolean
  priceEndDate: string | null | undefined,
  priceNotNds: number | null | undefined,
  nds: number | null | undefined,
  price: number | null | undefined,
  fillEndDate: string | null | undefined,
}

const MOCK_DATA: IRow[] = MOCK_NAMES.map((name, index) => ({
  id: index,
  steName: name,
  isActual: true,
  priceEndDate: null,
  priceNotNds: null,
  nds: null,
  price: null,
  fillEndDate: '21.03.2023'
}
));

const data = ref(MOCK_DATA);

const setDataToConsole = (row: IRow) => {
  console.log(row);
}

const calculatedData = computed(() => data?.value?.map((row) => {
  if (row.priceNotNds && row.nds) {
    const price = Number(row.priceNotNds) + (Number(row.priceNotNds) * Number(row.nds) / 100);
    return ({ ...row, price });
  } else {
    return row;
  }
}));

const COLUMNS = computed(() => [
  {
    key: "steName",
    title: "Наименование СТЕ",
    width: 250,
    sorter: 'default'
  },
  {
    key: "isActual",
    title: "В наличии",
    width: 100,
    align: "center",
    render(row: IRow, index: number) {
      return h(UiSwitch, {
        isActive: row.isActual,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('isActual')) {
            data.value[index].isActual = v
          }
          setDataToConsole(row);
        }
      })
    },
  },
  {
    key: "priceEndDate",
    title: "Срок действия предоставленных сведений",
    width: 150,
    render(row: IRow, index: number) {
      return h(UiDatePicker, {
        value: row.priceEndDate,
        bordered: false,
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
    width: 100,
    render(row: IRow, index: number) {
      return h(UiInputNumber, {
        value: row.priceNotNds,
        bordered: false,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('priceNotNds')) {
            data.value[index].priceNotNds  = v;
          }
          setDataToConsole(row);
        }
      })
    }
  },
  {
    key: "nds",
    title: "НДС, %",
    width: 100,
    render(row: IRow, index: number) {
      return h(UiInputNumber, {
        value: row.nds,
        bordered: false,
        onUpdateValue(v: any) {
          if (data?.value?.[index]?.hasOwnProperty('nds')) {
            data.value[index].nds = v;
          }
          setDataToConsole(row);
        }
      })
    }
  },
  {
    key: "price",
    title: "Цена, руб. с НДС",
    width: 130,
    render(row: IRow) {
      setDataToConsole(row);
      return row.price;
    }
  },
  {
    key: "fillEndDate",
    title: "Срок заполнения",
    width: 130
  },
]);
</script>

<template>
  <UiDataTable
    :columns="COLUMNS"
    :data="calculatedData"
  />
</template>

<style scoped>
:deep(.n-data-table-th__title) {
  text-transform: uppercase;
  text-align: center;
}
</style>