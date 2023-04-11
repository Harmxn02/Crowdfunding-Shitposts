document.addEventListener("DOMContentLoaded", init);

function init() {
	processPosts();
}

function processPosts() {
	let random_post = Math.floor(Math.random() * _posts.length);
	console.log(random_post);

	let who = _posts[random_post].who;
	let image_url = _posts[random_post].img;
	let title = _posts[random_post].title;
	let description = _posts[random_post].description;
	let description_two = _posts[random_post].description_two;

	let days = _posts[random_post].days_left;

	let contributions = _posts[random_post].contributions;
	let current = _posts[random_post].current;
	let goal = _posts[random_post].goal;

	let days_left = variableDaysLeft(days);

	let percentageCompleted = Math.floor((current / goal) * 100);

	createHTML(
		who,
		image_url,
		title,
		description,
		description_two,
		days_left,
		contributions,
		current,
		goal,
		percentageCompleted
	);
}

function variableDaysLeft(days) {
	if (days == 0) {
		days = "past due :(";
	} else if (days == 1) {
		days = days + " DAY LEFT !!!";
	} else if (days < 7 && days > 2) {
		days = days + " DAYS LEFT !!!";
	} else {
		days = days + " days left";
	}

	return days;
}

function createHTML(
	who,
	image_url,
	title,
	description,
	description_two,
	days_left,
	contributions,
	current,
	goal,
	percentageCompleted
) {
	let HTML = `
    <div class="post">
        <div id="info_images">
            <p id="days_left">${days_left}</p>
            <img src="${image_url}"></img>
        </div>
        <div id="content">
            <p id="title">${title}</p>
            <div id="progress">
                <div id="data">
                    <div>
                        <p id="contributions">Contributions</p>
                        <p id="contributions_amount">${contributions}</p>
                    </div>
                    <div>
                        <p id="current">Current</p>
                        <p id="current_amount">$${current}</p>
                    </div>
                    <div>
                        <p id="goal">Goal</p>
                        <p id="goal_amount">$${goal}</p>
                    </div>
                </div>
                
                <div id="bar">
                    <input type="range" disabled id="percentageCompleted" name="percentageCompleted" value="${percentageCompleted}" min="0" max="100">
                    <p>${percentageCompleted}% raised</p>
                </div>
            </div>
            <div>
                <p id="description">${description}</p>
                <p id="description">${description_two}</p>
            </div>
            <div id="cta_container">
                <a href="#" class="cta support">Support ${who} </a>
                <a href="#" class="cta read">Read more </a>
            </div>
        </div>
    </div>

    <div id="next_story">
            <a href="#" id="next" onclick="location.reload();" class="cta next">random post </a>
            <p id="next_text">you may get the same posts again and again but there are ${_posts.length} posts </p>

    </div>
    `;

	injectHTML(HTML);
}

function injectHTML(code) {
	const $post_container = document.querySelector("#container");
	$post_container.insertAdjacentHTML("beforeend", code);
}
