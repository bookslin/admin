<template>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
//滚动条样式
::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  position: absolute;
}

::-webkit-scrollbar-thumb{
  background: #8f9aa5;
}
::-webkit-scrollbar-track{
  background: #ddd;
}
</style>
