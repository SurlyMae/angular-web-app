describe('phoneList', function() {

  beforeEach(module('phonecatApp'))

  describe('PhoneListController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      // var scope = {}
      var ctrl = $componentController('phoneList')

      expect(ctrl.phones.length).toBe(3)

    }))
  })


})
