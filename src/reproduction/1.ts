// @ts-expect-error Trigger autocomplete here to see the suggestions of importing myFunctionA and myFunctionB
myFunction

// myFunctionA will correctly show the suggestion '~/noIndex/a'
// myFunctionB will incorrectly show the suggestion 'withIndex/b' instead of '~/withIndex'
