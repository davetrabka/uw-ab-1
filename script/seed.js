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
      author: 'Daniel',
      date: 'August 2018',
      review:
        'Robert’s home was perfect for our family trip to the state fair. The house was clean and close to downtown Boonville, the casino, and the river. Robert went above and beyond making sure all of our needs were met. I would definite recommend this property if you are staying in Boonville!',
    }),
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
    Review.create({
      author: 'Katie',
      date: 'June 2018',
      review:
        'My friends and I had a wonderful time in this house! Thoughtful extras, like the postcards and wine, made our experience one of a kind. We all slept so soundly that night! I highly recommend this host, not only for the quality of the home, but for the generosity of spirit in which he handled our booking.',
    }),
    Review.create({
      author: 'Geoff',
      date: 'June 2018',
      review:
        'Robert made our first Airbnb overnight stay a wonderful experience! The house was clean and well decorated and the perfect space for our large family to spread out and get good rest during our road trip. We highly recommend these accommodations and look forward to staying again soon.',
    }),
    Review.create({
      author: 'Kathy',
      date: 'May 2018',
      review:
        'We loved staying at robert’s home! It was very conveniently located for our Katy Trail biking experience. The house was very clean and Robert was very accommodating and communicated very well with us! We will stay again if we are in the area!',
    }),
    Review.create({
      author: 'Armando',
      date: 'May 2018',
      review:
        'Excellent house for family gathering and quiet country atmosphere. While we spent the majority of our time at the house there are many places of interest in the area and Columbia is about 20 minutes away. We had all the amenities we needed. Our host saved us from a potential disaster when we left champagne in the freezer. He arranged to send someone to remove the bottle. Many thanks to Robert! We would definitely stay here again with a larger group.',
    }),
    Review.create({
      author: 'Fawn',
      date: 'May 2018',
      review:
        'Very accommodating lots of special touches to make you feel like a home away from home',
    }),
    Review.create({
      author: 'Staci',
      date: 'May 2018',
      review:
        'This house is in a great area and is secluded and quiet. We always enjoy staying here!',
    }),
    Review.create({
      author: 'Ashley',
      date: 'April 2018',
      review:
        'Your home was so nice and loved the extra mile you went from local info, security details and extra amenities with wine and cookies!! It was like staying in your own home and not a rental.',
    }),
    Review.create({
      author: 'Ben',
      date: 'April 2018',
      review:
        "It is a great pleasure to finally be able to give someone all 5 stars. I've stayed at some pretty great airbnbs but this place is going to be hard to beat.",
    }),
    Review.create({
      author: 'Ralph (Tad)',
      date: 'April 2018',
      review:
        'Excellent accommodations! Contemporary yet relaxed and comfortable. Quiet neighborhood. We would definitely stay here again. Rob was a great communicator.',
    }),
    Review.create({
      author: 'Jill',
      date: 'April 2018',
      review:
        "This house is immaculate and well equipped for your visit. Rob was responsive, friendly and has thought of everything you'll need. Our grandsons were very excited about the foosball table! There are nearby trails and historic sites. It's a nice home and we'll set for a family visit.",
    }),
    Review.create({
      author: 'Dee',
      date: 'March 2018',
      review:
        'This is the best Airbnb experience! The home is lovely and accommodating. Our host was informative and there when needed. We will stay again!',
    }),
    Review.create({
      author: 'Kelli',
      date: 'March 2018',
      review:
        'This wasn’t our first time staying at Roberts - we will be back again! The home has an amazing cozy feeling. Amenities are fully loaded and offers everything needed for a get away. Close to the MKT Trail, highway, Missouri River and the casino.',
    }),
    Review.create({
      author: 'Staci',
      date: 'February 2018',
      review:
        'There have been many updates to the home recently, and they are great. This is the second time we have stayed at Robert’s place in 7 months, and we will definitely stay again! Great response and very accommodating, thanks Robert!',
    }),
    Review.create({
      author: 'Courtney',
      date: 'February 2018',
      review:
        "Robert's place is really great. It's clean, has tons of amenities - everything you'd find in your own house. The beds are comfortable, check-in was smooth and easy, the location is charming and cute. I love that there are postcards to send to your friends and family! Its our second time here and we hope to be back again next year.",
    }),
    Review.create({
      author: 'Natalie',
      date: 'February 2018',
      review:
        "Robert's home was spacious, and comfortably fit seven adults. Everything was clearly marked, and it was great to have access to laundry. Boonville is an easy 30 minute drive to Mizzou in Columbia. The house was very clean and well organized! Robert is a wonderful host, very eager to offer local suggestions and make sure your stay is comfortable!",
    }),
    Review.create({
      author: 'Soua',
      date: 'February 2018',
      review:
        'I would recommend Mr. ROBERT HOME to anyone...not only is he kind and humble not to mention the fact that he took time out of being on vacation to fix my reservation because I got the dates intended to reserve.,0',
    }),
    Review.create({
      author: 'Michael',
      date: 'December 2017',
      review:
        'Great place! Clean, lots of room, nice holiday decorations. Kitchen was well stocked with dishes, appliances and utensils. Lots of information about the area. The sun room and patio looked great, but the temperature was below zero so we did not use them.',
    }),
    Review.create({
      author: 'Marie',
      date: 'November 2017',
      review:
        'Robert’s house was amazing! It was exactly as advertised. It’s close to everything in Boonville. My family lives nearby, and we were visiting for Thanksgiving. I will certainly look for this listing next time we visit my family!',
    }),
    Review.create({
      author: 'Deb',
      date: 'November 2017',
      review:
        'Don’t hesitate to stay in this very comfortable and very clean home practically on the Katy trail. If you are planning to ride the trail, grab this spacious Air B&B with off street parking. Robert’s place is easy to find and offers a large space to spread out, catch up on laundry, and get a quiet, restful night’s sleep. Lots of cookware including a waffle iron if you want to prepare your own meal. Rob left out some fun treats to welcome us as well.',
    }),
    Review.create({
      author: 'Carolee',
      date: 'October 2017',
      review:
        'The kitchen is very well equipped! He just needs to upgrade the wine and cookies.',
    }),
    Review.create({
      author: 'Amy',
      date: 'October 2017',
      review:
        'My sister, her son, my 2 teenage kids & myself rented Roberts place in Booneville while we attended homecoming at Mizzou. The house worked perfect for us with my daughter & I in one bedroom, my sister in the other & our sons crashed on the big couches in the basement. The house is nicely appointed & decorated with lots of nice touches - virtually anything you need is there. It’s also very clean. It’s a solid 30 minutes to Columbia - but it’s much less expensive than renting in Columbia. And we actually liked coming ‘home’ at night as the house is super cozy. Overall a great experience!',
    }),
    Review.create({
      author: 'Lindsay',
      date: 'October 2017',
      review:
        'This wonderful home is in a private, safe location. Rob made sure we were well taken care of and kept in contact in case there were any concerns. There were many little special touches that made us feel very welcomed! The house is clean and well decorated...we loved it! We will definitely stay again!',
    }),
    Review.create({
      author: 'David',
      date: 'October 2017',
      review:
        "Robert's house was exactly as described. It was clean, nicely furnished & had all the amenities that we needed for our stay. In the kitchen, Robert had numerous travel info & brochures for the surrounding area. The house is on a quiet street & near the Katy Trail & the casino. I never actually met Robert, but he kept in touch with us & was available for any thing we might have needed. Check-in was hassle free. A wonderful stay in Boonville, plus I ended up with a little extra spending cash after leaving the casino. I would highly recommend this listing.",
    }),
    Review.create({
      author: 'Brenda',
      date: 'September 2017',
      review:
        "Stayed in Boonville for its proximity to Columbia to attend a football game and couldn't have been happier with our decision. We were close enough to drive for campus touring and college-town dining without paying the inflated lodging rates. The home was clean, comfortable, and well-furnished for our needs. Our party enjoyed the home atmosphere for the weekend as opposed to walking back and forth between hotel rooms. Our host was easy to communicate with in our pre-arrival contacts and we never needed to during our stay as we had no difficulties. Would definitely rebook if ever back in the vicinity.",
    }),
    Review.create({
      author: 'Megan',
      date: 'September 2017',
      review:
        'Great place! Perfect for our family weekend to Mizzou. Much better than staying in a hotel!! Thank you!',
    }),
    Review.create({
      author: 'Rhett',
      date: 'September 2017',
      review:
        "Great house -- reminds me of the homes I grew up in. Welcoming, comfortable, quiet, lots of cool amenities. Six blocks to downtown, where there are a couple diners and pubs for eating and drinking. The casino is nearby, and it's a good size with all the games if you like to gamble. The casino also has pretty good food choices -- we are at the buffet and enjoyed it. Rob was a wonderful host too -- lots of relevant information and very accessible. Terrific experience.",
    }),
    Review.create({
      author: 'Gail',
      date: 'August 2017',
      review:
        "We had a great time at Rob's place during the eclipse weekend! Rob is an attentive and very considerate host. The house is very clean and well stocked. We had eight adults who hadn't seen each other in 40 years, so we spent a lot of time all together in the same room most of the time we were there. It was a little tight around the table for meals, and not everyone had their own bedroom (we knew that going in), but it worked out fine. Neighbors were friendly and welcoming. We would definitely stay here again. Thanks, Rob!",
    }),
    Review.create({
      author: 'Staci',
      date: 'August 2017',
      review:
        'Quiet neighborhood, plenty of room for our family. Very clean place. We hope to stay again the next time we are in Boonville!',
    }),
    Review.create({
      author: 'Terri',
      date: 'August 2017',
      review:
        "Rob's home is great for families and friends. Plenty of room to feel comfortable just like at home. Location of his home is convenient to everything and it's easy to find. We plan to be back whenever visiting family again.",
    }),
    Review.create({
      author: 'Denise',
      date: 'August 2017',
      review:
        'Super all the way around! Great town, safe location, and many special touches',
    }),
    Review.create({
      author: 'Libby',
      date: 'July 2017',
      review:
        "Four of us stayed at Robert's for a small reunion of friends. We went to the casino in Boonville and to Arrow Rock to the Lyceum Theater. The location in Boonville was about a 30 minute drive to Arrow Rock. Robert's house was comfortable and clean. He had several pamphlets about things to do and see in the Boonville area. There was plenty of room for visiting and also having space to yourself. The only caveat I would mention is it is a split level house so there are stairs to navigate when you first come in the door - half flight to upstairs for bedrooms and kitchen, half flight to finished basement with hide-a-bed. This could be a problem for people with limited mobility.",
    }),
    Review.create({
      author: 'Patty',
      date: 'June 2017',
      review:
        "Robert's house is exactly as described. It was the perfect place for our group of five to stop mid-road trip! It was extremely clean and well stocked with any items you may need during your stay. We hit the grocery and took advantage of the full kitchen of pots & pans, cooking utensils, and all the basics you'd need to make a great breakfast. The attention to the details (love the chalkboard signs!) was obvious and really helpful in pointing us in the direction of whatever we may need. Robert was in communication from the time we booked and answered questions promptly. He even left some treats for us on arrival! I would highly recommend booking with Robert and would do so again if we came back this way!",
    }),
    Review.create({
      author: 'Kathy',
      date: 'June 2017',
      review:
        'Robert\'s home was perfect place to prepare for a family wedding at Bluebell Farm in Fayette. 6 adults slept comfortably and 2 1/2 baths made preparing for the wedding a breeze. A comment I heard repeatedly from family members was, "I like all the chalk boards". Information was east to find, e.g. extra towels in the hall cupboard, find bedding here. Clean, nice beds, extra touches that help one feel welcome. Also lots of books and info on the area. Recommend!',
    }),
    Review.create({
      author: 'Lauren',
      date: 'June 2017',
      review:
        'Great place. Felt just like home. Quiet cul de sac. Great for grandson to ride his bike. We will stay again.',
    }),
    Review.create({
      author: 'Gerry',
      date: 'May 2017',
      review:
        "We have rented several homes like this for our family. We were all in agreement that this was the very nicest we have ever rented! We enjoyed making waffles with the waffle iron and preparing pulled pork in the crock pot! The cleanliness, all of the things provided by the host and the general upkeep of the house and property were stellar. We used to live in Boonville and deeply appreciated the homey feel of Robert's house that made the trip even more nostalgic.",
    }),
    Review.create({
      author: 'Gerry',
      date: 'May 2017',
      review:
        "We have rented several homes like this for our family. We were all in agreement that this was the very nicest we have ever rented! We enjoyed making waffles with the waffle iron and preparing pulled pork in the crock pot! The cleanliness, all of the things provided by the host and the general upkeep of the house and property were stellar. We used to live in Boonville and deeply appreciated the homey feel of Robert's house that made the trip even more nostalgic.",
    }),
    Review.create({
      author: 'Jane',
      date: 'May 2017',
      review:
        'This is a large comfortable home with lots of supplies in the kitchen and nice appliances and BBQ. It is on a quiet street close to downtown and Harley park. Highly recommended.',
    }),
    Review.create({
      author: 'Raeann',
      date: 'May 2017',
      review:
        'We throughly enjoyed staying at Roberts home. The home is located in a quiet neighborhood very close to downtown Booneville. The kitchen is beautiful and had all the things needed to feel at home, including coffee for our enjoyment, water in the fridge and a bottle of local wine. I could go on but you get the picture. I would stay here again and highly recommend this home to others.',
    }),
    Review.create({
      author: 'Elizabeth',
      date: 'April 2017',
      review:
        'Really a nice place. Our evening was quiet and the beds were comfortable. Would stop again in a heartbeat!',
    }),
    Review.create({
      author: 'Teryn',
      date: 'March 2017',
      review:
        "We loved our stay at this lovely (spacious) home near the Katy Trail... we'll be back! Highly recommended!",
    }),
    Review.create({
      author: 'Serena',
      date: 'March 2017',
      review:
        "Great experience at Robert's place. From the moment we booked the home, Robert has been in regular communication with us and even sent us information about things to do in the area. The place has a homey feel and had everything we could possibly need. We stopped in at Robert's place on our way to local vineyards and Robert was so thoughtful to leave us with a bottle of wine, wine glasses and a corkscrew to start our trip off right. Robert has signs around the home to help you find the things you need. Bed was super comfortable. The only thing we missed out on was being able to spend time on the screened in back patio. Looking forward to a longer stay in the future.",
    }),
    Review.create({
      author: 'James',
      date: 'March 2017',
      review:
        'Robert was a great pleasure to work with! Any questions I had were quickly answered. The house was even better than the pictures indicated. Will definitely try to stay with him again if I need to back to that area!',
    }),
    Review.create({
      author: 'Mandy',
      date: 'January 2017',
      review:
        'We only stayed one night but it was in a perfect location for our family. I would definitely love to rent this location again. Everything was nicely marked so we knew where to find everything.',
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
