import articleBlogImg1 from '@/assets/img/article-img-1.jpg';
import articleBlogImg2 from '@/assets/img/article-img-2.jpg';
import articleBlogImg3 from '@/assets/img/article-img-3.jpg';
import subArticleImg from '@/assets/img/sub-article.jpg';

import articleImg1 from '@/assets/img/blog-photo-1.jpg';
import articleImg2 from '@/assets/img/blog-photo-2.jpg';
import articleImg3 from '@/assets/img/blog-photo-3.jpg';
import articleImg4 from '@/assets/img/blog-photo-4.jpg';
import articleImg5 from '@/assets/img/blog-photo-5.jpg';
import articleImg6 from '@/assets/img/blog-photo-6.jpg';

export default {
  namespaced: true,
  state: {
    blogArticles: [
      {
        title: 'Let’s Get Solution for Building Construction Work',
        img: {
          src: articleBlogImg1,
          alt: 'kitchen',
        },
        date: '26 December,2022',
        pagination: 'Interior / Home / Decore',
        paragraphs: ["Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.", 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'],
        tags: ['kitchen', 'kitchen planning'],

      },
      {
        title: 'Solution for planning Bedroom',
        img: {
          src: articleBlogImg2,
          alt: 'bedroom',
        },
        date: '01 June,2022',
        pagination: 'Interior / Home / Bedroom',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque esse expedita fuga modi nulla numquam\n'
            + '    odio omnis quidem similique!',
          'Dignissimos dolorum expedita fugiat modi, nobis similique? Aliquam assumenda illo ipsam mollitia nesciunt pariatur\n'
            + '    provident quasi quos ratione sint, suscipit?',
          'Cum, dolorem doloremque eum incidunt inventore libero minus molestiae odit similique! At, atque consequuntur cum\n'
            + '    doloribus expedita fugiat laboriosam quae.',
        ],
        tags: ['bedroom'],
      },
      {
        title: 'Build your home',
        img: {
          src: articleBlogImg3,
          alt: 'build',
        },
        date: '14 February,2023',
        pagination: 'Interior / Home / Building',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque esse expedita fuga modi nulla numquam\n'
            + '    odio omnis quidem similique!',
        ],
        tags: ['building'],
      },
      {
        title: 'Architecture',
        img: {
          src: subArticleImg,
          alt: 'Architecture',
        },
        date: '10 July,2023',
        pagination: 'Interior / Home / Architecture',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum, id laudantium magni molestias natus odio pariatur perferendis quidem velit! Adipisci aperiam corporis, debitis distinctio eaque eum hic itaque nemo odio officia quo quod ullam velit. A aperiam culpa minus neque nobis quasi ratione sint. Aspernatur dicta est, exercitationem facere fugit id laudantium maiores molestiae molestias neque nihil nulla optio provident saepe similique sint tenetur. A adipisci asperiores dicta eos exercitationem expedita explicabo, fuga ipsa iusto magnam necessitatibus nemo nulla obcaecati odio officiis possimus, praesentium provident qui quia recusandae reiciendis repellat sunt! Atque eveniet, modi! Ad blanditiis ipsam odit quibusdam?',
        ],
        tags: ['architecture'],
      },
    ],
    projectArticles: [
      {
        title: 'Let’s Get Solution For Building Construction Work',
        tag: 'Kitchan Design',
        img: {
          src: articleImg1,
          alt: 'Kitchan design',
        },
        date: '26 December,2022',
      },
      {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        tag: 'Living Design',
        img: {
          src: articleImg2,
          alt: 'Living Design',
        },
        date: '22 December,2022',
      },
      {
        title: 'Best For Any Office & Business Interior Solution',
        tag: 'Interior Design',
        img: {
          src: articleImg3,
          alt: 'Interior Design',
        },
        date: '25 December,2022',
      },
      {
        title: 'Let’s Get Solution For Building Construction Work',
        tag: 'Kitchan Design',
        img: {
          src: articleImg4,
          alt: 'Kitchan design',
        },
        date: '26 December,2022',
      },
      {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        tag: 'Living Design',
        img: {
          src: articleImg5,
          alt: 'Living Design',
        },
        date: '22 December,2022',
      },
      {
        title: 'Best For Any Office & Business Interior Solution',
        tag: 'Interior Design',
        img: {
          src: articleImg6,
          alt: 'Interior Design',
        },
        date: '25 December,2022',
      },
    ],

  },
  getters: {
    projectArticles: (state) => state.projectArticles,
    blogArticles: (state) => state.blogArticles,
    firstThreeProjectArticles: (state) => state.projectArticles.filter((_, index) => index < 3),
  },
  mutations: {

  },
  actions: {

  },
};
