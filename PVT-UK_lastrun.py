#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.3),
    on Fri Feb 19 16:00:25 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('2020.1.3')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.3'
expName = 'PVT-UK'  # from the Builder filename that created this script
expInfo = {'participant': '', 'gender': ['female', 'male', 'other'], 'age': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/ivankamacharov/Desktop/PVT/PVT-UK_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Dear participants, \n\n\nYou will see a fixation cross in the middle of the screen. After a few seconds the fixation cross will disappear and a counter will start. Your task is to press the SPACE key as fast as possible to stop the counter. You will get feedback on your reaction time. \nPlease press the SPACE bar to start.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
IstructResp = keyboard.Keyboard()

# Initialize components for Routine "ISI"
ISIClock = core.Clock()
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',
    size=(0.5, 0.5),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)

# Initialize components for Routine "trial"
trialClock = core.Clock()
myClock = new_util.Clock()

# in PY core.Clock() keep track 
# of the exp time.
# java uses the code line above
text_4 = visual.TextStim(win=win, name='text_4',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
Response = keyboard.Keyboard()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
text_feedback = visual.TextStim(win=win, name='text_feedback',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "check"
checkClock = core.Clock()

# Initialize components for Routine "Thank"
ThankClock = core.Clock()
text_End = visual.TextStim(win=win, name='text_End',
    text="Grazie per aver completato l'esperimento",
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
IstructResp.keys = []
IstructResp.rt = []
_IstructResp_allKeys = []
# keep track of which components have finished
instructionsComponents = [text, IstructResp]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *IstructResp* updates
    waitOnFlip = False
    if IstructResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        IstructResp.frameNStart = frameN  # exact frame index
        IstructResp.tStart = t  # local t and not account for scr refresh
        IstructResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(IstructResp, 'tStartRefresh')  # time at next scr refresh
        IstructResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(IstructResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(IstructResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if IstructResp.status == STARTED and not waitOnFlip:
        theseKeys = IstructResp.getKeys(keyList=['space'], waitRelease=False)
        _IstructResp_allKeys.extend(theseKeys)
        if len(_IstructResp_allKeys):
            IstructResp.keys = _IstructResp_allKeys[-1].name  # just the last key pressed
            IstructResp.rt = _IstructResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if IstructResp.keys in ['', [], None]:  # No response was made
    IstructResp.keys = None
thisExp.addData('IstructResp.keys',IstructResp.keys)
if IstructResp.keys != None:  # we had a response
    thisExp.addData('IstructResp.rt', IstructResp.rt)
thisExp.addData('IstructResp.started', IstructResp.tStartRefresh)
thisExp.addData('IstructResp.stopped', IstructResp.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=100, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "ISI"-------
    continueRoutine = True
    # update component parameters for each repeat
    if trials.thisN == 0:
        overall_timer = new_util.Clock
    
    import java.util.Random;
    
    min = 2
    
    max = 10 
    
    if randFloat(float(min), float(max)):
        Random_rand = new_Random() 
        randDuration = rand.nextFloat() * (max - min) + min
    
    
    thisExp.addData('stimulus_interval', randDuration)
    # keep track of which components have finished
    ISIComponents = [polygon]
    for thisComponent in ISIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ISIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ISI"-------
    while continueRoutine:
        # get current time
        t = ISIClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ISIClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        if polygon.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon.tStartRefresh + mTurk-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                polygon.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ISIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ISI"-------
    for thisComponent in ISIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('polygon.started', polygon.tStartRefresh)
    trials.addData('polygon.stopped', polygon.tStopRefresh)
    # the Routine "ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    myClock.reset();
    Response.keys = []
    Response.rt = []
    _Response_allKeys = []
    # keep track of which components have finished
    trialComponents = [text_4, Response]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        time = myClock.getTime()
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        if text_4.status == STARTED:  # only update if drawing
            text_4.setText(time, log=False)
        
        # *Response* updates
        waitOnFlip = False
        if Response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Response.frameNStart = frameN  # exact frame index
            Response.tStart = t  # local t and not account for scr refresh
            Response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Response, 'tStartRefresh')  # time at next scr refresh
            Response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(Response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(Response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if Response.status == STARTED and not waitOnFlip:
            theseKeys = Response.getKeys(keyList=['space'], waitRelease=False)
            _Response_allKeys.extend(theseKeys)
            if len(_Response_allKeys):
                Response.keys = _Response_allKeys[-1].name  # just the last key pressed
                Response.rt = _Response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    msg = Response.rt #get rt from keyboard
    
    
    trials.addData('text_4.started', text_4.tStartRefresh)
    trials.addData('text_4.stopped', text_4.tStopRefresh)
    # check responses
    if Response.keys in ['', [], None]:  # No response was made
        Response.keys = None
    trials.addData('Response.keys',Response.keys)
    if Response.keys != None:  # we had a response
        trials.addData('Response.rt', Response.rt)
    trials.addData('Response.started', Response.tStartRefresh)
    trials.addData('Response.stopped', Response.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    msg = Response.rt*1000
    
    # ger rt in ms
    
    msg_ms = msg
    
    #print(msg_ms)
    # I want to give feedback based on their RTs
    # To get this info use your_keyboard_name.rt
    text_feedback.setText(msg)
    # keep track of which components have finished
    feedbackComponents = [text_feedback]
    for thisComponent in feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_feedback* updates
        if text_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_feedback.frameNStart = frameN  # exact frame index
            text_feedback.tStart = t  # local t and not account for scr refresh
            text_feedback.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_feedback, 'tStartRefresh')  # time at next scr refresh
            text_feedback.setAutoDraw(True)
        if text_feedback.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_feedback.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_feedback.tStop = t  # not accounting for scr refresh
                text_feedback.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_feedback, 'tStopRefresh')  # time at next scr refresh
                text_feedback.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback"-------
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_feedback.started', text_feedback.tStartRefresh)
    trials.addData('text_feedback.stopped', text_feedback.tStopRefresh)
    
    # ------Prepare to start Routine "check"-------
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    checkComponents = []
    for thisComponent in checkComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    checkClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "check"-------
    while continueRoutine:
        # get current time
        t = checkClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=checkClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        sw = overall_timer.getTime()
        
        print(sw)
        
        # experiment ends after 10  mins
        
        if sw >= 600:
            continueRoutine = False
            trials.finished = True
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in checkComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "check"-------
    for thisComponent in checkComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 100 repeats of 'trials'


# ------Prepare to start Routine "Thank"-------
continueRoutine = True
routineTimer.add(1.500000)
# update component parameters for each repeat
# keep track of which components have finished
ThankComponents = [text_End]
for thisComponent in ThankComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ThankClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Thank"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = ThankClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ThankClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_End* updates
    if text_End.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_End.frameNStart = frameN  # exact frame index
        text_End.tStart = t  # local t and not account for scr refresh
        text_End.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_End, 'tStartRefresh')  # time at next scr refresh
        text_End.setAutoDraw(True)
    if text_End.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_End.tStartRefresh + 1.5-frameTolerance:
            # keep track of stop time/frame for later
            text_End.tStop = t  # not accounting for scr refresh
            text_End.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_End, 'tStopRefresh')  # time at next scr refresh
            text_End.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ThankComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Thank"-------
for thisComponent in ThankComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
