new Vue({
    el: "#app",
    data: {
        articles: [
            {
                title: "Let’s Get Solution For Building Construction Work",
                tag: "Kitchan Design",
                img: {
                    src: "img/blog-photo-1.jpg",
                    alt: "Kitchan design"
                },
                date: "26 December,2022"
            },
            {
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                tag: "Living Design",
                img: {
                    src: "img/blog-photo-2.jpg",
                    alt: "Living Design"
                },
                date: "22 December,2022"
            },
            {
                title: "Best For Any Office & Business Interior Solution",
                tag: "Interior Design",
                img: {
                    src: "img/blog-photo-3.jpg",
                    alt: "Interior Design"
                },
                date: "25 December,2022"
            },
            {
                title: "Let’s Get Solution For Building Construction Work",
                tag: "Kitchan Design",
                img: {
                    src: "img/blog-photo-4.jpg",
                    alt: "Kitchan design"
                },
                date: "26 December,2022"
            },
            {
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                tag: "Living Design",
                img: {
                    src: "img/blog-photo-5.jpg",
                    alt: "Living Design"
                },
                date: "22 December,2022"
            },
            {
                title: "Best For Any Office & Business Interior Solution",
                tag: "Interior Design",
                img: {
                    src: "img/blog-photo-6.jpg",
                    alt: "Interior Design"
                },
                date: "25 December,2022"
            }
        ]
    },
    methods: {
        limitDisplayArticles(index, limit) {
            return index < limit;
        }
    }
})