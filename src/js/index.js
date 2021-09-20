import "../scss/style.scss";
import createObserver from './IntersectionObserver.js';

/**
 * TODO:
 * - Setup intersection observer functionality for components with mulitple instances (use component ID?).
 * - Prevent re-initialisation of component if element has already been intersected.
 * - Setup the JS for the component + import lazy load the CSS as well.
 */

document.addEventListener("DOMContentLoaded", async () => {

    const responsiveTabsElement = document.querySelector('.js-responsive-tabs');
    
    const IntersectionHandler = async (entry) => {

        if (entry.target === responsiveTabsElement) {
            
            const responsiveTabs = await import(/* webpackChunkName: "responsiveTabs" */ './responsiveTabs.js');
            responsiveTabs.default();

        }
       
    };

    const observer = createObserver(IntersectionHandler);
    observer.observe(responsiveTabsElement);

});


