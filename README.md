# Kayzen

This is the official documentation for the Kayzen HTML theme. If you are a customer of the theme you are entitled to access the private Kayzen repository located here: [https://github.com/esr360/Kayzen](https://github.com/esr360/Kayzen).

* [Getting Started](#getting-started)
* [Configure](#configure)
* [Build](#build)
* [Test & Deploy](#test--deploy)

## Getting Started

> [Click Here](#html-templates) if you just want to get started using the default HTML files without touching any other code.

It's great that you've decided to checkout Kayzen! How you go about buildig your next project with it depends on many things such as your prefered workflow, your skill level, amount of time you have etc. This page will cover the basics of all the different ways Kayzen can be adapted to suit any need. It is assumed that you have at least basic HTML, CSS and JavaScript/jQuery understanding.

To start from the bottom up, Kayzen is built using HTML5, CSS3 and jQuery. At the bare minimum, each Kayzen wepage should be served the following JavaScript and CSS assets:

* app/scripts/**jquery.js**
* app/scripts/**app.js**
* app/scripts/**pseudojQuery-start.js**
* app/scripts/**pseudojQuery-end.js**
* app/styles/**app.css**

The only files that would ever need to be modified are **app.js** and **app.css**. The other files (jQuery and pseudojQuery) are JavaScript libraries which can be left untouched. Read more about pseudojQuery [here](https://github.com/esr360/pseudojQuery).

Kayzen comes with further JavaScript and CSS files which are only used for certain pages, these will be covered later. If you're desired workflow is to directly work on these files without touching the source files they are generated from (i.e. you are not comfortable with pre-processing and concatening), a lot of this documentation may not apply to you, and you will lose out on many of the fantastic features Kayzen has to offer.

If you are not yet familiar with Sass/SCSS or CSS pre-processing, checkout [this article](http://www.webdesignerdepot.com/2013/11/the-beginners-guide-to-sass/) to understand the basis about what it is and why it's beneficial. Once you've decided to make the leap, you can read about how to setup your workflow to include Sass by reading [this article](https://medium.com/@ricardozea/sass-for-beginners-the-friendliest-guide-about-how-to-install-use-sass-on-windows-22ff4a32c1f7#.wrryv6w1r).

At this stage, it is not essential to know about JavaScript concatenation. As long as you are comfortable using Sass you will gain most of the benefits Kayzen has to offer. Having said that, if you are comfortable combining JavaScript files, then continue reading, otherwise head over to the [configure](#configure) section

### Building Kayzen

The following section is only relevant if your workflow involves building Kayzen yourself from the source files form Github.

#### Full Requirements

* Minimum Sass 3.4
* Node
* [GraphicsMagick*](http://www.graphicsmagick.org/)
* [php-cgi*](https://github.com/bezoerb/grunt-php2html#installing-php-cgi)

&ast; indicates that the requirement is only for [ehnanced workflow features](#enhanced-workflow-features)

Both the default provided `app.js` and `app.css` contain code from several third party libraries and plugins. The files for these libraries and plugins reside in the **assets/vendor** folder, and include the following:

* [Aloads](https://github.com/awedoo/aloads)
* [Englighter](https://github.com/AndiDittrich/EnlighterJS)
* [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)
* [Infinite-AJAX-Scroll](https://github.com/webcreate/infinite-ajax-scroll)
* [Isotope](https://github.com/metafizzy/isotope)
* [jQuery](https://github.com/jquery/jquery)
* [jquery-animateNumber](https://github.com/aishek/jquery-animateNumber)
* [Kayzen-GS](https://github.com/esr360/Kayzen-GS)
* [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup)
* [Masonry](https://github.com/SnapKit/Masonry)
* [MooTools-Core](https://github.com/mootools/mootools-core)
* [normalize-scss](https://github.com/JohnAlbin/normalize-scss)
* [Owl-Carousel](https://github.com/smashingboxes/OwlCarousel2)
* [pseudojQuery](https://github.com/esr360/pseudojQuery)
* [SassyJSON](https://github.com/esr360/SassyJSON)
* [ScrollTrigger](https://github.com/esr360/ScrollTrigger)
* [Stellar](https://github.com/markdalgleish/stellar.js/)
* [support-for](https://github.com/JohnAlbin/support-for)
* [Synergy](https://github.com/esr360/Synergy)
* [TweeCool](https://github.com/esr360/tweecool-jquery-plugin)

You will notice that all of the used third party resources exist on Github, and as such are included as [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). If you have purchased a license for Kayzen, you are entitled to access to the private Github repository [located here](https://github.com/esr360/Kayzen). If you do not already have access, [get in touch with us](#) to gain access.

To clone Kayzen from the official repository and all of its submodules, run the following code on your command line in the directory you wish Kayzen to be cloned into:

```
git clone https://github.com/esr360/Kayzen.git --recursive
```

> The **--recursive** flag is required to install all the git submodules.

If you are using Node, you can run `npm install` to allow you to use Grunt to build Kayzen from the source files. Once installed, you should first run `grunt setup` to run the initial setup tasks ([learn more](#grunt-tasks)). After running `npm install` you should now have the following Node modules in the **node_modules** directory:

* [autoprefixer](https://github.com/postcss/autoprefixer)
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-auto-install](https://github.com/Manabu-GT/grunt-auto-install)
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-notify](https://github.com/dylang/grunt-notify)
* [grunt-php-set-constant](https://github.com/pajtai/grunt-php-set-constant)
* [grunt-php2html](https://github.com/bezoerb/grunt-php2html)
* [grunt-postcss](https://github.com/nDmitry/grunt-postcss)
* [grunt-relative-root](https://github.com/hurrymaplelad/grunt-relative-root)
* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images)
* [grunt-run-grunt](https://github.com/Bartvds/grunt-run-grunt)
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [grunt-text-replace](https://github.com/yoniholmes/grunt-text-replace)
* [grunt-tinypng](https://github.com/marrone/grunt-tinypng)
* [nopt-grunt-fix](https://github.com/widgetworks/nopt-grunt-fix)

#### Ehnanced Workflow Features

##### Installing php-cgi

One of the tasks provided in `Gruntfile.js` generates HTML pages from PHP templates. For this to function, php-cgi must be installed.

###### OSX

The `php-cgi` binary can be installed via Homebrew by tapping the [homebrew-php](https://github.com/josegonzalez/homebrew-php) repository:

```
brew tap homebrew/dupes
brew tap homebrew/versions
brew tap homebrew/homebrew-php
brew install php56
```

###### Windows

The `php-cgi` binary can be installed via [XAMPP](http://www.apachefriends.org/de/xampp-windows.html). Here is how you can add the binary to your PATH: [Link](https://www.monosnap.com/image/psLZ5fpwuSsvJJeZPdklEjxMr)

###### Ubuntu

```
sudo apt-get install php5-cgi
```

##### Installing GraphicsMagick

One of the tasks provided in `Gruntfile.js` creates `small` and `tall` variants of some images. For this to function, GraphicsMagick is required.

If you're a Mac user and have [Homebrew](http://brew.sh/) installed, run:

```
brew install GraphicsMagick
```

Otherwise, visit the [GraphicsMagick downloads page](http://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/).

#### Alternate Build Methods

If you are using another build tool or want to build Kayzen manually, here are the key things it should encompass to successfully build Kayzen:

##### JavaScript

The app/scripts/**app.js** file contains the following third party JavaScript files:

* assets/vendor/Owl-Carousel/src/js/owl.carousel.js
* assets/vendor/Owl-Carousel/src/js/owl.animate.js
* assets/vendor/Owl-Carousel/src/js/owl.autoheight.js
* assets/vendor/Owl-Carousel/src/js/owl.autoplay.js
* assets/vendor/Owl-Carousel/src/js/owl.compiled.js
* assets/vendor/Owl-Carousel/src/js/owl.hash.js
* assets/vendor/Owl-Carousel/src/js/owl.lazyload.js
* assets/vendor/Owl-Carousel/src/js/owl.navigation.js
* assets/vendor/Owl-Carousel/src/js/owl.video.js
* assets/vendor/Magnific-Popup/src/js/core.js
* assets/vendor/Magnific-Popup/src/js/gallery.js
* assets/vendor/Magnific-Popup/src/js/image.js
* assets/vendor/Magnific-Popup/src/js/retina.js
* assets/vendor/Modular/src/modular.js
* assets/vendor/jquery-animateNumber/jquery.animateNumber.js
* assets/vendor/Kayzen.ScrollSpy/src/Kayzen.ScrollSpy.js
* assets/vendor/ScrollTrigger/src/ScrollTrigger.js
* assets/vendor/Stellar/src/jquery.stellar.js
* assets/vendor/TweeCool/src/tweecool.js

The other files which are includes in **app.js** are:

* assets/modules/utilities/core/core.js
* assets/includes/*.js
* assets/modules/elements/&ast;&ast;/*.js
* assets/modules/objects/&ast;&ast;/*.js
* assets/themes/YOURTHEME/YOURTHEME.js

Some pages use certain JavaScript files on an opt-in basis, and as such these files are not part of **app.js** and will need to be copied over into the **app** directory (app/scripts). These files include:

* assets/vendor/jQuery/dist/jquery.js
* assets/vendor/pseudojQuery/src/pseudojQuery-start.js
* assets/vendor/pseudojQuery/src/pseudojQuery-end.js
* assets/vendor/Masonry/dist/masonry.pkgd.js
* assets/vendor/Isotope/dist/isotope.pkgd.js
* assets/vendor/Infinite-AJAX-Scroll/dist/jquery-ias.js
* assets/vendor/Enlighter/Build/EnlighterJS.js
* assets/vendor/MooTools-Core/build/mootools-core.js

To reiterate, the above files should be copied (duplicated) into app/**scripts**.

##### CSS

The app/styles/**app.css** file contains the following third party stylesheet files, which are all impored at the top of assets/**app.scss** by default:

* assets/vendor/normalize-scss/sass/_normalize.scss
* assets/vendor/Kayzen-GS/src/kayzen-gs.scss
* assets/vendor/Magnific-Popup/src/css/main.scss
* assets/vendor/Owl-Carousel/src/scss/owl.animate.scss
* assets/vendor/Owl-Carousel/src/scss/owl.autoheight.scss
* assets/vendor/Owl-Carousel/src/scss/owl.carousel.scss
* assets/vendor/Owl-Carousel/src/scss/owl.lazyload.scss
* assets/vendor/Owl-Carousel/src/scss/owl.video.scss
* assets/vendor/Font-Awesome/scss/font-awesome.scss
* assets/vendor/Modular/src/_modular.scss
* assets/vendor/SassyJSON/stylesheets/_SassyJSON.scss

Some pages use certain CSS files on an opt-in basis, and as such these files are not part of **app.css** and will need to be copied over into the **app** directory (app/styles). These files include:

* assets/vendor/Enlighter/Build/EnlighterJS.css

To reiterate, the above files should be copied (duplicated) into app/**styles**.

##### PostCSS/AutoPrefixer

Kayzen uses PostCSS in order to use [Autoprefixer](https://github.com/postcss/autoprefixer). It does not use Compass or any other Sass libraries to handle vendor prefixing, so ensure your build process involves Autoprefixer with the following browser support options:

* last 2 versions
* ie >= 9

##### Sass/SCSS

Kayzen requires a minimum Sass version of **3.4**, so ensure that your Sass compiler is upto date with at least this version.

##### Images

The images in the assets directory need to be copied (duplicated) into the **app** directory (app/images). This allows you to keep your source image files separate from your production ones, which may be compressed during your build process. These are located in the **assets** directory:

* assets/images/

The default HTML templates will look for `small` and `tall` variants of the hero images provided in the `demo` sub-directory of `/images`. This point will likely be rendered moot as you add your own images.

##### FontAwesome

The FontAwesome font files need to be copied (duplicated) into the **app** directory (app/fonts). These are located here:

* assets/vendor/Font-Awesome/fonts/

##### MooTools

This step is only required if you intend to use the [Enlighter](http://enlighterjs.org/) syntax highlighter plugin.

The Enlighter plugin which is used by the Kayzen demo pages requires [MooTools](http://mootools.net/). MooTools requires you to build the file manually. Details on how to do so can be found on the MooTools repository page. Once you have built the file, it should now be available at assets/vendor/MooTools-Core/build/**mootools-core.js**. This file should then be copied to Kayzen's **app** directory (app/scripts).

##### Caveats

###### Normalize-Scss

[Normalize-scss](https://github.com/JohnAlbin/normalize-scss) requires the [support-for](https://github.com/JohnAlbin/support-for) library to be present within its own directory, and does not come packaged with **normalize-scss**. To clarify, the file located at assets/vendor/support-for/sass/**_support-for.scss** must be present within the assets/vendor/normalize-scss/**sass/** directory when Sass compiles, otherwise it will throw an error. If you maually copy the file over, Git will complain that you have made changes to the **normalize-scss** submodule, so it is recommended that your build process involves copying the file over before Sass compiles, and then deleting it once the CSS has been compiled.

###### Aloads/Preloaders

Kayzen's main **app.scss** file attempts to import `assets/vendor/Aloads/scss/_preloaders.scss`, which does not come packaged with the default [Aloads](https://github.com/awedoo/aloads) library. Ruby Sass cannot import **.css** files which is why the app must look for a **.scss** file. Other than the extension, the contents of these two files would be identical. If you maually create this file and directory, Git will complain that you have made changes to the **Aloads** submodule, so it is recommended that your build process involves copying the file over before Sass compiles, and then deleting it once the CSS has been compiled.

## Configure

Kayzen is structured in a modular way, which makes things easier for everyone. Kayzen is built using the [Synergy](https://github.com/esr360/Synergy) Sass Framework. As well as global configuration each module can be individually configured, giving you complete control and flexibility when customizing them for your project. This will also make updating your project in the future easier when new modules or module updates for Kayzen come out.

Every module is imported in the main app.scss file:

* assets/**app.scss**

This is the root file for your project. As well as importing all the Sass modules it is also used to set which theme your project should use (more on this later), the path to your assets, and the option to output all the configuration to JSON to allow it to be accessed in your project's JavaScript (again, more on this later).

In terms of the Kayzen modules that are imported, for the most part importing the file will **not** output any code, it merely gives your codebase the ability to include it should you so desire. This is to allow you to create different themes which may or may not use all avilable modules. Any modules your theme doesn't use won't get output in the compiled CSS.

Themes are located in the **themes** directory. Each theme comes with a **.scss** file and a **.js** file. Kayzen provides several themes for you to choose from:

* assets/themes/**Kayzen**

To set which theme your project should use, set the `$theme` variable at the top of **app.scss**. By default this is set to `Kayzen`.

You can now control every configurable aspect of your project from `assets/themes/Kayzen/_kayzen.scss`. This file is where all the modules which are used by the theme are included, and also where you can pass any custom options to them. There are three types of modules, for a list of all of them and their available options, see the following links:

* [assets/modules/**elements**](<?php pageLink('modules.php#kayzenElements') ?>)
* [assets/modules/**objects**](<?php pageLink('modules.php#kayzenObjects') ?>)
* [assets/modules/**utilities**](<?php pageLink('modules.php#kayzenUtilities') ?>)

You can pass a custom option to a module in your theme's file (e.g. assets/themes/Kayzen/_kayzen.scss) like so:

```scss
@include accordions((
    'section-margin'      : 1.4em,
    'title-radius'        : 0.4em,
    'title-active-radius' : 0.4em 0.4em 0 0,
    'content-radius'      : 0 0 0.4em 0.4em
));
```

If the module you are editing has nestable options, you would change them like so:

```scss
@include palettes((
    'brand': (
        'primary'   : #61BD6D,
        'secondary' : #00A885
    ),
    'validation': (
        'valid'     : MediumSeaGreen 
    )
));
```

To get started quickly, some of the most common modules you might want to configure might include:

* **Colors:** assets/modules/utilities/[color-palette](<?php pageLink('modules/utilities/color-palette.php') ?>)
* **Breakpoints:** assets/modules/utilities/[grid](<?php pageLink('modules/utilities/grid.php') ?>)
* **Fonts:** assets/modules/utilities/[typography](<?php pageLink('modules/utilities/typography.php') ?>)
* **Header:** assets/modules/objects/[header](<?php pageLink('modules/objects/header.php') ?>)
* **Footer:** assets/modules/objects/[footer](<?php pageLink('modules/objects/footer.php') ?>)

Once you have configured all of your desired opions, you can preview all the modules on the [Cheatsheet](<?php pageLink('cheatsheet.php') ?>) page.

## Build

Once you have configured all of your modules, you're ready to sart building your pages. Kayzen comes with numerous templates ready-made for you to use for your pages, you can [view them here](<?php pageLink('templates.php') ?>). New templates are added all the time, so be sure to regularly check for updates.

### HTML Templates

To edit the various features of the provided HTML templates, see the following sections.

To change the visual appearance of the UI components, see the [Modules](<?php pageLink('modules.php') ?>) page.

#### Global

##### Sticky Header

A sticky header will become fixed as it's scroll position reaches the top of the browser window.

Locate `app-header` module in your HTML file. It should look something like:

```html
<header class="app-header" id="app-header">
    ...
</header>
```

It may have one or more modifiers, and if so will look something like:

```html
<header class="app-header-bar-absolute" id="app-header">
    ...
</header>
```

To achieve a sticky header, add the `sticky` modifier by adding `-sticky` to the header's class, like so:

```html
<header class="app-header-sticky" id="app-header">
    ...
</header>
```

```html
<header class="app-header-absolute-sticky-bar" id="app-header">
    ...
</header>
```

Read the [header module](<?php pageLink('modules/objects/header.php') ?>) page for more information.

##### Fixed Top Bar

A fixed top-bar will remain in a fixed position on screen.

Locate `top-bar` module in your HTML file. It should look something like:

```html
<div class="top-bar">
    ...
</div>
```

To achieve a fixed top-bar, add the `fixed` modifier by adding `-fixed` to the top-bar's class, like so:

```html
<div class="top-bar-fixed">
    ...
</div>
```

Do not use a fixed top-bar in conjunction with a sticky header.

Read the [top-bar module](<?php pageLink('modules/objects/top-bar.php') ?>) page for more information.

##### Footer Twitter Feed

In `app/scripts/app.js` (or `app/YOURTHEME/scripts/app.js`), locate the following code:

```js          
$(_footer).footer();
```

Reaplce with the following code, replacing your desired Twitter username to show tweets from:

```js
$(_footer).footer({
    twitterFeed   : {
        username  : 'esr360'
    }
});
```

Read the [footer module](<?php pageLink('modules/objects/footer.php') ?>) page for more information.

##### Google Map

To change the google map colors, locate the following code in `app/scripts/app.js` (or `app/YOURTHEME/scripts/app.js`):

```js          
$('#google-map').googleMap();
```

Grab your desired styles array (e.g. [https://snazzymaps.com/style/35/avocado-world](https://snazzymaps.com/style/35/avocado-world)) and pass it to the `styles` option:

```js        
$('#google-map').googleMap({
    styles: [...]
});
```

Read the [google-map module](<?php pageLink('modules/objects/google-map.php') ?>) page for more information.

##### Social Share Widgets

Any page which uses the social share widgets (widgets which show how many shares a page has) will have the following JavasScript included on the page:

```js
$(document).ready(function() {
    $.fn.KayzenSocialShareCount();
});
```

By default, the current page that the script is loaded on will be used to get the share information, but should you decide to use a different url, you can pass it as an option like so:

```js
$(document).ready(function() {
    $.fn.KayzenSocialShareCount({
        url : 'http://themeforest.net'
    });
});
```

##### Get In Touch Form

#### Homepages

##### Parallax Billboard Background

To add a parallax effect to the billboard background, you can add the `data-stellar-background-ratio` data attribute to activate the [Stellar](http://markdalgleish.com/projects/stellar.js/) jQuery plugin.

```html           
<section class="billboard-overlay-full-screen" data-stellar-background-ratio="0.5">
    ...
</section>
```

##### Parallax Billboard Content

To add a faded parallax effect to the billboard content (as opposed to the background), structure your billboard's HTML like so:

```html         
<section class="billboard-full-screen">
    <div class="billboard_wrapper container">
        <div class="billboard_content" id="billboard-fade-parallax">
            ...
        </div>
    </div>
</section>
```

The key to achieving the effect is the `billboard-fade-parallax` id on your billboard's content element.

#### Portfolio/Blog Pages

##### Columns

You can easily change the number of columns for any of the provided portfolio/blog templates by changing the `span-x` class of the respective items. Kayzen uses a 12 column grid system, so for example, to change a 3 column layout where the items will have a class of `span-4` to a 4 column layout, you would change the class for each item to `span-3`.

##### Masonry Items

To create columns with masonry items, you can either use one of the provided [templates](<?php pageLink('templates.php#portfolio') ?>), or you can convert a non-masonry template into one by doing the following:

###### Load Required Script(s)

Load app/scripts/**isotope.pkgd.js** at the bottom of the page right underneath all other scripts:

```html
...          
<script src="/app/scripts/app.js">        
<script src="/app/scripts/isotope.pkgd.js">
```

###### Call The Isotope Plugin

Finally you need to call the loaded plugin on the relevant container, ensuring the code is inside a `document.ready` function, and `window.load` function:

```html 
<script>
    $(document).ready(function() {

        $(window).load(function() {
            $('#blog-items').isotope();
        });

    });
</script>
```

Where `#blog-items` is the direct container of your portfolio/blog items.

##### Filterable Items

To create a set of filterable items, you can either use one of the provided [templates](<?php pageLink('templates.php#portfolio') ?>), or you can convert a non-filterable template into one by doing the following:

###### Load Required Script(s)

Load app/scripts/**isotope.pkgd.js** at the bottom of the page right underneath all other scripts:

```html 
...          
<script src="/app/scripts/app.js"></script>    
<script src="/app/scripts/isotope.pkgd.js"></script>
```

###### Create The Navigation

Add the following code wherever you want the filter navigation to appear, changing `id="blog-types"` to whatever you desire and swapping out the example filter attributes for your own:

```html      
<ul class="tabs_nav-pills" id="blog-types">
    <li class="button-pill-grey-1-thin active" data-filter="*">View All</li>
    <li class="button-pill-grey-1-thin" data-filter="[data-image]">Image</li>
    <li class="button-pill-grey-1-thin" data-filter="[data-carousel]">Carousel</li>
    <li class="button-pill-grey-1-thin" data-filter="[data-vimeo], [data-youtube]">Video</li>
    <li class="button-pill-grey-1-thin" data-filter="[data-audio]">Audio</li>
</ul>  
```

###### Call The Isotope Plugin

Finally you need to call the loaded plugin on the relevant container, ensuring the code is inside a `document.ready` function, and `window.load` function:

```html  
<script>
    $(document).ready(function() {

        $(window).load(function() {
            $('#blog-items').isotope();
            $('#blog-types').on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $('#blog-items').isotope({ 
                    filter: filterValue 
                });
            });
        });

    });
</script>
```

Where `#blog-items` is the direct container of your portfolio/blog items, and `#blog-items` is the container for your filter navigation items.

##### Infinite Scroll Items

To create a set of infinitely-scrollable items, you can either use one of the provided [templates](<?php pageLink('templates.php#portfolio') ?>), or you can convert a non infinite-scroll template into one by doing the following:

###### Load Required Script(s)

Load app/scripts/**jquery-ias.js** at the bottom of the page right underneath all other scripts:

```html  
...          
<script src="/app/scripts/app.js"></script> 
<script src="/app/scripts/jquery-ias.js"></script>
```

###### Create The Pagination

For each set of 'loaded' content, there needs to be a separate HTML file with the content for the infinite scroll page to fetch the next set of items from. You can duplicate the first page and just update the pagination link as appropriate. The plugin will by default look for an element with an id of `pagination` to get the next page to pull the content from.

```html
<ul id="pagination">
    <li class="next"><a href="3-cols-infinite-scroll-2.php">2</a></li>
</ul>
```

###### Call the Infinite Scroll Plugin

You then need to call the loaded plugin on the relevant container, ensuring the code is inside a `document.ready` function:

```html
<script>
    $(document).ready(function() {

        $("#blog-items").KayenInfiniteScroll({
            isotopeGrid : false
        });

    });
</script>
```

Where `#blog-items` is the direct container for your portfolio/blog items.

If you are calling other functions on your portfolio items, perhaps a carousel function, you will need to pass it to the infinite-scroll plugin so it can be re-called on the newly loaded items. This can be done like so:

```html  
<script>
    $(document).ready(function() {

        function articlesCarousel() {
            ...
        } 

        articlesCarousel();

        $("#blog-items").KayenInfiniteScroll({
            isotopeGrid : false
        }, articlesCarousel);

    });
</script>
```

### PHP Templates

The Kayzen demo pages are genrated from custom PHP source files. You are completely free to utilise these PHP templates for your own use. Whilst the PHP framework Kayzen is built from is extremely basic, it allows you to rapidly prototype pages using all the various components Kayzen has to offer. All the PHP templates are located in the **templates** directory.

The core configuration file for the PHP templates can be found at templates/**app.php**. This is where all configurable templates are imported and all global constants are set, which include the following:

| Constant | Default Value | Description |
| --- | --- | --- |
| `theme` | `'Kayzen'` | Set which theme's assets you would like to load. |
| `realm` | `'demo'` | Can either be `demo` or `live`, currently only used to serve placeholder images instead of stock photos. |
| `env` | `dev` | Can be either `dev` or `prod`. If `prod`, the code will look for minified (.min.*) assets. |
| `path` | `'root'` | Can either be `root` or `relative`, and defines how asset paths should be loaded. |
| `themes` | `true` | If enabled, templates will look to assets nested inside a self-named directory, e.g. app/themes/Kayzen/scripts/app.js. |

#### Includes

The below includes can be used on any page which includes the **app.php** file, and will output some code depending on the options you pass to the function. They are located in the templates/**includes** directory.

* [articleItem()](#)
* [devAsset()](#)

You can use any of the above functions in yout PHP/PHTML pages like so:

```php
articleItem();
```

You can pass custom options to the function like so:

```php
articleItem(array(
    'media'  => 'carousel',
    'size'   => 'small',
    'span'   => 4
));
```

#### Modules

The below modules can be used on any page which includes the **app.php** file, and will output some code depending on the options you pass to the function. They are located in the templates/**modules** directory.

* [appFooter()](#)
* [appHeader()](#)
* [billboard()](#)
* [earthSlider()](#)
* [googleMap()](#)
* [sidebar()](#)
* [topBar()](#)

You can use any of the above functions in yout PHP/PHTML pages like so:

```php
billboard();
```

You can pass custom options to the function like so:

```php
billboard(array(
    'title'    => 'My Billboard',
    'tag-line' => 'My Tagline'
));
```

#### Sections

The below sections can be used on any page which includes the **app.php** file, and will output some code depending on the options you pass to the function. They are located in the templates/**sections** directory.

* [clients()](#)
* [contactUs()](#)
* [elements()](#)
* [featureCards()](#)
* [featureQuote()](#)
* [inStore()](#)
* [infoBanner()](#)
* [keyFeatures()](#)
* [keyFeatures-2()](#)
* [layouts()](#)
* [masonryFeatures()](#)
* [moreFeatures()](#)
* [objects()](#)
* [options()](#)
* [ourTeam()](#)
* [pricing()](#)
* [promoBanner()](#)
* [promoSection()](#)
* [recentWork()](#)
* [recentArticles()](#)
* [responsive()](#)
* [services()](#)
* [shareTheLove()](#)
* [shortcodes()](#)
* [showcase()](#)
* [skill()](#)
* [statistics()](#)
* [testimonials()](#)
* [twitterFeed()](#)
* [whyChooseUs()](#)

You can use any of the above functions in yout PHP/PHTML pages like so:

```php
clients();
```

You can pass custom options to the function like so:

```php
clients(array(
    'title'     => 'Popular Brands',
    'sub-title' => 'Get The Best Deals' 
));
```

#### Basic Template

Several things are required to create a PHP page using Kayzen. Below shows the minimum requirements to set up a blank page with all global modules and assets:

```html
<?php 
    include ('../app.php');
    $title = 'Documentation';
    $tagline = 'Lorem Ipsum Dolor Sit Amet';
?>

<!DOCTYPE html>
<html>

    <?php include (ROOT.'/includes/head.php'); ?>

    <body>

        <!-- Site Canvas -->
        <div id="site-content">

            <?php<!-- begin php -->

                <!-- Topbar Module -->
                topbar();

                <!-- Header Module -->
                appHeader(array(
                    'modifiers' => 'bar-absolute-dark-sticky'
                ));

                <!-- Billboard Module -->
                billboard(array(
                    'title'    => $title,
                    'tag-line' => $tagLine
                ));

            ?><!-- end php -->

            <!-- YOUR HTML/PHP CONTENT -->
            ...

            <?php appFooter(); ?>

        </div><!-- Site Canvas -->

        <?php include (ROOT.'/includes/ui-enhancements.php'); ?>

        <?php include (ROOT.'/includes/scripts.php'); ?>

    </body>

</html>
```

If you are using Grunt and the provided Gruntfile.js, you can easily compile and build your app for development and production envrionments generating appropriate HTML files from your source PHP templates - see the below Grunt tasks.

### Grunt Tasks

#### Executable Tasks

| Task | Description |
| --- | --- |
| `grunt` | The default grunt task - runs the below `compile` task as well as the `watch` task. |
| `grunt setup` | This runs `npm install` and any neccessery Grunt tasks for vendor assets. This only needs to be done once during your initial setup. |
| `grunt compile` | This will compile your assets using the default value for the 'env' option. |
| `grunt compile:dev` | This will compile your assets for a development environment (assets will be unminified). |
| `grunt compile:prod` | This will compile your assets for a production environment (assets will be minified). |
| `grunt templates` | Used to generate HTML pages from your PHP templates (will only look for templates in the '/pages' and '/themes' directories). |
| `grunt prototype` | This task creates a fully useable prototype for the entire app which can be uploaded to a server. |
| `grunt package` | This runs the `compile`, `responsive_images` and `prototype` tasks.
| `grunt test` | This will execute code linters on your .scss and .js files. |
| `grunt ship` | This is the final task which should be ran before deploying to production. Runs the `package`, `test` and `compress:images` tasks. |
| `grunt compress:images` | This will compress all images in the 'demo' directory using the [TinyPNG API](https://tinypng.com/developers). Use liberally. |

#### Grunt Options

Using the [`grunt.option`](http://gruntjs.com/api/grunt.option) API, you can pass several parameters on the command line when running the above tasks:

The below values will also automatically be updated in **app.php**.

| Variable | Default Value | Description |
| --- | --- | --- |
| `theme` | `'Kayzen'` | This is the theme you wish to compile assets from. Theme must be present in the assets/themes directory. |
| `realm` | `'demo'` | Can either be `demo` or `live`. Currently only used to serve placeholder images instead of stock photos. |
| `env` | `'dev'` | Can either be `dev` or `prod`. Used to determine whether or not assets should be minified. |
| `path` | `'root'` | Can either be `root` or `relative`, and will define how your asset paths are created. |
| `themes` | `false` | If enabled, assets will be compiled into individual theme folders (e.g. app/themes/Kayzen/scripts/app.js). |

The above options would be used when calling the grunt task, like so:

```
grunt compile --env=prod --themes=false
```

```
grunt templates --theme=YOURTHEME --realm=live
```

## Test & Deploy

So you've created all your pages and configured all your modules, the front end for your project is now ready to test and then launch! There are several things you may want to test before you make your website live to ensure your users have the best experience possible. Below is a checklist of recommendations you can do to check your website is working properly and has no errors, as well as improving things like page load times etc.

### Minified Assets

You should be serving your users with minified versions of your assets (CSS and Javascript), as the file sizes will be smaller and load times faster. If you are using grunt, you can generate minified assets by running `grunt compile:prod`, otherwise you can use the minified assets provided with your download.

### Code Linting

If you are using our Gruntfile.js, you can run Javascript and Scss linters on your code. Simply run `grunt test` to run both linters. To run only Javasctipt linting, run the `grunt jshint` task, and to run only Scss linting run the `grunt scsslint` task.

### Console Errors

Check that you have no Javascript errors and are correctly loading assets by looking at the console. Right click anywhere on the page and click "inspect" (or "inspect element"). On the window that opens click the "console" tab. Any errors will be listed in red.

### Unit Tests

We are currently writing unit tests for all custom Javascripts. These, along with other such automated tests, will be released in furutre releases of Kayzen, so stay tuned.

### Cross-Browser Tests

Before you launch your site, check it in different browsers to makse sure it all works. Kayzen supports all modern browsers and degrades grecefully until Internet Explorer 9.

### Mobile/Responsive Tests

Check your website on multiple mobile devices before you launch to ensure there are no issues. Kayzen is fully responsive and should work and look great on all modern devices.

### Support

If you encounter any issues which you cannot resolve, you can [get in touch](#) with us to receive free support.