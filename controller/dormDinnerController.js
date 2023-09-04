const { OpenAI } = require('openai');

const dormDinnerController = {
    getHome: async function(req, res) {
        res.render('home');
    },

    getDishList: async function(req, res) {
        
        try {

            var ingredients = req.body.ingredients;
            
                const openai = new OpenAI({
                    apiKey: process.env.OPENAI_API_KEY,
                });

                const completion = await openai.completions.create({
                    model: "text-davinci-003",
                    prompt:                             
                        "Using your ingredients:"+       
                        ingredients+
                        ", you can create the following list of 3 dishes (without any instructions on recipes): ",
                    max_tokens: 50,
                  });
                console.log(completion.choices);

            res.render('dishList', { response: completion.choices });
        } catch (error) {
            console.log(error);
            res.render('errorPage', { error: error }); // Render an error page if an error occurs
        }
    }, 
};

module.exports = dormDinnerController;
