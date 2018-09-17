
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
    /* first test - it tests to make sure that the
       allFeeds variable has been defined and that it is not
       empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



         it(' url defined and not empty', function (){
            for(let feed of allFeeds){
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0); //check to make sure its not empty
              expect(feed.url).toMatch(/^http(s?)\:\/\//); //check to make sure it is a url
            }
         });



         it(' name defined and not empty', function(){
           for(let feed of allFeeds){
             expect(feed.name).toBeDefined()
             expect(feed.name.length).not.toBe(0) //check it's not empty
           }

         });
    });


    describe('The menu', function () {

      it('hiden by defult', function () {
      expect($('body').hasClass('menu-hidden')).toBe(true); //check that the menu is hidden by defualt
    });

      it('on-off', function functionName() {
        $('.menu-icon-link').trigger('click')
        expect($('body').hasClass('menu-hidden')).toBe(false) //clicked once the menu shows

        $('.menu-icon-link').trigger('click')
        expect($('body').hasClass('menu-hidden')).toBe(true)// clicked twice the menu hides again
    });

    });



    describe('Initial Entries', function() {

      beforeEach(function(done) {
        loadFeed(0, done);

      });
      it('Feed loads with at least a single entry', function () {
        expect($('.feed .entry').length).toBeGreaterThan(0)// loads with atleast a single entry

      });

    });


    describe('New Feed Selection', function (){
      const feed = document.querySelector('.feed')
      const feedone = [];

      beforeEach(function (done) {
        loadFeed(0);
        Array.from(feed.children).forEach(function(entry){
          feedone.push(entry.innerText);
        });
        loadFeed(1,done)
        });

      it('content changes', function(){
        Array.from(feed.children).forEach(function(entry,index){
        expect(feedone[0]).not.toBe(loadFeed) //check to make sure it does change
        });

        });
});


}());
