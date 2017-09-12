var gradeBook = {
    _grades: [],
    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },
    
    getCountOfGrades: function() {
        return this._grades.length;
    }
};

exports.book = gradeBook;

/*exports["can average grades"] = function(test) {
    book.addGrade(100);
    book.addGrade(50);
    
    var average = book.getAverage
};*/

