define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
    var API = new APIConstructor();
    return stiatExtension({
        category : { 
            name : 'Black people', // Will appear in the data
            title : {
                media : {word : 'Black people'}, // Name of the category presented in the task
                css : {color:'#336600','font-size':'1.8em'}, // Style of the category title
                height : 4 // Used to position the "Or" in the combined block
            }, 
            stimulusMedia : [ // Stimuli content as PIP's media objects
                {word: 'Tyron'},
                {word: 'Malik'},
                {word: 'Terrell'},
                {word: 'Jazmin'},
                {word: 'Tiara'},
                {word: 'Shanice'}
            ], 
            stimulusCss : {color:'#336600','font-size':'1.8em'}
    });
});
