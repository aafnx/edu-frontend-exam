import articleImg1 from '@/assets/img/blog-photo-1.jpg';
import articleImg2 from '@/assets/img/blog-photo-2.jpg';
import articleImg3 from '@/assets/img/blog-photo-3.jpg';
import articleImg4 from '@/assets/img/blog-photo-4.jpg';
import articleImg5 from '@/assets/img/blog-photo-5.jpg';
import articleImg6 from '@/assets/img/blog-photo-6.jpg';

export default {
  namespaced: true,
  state: {
    data: [
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
    articles: (state) => state.data,
  },
  mutations: {

  },
  actions: {

  },
};
