'use strict';

describe('Component: pomodoroButton', () => {

    // load the directive's module
    beforeEach(module('superProductivity'));
    beforeEach(module('templates'));

    let element;
    let scope;

    beforeEach(inject(($rootScope) => {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(($compile) => {
        element = $compile('<pomodoro-button></pomodoro-button>')(scope);
        scope.$digest();
        expect(true).toBe(true);
    }));
});