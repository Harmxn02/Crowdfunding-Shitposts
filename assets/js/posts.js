const _posts = [
    {
        who: `Prince Nobuu Amu of Nigeria`,
        img: "/assets/images/posts/nigerian-prince.jpg",
        title: `Help Nigerian prince fulfil his promise to innocent old lady 🚀`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repudiandae ipsa quibusdam odio veniam. Itaque magni nesciunt non dolorem..`,

        days_left:     `${Math.floor(Math.random() * 31) + 1}`,

        contributions: `${Math.floor(Math.random() * 1000) + 20}`,
        current:       `${Math.floor(Math.random() * 5000)}`,
        goal:          `${Math.floor(Math.random() * 100_00) + 0}`,
    },
    {
        who: `the Venezuelan government`,
        img: "/assets/images/posts/Venezuela.webp",
        title: "Help restore the Venezuelan economy 🏛",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repudiandae ipsa quibusdam odio veniam. Itaque magni nesciunt non dolorem..`,

        days_left:     `${Math.floor(Math.random() * 31) + 1}`,

        contributions: `${Math.floor(Math.random() * 1000)}`,
        current:       `${Math.floor(Math.random() * 500_000)}`,
        goal:          `${Math.floor(Math.random() * 1000_000)}`,
    },
    {
        who: `the Biden administration`,
        img: "/assets/images/posts/Biden.jpg",
        title: "Help pay off US Federal Debt 💵",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repudiandae ipsa quibusdam odio veniam. Itaque magni nesciunt non dolorem..`,

        days_left:     `${Math.floor(Math.random() * 31) + 1}`,

        contributions: `${Math.floor(Math.random() * 100000)}`,
        current:       `${Math.floor(Math.random() * 500_000) + 200_000}`,
        goal:          `${Math.floor(Math.random() * 1_000_000)}`,
    },
    {
        who: `Karen`,
        img: "/assets/images/posts/mother.webp",
        title: `Help single mother of four pay her rent 😢`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis repudiandae ipsa quibusdam odio veniam. Itaque magni nesciunt non dolorem..`,

        days_left:     `0`,

        contributions: `0`,
        current:       `0`,
        goal:          `1700`,
    },
];

// TODO: calculate the percentage to GOAL