Vue.component("blog-details-component", {
    template: `
    <section class="blog-details">
        <section class="blog-details__wrapper">
        <article-component
            v-for="(article, index) in filteredArticles" :key="index"
            :articleData="article">
        </article-component>
        
        <article class="quotes">
                <div class="quotes__symbol">&#8221;</div>
                <p class="quotes__text">The details are not the details. They make the design.</p>
        </article>
        <article class="article">
            <h3 class="article__title">
                Design sprints are great
            </h3>
            <p class="article__text mt21">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered.
            </p>
            <ol class="article__list">
                <li class="article__list-item">
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered.
                </li>
                <li class="article__list-item">
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered.
                </li>
                <li class="article__list-item">
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered.
                </li>
            </ol>
            <img src="img/sub-article.jpg" alt="subarticle img" class="article__img article__img_subarticle mt21">
            <p class="article__text mt46">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered.
            </p>
        </article>
</section>
        <aside class="tags">
            <h3 class="tags__heading">
                Tags
            </h3>
            <div class="tags__wrapper">
                <button class="tag"
                    v-for="(btn, index) in buttonTags" :key="index"
                    @click="toggleTag(btn)"
                    :class="{ tag_active: btn.isActive  }">
                        {{ btn.name }}
               </button>
            </div>
        </aside>
    </section>
    `,
    data() {
        return {
            articles: [
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    img: {
                        src: "img/article-img-1.jpg",
                        alt: "kitchen"
                    },
                    date: "26 December,2022",
                    pagination: "Interior / Home / Decore",
                    paragraphs: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.", "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."],
                    tags: ["kitchen", "kitchen planning"]

                },
                {
                    title: "Solution for planning Bedroom",
                    img: {
                        src: "img/article-img-2.jpg",
                        alt: "bedroom"
                    },
                    date: "01 June,2022",
                    pagination: "Interior / Home / Bedroom",
                    paragraphs: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque esse expedita fuga modi nulla numquam\n" +
                        "    odio omnis quidem similique!",
                        "Dignissimos dolorum expedita fugiat modi, nobis similique? Aliquam assumenda illo ipsam mollitia nesciunt pariatur\n" +
                        "    provident quasi quos ratione sint, suscipit?",
                        "Cum, dolorem doloremque eum incidunt inventore libero minus molestiae odit similique! At, atque consequuntur cum\n" +
                        "    doloribus expedita fugiat laboriosam quae."
                    ],
                    tags: ["bedroom"]
                },
                {
                    title: "Build your home",
                    img: {
                        src: "img/article-img-3.jpg",
                        alt: "build"
                    },
                    date: "14 February,2023",
                    pagination: "Interior / Home / Building",
                    paragraphs: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque esse expedita fuga modi nulla numquam\n" +
                        "    odio omnis quidem similique!",
                    ],
                    tags: ["building"]
                },
                {
                    title: "Architecture",
                    img: {
                        src: "img/sub-article.jpg",
                        alt: "Architecture"
                    },
                    date: "10 July,2023",
                    pagination: "Interior / Home / Architecture",
                    paragraphs: [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum, id laudantium magni molestias natus odio pariatur perferendis quidem velit! Adipisci aperiam corporis, debitis distinctio eaque eum hic itaque nemo odio officia quo quod ullam velit. A aperiam culpa minus neque nobis quasi ratione sint. Aspernatur dicta est, exercitationem facere fugit id laudantium maiores molestiae molestias neque nihil nulla optio provident saepe similique sint tenetur. A adipisci asperiores dicta eos exercitationem expedita explicabo, fuga ipsa iusto magnam necessitatibus nemo nulla obcaecati odio officiis possimus, praesentium provident qui quia recusandae reiciendis repellat sunt! Atque eveniet, modi! Ad blanditiis ipsam odit quibusdam?"
                    ],
                    tags: ["architecture"]
                }
            ],
            buttonTags: [
                {name: "Kitchen", isActive: false},
                {name: "Bedroom", isActive: false},
                {name: "Building", isActive: false},
                {name: "Architecture", isActive: false},
                {name: "Kitchen Planning", isActive: false},
                {name: "Bedroom", isActive: false}
            ],
            tag: "",
        }
    },
    methods: {
        toggleTag(btn) {
            if (btn.isActive) {
                this.tag = "";
                btn.isActive = false;
            } else {
                this.tag = btn.name;
                this.buttonTags.forEach(btn => btn.isActive = false);
                btn.isActive = true;
            }
        }
    },
    computed: {
        filteredArticles() {
            if (this.tag) {
                return [...this.articles].filter(item => item.tags.includes(this.tag.toLowerCase()))
            }
            return [...this.articles];
        }
    }
})