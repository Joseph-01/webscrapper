export function findLinkWithWord(links: string[], word: string): string | undefined {
    for (const link of links) {
      if (link.includes(word)) {
        return link.slice(0, -1);
      }
    }
    return undefined; // Return undefined if no link contains the word
  }