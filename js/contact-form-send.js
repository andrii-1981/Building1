(function () {
    const form = document.getElementById("contact_form-send-main");

    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("contact-form-status");
      fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.hidden = false;
            status.innerHTML = "Thanks for your submission!";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
        // setTimeout(status.hidden = true, 10 * 1000);
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);
  })();