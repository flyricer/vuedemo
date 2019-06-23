<template>
  <div class="parent">
    <brother-card></brother-card>
    <sister-card></sister-card>
    <current-table :person="person">
      <current-item name="person.firstname"></current-item>
    </current-table>
  </div>
</template>

<script>
import BrotherCard from "@/components/brother.vue";
import SisterCard from "@/components/sister.vue";
import CurrentTable from "@/components/currenttable.vue";
import CurrentItem from "@/components/currentitem.vue";

export default {
  data() {
    return {
      person: {
        firstname: "jack",
        lastname: "ma"
      },
      msg: "message"
    };
  },
  methods: {},
  computed: {},
  components: {
    BrotherCard,
    SisterCard,
    CurrentTable,
    CurrentItem
  }
};
</script>

<style lang="less" scoped></style>
