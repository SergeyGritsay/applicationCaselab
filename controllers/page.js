import Plan from '../models/PlanandTask';

export async function create(req, res, next) {
	const pageData = req.body;
	//const userId = req.user._id;

	//pageData.FIOEmployee = userId;
	
	try {
		var page = await Page.create(pageData);
		res.json(page);
	} catch ({ message }) {
		return next({
			status: 400,
			message
		});
	}

	res.json(page);
}

export async function getAll(req, res, next) {
	res.json('getAll');
}