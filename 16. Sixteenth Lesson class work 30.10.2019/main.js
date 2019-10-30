var otherModule1 = (function() {
	function internalFunc() {
		return "Hello from Other Module 1";
	}

	return {
		importedFunc1: internalFunc
	};
})();
