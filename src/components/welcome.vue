<script setup>
import Intro from '../components/intro.vue'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
    <div style="width: 65%; margin:auto;">
        <el-container>
            <el-header>
                <el-menu :default-active="1" mode="horizontal" :ellipsis="false"
                    @select="handleSelect">
                    <el-menu-item index="0">GAO WEIHE</el-menu-item>
                    <div class="flex-grow"></div>
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-menu-item index="2">About</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <Intro />
            </el-main>
            <el-footer>Copyright by GAO Weihe 2023</el-footer>
        </el-container>
    </div>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>