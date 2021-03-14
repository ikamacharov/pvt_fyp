/*************** 
 * Pvt-Uk Test *
 ***************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'PVT-UK';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'gender': ['female', 'male', 'other'], 'age': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(ThankRoutineBegin());
flowScheduler.add(ThankRoutineEachFrame());
flowScheduler.add(ThankRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var text;
var IstructResp;
var ISIClock;
var polygon;
var trialClock;
var myClock;
var text_4;
var Response;
var feedbackClock;
var msg;
var text_feedback;
var checkClock;
var ThankClock;
var text_End;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Dear participants, \n\n\nYou will see a fixation cross in the middle of the screen. After a few seconds the fixation cross will disappear and a counter will start. Your task is to press the SPACE key as fast as possible to stop the counter. You will get feedback on your reaction time. \nPlease press the SPACE bar to start.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  IstructResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // create my clock
  
  myClock = new util.Clock();
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg = '';
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "check"
  checkClock = new util.Clock();
  // Initialize components for Routine "Thank"
  ThankClock = new util.Clock();
  text_End = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_End',
    text: "Grazie per aver completato l'esperimento",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _IstructResp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    IstructResp.keys = undefined;
    IstructResp.rt = undefined;
    _IstructResp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text);
    instructionsComponents.push(IstructResp);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *IstructResp* updates
    if (t >= 0.0 && IstructResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IstructResp.tStart = t;  // (not accounting for frame time here)
      IstructResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { IstructResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { IstructResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { IstructResp.clearEvents(); });
    }

    if (IstructResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = IstructResp.getKeys({keyList: ['space'], waitRelease: false});
      _IstructResp_allKeys = _IstructResp_allKeys.concat(theseKeys);
      if (_IstructResp_allKeys.length > 0) {
        IstructResp.keys = _IstructResp_allKeys[_IstructResp_allKeys.length - 1].name;  // just the last key pressed
        IstructResp.rt = _IstructResp_allKeys[_IstructResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('IstructResp.keys', IstructResp.keys);
    if (typeof IstructResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('IstructResp.rt', IstructResp.rt);
        routineTimer.reset();
        }
    
    IstructResp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(ISIRoutineBegin(snapshot));
    thisScheduler.add(ISIRoutineEachFrame(snapshot));
    thisScheduler.add(ISIRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(checkRoutineBegin(snapshot));
    thisScheduler.add(checkRoutineEachFrame(snapshot));
    thisScheduler.add(checkRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var overall_timer;
var mTurk;
var ISIComponents;
function ISIRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ISI'-------
    t = 0;
    ISIClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    if ((trials.thisN === 0)) {
        overall_timer = new util.Clock;
    }
    
    // code the random number in JS
    
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    //The maximum is exclusive and the minimum is inclusive, then change the 
    // maximun time to 10.1?
    
    mTurk = getRandomArbitrary(2,11)
    
    psychoJS.experiment.addData('stimulus_interval', mTurk);
    
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(polygon);
    
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function ISIRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ISI'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + mTurk - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ISI'-------
    ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Response_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // reset
    
    myClock.reset();
    Response.keys = undefined;
    Response.rt = undefined;
    _Response_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_4);
    trialComponents.push(Response);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var time;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    time = myClock.getTime();
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    if (text_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_4.setText(time);
    }
    
    // *Response* updates
    if (t >= 0.0 && Response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Response.tStart = t;  // (not accounting for frame time here)
      Response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Response.clearEvents(); });
    }

    if (Response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Response.getKeys({keyList: ['space'], waitRelease: false});
      _Response_allKeys = _Response_allKeys.concat(theseKeys);
      if (_Response_allKeys.length > 0) {
        Response.keys = _Response_allKeys[_Response_allKeys.length - 1].name;  // just the last key pressed
        Response.rt = _Response_allKeys[_Response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Response.keys', Response.keys);
    if (typeof Response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Response.rt', Response.rt);
        routineTimer.reset();
        }
    
    Response.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // msg = (Response.rt * 1000);
    // msg_ms = msg;
    
    if (Response.rt >= 2) {
        msg = "Please pay attention!";
    } else {
        msg = (Response.rt * 1000);
    }
    text_feedback.setText(msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(text_feedback);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback* updates
    if (t >= 0.0 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var checkComponents;
function checkRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'check'-------
    t = 0;
    checkClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    checkComponents = [];
    
    checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var sw;
function checkRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'check'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    sw = overall_timer.getTime();
    console.log(sw);
    
    
    if ((sw >= 600)) {
        continueRoutine = false;
        trials.finished = true;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function checkRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'check'-------
    checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ThankComponents;
function ThankRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Thank'-------
    t = 0;
    ThankClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ThankComponents = [];
    ThankComponents.push(text_End);
    
    ThankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function ThankRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Thank'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ThankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_End* updates
    if (t >= 0.0 && text_End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_End.tStart = t;  // (not accounting for frame time here)
      text_End.frameNStart = frameN;  // exact frame index
      
      text_End.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_End.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_End.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ThankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThankRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Thank'-------
    ThankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
