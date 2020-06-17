const news = [
    {
        date: "Wednesday, 17 June 2020",
        desc: "Our new YouTube channel launched today <a href=\"https://www.youtube.com/channel/UCSaaFS8LzdlEt4mFirY4-qg/featured\">@TBSHSInteract</a>.<br>We will be streaming quizzes weekly, open to everyone."
    }, {
        date: "Thursday, 13 May 2020",
        desc: "This website launched today as a part of Interact's new and improved online image."
    }, {
        date: "Tuesday, 5 November 2019",
        desc: "Our new Facebook page launched today <a href=\"https://fb.me/TBSHSInteract\">@TBSHSInteract</a>."
    }, {
        date: "Monday, 4 November 2019",
        desc: "Our new Twitter feed launched today <a href=\"https://twitter.com/TBSHSInteract\">@TBSHSInteract</a>."
    }
];

let output = /*html*/`<h1>News</h1><br>`;
news.forEach((item) => {
    output += /*html*/`
        <h1>${item.date}</h1>
        <p>${item.desc}</p>
        <br>
    `;
});
document.write(output);