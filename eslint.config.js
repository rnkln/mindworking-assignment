import globals from 'globals'
import core from '@klnjs/eslint-config/core'
import ignores from '@klnjs/eslint-config/ignores'
import typescript from '@klnjs/eslint-config/typescript'

export default [
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		}
	},
	core,
	typescript,
	ignores
]
