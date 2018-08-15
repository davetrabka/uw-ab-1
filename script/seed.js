const db = require('../server/db');
const { User, Review } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  await Promise.all([
    User.create({ email: 'admin@email.com', password: '123' }),
  ]);

  await Promise.all([
    Review.create({
      author: 'Terry',
      date: 'July 2018',
      review:
        'Very nice home away from home! We loved the outdoor space, a lovely patio off the kitchen, perfect for sipping our morning coffee, and a screened in porch. Lots of room upstairs and down. Within 30 minutes of Arrow Rock. We heartily recommend it!',
    }),
    Review.create({
      author: 'Jasmyne',
      date: 'July 2018',
      review:
        'Rob’s home was absolutely amazing . My family of 9 slept , ate , and enjoyed ourselves comfortably . We all loved it ! Everything was clean , stylish and just wonderful . The kids were able to enjoy the backyard and the adults were able to hang out in the screened area and relax . I could go on and on about how amazing this place was . We will not hesitate to book again the next time we visit Missouri !! Thanks so much for the hospitality, Rob !',
    }),
    Review.create({
      author: 'Richard',
      date: 'July 2018',
      review:
        "BIG house, but was also just perfect for my wife and eye. Super clean and comfy throughout. Communications were almost instantaneous and the entire transaction was completely seamless! Positively the best stocked kitchen we have ever travelled to! Don't hesitate to book this one!",
    }),
    Review.create({
      author: 'Billie',
      date: 'July 2018',
      review:
        'The accommodation where exactly as described. The accommodation were clean and the house was very organized and equipped with everything one would expect or need. My daughter loved the “post cards” and the holiday decorations added the extra touches to make this a great experience.',
    }),
    Review.create({
      author: 'Michael',
      date: 'July 2018',
      review:
        'This place is amazing! Great stay had everything yout would need! Would stay again in the future.',
    }),
    Review.create({
      author: 'Geoff',
      date: 'June 2018',
      review:
        'This was our second stay at Robert’s and it was just as great as the first! Beautiful, clean home decorated for the seasons. Great communication, fun location right by the Katy strait, and all the comforts of home! Highly recommend.',
    }),
  ]);

  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    db.close();
    console.log('db connection closed');
  });
