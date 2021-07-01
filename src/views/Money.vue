<template>
  <Layout class-prefix="layout">
    <Types/>
    <Output/>
    <Tags class="tags"/>
    <FormItem field-name="备注" placeholder="在这里输入备注"/>
    <NumberPad @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Output from '@/components/Money/Output.vue';
import Types from '@/components/Money/Types.vue';


@Component({
  components: {Output, FormItem, Tags, NumberPad,Types}
})
export default class Money extends Vue {

  // eslint-disable-next-line no-undef
  record: RecordItem = {id: null, tag: '', notes: '', type: '-', amount: 0,};

  saveRecord() {
    this.$store.commit('createRecord')
  }
}
</script>
<style lang="scss" scoped>
::v-deep .content {
  display: flex;
  flex-direction: column;
}

.tags{
  padding-left: 35px;
}
</style>
