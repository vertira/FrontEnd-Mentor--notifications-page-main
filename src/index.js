const getAllNotifications = document.querySelector(".messages");
const getNumberOfNotifications = document.querySelector(
	".notifications--number"
);
const btnAllNotificationsRemove = document.querySelector(".btn__read");

// ==============CLASS TEMPLATE============

class Notification {
	constructor(
		name,
		avatar,
		text,
		post = "",
		time,
		group = "",
		unread,
		message,
		img
	) {
		(this.name = name),
			(this.avatar = avatar),
			(this.text = text),
			(this.post = post),
			(this.time = time),
			(this.group = group),
			(this.unread = unread),
			(this.message = message),
			(this.img = img);
	}
	createDiv() {
		const newDiv = document.createElement("div");
		newDiv.classList.add("message__person");
		newDiv.setAttribute("data-unread", `${this.unread}`);
		newDiv.innerHTML = `
      <img src="${this.avatar}" alt="photo of ${this.name}" />
      <div class="message__text">
      <div class="text--conatiner">
              <span class="message--name">${this.name}</span><span class="text">${this.text}</span><img src="${this.img}" alt=""><span class="message--post ${this.group}">${this.post}</span><div class="redcircle"></div>
              </div>
            <div><span class="message--time">${this.time}</span></div>
            <div class="message--private"><p>${this.message}</p></div>
            </div>
            </div>`;
		if (this.unread === true) {
			newDiv.addEventListener(
				"click",
				() => {
					newDiv.setAttribute("data-unread", "false");
					newDiv.querySelector(".redcircle").remove();
					getNumberOfNotifications.textContent = document.querySelectorAll(
						'[data-unread="true"]'
					).length;
				},
				{ once: true }
			);
		} else {
			newDiv.querySelector(".redcircle").remove();
		}
		if (this.message === "") {
			newDiv.querySelector(".message--private").remove();
		}
		if (this.img === "") {
			newDiv.querySelector(".text--conatiner img").remove();
		}
		getAllNotifications.appendChild(newDiv);
	}
}
// ================Timeout Function================
const timeoutNotification = (name, time) => {
	setTimeout(function () {
		name.createDiv();
		getNumberOfNotifications.textContent = document.querySelectorAll(
			'[data-unread="true"]'
		).length;
	}, time);
};
// ==============NEW OBJECTS==================

const Mark = new Notification(
	"Mark Webber",
	"/assets/images/avatar-mark-webber.webp",
	"reacted to your recent post",
	"My first tournament today!",
	"1m ago",
	"",
	true,
	"",
	""
);
timeoutNotification(Mark, 700);
const Angela = new Notification(
	"Angela Gray",
	"/assets/images/avatar-angela-gray.webp",
	"followed you",
	"",
	"3m ago",
	"",
	true,
	"",
	""
);
timeoutNotification(Angela, 1400);

const Jacob = new Notification(
	"Jacob Thompson",
	"assets/images/avatar-jacob-thompson.webp",
	"has joined your group",
	"Chess Club",
	"1 day ago",
	"message--group",
	true,
	"",
	""
);
timeoutNotification(Jacob, 2100);
const Rizky = new Notification(
	"Rizky Hasanuddin",
	"/assets/images/avatar-rizky-hasanuddin.webp",
	"sent you a private message",
	"",
	"5 days ago",
	"",
	false,
	"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
	""
);
timeoutNotification(Rizky, 2800);
const Kimberly = new Notification(
	"Kimberly Smith",
	"/assets/images/avatar-kimberly-smith.webp",
	"commented on your picture",
	"",
	"1 week ago",
	"",
	false,
	"",
	"/assets/images/image-chess.webp"
);
timeoutNotification(Kimberly, 3500);
const Nathan = new Notification(
	"Nathan Peterson",
	"/assets/images/avatar-nathan-peterson.webp",
	"reacted to your recent post",
	"5 end-game strategies to increase your win rate",
	"1 day ago",
	"",
	false,
	"",
	""
);
timeoutNotification(Nathan, 4200);
const Anna = new Notification(
	"Anna Kim",
	"/assets/images/avatar-anna-kim.webp",
	"left the group",
	"Chess Club",
	"2 weeks ago",
	"message--group",
	false,
	"",
	""
);
timeoutNotification(Anna, 4900);

btnAllNotificationsRemove.addEventListener("click", () => {
	document.querySelectorAll('[data-unread="true"]').forEach((e) => {
		e.setAttribute("data-unread", "false");
		document.querySelectorAll(".redcircle").forEach((e) => {
			e.remove();
			getNumberOfNotifications.textContent = "0";
		});
	});
});
