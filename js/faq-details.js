//Close others <details> tag
const allDetails = document.querySelectorAll("details")

allDetails.forEach((details) => {
	details.addEventListener("toggle", (e) => {
		if (details.open) {
			allDetails.forEach((details) => {
				if (details != e.target && details.open) {
					details.open = false
				}
			})
		}
	})
})
