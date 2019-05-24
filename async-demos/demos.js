(function(){

	function addSync(x,y){
		console.log(`	[@service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@client] triggering service`);
		var result = addSync(x,y);
		console.log(`[@client] result = ${result}`);
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@service] returning result`);
			callback(result);
		}, 5000);
	}

	function addAsyncClient(x,y){
		console.log(`[@client] triggering service`);
		addAsync(x,y, function(result){
			console.log(`[@client] result = ${result}`);
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	var addAsyncEvents = (function(){

		var _subscribers = [];

		function process(x,y){
			console.log(`	[@service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@service] returning result`);
				_subscribers.forEach(callback => callback(result));
			}, 5000);
		}

		function subscribe(callback){
			_subscribers.push(callback);
		}

		return { 
			process : process, 
			subscribe : subscribe
		};

	})();

	window['addAsyncEvents'] = addAsyncEvents;

	function addAsyncPromise(x,y){
		var p = new Promise(function(resolveFn, rejectFn){

			console.log(`	[@service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@service] returning result`);
				resolveFn(result);
			}, 5000);
		});
		return p;
	}

	//window['addAsyncPromise'] = addAsyncPromise;

	/*
	function addAsyncPromiseClient(x,y){
		console.log(`[@client] trigging operation`);
		var p = addAsyncPromise(x,y);
		p.then(function(result){
			console.log(`[@client] result = ${result}`);
		});
	}
	*/

	async function addAsyncPromiseClient(x,y){
		console.log(`[@client] trigging operation`);
		var result = await addAsyncPromise(x,y);
		console.log(`[@client] result = ${result}`);
	}

	window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();

//promise - client code
/*
var p = addAsyncPromise(10,20);
p.then(function(result){
	console.log(`[@client] result = ${result}`);
});
*/