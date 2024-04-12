
const questionsAndAnswers = [
    {
        id: "what-is-ketting",
        question: "What is Ketting?",
        answer: "Ketting is a Minecraft server hybrid, combing Forge, Bukkit and Spigot."
    },
    {
        id: "developers",
        question: "Who are the developers?",
        answer: "Our developers are listed on the <a href='/team'>team page</a>.",
        safe: "Our developers are listed on the team page."
    },
    {
        id: "versions",
        question: "What versions of Minecraft does Ketting support?",
        answer: "Check the <a href='/download'>downloads page</a> for the latest supported versions.",
        safe: "Check the downloads page for the latest supported versions."
    },
    {
        id: "how-to-install",
        question: "How do I install Ketting?",
        answer: "When choosing a version from our <a href='/download'>downloads page</a>, click 'Get it' and follow the provided instructions.",
        safe: "When choosing a version from our downloads page, click 'Get it' and follow the provided instructions."
    },
    {
        id: "found-a-bug",
        question: "I found a bug, what do I do?",
        answer: "Go to our <a href='${global.githubUrl}'>github page</a> and create an issue in the correct repository."
    },
    {
        id: "is-this-magma",
        question: "Is Ketting a continuation of Magma?",
        answer: "Ketting is not a continuation of Magma, but a project rewritten from scratch after Magma was discontinued."
    },
    {
        id: "why-not-paper",
        question: "Why did you use Spigot instead of Paper?",
        answer: "Due to the extra amount of patches we would need to apply (around 1500 on top of Spigot), we decided to use Spigot as a base. Paper also comes with some drastic changes to internal code that we didn't want to include."
    }
];

const faqIds = questionsAndAnswers.map((item) => item.id);

export { questionsAndAnswers, faqIds };
