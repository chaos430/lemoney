import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagStore = {
    tagList: [] as Tag[],
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag(name: string) {
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复了');
            return 'duplicated';
        }
        const id = createId().toString();
        this.tagList.push({id, name: name});
        this.saveTags();
        window.alert('添加成功');
        return 'success';
    },


    saveTags() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    }
};

tagStore.fetchTags();

export default tagStore;