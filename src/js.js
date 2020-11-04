const { ModuleKind } = require('typescript');

// By default the type is inferred as `string`
// exports.foo = 'foo';

// We can use JSDoc to annotate the type
/** @type {'foo'} */
exports.foo = 'foo';

// Alternatively, if using `module.exports`:
// /** @type {'foo'} */
// const foo = 'foo';
// module.exports = { foo };
