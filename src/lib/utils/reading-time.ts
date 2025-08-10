/**
 * Calculates reading time in minutes based on word count
 * @param wordCount - Number of words in the content
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Reading time in minutes (rounded to nearest minute)
 */
export function calculateReadingTime(wordCount: number, wordsPerMinute: number = 200): number {
	if (wordCount <= 0) return 0;
	
	const readingTime = wordCount / wordsPerMinute;
	return Math.ceil(readingTime); // Round up to nearest minute
}

/**
 * Counts words in a text string
 * @param text - The text to count words in
 * @returns Number of words
 */
export function countWords(text: string): number {
	if (!text || typeof text !== 'string') return 0;
	
	// Remove HTML tags and extra whitespace
	const cleanText = text
		.replace(/<[^>]*>/g, '') // Remove HTML tags
		.replace(/\s+/g, ' ') // Replace multiple spaces with single space
		.trim();
	
	// Split by whitespace and filter out empty strings
	const words = cleanText.split(/\s+/).filter(word => word.length > 0);
	
	return words.length;
}

/**
 * Formats reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted reading time string
 */
export function formatReadingTime(minutes: number): string {
	if (minutes <= 0) return 'Less than 1 min read';
	if (minutes === 1) return '1 min read';
	return `${minutes} min read`;
}

/**
 * Calculates and formats reading time from text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Formatted reading time string
 */
export function getReadingTime(content: string, wordsPerMinute: number = 200): string {
	const wordCount = countWords(content);
	const readingTime = calculateReadingTime(wordCount, wordsPerMinute);
	return formatReadingTime(readingTime);
} 