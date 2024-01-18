/* eslint-disable import/no-extraneous-dependencies */
import imgCard1 from '@/assets/img/card-1.jpg';
import imgCard2 from '@/assets/img/card-2.jpg';
import imgCard3 from '@/assets/img/card-3.jpg';
import imgCard4 from '@/assets/img/card-4.jpg';

import img1 from '@/assets/img/project-card-1.jpg';
import img2 from '@/assets/img/project-card-2.jpg';
import img3 from '@/assets/img/project-card-3.jpg';
import img4 from '@/assets/img/project-card-4.jpg';
import img5 from '@/assets/img/project-card-5.jpg';
import img6 from '@/assets/img/project-card-6.jpg';
import img7 from '@/assets/img/project-card-7.jpg';
import img8 from '@/assets/img/project-card-8.jpg';

import bathroomImg1 from '@/assets/img/bathroom-1.jpg';
import bathroomImg2 from '@/assets/img/bathroom-2.jpg';
import bathroomImg3 from '@/assets/img/bathroom-3.jpg';
import bathroomImg4 from '@/assets/img/bathroom-4.jpg';
import bathroomImg5 from '@/assets/img/bathroom-5.jpg';
import bathroomImg6 from '@/assets/img/bathroom-6.jpg';

import kitchanImg1 from '@/assets/img/kitchan-1.jpg';
import kitchanImg2 from '@/assets/img/kitchan-2.jpg';
import kitchanImg3 from '@/assets/img/kitchan-3.jpg';
import kitchanImg4 from '@/assets/img/kitchan-4.jpg';

import livingAreaImg1 from '@/assets/img/living-area-1.jpg';
import livingAreaImg2 from '@/assets/img/living-area-2.jpg';
import livingAreaImg3 from '@/assets/img/living-area-3.jpg';
import livingAreaImg4 from '@/assets/img/living-area-4.jpg';
import livingAreaImg5 from '@/assets/img/living-area-5.jpg';
import livingAreaImg6 from '@/assets/img/living-area-6.jpg';

export default {
  namespaced: true,
  state: {
    projectsOnIndexPage: [
      {
        id: 1,
        img: {
          src: imgCard1,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 2,
        img: {
          src: imgCard2,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 3,
        img: {
          src: imgCard3,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
      {
        id: 4,
        img: {
          src: imgCard4,
        },
        title: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
      },
    ],
    projects: [
      {
        category: 'bathroom',
        isActive: false,
        data: [
          {
            id: 1,
            title: 'Minimal bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg1 },
          },
          {
            id: 2,
            title: 'Glass bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg2 },
          },
          {
            id: 3,
            title: 'Wooden bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg3 },
          },
          {
            id: 4,
            title: 'Black bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg4 },
          },
          {
            id: 5,
            title: 'Green bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg5 },
          },
          {
            id: 6,
            title: 'Modern bathroom',
            type: 'Decor / Bathrom',
            img: { src: bathroomImg6 },
          },
        ],
      },
      {
        category: 'bed room',
        isActive: true,
        data: [
          {
            id: 7,
            title: 'Minimal Bedroom',
            type: 'Decor / Artchitecture',
            img: { src: img1 },
          },
          {
            id: 8,
            title: 'Minimal Bedroom',
            type: 'Decor / Artchitecture',
            img: { src: img2 },
          },
          {
            id: 9,
            title: 'Classic Minimal Bedroom',
            type: 'Decor / Artchitecture',
            img: { src: img3 },
          },
          {
            id: 10,
            title: 'Modern Bedroom',
            type: 'Decor / Artchitecture',
            img: { src: img4 },
          },
          {
            id: 11,
            title: 'Minimal Bedroom table',
            type: 'Decor / Artchitecture',
            img: { src: img5 },
          },
          {
            id: 12,
            title: 'System Table',
            type: 'Decor / Artchitecture',
            img: { src: img6 },
          },
          {
            id: 13,
            title: 'Modern Medroom',
            type: 'Decor / Artchitecture',
            img: { src: img7 },
          },
          {
            id: 14,
            title: 'Another Modern Medroom',
            type: 'Decor / Artchitecture',
            img: { src: img8 },
          },
        ],
      },
      {
        category: 'kitchan',
        isActive: false,
        data: [
          {
            id: 15,
            title: 'White Kitchan',
            type: 'Decor / Kitchan',
            img: { src: kitchanImg1 },
          },
          {
            id: 16,
            title: 'Black Kitchan',
            type: 'Decor / Kitchan',
            img: { src: kitchanImg2 },
          },
          {
            id: 17,
            title: 'Green Kitchan',
            type: 'Decor / Kitchan',
            img: { src: kitchanImg3 },
          },
          {
            id: 18,
            title: 'Blue Kitchan',
            type: 'Decor / Kitchan',
            img: { src: kitchanImg4 },
          },
        ],
      },
      {
        category: 'living area',
        isActive: false,
        data: [
          {
            id: 19,
            title: 'Art Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg1 },
          },
          {
            id: 20,
            title: 'Black Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg2 },
          },
          {
            id: 21,
            title: 'Orange Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg3 },
          },
          {
            id: 22,
            title: 'Green Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg4 },
          },
          {
            id: 23,
            title: 'Rich Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg5 },
          },
          {
            id: 24,
            title: 'Minimal Living Room',
            type: 'Decor / Living Room',
            img: { src: livingAreaImg6 },
          },
        ],
      },
    ],
  },
  getters: {
    cards: (state) => state.projects,
    projectCardsData: (state) => state.projectsOnIndexPage,
    filteredCardsByCategory: (state) => state.projects.find((card) => card.isActive).data,
  },
  mutations: {
    CHANGE_PROJECT_ACTIVE_CATEGORY(state, data) {
      const chosenCategory = state.projects.find((card) => card.category === data.category);
      if (chosenCategory) {
        // eslint-disable-next-line no-param-reassign
        state.projects.forEach((card) => { card.isActive = false; });
        chosenCategory.isActive = true;
      }
    },
  },
};
