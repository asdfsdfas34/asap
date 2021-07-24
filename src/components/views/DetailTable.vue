<template>
  <tr v-if="item.length == 2">
    <th>
      {{ item[0].columnName }}
    </th>
    <td>
      <input type="text" class="input_txt" v-model="item[0].columnValue" />
    </td>
    <th>
      {{ item[1].columnName }}
    </th>
    <td>
      <input type="text" class="input_txt" v-model="item[1].columnValue" />
    </td>
  </tr>
  <tr v-else>
    <th>
      {{ item[0].columnName }}
    </th>
    <td>
      <input type="text" class="input_txt" v-model="item[0].columnValue" />
    </td>
    <th></th>
    <td>
      <input type="text" class="input_txt" disabled />
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
    },
  },
};
</script>

<style></style>
