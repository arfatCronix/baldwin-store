const PLUGIN_KEY = 'header';
/*
 * Create a new stickyHeader instance
 * @param {string} [selector]
 * @return {stickyHeader}
 */
export default function stickyHeader(selector = `${PLUGIN_KEY}.${PLUGIN_KEY}`) {
    const header = document.querySelector(selector);

    const toggleClass = "is-sticky";

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.classList.add(toggleClass);
        } else {
            header.classList.remove(toggleClass);
        }
    });

    return stickyHeader;
}
