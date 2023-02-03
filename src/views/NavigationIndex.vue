<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header_title">xxxxx导航平台</div>
        <div style="width: calc(100vw - 600px);line-height: 160px">
          <div>
            <el-image style="width: 101px; height: 33px;position: relative;top:8px;right: 10px"
                      :src="'https://www.baidu.com/img/flexible/logo/pc/result.png'"/>
            <el-form ref="aaaa" action="https://www.baidu.com/s">
              <el-input style="width: calc(100% - 121px);">
                <template #append>
                  <el-button :icon="Search" placeholder="百度一下" />
                </template>
              </el-input>
            </el-form>
          </div>
        </div>

        <div class="header_button">
          <el-button type="primary" link>首页</el-button>
          <el-button type="primary" link>关于我们</el-button>
          <el-button type="primary" link>登录</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {Search} from "@element-plus/icons-vue";

export default {
  name: "NavigationIndex",
  computed: {
    Search() {
      return Search
    }
  },
  setup() {
    const searchEngines = [
      {
        name: 'baidu',
        imgUrl: 'https://www.baidu.com/img/flexible/logo/pc/result.png'
      }
    ]

    return {}
  },
  methods: {}
}
</script>

<style scoped>
:deep(.el-header) {
  height: 120px;
  margin: 0 auto;
}

.header_title {
  position: absolute;
  display: inline-block;
  left: 50px;
  top: 15px;
  font-size: 24px;
}

.header_button {
  position: absolute;
  display: inline-block;
  right: 15px;
  top: 10px;
}
</style>