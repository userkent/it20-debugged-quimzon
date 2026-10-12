let count = 0;

const countBtn = document.getElementById("countBtn");
const countOutput = document.getElementById("countOutput");
const resetBtn = document.getElementById("resetBtn");

// BUG: The counter increases twice for every click.
countBtn.addEventListener("click", function () {
    count++;
    count++;

    countOutput.textContent = count;
});

// BUG: Reset changes the display but not the counter variable.
resetBtn.addEventListener("click", function () {
    countOutput.textContent = 0;
});

// Save the student's exit-question answer.
document.getElementById("saveAnswerBtn").addEventListener("click", function () {
    const answer = document.getElementById("answer").value;

    const file = new Blob(
        [answer],
        { type: "text/plain;charset=utf-8" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "click-counter-answer.txt";
    link.click();

    URL.revokeObjectURL(link.href);
});