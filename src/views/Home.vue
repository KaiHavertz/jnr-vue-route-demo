
<template>
 <jnr-container>
    <div class="jnr-container-aside" slot="aside">
     <router-view name="aside" :menu="menu" @jnr-click="addTab"/>
    </div>
    <div class="jnr-container-body" slot="body">
      <div class="jnr-container-header" slot="header">
        <div class="jnr-container-header-item" slot="header-item-first">
    <router-view name="header"/>
        </div>
      </div>
      <div class="jnr-container-main" slot="main">
         <router-view name="tabs"
          :height="tabHeight"
          ref="tabs"
          @tab-click="tabClick"
          @tab-close="tabClose"
          class="jnr-container-main-item-start"
        >
          <!-- 除了自带的菜单项，还可以自定义，甚至可以完全自定义自带菜单 jnr-disabled表示禁止点击，无效果 -->
          <slot name="item"><div class="jnr-disabled item">禁止</div> </slot>
        </router-view>
      </div>
    </div>
  </jnr-container>  
</template>
<script>
import jnrContainer from '@/components/jnr/jnrContainer'
export default {
  data() {
    return {
      tabHeight: "400px", // tab面板高度
    };
  },
  name:'home',
  components:{ jnrContainer},
  computed: {
    menu: {
      get() {
        return this.$store.getters.getMenu;
      },
      set(newVal) {
        console.log("1 menu newVal", newVal);
      },
    },
    tabsCurrentId: {
      get() {
        console.log("1 tabsCurrentId newVal");
        return this.$store.getters.getTabCurrentId;
      },
      set(newVal) {
        console.log("1 tabsCurrentId newVal", newVal);
      },
    },
  }, methods: {
    //点击了标签事件 可以让子组件执行该方法
    tabClick() {},
    //可以让子组件执行该方法
    tabClose() {},
    ///当前是否已经在列表中了
    isOpen(id) {
      var open = false;
      try {
        this.$store.getters.getTabsDataArray.forEach((item) => {
          if (item.id === id) {
            open = true;
            throw new Error("End Loop");
          }
          console.log(item);
        });
      } catch (e) {
        console.log(e);
      }
      return open;
    },
    addTab(item) {
      // 判断是否已经展开了
      // 1 如果没展开则添加后选中
      console.log("this.tabsCurrentId", this.tabsCurrentId);
      console.log(" item.id", item.id);

      if (!this.isOpen(item.id)) {
        this.$store.commit("addTabsDataArray", item);
      }
      //设置当前选中的标签序号
      this.$store.commit("updateTabsCurrentId", item.id);
    },
  },
}
</script>