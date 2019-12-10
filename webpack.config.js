module.exports = {
	entry: {
		entry1: './src/entry1',
		entry2: './src/entry2'
	},
	optimization: {
        minimize: false,
        // this seems to fix it
        // concatenateModules: false
	}
};
