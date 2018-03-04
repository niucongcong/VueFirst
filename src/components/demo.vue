<template>
	<div>
		{{sliders}}
	</div>
</template>
<script>
export default{
	props:{
		sliders:{
			type:Array
		}
	},
	mounted:function(){
		console.log(this.sliders);
	}
}	
</script>
<style ></style>