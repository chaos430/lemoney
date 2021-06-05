import Vue from 'vue'
import Component from 'vue-class-component';
import store from '@/store';
@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) { return window.alert('标签名不能为空');}
        store.commit('createTag', name);
    }
}