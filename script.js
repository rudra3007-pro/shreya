const text = `
Some people don’t just become friends,
they slowly become comfort.

You make bad days easier,
good days brighter,
and silence feel safe.

I’m really grateful
that life gave me you.
`;

const message = document.getElementById("message");
const name = document.getElementById("name");

let i = 0;

function typeMessage() {
    if (i < text.length) {
        message.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeMessage, 35);
    } else {
        setTimeout(() => name.classList.add("show"), 600);
    }
}

typeMessage();
