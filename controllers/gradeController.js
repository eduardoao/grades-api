import  {gradeModel}  from '../models/gradeModel.js';

var gradeController = {

    /**
     * gradeController.list()
     */
    list: function (req, res) {
        gradeModel.find(function (err, grades) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao tentar localizar as grades!',
                    error: err
                });
            }

            return res.json(grades);
        });
    },

    /**
     * gradeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        gradeModel.findOne({_id: id}, function (err, grade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao localizar a grade!',
                    error: err
                });
            }

            if (!grade) {
                return res.status(404).json({
                    message: 'Grade não localizada!'
                });
            }

            return res.json(grade);
        });
    },


      /**
     * gradeController.showByName()
     */
       showByName: function (req, res) {
        var name = req.params.name;

        gradeModel.findOne({name: name}, function (err, grade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao localizar a grade!',
                    error: err
                });
            }

            if (!grade) {
                return res.status(404).json({
                    message: 'Grade não localizada!'
                });
            }

            return res.json(grade);
        });
    },

    /**
     * gradeController.create()
     */
    create: function (req, res) {
        var grade = new gradeModel({
			name : req.body.name,
			subject : req.body.subject,
			type : req.body.type,
			value : req.body.value,
			lastModified : req.body.lastModified
        });
     

            gradeModel.create(function(err, grade){
                if (err) {
                    return res.status(500).json({
                        message: $`Erro ao criar a grade: {grade.name}`,
                        error: err
                    });
                }

            } );
            return res.status(201).json(grade);
        //});
    },

    /**
     * gradeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        gradeModel.findOne({_id: id}, function (err, grade) {
            if (err) {
                return res.status(500).json({
                    message: 'Erro ao tentar localizar a grade.',
                    error: err
                });
            }

            if (!grade) {
                return res.status(404).json({
                    message: 'Grade não localizada!'
                });
            }

            grade.id = id;
            grade.name = req.body.name ? req.body.name : grade.name;
			grade.subject = req.body.subject ? req.body.subject : grade.subject;
			grade.type = req.body.type ? req.body.type : grade.type;
			grade.value = req.body.value ? req.body.value : grade.value;
			grade.lastModified = req.body.lastModified ? req.body.lastModified : grade.lastModified;
			

            gradeModel.updateOne({"_id": grade.id}, {$set: grade },
            function (err,  grade) {
                if (err) {
                    return res.status(500).json({
                        message: 'Erro ao tentar atualizar a grade.',
                        error: err
                    });
                };

                return res.json(grade);
            });
        });
    },

    /**
     * gradeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        gradeModel.findOneAndRemove(id, function (err, grade) {
            if (err) {
                return res.status(500).json({
                    message: 'Error ao tentar excluir a grade.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};

export { gradeController };
