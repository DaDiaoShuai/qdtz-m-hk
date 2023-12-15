<script setup>
import { ref, reactive, nextTick } from 'vue';
import {useStore} from '../store'
const store = useStore()

const ishidden = () => {
    store.svgshow = false
    store.isshadow=false
    nextTick(() => {
        store.rightshow = false
    })
}
</script>

<template>
    <div :class={shadow:store.isshadow} @click="ishidden">
        <router-view></router-view>
    </div>

</template>

<style  scoped>

</style>
