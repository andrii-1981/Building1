(function () {


    const feedbacks = [
        {
            id: '1',
            testimonialText: `“We rent an office in this business center and are completely satisfied with the
            service
            they provide. It is really very comfortable here. You can enjoy an excellent working
            atmosphere, all conditions for comfortable work are created. All my teammates love
            our
            office and also use free services , the gym especially. I'm glad we were able to
            find a
            really great place to work all together in Boston."`,

            feedbackDate: "October 28, 2019",

            profilePhoto: "img/profile_photos/jane_peterson.png",
            profileName: "Jane Peterson",
            profilePosition: "CEO at Whole Food Co."
        },

        {
            id: '2',
            testimonialText: `“When we were planning to launch a startup, we didn't have much budget. Therefore,
            finding
            an office was very difficult. Finally, I accidentally visited this business center
            and
            found
            just the perfect option. We have been working in this business center for over a
            year,
            and
            it is really very convenient and comfortable here. We are happy to work in the Forum
            building."`,

            feedbackDate: "March 02, 2020",

            profilePhoto: "img/profile_photos/douglas_petergrew.png",
            profileName: "Douglas Petegrew",
            profilePosition: "PR Manager at Estra Ronots."
        },

        {
            id: '3',
            testimonialText: `“I work remotely but it's very difficult for me to work from home. Therefore, I often go
            to
            coworking spaces. My favorite coworking space is located in the Forum business center,
            of
            course. It is a really calm and very quiet place. The Internet is very fast, there are
            always many free workplaces, and the price for the subscription is very attractive. I
            always
            come here with great pleasure."`,

            feedbackDate: "March 02, 2020",

            profilePhoto: "img/profile_photos/dean_simman.png",
            profileName: "Dean Simman",
            profilePosition: "Marketer at Elisa Corp."
        }
    ];

    function feedbacksContainerCode(currentSlideIdx) {
        return `<div class="section__feedback-container">
        <div>
            <div class="apostrophes">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                    xml:space="preserve" style="max-width:100%" height="100%">
                    <g style="" fill="currentColor">
                        <polygon
                            points="45.454,16.378 11.119,16.378 11.119,50.713 29.547,77.188 42.673,67.431 31.152,50.713 45.454,50.713  "
                            style="" fill="currentColor"></polygon>
                        <polygon
                            points="87.528,16.378 53.192,16.378 53.192,50.713 71.621,77.188 84.747,67.431 73.226,50.713 87.528,50.713  "
                            style="" fill="currentColor"></polygon>
                    </g>
                    <g display="none" style="" fill="currentColor">
                        <path display="inline"
                            d="M85.871,8.649h-71.28c-6.418,0-11.622,5.204-11.622,11.622v52.493c0,6.419,5.203,11.623,11.622,11.623   h9.113l0.005,9.593l11.995-9.593h50.167c6.419,0,11.622-5.204,11.622-11.623V20.271C97.493,13.853,92.29,8.649,85.871,8.649z    M54.03,71.383H44.022V61.374H54.03V71.383z M60.952,46.323c-4.144,1.583-6.801,4.637-6.801,9.194H43.9   c0-11.616,7.412-15.111,12.133-16.251c2.895-0.699,5.68-1.612,5.837-5.55c0.127-3.175-1.732-7.088-9.608-6.931   c-8.728,0.175-9.312,6.569-9.34,8.69l-10.251,0.127c-0.013-0.696,0.004-6.946,4.86-11.901c3.597-3.671,8.696-5.532,15.155-5.532   c15.059,0,18.809,9.585,19.039,14.646C72.109,41.277,65.453,44.604,60.952,46.323z"
                            style="" fill="currentColor"></path>
                    </g>
                </svg>
            </div>

            <div class="testimonial__text">
                <p>
                    <em>
                        ${feedbacks[currentSlideIdx].testimonialText}
                    </em>
                </p>

                <p>${feedbacks[currentSlideIdx].feedbackDate}</p>

            </div>

            <div class="section__profile">
                <img class="profile-photo" src="${feedbacks[currentSlideIdx].profilePhoto}"
                    alt="${feedbacks[currentSlideIdx].profileName}">
                <div class="section__profile-info">
                    <p class="profile-name">${feedbacks[currentSlideIdx].profileName}</p>
                    <p class="profile-position">${feedbacks[currentSlideIdx].profilePosition}</p>
                </div>
            </div>
        </div>
    </div>`;
    };

    let currentSlideIdx = 0;

    function renderCarousel() {
        const sectionFeedbacks = document.querySelector(".section__feedbacks");
        sectionFeedbacks.innerHTML = feedbacksContainerCode(currentSlideIdx);

        if (window.innerWidth > 767) {
            const secondSlideIdx = currentSlideIdx + 1 >= feedbacks.length ? 0 : currentSlideIdx + 1;
            sectionFeedbacks.innerHTML += feedbacksContainerCode(secondSlideIdx);
        }
    };

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= feedbacks.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    };

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? feedbacks.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    };


    const btnNext = document.querySelector(".section__feedbacks-carousel__btn-next");
    btnNext.addEventListener('click', next);

    const btnPrev = document.querySelector(".section__feedbacks-carousel__btn-prev");
    btnPrev.addEventListener('click', prev);

    setInterval(next, 5000);

    window.addEventListener('resize', renderCarousel);

    renderCarousel();

})()