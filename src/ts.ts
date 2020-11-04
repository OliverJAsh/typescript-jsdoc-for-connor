import { foo } from './js';

type Foo = typeof foo;

const valid: Foo = 'foo';
const invalid: Foo = 'bar';
