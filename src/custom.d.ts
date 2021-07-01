type RootState={
    output: string;
    selectedTag: string;
    type: string;
    notes: string;
    recordList: RecordItem[];
    budget: number|null;
    payTags: tags;
    incomeTags: tags;
}
type RecordItem = {
    tag:string
    notes: string
    type: string
    amount: number
    createdAt?: string
    id: string|null;
}

type tags=string[]

