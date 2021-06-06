import Vue from 'vue'
import Component from 'vue-class-component';
import store from '@/store';
const map :{ [key:string]:string} = {
    'tag name duplicated' :'标签名重复'
}
@Component
export class TagHelper extends Vue {
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) { return window.alert('标签名不能为空');}
        store.commit('createTag', name);
        if(store.state.createTagError){
            window.alert(map[store.state.createTagError.message] || '未知错误')
        }
    }
}