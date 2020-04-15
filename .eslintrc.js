module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/prop-types': 0,
		'no-unused-vars': [
			'error',
			{
				vars: 'local',
				args: 'none',
			},
		],
	},
};
