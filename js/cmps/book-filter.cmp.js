export default {
    template: `
        <div class="book-filter">
            <label>Search</label>
            <input @input="filter" v-model="filterBy.byName" type="text" placeholder="Search...">
            <input @input="filter" v-model.number="filterBy.fromPrice" type="number" 
            placeholder="From Price..."/>
            <input @input="filter" v-model.number="filterBy.toPrice" type="number" 
            placeholder="To Price..."/>
        </div>
    `,
    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
            //deep copy
            // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}