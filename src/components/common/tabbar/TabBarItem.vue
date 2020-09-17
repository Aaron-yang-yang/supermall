<template>
	<div class="tab-bar-item" @click="itemclick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<!-- 动态绑定style -->
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
		export default {
			name: "TabBarItem",
			props: {
				path: String,
				// 让用户动态决定活跃的板块的颜色
				activeColor: {
					default: 'red',
					type: String
				}
			},
			computed:{
				// 拿到当前活跃的路由的路径和自己的路径进行对比,如果相同则返回ture.否则返回false(-1)
				isActive(){
					return this.$route.path.indexOf(this.path) !== -1
				},
				// 将props中的颜色传给当前活跃的路由板块
				activeStyle(){
					return this.isActive? {color:this.activeColor} : {}
				}
			},
			methods: {
				itemclick (){
					this.$router.replace(this.path)
				}
			}
		}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		flex-direction:row;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		/* 去除图片原本多占用的3个像素空间 */
		vertical-align: middle;
		margin-top: 3px;
		margin-bottom: 2px;
	}
</style>
