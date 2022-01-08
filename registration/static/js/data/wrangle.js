const calcAllKeys = function (allPapers, allKeys) {
  const collectAuthors = new Set();
  const collectKeywords = new Set();
  const collectSessions = new Set();

  allPapers.forEach((d) => {
    d.authors.forEach((a) => collectAuthors.add(a));
    d.topics.forEach((a) => collectKeywords.add(a));
    allKeys.titles.push(d.title);
  });
  allKeys.authors = Array.from(collectAuthors);
  allKeys.keywords = Array.from(collectKeywords);
};
