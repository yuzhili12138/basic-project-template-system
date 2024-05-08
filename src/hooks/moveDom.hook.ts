import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 示例
 * <div  ref="chatbox"></div>
 * <div  @mousedown="dragx($event)"></div>
 * 拖动第二个div移动第一个div元素
 */
export const moveDom = () => {
	// 被拖动的包围盒
	const chatbox = ref()
	// 拖动的元素
	const dragx = (el: any) => {
		const oDiv = chatbox.value //当前元素
		const disX = el.clientX - oDiv.offsetLeft
		const disY = el.clientY - oDiv.offsetTop
		document.onmousemove = function (e) {
			//通过事件委托，计算移动的距离
			let l = e.clientX - disX
			let t = e.clientY - disY
			if (l < 0) {
				//如果左侧的距离小于0，就让距离等于0.不能超出屏幕左侧。如果需要磁性吸附，把0改为100或者想要的数字即可
				l = 0
			} else if (l > document.documentElement.clientWidth - oDiv.offsetWidth) {
				//如果左侧的距离>屏幕的宽度-元素的宽度。也就是说元素的右侧超出屏幕的右侧，就让元素的右侧在屏幕的右侧上
				l = document.documentElement.clientWidth - oDiv.offsetWidth
			}
			if (t < 0) {
				//和左右距离同理
				t = 0
			} else if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
				t = document.documentElement.clientHeight - oDiv.offsetHeight
			}
			//移动当前元素
			oDiv.style.left = l + 'px'
			oDiv.style.top = t + 'px'
		}
		document.onmouseup = function (e) {
			document.onmousemove = null
			document.onmouseup = null
		}
		// 解决有些时候,在鼠标松开的时候,元素仍然可以拖动;
		document.ondragstart = function (ev) {
			ev.preventDefault()
		}
		document.ondragend = function (ev) {
			ev.preventDefault()
		}
		return false
	}

	return {
		chatbox,
		dragx
	}
}
