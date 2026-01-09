function camelCase(text) {
  return text
    .split(/[\s-_]+/) // Split on spaces, hyphens, or underscores
    .map((word, index) => {
      if (index === 0) {
        // First word stays lowercase
        return word.toLowerCase();
      }
      // Capitalize first letter of subsequent words
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Examples:
// camelCase('happy days')         → 'happyDays'
// camelCase('hello world')        → 'helloWorld'
// camelCase('hello-world')        → 'helloWorld'
// camelCase('hello_world')        → 'helloWorld'

module.exports = { camelCase };
