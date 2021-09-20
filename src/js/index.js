import "../scss/style.scss";
import createObserver from './IntersectionObserver.js';

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


