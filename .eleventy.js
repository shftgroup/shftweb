const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Explicitly sets the default for dynamic partials, this just means that Liquid Templates need
    // to reference quoted paths for templates
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/*.css'
	});
    eleventyConfig.setLiquidOptions({
		dynamicPartials: true
    });

    // Enable date time filtering
    eleventyConfig.addLiquidFilter("date_to_string", (dateObj) => {
	return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });

	//Enable tail command for array
	eleventyConfig.addLiquidFilter("tail", function(array, numFromTail){
		return array.slice(-numFromTail);
	});

    //Adding passthrough file copy for assets, css and js
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");


    //Add plugins
    eleventyConfig.addPlugin(pluginNavigation);

	//Add custom collections (wish the eleventy liquid where filter worked!!)
	eleventyConfig.addCollection("current_members", function(collectionApi){
		return collectionApi.getAll().filter(function(item){
			return item.data.alum == false;
		})
	});
	eleventyConfig.addCollection("alumni", function(collectionApi){
		return collectionApi.getAll().filter(function(item){
			return item.data.alum;
		})
	});

    return {
	templateFormats: [
	    "md",
	    "html",
	    "liquid"
	],
	pathPrefix: "/",
	dir:
	{
	    input: "./",
	    includes: "_includes",
	    data: "_data",
	    output: "_site"
	}
    }
};
