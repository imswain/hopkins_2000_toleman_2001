import * as params from "@params";

const submitButton = document.querySelector("#submit");
if (submitButton) {
	submitButton.addEventListener("click", (e) => {
		e.preventDefault();
		if (document.getElementById('captcha').value)
			window.location.href=params.poemURL;
	})
}
