export function generateExcerpt(content: string, maxLength: number = 300) {
    return content
        // remove headings
        .replace(/^#{1,6}\s.*$/gm, "")
        // remove blockquotes
        .replace(/^>\s.*$/gm, "")
        // remove horizontal rules
        .replace(/^---$/gm, "")
        // remove markdown symbols
        .replace(/[*_`]/g, "")
        // collapse multiple newlines
        .replace(/\n{2,}/g, "\n\n")
        .trim()
        .slice(0, maxLength) + "...";
}

export function calculateReadingTime(content: string, wordsPerMinute = 200) {
    const cleaned = content
        // remove code blocks
        .replace(/```[\s\S]*?```/g, "")
        // remove inline code
        .replace(/`.*?`/g, "")
        // remove headings
        .replace(/^#{1,6}\s.*$/gm, "")
        // remove images
        .replace(/!\[.*?\]\(.*?\)/g, "")
        // remove links but keep text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        // remove extra symbols
        .replace(/[*_>#-]/g, "")
        .trim();

    const wordCount = cleaned.split(/\s+/).filter(Boolean).length;

    const minutes = Math.ceil(wordCount / wordsPerMinute);

    return {
        words: wordCount,
        minutes,
        text: `${minutes} min read`,
    };
}
