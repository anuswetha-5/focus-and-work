(function () {

    function blockHome() {

        // Make sure the page body exists
        if (!document.body) {
            return;
        }

        const isHome =
            window.location.pathname === "/" ||
            window.location.pathname === "";

        const message =
            document.getElementById("ig-block-message");


        // If we are NOT on Home
        if (!isHome) {

            document.body.classList.remove("ig-home-blocked");

            if (message) {
                message.remove();
            }

            return;
        }


        // We ARE on Instagram Home
        document.body.classList.add("ig-home-blocked");


        // Don't create the message twice
        if (!document.getElementById("ig-block-message")) {

            const blockMessage =
                document.createElement("div");

            blockMessage.id = "ig-block-message";

            blockMessage.innerHTML = `
                <h2>🚫 Home Feed Blocked</h2>
                <p>Use Instagram only for messages.</p>
            `;

            document.body.appendChild(blockMessage);
        }
    }


    // Wait until the page is ready
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            blockHome
        );

    } else {

        blockHome();

    }


    // Instagram changes pages without
    // completely reloading the website.
    let lastURL = window.location.href;


    setInterval(function () {

        if (window.location.href !== lastURL) {

            lastURL = window.location.href;

            blockHome();
        }

    }, 500);


})();