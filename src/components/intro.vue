<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content ep-bg-purple">
                    <img :src="imagePath" alt="" class="img-fluid">
                    <p>GAO Weihe</p>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content ep-bg-purple"></div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content ep-bg-purple"></div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content ep-bg-purple">
                    <p>I study Computer Science as a postgraduate student at Tsinghua University until the summer of 2024. </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: '../assets/photo_gaoweihe.jpg'
    }
  }
}
</script>