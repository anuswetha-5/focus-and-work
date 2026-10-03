(function () {

    function blockInstagramHome() {

        const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "";

        if (!isHome) {
            document.body.classList.remove("ig-home-blocked");

            const message =
                document.getElementById("ig-block-message");

            if (message) {
                message.remove();
            }

            return;
        }

        document.body.classList.add("ig-home-blocked");

        if (!document.getElementById("ig-block-message")) {

            const message =
                document.createElement("div");

            message.id = "ig-block-message";

            message.innerHTML = `
                <h2>🚫 Home Feed Blocked</h2>
                <p>
                    Use Instagram only for messages.
                </p>
            `;

            document.body.appendChild(message);
        }
    }


    function checkPage() {
        blockInstagramHome();
    }


    /* Run immediately */
    checkPage();


    /* Instagram is a single-page application,
       so watch for page changes. */

    let lastURL = location.href;

    new MutationObserver(() => {

        if (location.href !== lastURL) {

            lastURL = location.href;

            checkPage();
        }

    }).observe(document.body, {
        childList: true,
        subtree: true
    });


    /* Also check periodically */
    setInterval(checkPage, 1000);

})();