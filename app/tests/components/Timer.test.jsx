var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

var Timer = require('Timer');

describe('Timer', () =>{
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should inititalize with 0 count and status stopped', () => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    expect(timer.state.count).toBe(0);
    expect(timer.state.timerStatus).toBe('stopped');
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.timerStatus).toBe('started');
    setTimeout(()=> {
      expect(timer.state.count).toBe(1);
      done();
    },1001)
  })

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    setTimeout(()=> {
      timer.handleStatusChange('paused')
    }, 1001);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('paused')
      done();
    }, 1001);
  })
});
