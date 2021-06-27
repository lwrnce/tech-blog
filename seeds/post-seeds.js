const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Hello world',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Hello world',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Hello world',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Hello world',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Hello world',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Hello world',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Hello world',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Hello world',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Hello world',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Hello world',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Hello world',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Hello world',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Hello world',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Hello world',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Hello world',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Hello world',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Hello world',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Hello world',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Hello world',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Hello world',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
