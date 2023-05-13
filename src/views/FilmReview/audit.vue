<template>
  <div>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </div>
</template>

<script lang="ts" setup>
import { FilmReviewList } from "./index.type";
interface MoadlAudit {
  item?: FilmReviewList;
}
const props = defineProps<MoadlAudit>();

const emits = defineEmits(["onClick", "onState", "onRecon"]);
</script>
