<template>
    <nav class="pagination">
            <div>
                <span class="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>
            </div>
        <a v-if="pagination.prevPage" @click="$emit('prev')" class="page-item page-link">
            Prev
        </a>
        <a class="page-item page-link" v-else disabled>
            Prev
        </a>

        <a v-if="pagination.nextPage" @click="$emit('next')" class="page-item page-link">
            Next
        </a>
        <a class="page-item page-link" v-else disabled>
            Next
        </a>
    </nav>
</template>

<script>
    export default {
        props: ['pagination'],
    }
</script>