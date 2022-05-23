//domain/.netlify/functons/hello

exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: "Hello world",
	};
};
